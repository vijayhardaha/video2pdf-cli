# Video to PDF Converter

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/@vijayhardaha%2Fvideo-to-pdf.svg)](https://badge.fury.io/js/@vijayhardaha/video-to-pdf)
[![Downloads](https://img.shields.io/npm/dm/%40vijayhardaha%2Fvideo-to-pdf)](https://www.npmjs.com/package/@vijayhardaha/video-to-pdf)

A CLI tool that converts video files to PDF by extracting frames using FFmpeg and combining them into a PDF document. This tool is ideal for creating visual documentation, storyboards, or thumbnails from videos.

## Features

- **Frame Extraction**: Extract frames from video files using FFmpeg.
- **PDF Generation**: Combine extracted frames into a single PDF document.
- **Validation**: Validate video file existence, extensions, and FPS input.
- **User-Friendly Feedback**: Use `ora` spinner for real-time feedback.
- **TypeScript Support**: Built with TypeScript for type safety and maintainability.
- **Testing**: Comprehensive test suite with Vitest.
- **Code Quality**: ESLint and Prettier for linting and formatting.

For developers, see [docs/PROJECT_GUIDE.md](docs/PROJECT_GUIDE.md) for project structure and development commands.

## Ideal Use Cases

### When to Use

- Creating visual documentation from videos.
- Generating storyboards or thumbnails.
- Archiving video content in PDF format.
- Extracting key frames for analysis or presentation.

### Who Can Use

- **Developers**: Integrate into workflows for automated video processing.
- **Content Creators**: Generate PDFs from video content for reviews or documentation.
- **Educators**: Create PDFs from educational videos for handouts or references.
- **Researchers**: Extract frames from videos for analysis or reporting.

## Installation

### Prerequisites

- Node.js (v20 or later)
- FFmpeg (installed and available in PATH)

### Install via npm

```bash
npm install -g @vijayhardaha/video-to-pdf
```

### Install via yarn

```bash
yarn global add @vijayhardaha/video-to-pdf
```

### Install via pnpm

```bash
pnpm add -g @vijayhardaha/video-to-pdf
```

### Install via bun

```bash
bun add -g @vijayhardaha/video-to-pdf
```

## Usage

### Basic Usage

```bash
video-to-pdf <video-path> <fps>
```

### Options

- `<video-path>`: Path to the video file. Must be a valid video file (e.g., `.mp4`, `.mov`, `.avi`).
- `<fps>`: Frames per second. Must be a positive number (e.g., `1`, `0.5`, `2`).

### Examples

Convert a video to PDF with 1 frame per second:

```bash
video-to-pdf /path/to/video.mp4 1
```

Convert a video to PDF with 0.5 frames per second:

```bash
video-to-pdf /path/to/video.mp4 0.5
```

Convert a video to PDF with 2 frames per second:

```bash
video-to-pdf /path/to/video.mp4 2
```

#### Example 1: Basic Conversion

```bash
video-to-pdf input.mp4 1
```

This will extract 1 frame per second from `input.mp4` and generate a PDF named `input.pdf`.

#### Example 2: High Frame Rate

```bash
video-to-pdf input.mp4 2
```

This will extract 2 frames per second from `input.mp4` and generate a PDF named `input.pdf`.

#### Example 3: Low Frame Rate

```bash
video-to-pdf input.mp4 0.5
```

This will extract 0.5 frames per second from `input.mp4` and generate a PDF named `input.pdf`.

## Output

When you run the CLI, it creates a folder in your current working directory with a `v2p-` prefix followed by the slugified video filename. Inside this folder, you'll find:

- **Extracted images**: PNG files named `images-0001.png`, `images-0002.png`, etc.
- **Combined PDF**: A single PDF file named `combined-images.pdf`

For example, running `video-to-pdf sample-data/sample.mp4` creates:

```
v2p-sample/
├── combined-images.pdf
├── images-0001.png
├── images-0002.png
└── ...
```

The folder name is prefixed with `v2p-` to avoid conflicts with existing folders in your directory (e.g., `sample.mp4` → `v2p-sample/` folder).

## Troubleshooting

<details>
  <summary>FFmpeg Not Found</summary>
  If you encounter an error indicating that FFmpeg is not found, ensure it is installed and available in your PATH. See the [FAQ](#faq) section for installation instructions.
</details>

<details>
  <summary>Invalid Video File</summary>
  Ensure the video file exists and has a valid extension (e.g., `.mp4`, `.mov`, `.avi`). The tool validates the file before processing.
</details>

<details>
  <summary>Invalid FPS Value</summary>
  The FPS value must be a positive number. The tool validates the FPS input before processing.
</details>

## FAQ

<details>
  <summary>How do I install FFmpeg?</summary>
  FFmpeg can be installed using your system's package manager:

- **macOS**: `brew install ffmpeg`
- **Linux (Debian/Ubuntu)**: `sudo apt-get install ffmpeg`
- **Windows**: Download from [FFmpeg official site](https://ffmpeg.org/)

</details>

<details>
  <summary>Can I use this tool in my project?</summary>
  Yes! This tool is open-source and licensed under the MIT License. You can use it in your projects as per the license terms.
</details>

<details>
  <summary>How can I contribute?</summary>
  You can contribute by opening issues, submitting pull requests, or improving documentation. See the [Contributing](#contributing) section for more details.
</details>

<details>
  <summary>Where can I get help?</summary>
  For help, please open an issue on the [GitHub repository](https://github.com/vijayhardaha/video-to-pdf) or contact the author directly.
</details>

## Best Practices

- Use a reasonable FPS value to avoid generating excessively large PDFs.
- Ensure the video file is not corrupted before processing.
- Use the tool in a directory with sufficient disk space for temporary files.

## Performance Tips

- Lower FPS values result in smaller PDFs and faster processing.
- Higher FPS values provide more detailed PDFs but may take longer to process.
- Close other applications to free up system resources during processing.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes. See [docs/CONTRIBUTING.md](docs/CONTRIBUTING.md).

## Code of Conduct

This project adheres to the Contributor Covenant code of conduct. By participating, you are expected to uphold this code. See [docs/CODE_OF_CONDUCT.md](docs/CODE_OF_CONDUCT.md).

## Support

For support, please open an issue on the GitHub repository.

## Changelog

See the [CHANGELOG](CHANGELOG.md) file for details on changes and updates.

## Acknowledgements

- [FFmpeg](https://ffmpeg.org/) for video processing.
- [Ora](https://github.com/sindresorhus/ora) for user-friendly spinners.
- [Vitest](https://vitest.dev/) for testing.
- [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) for code quality.

## Related Projects

- [FFmpeg](https://ffmpeg.org/): A complete, cross-platform solution to record, convert and stream audio and video.
- [Ora](https://github.com/sindresorhus/ora): Elegant terminal spinner.
- [Vitest](https://vitest.dev/): A Vite-native unit test framework.

## References

- [FFmpeg Documentation](https://ffmpeg.org/documentation.html)
- [Ora Documentation](https://github.com/sindresorhus/ora#readme)
- [Vitest Documentation](https://vitest.dev/guide/)

## Additional Notes

- Ensure FFmpeg is installed and available in your PATH before using this tool.
- The tool validates video file existence and extensions before processing.
- User-friendly feedback is provided using `ora` spinner for better user experience.

## Disclaimer

This tool is provided as-is without any warranty. Use at your own risk. The author is not responsible for any damage or data loss caused by the use of this tool.

## Author

**Vijay Hardaha**

- GitHub: [github.com/vijayhardaha](https://github.com/vijayhardaha)
- X/Twitter: [x.com/vijayhardaha](https://x.com/vijayhardaha)
- FreeCodeCamp: [freecodecamp.org/vijayhardaha](https://www.freecodecamp.org/vijayhardaha)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Conclusion

Thank you for using the Video to PDF Converter! We hope this tool meets your needs and helps you achieve your goals. If you have any questions or feedback, please don't hesitate to contact us.

Happy converting! 🎥→📄
