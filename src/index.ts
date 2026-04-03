/**
 * =======================================================================
 * Video To PDF CLI Tool
 * =======================================================================
 * Purpose: Converts video files to PDF by extracting frames using FFmpeg
 *          and combining them into a PDF document.
 * Usage: node dist/index.js <videoPath> -f <fps>
 * =======================================================================
 */

import { execSync } from 'child_process';
import fs from 'node:fs';
import path from 'node:path';

import { Command } from 'commander';
import ora from 'ora';

import {
  validateFileExists,
  validateVideoExtension,
  validateFps,
  createFolderIfNotExists,
  generateFolderName,
  getPngImages,
} from './utils';

/**
 * CLI program instance for video-to-pdf conversion.
 * @type {Command}
 */
const program = new Command();

program.name('video2pdf').description('Convert video files to PDF by extracting frames').version('1.0.0');

program
  .argument('<videoPath>', 'Path to the video file')
  .option('-f, --fps <number>', 'Frames per second to extract', '1')
  /**
   * Main action handler for the CLI command.
   * @param {string} videoPath - Path to the video file.
   * @param {Object} options - CLI options.
   * @param {string} options.fps - Frames per second to extract.
   * @returns {Promise<void>}
   */
  .action(async (videoPath: string, options: { fps: string }) => {
    const { fps } = options;
    const spinner = ora();

    // Validate video file path
    if (!validateFileExists(videoPath)) {
      spinner.fail(`Video file does not exist: ${videoPath}`);
      process.exit(1);
    }

    // Validate video file extension
    if (!validateVideoExtension(videoPath)) {
      const fileExtension = path.extname(videoPath).toLowerCase();
      spinner.fail(`Invalid video file extension: ${fileExtension}`);
      process.exit(1);
    }

    // Validate fps
    if (!validateFps(fps)) {
      spinner.fail(`Invalid fps value: ${fps}`);
      process.exit(1);
    }

    const fpsNumber = parseFloat(fps);

    // Generate folder name from video file name
    const folderName = generateFolderName(videoPath);
    const folderPath = path.join(process.cwd(), folderName);

    // Create folder if it does not exist
    createFolderIfNotExists(folderPath);

    // Extract frames using ffmpeg
    const outputPattern: string = path.join(folderPath, 'images-%04d.png');
    const ffmpegCommand: string = `ffmpeg -i "${videoPath}" -vf fps=${fpsNumber} "${outputPattern}"`;

    try {
      spinner.start('Extracting frames from video...');
      execSync(ffmpegCommand, { stdio: 'ignore' });
      spinner.succeed(`Frames extracted to ${folderPath}`);
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      spinner.fail(`Error extracting frames: ${errorMessage}`);
      process.exit(1);
    }

    // Generate PDF
    const images: string[] = getPngImages(folderPath);

    if (images.length === 0) {
      spinner.warn('No PNG files found — PDF will not be generated.');
      return;
    }

    const { default: imageToPDF, sizes } = await import('image-to-pdf');
    const pdfPath: string = path.join(folderPath, 'combined-images.pdf');

    try {
      spinner.start('Generating PDF...');
      const pdfStream = imageToPDF(images, sizes.A4);
      const writeStream = fs.createWriteStream(pdfPath);

      await new Promise<void>((resolve, reject) => {
        pdfStream.pipe(writeStream);
        writeStream.on('finish', resolve);
        writeStream.on('error', reject);
      });

      spinner.succeed(`PDF generated at ${pdfPath}`);
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      spinner.fail(`Error generating PDF: ${errorMessage}`);
      process.exit(1);
    }
  });

program.parse();
