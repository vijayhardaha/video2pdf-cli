# Project Guide

## Overview

- **Name**: video-to-pdf
- **Type**: Node.js CLI tool
- **Purpose**: Convert video files to PDF by extracting frames using FFmpeg

## Project Structure

```
src/
  index.ts       # CLI entry point
  utils.ts       # Utility functions
  __tests__/     # Test files

.github/
  workflows/    # CI workflows

docs/           # Documentation
```

## Technology Stack

- **Language**: TypeScript (strict mode)
- **Runtime**: Node.js 20+
- **Build**: Vite
- **Testing**: Vitest
- **CLI**: Commander
- **Output**: Ora (spinners)

## Commands

| Command                      | Description          |
| ---------------------------- | -------------------- |
| `pnpm build`                 | Build CLI to `dist/` |
| `pnpm start <file> [-f fps]` | Run CLI              |
| `pnpm test`                  | Run tests            |
| `pnpm tsc`                   | Type-check           |
| `pnpm lint`                  | Lint code            |

## Key Files

- `vite.config.ts` - Vite SSR build config
- `tsconfig.json` - TypeScript config
- `AGENTS.md` - AI agent instructions
- `.github/workflows/ci.yml` - CI pipeline

## Dependencies

- **Runtime**: commander, ora, slugify, image-to-pdf, ffmpeg-static
- **Dev**: typescript, vite, vitest, eslint, prettier
