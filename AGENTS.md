<!-- bmad:context -->
<!-- Verified 2026-08-14 against a1831a5. Managed by BMad project context; edits inside this block are replaced on refresh. Keep anything that must be preserved outside the markers. -->

## Luxury Perfume Shop

Public monorepo with Next.js, Rust, WebAssembly, and external-service boundaries. Treat the source-bearing public repository as independent from the private legacy perfume repositories.

## Policy

- Never copy code, configuration, data, or documentation from private perfume-shop repositories into this public repository without an explicit review.
- Never commit `apps/api/.env`, `apps/web/.env.local`, database credentials, payment credentials, or search-service credentials; use the documented example files instead.

## Where things are

- Frontend: `apps/web/`; Rust API: `apps/api/`; scent module: `packages/wasm-scent/`; sync worker: `workers/sync/`.

## Running and verifying

- Use the root package scripts to coordinate monorepo work. Run the narrow workspace command or package-level build before relying on `turbo run` across the unfinished stack.

## Known pitfalls

- A production-shaped README is not evidence that every service integration or test path is implemented; verify a vertical slice before advertising its behavior.

<!-- /bmad:context -->
