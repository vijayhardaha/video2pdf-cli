# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.3] — 2026-04-06

### Changed

- Consolidated CI workflow into single job with named steps
- Enhanced AGENTS.md with git workflow and coding standards
- Updated PROJECT_GUIDE.md with complete command reference
- Reorganized package.json fields logically
- Improved release-it hooks with better build timing and messaging

### Fixed

- Fixed duplicate steps in CI workflow YAML
- Fixed runner label from `upnpmtu-latest` to `ubuntu-latest`

### Dependencies

- Updated `@types/node` to 25.5.2
- Updated `@eslint/compat` to 2.0.4
- Updated `@vijayhardaha/dev-config` to 1.0.10

## [1.0.2] — 2026-04-03

### Fixed

- Fixed GitHub repo URL in README
- Fixed npm badge links

### Changed

- Updated npm shields to use `img` instead of `badge`

## [1.0.1] — 2026-04-03

### Added

- Added `v2p-` prefix to output folder to avoid conflicts

### Changed

- Renamed CLI command from `video-to-pdf` to `video2pdf`
- Renamed package to `@vijayhardaha/video2pdf`
- Updated repository path to `video2pdf-cli`
- Added keywords: `img2pdf`, `image2pdf`, `image-to-pdf`
- Updated all README examples with `-f` flag

### Fixed

- Fixed shebang not being added to CLI binary
- Fixed package.json paths for CLI bin entry
- Fixed CI workflow YAML syntax for paths
- Fixed release-it hooks for proper build before publish
- Fixed pnpm version mismatch between CI and packageManager

## [1.0.0] — 2024-04-03

### Added

- Initial release
- Frame extraction from video files using FFmpeg
- PDF generation from extracted frames
- CLI interface with Commander
- User feedback with Ora spinners
- Input validation (file exists, extension, FPS)
- TypeScript support with strict mode
- Vitest test suite
- ESLint and Prettier integration
- GitHub Actions CI workflow
