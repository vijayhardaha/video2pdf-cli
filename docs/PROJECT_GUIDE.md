# Project Guide

## Overview

- **Name**: video2pdf
- **Type**: Video To PDF CLI tool
- **Purpose**: Convert video files to PDF by extracting frames using FFmpeg
- **Package Main**: `dist/index.js`

## Project Structure

```
src/
  index.ts          # CLI entry point (commander)
  utils.ts          # Utility functions & validation
  __tests__/        # Test files (Vitest)

.github/
  workflows/        # CI workflows (ci.yml)

docs/               # Documentation
vite.config.ts      # Vite build configuration
vitest.config.ts    # Vitest test configuration
tsconfig.json       # TypeScript configuration
package.json        # Dependencies & scripts
AGENTS.md           # AI agent instructions (authoritative)
```

## Technology Stack

- **Language**: TypeScript (strict mode)
- **Runtime**: Node.js 20+
- **Build Tool**: Vite (SSR mode, target: node20)
- **Testing**: Vitest
- **CLI Framework**: Commander
- **Progress Output**: Ora (spinners)
- **Utilities**: slugify, image-to-pdf, ffmpeg-static

## Available Commands

### Development

```bash
pnpm run dev          # Start development server
pnpm run build        # Build for production to dist/
```

### Testing

```bash
pnpm run test         # Run tests (Vitest)
pnpm run test:watch   # Run tests in watch mode
pnpm run test:coverage # Generate coverage report
```

### Linting & Formatting

```bash
pnpm run lint         # Lint all files (ESLint)
pnpm run lint:fix     # Fix auto-fixable issues
pnpm run format       # Format files (Prettier)
pnpm run format:check # Check formatting without changes
```

### Type Checking

```bash
pnpm run tsc          # TypeScript type check
```

### Legacy Commands

| Command                      | Description      |
| ---------------------------- | ---------------- |
| `pnpm start <file> [-f fps]` | Run CLI (legacy) |

## Development Workflow

### Pre-commit Checks

Pre-commit hooks automatically run:

1. TypeScript type check (`tsc`)
2. Format check (`format:check`)
3. Lint check (`lint`)

### Manual Verification

Before committing or after completing tasks, run:

```bash
npm run tsc             # Type check
npm run format:check    # Format check
npm run lint            # ESLint check
```

### Git Workflow

1. Check changes: `git status --porcelain` && `git diff`
2. Stage files: `git add <files>`
3. Create commit message in `.tmp/git.md`
4. Commit with conventional format

**Commit Format:** `<type>(<scope>): <summary>`

**Types:** `feat`, `fix`, `docs`, `test`, `refactor`, `style`, `build`, `chore`

**Rules:**

- Subject line ≤72 characters
- Blank line after subject
- Body wrapped at 100 characters
- Separate commits for each logical change

## Coding Standards

### Naming Conventions

- **Components**: `PascalCase` (e.g., `JsonLd.tsx`)
- **Functions**: `camelCase` (e.g., `personSchema`)
- **Files**: `camelCase` (e.g., `deepMerge.ts`)
- **Types/Interfaces**: `PascalCase` (e.g., `PersonOptions`)

### Code Rules

- Use `ora()` for CLI progress/output
- Error handling: `error instanceof Error ? error.message : String(error)`
- Validate inputs using `src/utils.ts` functions
- FFmpeg output: use `stdio: 'ignore'` to hide details

### Documentation Style

- **JSDoc**: Use `/** @type {Type} */` for type annotations
- **Test descriptions**: Use `/** description */` blocks
- **File headers**: Use `/** ======================================================================= */` banner style

### Build Configuration

- Vite external dependencies: `fs`, `path`, `child_process`, `commander`, `ora`, `slugify`, `image-to-pdf`
- Vite settings: `ssr: true`, `target: 'node20'`

### Testing Guidelines

- Preserve comments in test files
- Use `afterEach` for cleanup
- Follow existing test patterns

## Key Files

- `vite.config.ts` - Vite SSR build config (external deps, node20 target)
- `vitest.config.ts` - Vitest test configuration
- `tsconfig.json` - TypeScript strict mode config
- `AGENTS.md` - Authoritative AI agent instructions
- `.github/workflows/ci.yml` - CI pipeline (checkout, setup, install, check, test)

## Dependencies

### Runtime

- `commander` - CLI argument parsing
- `ora` - Terminal spinners
- `slugify` - String sanitization
- `image-to-pdf` - Image to PDF conversion
- `ffmpeg-static` - Static FFmpeg binary

### Development

- `typescript` - Type system
- `vite` - Build tool
- `vitest` - Testing framework
- `eslint` - Linting
- `prettier` - Code formatting
