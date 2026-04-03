/**
 * =======================================================================
 * Utility Functions for Video to PDF Conversion
 * =======================================================================
 * Purpose: Provides utility functions for validating inputs and managing
 *          file operations in the video-to-pdf conversion process.
 * =======================================================================
 */

import fs from 'node:fs';
import path from 'node:path';

import slugify from 'slugify';

/**
 * Validates if a file exists at the given path.
 * @param {string} filePath - The path to the file to validate.
 * @returns {boolean} - True if the file exists, false otherwise.
 */
export function validateFileExists(filePath: string): boolean {
  return fs.existsSync(filePath);
}

/**
 * Validates if the file has a valid video extension.
 * @param {string} filePath - The path to the file to validate.
 * @returns {boolean} - True if the file has a valid video extension, false otherwise.
 */
export function validateVideoExtension(filePath: string): boolean {
  const validExtensions = ['.mp4', '.mov', '.avi', '.mkv', '.webm'];
  const fileExtension = path.extname(filePath).toLowerCase();
  return validExtensions.includes(fileExtension);
}

/**
 * Validates if the fps value is a valid number.
 * @param {string} fps - The fps value to validate.
 * @returns {boolean} - True if the fps value is a valid number, false otherwise.
 */
export function validateFps(fps: string): boolean {
  const fpsNumber = parseFloat(fps);
  return !isNaN(fpsNumber) && fpsNumber > 0;
}

/**
 * Creates a folder if it does not exist.
 * @param {string} folderPath - The path to the folder to create.
 * @returns {string} - The path to the created folder.
 */
export function createFolderIfNotExists(folderPath: string): string {
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
  }
  return folderPath;
}

/**
 * Generates a folder name from a video file name.
 * @param {string} videoPath - The path to the video file.
 * @returns {string} - The generated folder name.
 */
export function generateFolderName(videoPath: string): string {
  const fileName = path.basename(videoPath, path.extname(videoPath));
  return slugify(fileName, { lower: true });
}

/**
 * Gets the list of PNG images in a folder.
 * @param {string} folderPath - The path to the folder to search for PNG images.
 * @returns {string[]} - An array of paths to the PNG images.
 * @throws {Error} - If the folder does not exist.
 */
export function getPngImages(folderPath: string): string[] {
  if (!fs.existsSync(folderPath)) {
    throw new Error(`Folder does not exist: ${folderPath}`);
  }

  return fs
    .readdirSync(folderPath)
    .filter((file) => file.toLowerCase().endsWith('.png'))
    .sort()
    .map((file) => path.join(folderPath, file));
}
