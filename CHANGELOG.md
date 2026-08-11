# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.5] — 2026-08-12

### Fixed

- Fixed the published CLI binary being misinterpreted as ESM by pointing `main` and `bin` at the CommonJS `dist/index.cjs` bundle

### Changed

- Added `type: module` to `package.json` so the CommonJS bundle is picked up correctly
- Switched package manager references from `pnpm` to `bun` in `AGENTS.md`, `docs/PROJECT_GUIDE.md`, and `docs/CONTRIBUTING.md`
- Updated documentation references from `dist/index.js` to the CommonJS output `dist/index.cjs`
- Expanded `.gitignore` with Go, Nix, Redis, Vim, and additional platform/OS entries

### Dependencies

- Updated `ora` to 9.4.1
- Added `@typescript-eslint/eslint-plugin` 8.67.0
- Added `@typescript-eslint/parser` 8.67.0
- Added `eslint-plugin-jsx-a11y` 6.10.2
- Updated `@commitlint/cli` to 21.2.1
- Updated `@commitlint/config-conventional` to 21.2.0
- Updated `@commitlint/types` to 21.2.0
- Updated `@types/node` to 26.2.0
- Updated `@vijayhardaha/dev-config` to 2.3.0
- Updated `@vitest/coverage-v8` to 4.1.10
- Updated `@vitest/ui` to 4.1.10
- Updated `eslint` to 10.8.1
- Updated `eslint-plugin-import-x` to 4.17.1
- Updated `eslint-plugin-jsdoc` to 64.1.0
- Updated `globals` to 17.9.0
- Updated `prettier` to 3.9.6
- Updated `release-it` to 21.0.2
- Updated `rollup` to 4.62.4
- Updated `typescript-eslint` to 8.67.0
- Updated `vite` to 8.2.1
- Updated `vitest` to 4.1.10

## [1.0.4] — 2026-06-10

### Changed

- Simplified Prettier ignore rules to reduce noise
- Updated release-it configuration to enable npm publishing
- Disabled sourcemaps in production build for smaller bundle size
- Updated TypeScript configuration for CLI project structure

### Dependencies

- Updated `@types/node` to 25.9.2
- Updated `@vijayhardaha/dev-config` to 2.1.0
- Updated `eslint-plugin-jsdoc` to 63.0.2
- Updated `prettier` to 3.8.4
- Updated `rollup` to 4.61.1
- Updated `typescript-eslint` to 8.61.0
- Removed unused dev dependencies
- Added `ffmpeg-static` to trustedDependencies

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
