# AGENTS.md

> **This file serves as the authoritative reference for AI agents (Cursor, Claude Code, etc.) working on the `vdo` codebase.**

## Project Overview

- **Type**: Node.js CLI tool (video → PDF via FFmpeg)
- **Lang**: TypeScript (strict mode)

## Available Commands

```bash
# Development
pnpm run dev          # Start development server
pnpm run build        # Build for production

# Testing
pnpm run test         # Run tests (Vitest)
pnpm run test:watch   # Run tests in watch mode
pnpm run test:coverage # Generate coverage report

# Linting & Formatting
pnpm run lint         # Lint all files
pnpm run lint:fix     # Fix auto-fixable issues
pnpm run format       # Format files
pnpm run format:check # Check formatting

# Type Checking
pnpm run tsc          # TypeScript type check
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

## Git Workflow

Pre-commit hooks automatically run type check, lint, and format checks.

**Before preparing git.md (after each task):**

1. Run `pnpm run tsc` - Type check
2. Run `pnpm run format:check` - Format check
3. Run `pnpm run lint` - ESLint check

**After completing a task:**

1. Check unstaged changes: `git status --porcelain` && `git diff`
2. Stage files: `git add <files>`
3. Create `.tmp/git.md` containing the staged files and commit command
4. Create separate commits for each logical change or file; group similar changes only if they modify the same type of files

Example `.tmp/git.md`:

```bash
git add src/content/index.tsx
git commit -m "feat: add version dropdown selector

- fetch versions from npm registry
- render dropdown with recent versions"
```

## Commit Conventions

**Format:** `<type>(<scope>): <summary>`

**Types:** `feat`, `fix`, `docs`, `test`, `refactor`, `style`, `build`, `chore`

**Rules:** Subject line ≤72 chars, blank line after subject, body wrapped at 100 chars.

## Notes

- `package.json` main: `dist/index.js`
- FFmpeg output: use `stdio: 'ignore'` (hide details)
