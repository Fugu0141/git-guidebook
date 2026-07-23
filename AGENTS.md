# AGENTS.md

## Mission

Build and maintain **Git Guidebook**, a beginner-friendly Japanese learning site that teaches Git through the flow of real work, starting with GitHub Desktop and later connecting each action to Git commands.

The MVP is complete only when a learner can follow the site from repository creation through clone, edit, commit, push, branch, pull request, merge, and pull.

## Source of truth

Read these files before making substantial changes:

1. `docs/MVP.md`
2. `docs/CURRICULUM.md`
3. `docs/CONTENT_GUIDE.md`
4. `docs/SCREENSHOT_GUIDE.md`
5. `docs/SCREENSHOT_PLACEHOLDER_SPEC.md`
6. `ROADMAP.md`
7. `docs/CODEX_EXECUTION_PLAN.md`

When documents conflict, prefer this order:

1. Safety and privacy requirements
2. MVP completion criteria
3. Curriculum order
4. Content style rules
5. Implementation convenience

## Product principles

- Explain why an operation is needed before explaining where to click.
- Always distinguish working directory, local repository, and remote repository.
- Do not equate Commit with uploading to GitHub.
- Use GitHub Desktop as a visualization layer, not as a substitute for understanding Git.
- Keep the primary path easy for complete beginners.
- Put advanced details in optional expandable sections.
- Avoid depending on screenshots for essential meaning.
- Use clear Japanese and define unfamiliar terms at first use.

## Technical direction

Unless an existing implementation clearly chooses otherwise, use:

- Astro
- TypeScript with strict checks
- Markdown or MDX for lessons
- GitHub Pages deployment through GitHub Actions
- Minimal client-side JavaScript
- No backend and no authentication for the MVP

The GitHub Pages project path is `/git-guidebook/`. Configure links and assets so they work both locally and under that base path.

## Required commands

Before considering a task complete, run all commands that exist in `package.json` for:

- formatting or format checks
- linting
- type checking
- tests
- production build

If a required script is missing, add a sensible script during project initialization.

## Accessibility

- Use semantic HTML.
- All meaningful images require useful Japanese alt text.
- Decorative images use empty alt text.
- Interactive elements must work with a keyboard.
- Do not communicate meaning by color alone.
- Maintain visible focus states.
- Respect reduced-motion preferences.
- Heading levels must remain logical.

## Screenshot and character assets

- Raw screenshots belong in `assets/screenshots/raw/`.
- Published screenshots belong in `public/images/screenshots/`.
- Never add secrets, personal information, private repository data, or local usernames.
- When a lesson would benefit from a screenshot that is not yet supplied, place a colored `ScreenshotPlaceholder` at the exact final image position.
- A screenshot placeholder must show the planned filename, purpose, required state, capture action, crop range, excluded information, and draft alt text.
- Register every placeholder in `docs/SCREENSHOT_REQUESTS.md` using the filename as the identifier.
- Do not substitute a generic mock screenshot or move all requests to the end of a lesson.
- Follow `docs/SCREENSHOT_PLACEHOLDER_SPEC.md` for implementation and replacement rules.
- Torafugu-chan is a future enhancement, not an MVP blocker.
- Build reusable callout components so a character can be added later without rewriting lesson content.

## Working method

For multi-step work:

1. Read `docs/CODEX_EXECUTION_PLAN.md`.
2. Find the first incomplete milestone whose prerequisites are complete.
3. Implement the smallest coherent slice that advances that milestone.
4. Run relevant checks.
5. Update the execution plan with completed checkboxes and any discovered constraints.
6. Commit with a focused conventional-style message.
7. Continue to the next slice unless a stop condition applies.

Do not replace working code merely to match personal preference. Do not make unrelated refactors.

## Stop conditions

Stop and document the blocker instead of guessing when:

- a decision affects licensing or legal ownership;
- GitHub permissions prevent deployment configuration;
- an external service requires credentials;
- two source-of-truth documents materially contradict each other;
- a destructive repository operation would be required;
- tests reveal an unresolved requirement ambiguity that changes learner-facing behavior.

A missing screenshot is **not** a stop condition. Implement the page with a `ScreenshotPlaceholder` and add the exact request to `docs/SCREENSHOT_REQUESTS.md`.

## Definition of done

A change is done when:

- it satisfies the relevant acceptance criteria;
- learner-facing Japanese is understandable and technically accurate;
- accessibility requirements are met;
- all available automated checks pass;
- production build succeeds;
- internal links work under the GitHub Pages base path;
- screenshot placeholders and the request list are synchronized;
- documentation and execution-plan status are updated.
