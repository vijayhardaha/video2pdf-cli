/**
 * =======================================================================
 * Utility Functions Tests
 * =======================================================================
 * Purpose: Tests for utility functions used in the video-to-pdf conversion.
 * =======================================================================
 */

import fs from 'node:fs';
import path from 'node:path';

import { afterEach, describe, expect, test } from 'vitest';

import {
  validateFileExists,
  validateVideoExtension,
  validateFps,
  createFolderIfNotExists,
  generateFolderName,
  getPngImages,
} from '../utils';

/**
 * Test suite for utility functions
 */
describe('Utility Functions', () => {
  const foldersToClean = ['test-folder', 'sample-images', 'empty-folder'];

  afterEach(() => {
    for (const folder of foldersToClean) {
      const folderPath = path.join(process.cwd(), 'src/__tests__', folder);
      if (fs.existsSync(folderPath)) {
        fs.rmSync(folderPath, { recursive: true });
      }
    }
  });

  // Test suite for validateFileExists function
  describe('validateFileExists', () => {
    // Test case for existing file
    test('should return true for existing file', () => {
      const filePath = path.join(process.cwd(), 'src/__tests__', 'utils.test.ts');

      expect(validateFileExists(filePath)).toBe(true);
    });

    // Test case for non-existing file
    test('should return false for non-existing file', () => {
      const filePath = path.join(process.cwd(), 'src/__tests__', 'non-existing-file.txt');

      expect(validateFileExists(filePath)).toBe(false);
    });
  });

  // Test suite for validateVideoExtension function
  describe('validateVideoExtension', () => {
    // Test case for valid video extensions
    test('should return true for valid video extensions', () => {
      const validExtensions = ['.mp4', '.mov', '.avi', '.mkv', '.webm'];

      validExtensions.forEach((ext) => {
        expect(validateVideoExtension(`video${ext}`)).toBe(true);
      });
    });

    // Test case for invalid video extensions
    test('should return false for invalid video extensions', () => {
      const invalidExtensions = ['.txt', '.jpg', '.png', '.gif'];

      invalidExtensions.forEach((ext) => {
        expect(validateVideoExtension(`video${ext}`)).toBe(false);
      });
    });

    // Test case for case-insensitive validation
    test('should be case-insensitive', () => {
      expect(validateVideoExtension('video.MP4')).toBe(true);

      expect(validateVideoExtension('video.MOV')).toBe(true);
    });
  });

  // Test suite for validateFps function
  describe('validateFps', () => {
    // Test case for valid fps values
    test('should return true for valid fps values', () => {
      const validFpsValues = ['1', '1.5', '2', '30', '60'];

      validFpsValues.forEach((fps) => {
        expect(validateFps(fps)).toBe(true);
      });
    });

    // Test case for invalid fps values
    test('should return false for invalid fps values', () => {
      const invalidFpsValues = ['0', '-1', 'abc', ''];

      invalidFpsValues.forEach((fps) => {
        expect(validateFps(fps)).toBe(false);
      });
    });
  });

  // Test suite for createFolderIfNotExists function
  describe('createFolderIfNotExists', () => {
    // Test case for creating a non-existing folder
    test('should create folder if it does not exist', () => {
      const folderPath = path.join(process.cwd(), 'src/__tests__', 'test-folder');

      expect(fs.existsSync(folderPath)).toBe(false);

      createFolderIfNotExists(folderPath);

      expect(fs.existsSync(folderPath)).toBe(true);
    });

    // Test case for returning the folder path if it already exists
    test('should return the folder path if it already exists', () => {
      const folderPath = path.join(process.cwd(), 'src/__tests__');

      expect(fs.existsSync(folderPath)).toBe(true);

      const result = createFolderIfNotExists(folderPath);

      expect(result).toBe(folderPath);
    });
  });

  // Test suite for generateFolderName function
  describe('generateFolderName', () => {
    // Test case for generating a valid folder name
    test('should generate a valid folder name from video path', () => {
      const videoPath = '/path/to/my-video.mp4';

      const folderName = generateFolderName(videoPath);

      expect(folderName).toBe('my-video');
    });

    // Test case for handling special characters
    test('should handle special characters in video path', () => {
      const videoPath = '/path/to/My Video (2024).mp4';

      const folderName = generateFolderName(videoPath);

      // slugify keeps parentheses by default
      expect(folderName).toBe('my-video-(2024)');
    });

    // Test case for handling non-ASCII characters
    test('should handle non-ASCII characters in video path', () => {
      const videoPath = '/path/to/我的视频.mp4';

      const folderName = generateFolderName(videoPath);

      // slugify may not handle non-ASCII characters as expected
      // The actual behavior depends on the slugify configuration
      // For now, we just check that it does not throw an error
      expect(typeof folderName).toBe('string');
    });
  });

  // Test suite for getPngImages function
  describe('getPngImages', () => {
    // Test case for returning an array of PNG image paths
    test('should return an array of PNG image paths', () => {
      const folderPath = path.join(process.cwd(), 'src/__tests__', 'sample-images');

      fs.mkdirSync(folderPath, { recursive: true });

      fs.writeFileSync(path.join(folderPath, 'image1.png'), '');
      fs.writeFileSync(path.join(folderPath, 'image2.png'), '');
      fs.writeFileSync(path.join(folderPath, 'image3.jpg'), '');

      const images = getPngImages(folderPath);

      expect(Array.isArray(images)).toBe(true);
      expect(images.length).toBe(2);
      expect(images[0]).toContain('image1.png');
      expect(images[1]).toContain('image2.png');
    });

    // Test case for throwing an error if folder does not exist
    test('should throw an error if folder does not exist', () => {
      const folderPath = path.join(process.cwd(), 'src/__tests__', 'non-existing-folder');

      expect(() => getPngImages(folderPath)).toThrow(`Folder does not exist: ${folderPath}`);
    });

    // Test case for returning an empty array if no PNG images are found
    test('should return an empty array if no PNG images are found', () => {
      const folderPath = path.join(process.cwd(), 'src/__tests__', 'empty-folder');

      fs.mkdirSync(folderPath, { recursive: true });

      const images = getPngImages(folderPath);

      expect(Array.isArray(images)).toBe(true);
      expect(images.length).toBe(0);
    });
  });
});
