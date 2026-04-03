# AI Agent Instructions

## Project

- **Type**: Node.js CLI tool (video → PDF via FFmpeg)
- **Lang**: TypeScript (strict mode)

## Commands

| Cmd                          | Description          |
| ---------------------------- | -------------------- |
| `pnpm build`                 | Vite build → `dist/` |
| `pnpm start <file> [-f fps]` | Run CLI              |
| `pnpm test`                  | Run tests            |
| `pnpm tsc`                   | Type-check           |
| `pnpm lint`                  | Lint                 |

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

- `package.json` main: `dist/src/index.js`
- FFmpeg output: use `stdio: 'ignore'` (hide details)
