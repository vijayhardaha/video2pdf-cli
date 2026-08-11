# AGENTS.md

> **This file serves as the authoritative reference for AI agents (Cursor, Claude Code, etc.) working on the `vdo` codebase.**

## Project Overview

- **Type**: Node.js CLI tool (video → PDF via FFmpeg)
- **Lang**: TypeScript (strict mode)

## Available Commands

```bash
# Development
bun run dev          # Start development server
bun run build        # Build for production

# Testing
bun run test         # Run tests (Vitest)
bun run test:watch   # Run tests in watch mode
bun run test:coverage # Generate coverage report

# Linting & Formatting
bun run lint         # Lint all files
bun run lint:fix     # Fix auto-fixable issues
bun run format       # Format files
bun run format:check # Check formatting

# Type Checking
bun run tsc          # TypeScript type check
```

## Naming Conventions

- Components: `PascalCase` (`JsonLd.tsx`)
- Functions: `camelCase` (`personSchema`)
- Files: `camelCase` (`deepMerge.ts`)
- Types/Interfaces: `PascalCase` (`PersonOptions`)

## Rules

- Use `ora()` for CLI output
- Error handling: `error instanceof Error ? error.message : String(error)`
- Validate with `src/utils.ts` functions
- External deps in vite config: `fs`, `path`, `child_process`, `commander`, `ora`, `slugify`, `image-to-pdf`
- Vite build: `ssr: true`, `target: 'node20'`
- Tests: preserve comments, use `afterEach` cleanup
- JSDoc: Use `/** @type {Type} */` for type annotations
- Test descriptions: Use `/** description */` blocks
- File header: Use `/** ======================================================================= */` banner style

## Notes

- `package.json` main: `dist/index.cjs`
- FFmpeg output: use `stdio: 'ignore'` (hide details)
