# Agent Instructions

These instructions are for the AI agent (Antigravity/Gemini) to follow when working on this project.

## 1. Documentation First
- **Read**: Always check `docs/0000_current_state.md` and `docs/0001_next_steps.md` at the start of a session to understand the context.
- **Update**: If you make architectural changes or add features, you **MUST** update `docs/0000_current_state.md`.
- **Log**: Significant decisions should be recorded in `docs/0001_next_steps.md` as context for action items, or in `docs/0000_current_state.md` if architectural.
- **Maintain**: Keep `README.md` up to date with project changes.

## 2. Codebase Navigation
- **`package.json`**: Check for available scripts and dependencies.
- **`app/components`**: Core UI logic resides here.
- **Style**: Use SCSS modules (`*.module.scss`) for component styling.

## 3. Workflow
- Identify the current task from `docs/0001_next_steps.md` if applicable.
- When a task is complete, update `docs/0001_next_steps.md` to reflect progress (mark items as done, add new ones).

## 4. Documentation Standards
- Keep it brief but technical.
- Target audience: Senior Product Managers and Engineers.
- Focus on *what* and *why*, not just *how*.
