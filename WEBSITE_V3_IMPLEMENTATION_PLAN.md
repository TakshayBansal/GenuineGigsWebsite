# GenuineGigs Website V3 Implementation Plan

## 1. Detected framework and stack

- Next.js 16 App Router with React 19 and TypeScript 5.7.
- One root layout supplies the global header, footer, analytics, metadata defaults, and structured data.
- Styling is a single global CSS system with local Geist, Satoshi, and IBM Plex Mono fonts.
- Motion currently uses GSAP, `@gsap/react`, ScrollTrigger, and a small IntersectionObserver reveal component.
- Icons use Lucide React. Product screenshots use `next/image` through `ProductFrame`.
- Vercel Analytics is already installed and rendered globally.
- The demo form posts to an internal route handler, validates server-side, includes a honeypot, and forwards to a configured webhook.
- Deployment assumptions are Vercel-compatible Node 22+ with `NEXT_PUBLIC_SITE_URL`, `DEMO_WEBHOOK_URL`, and optional `DEMO_WEBHOOK_TOKEN` environment variables.

## 2. Current route map

| Route | Current purpose |
| --- | --- |
| `/` | Module-first marketing homepage |
| `/product` | Operations-heavy product overview |
| `/modules/procurement` | Procurement module |
| `/modules/scm` | SCM planning module |
| `/modules/operations` | Factory operations module |
| `/enterprise` | Governance and enterprise controls |
| `/demo` | Demo request form |
| `/about` | Company point of view |
| `/api/demo` | Validated demo webhook proxy |
| `/robots.txt` | Generated robots rules |
| `/sitemap.xml` | Generated sitemap |

## 3. Components that can be reused

- `Logo`: retain with responsive sizing refinements.
- `ProductFrame`: retain and extend for current product screenshots and contextual labels.
- `Reveal`: retain for simple progressive enhancement where scroll-linked GSAP is unnecessary.
- `DemoForm`: retain its validated webhook flow; simplify fields and update workflow choices.
- `HomeMotion`: refactor into the motion controller for the new homepage story.
- Global `Header` and `Footer`: retain as the single site-wide shell, but substantially update their information architecture and copy.
- Existing page hero and module primitives can inform the new capability pages, but should no longer force every capability into the old module template.

## 4. Components that need refactoring or creation

- Refactor `Header` into an accessible responsive platform navigation with capability links, Gigi, governance, and a consistent demo CTA.
- Refactor `Footer` around the new platform architecture and remove internal-architecture-first language.
- Replace the old module-led homepage with data-driven sections for hero proof, problem/response, closed loop, supplier-delay workflow, predictive intelligence, recovery comparison, product experiences, Gigi, integrations, governance, pilot path, and final CTA.
- Create shared `CapabilityPage`, `WorkflowStepper`, `ClosedLoop`, `RecoveryPlanComparison`, `GigiEvidencePanel`, `IntegrationPath`, `TrustGrid`, and `CTASection` patterns.
- Refactor `HomeMotion` to use ScrollTrigger only where motion explains workflow progression, image state, or section continuity, with full reduced-motion handling.
- Add a branded 404 page.

## 5. Current assets and screenshots available

Existing public assets cover procurement, Supply Horizon, operations recovery, approvals, integrations, plant management, line recovery, material readiness with Gigi, controlled knowledge, requirements, and several agentic/work views.

The five supplied screenshots in `docs/Images for GG Website` add current proof for:

- Predictive Intelligence demand probability and model-health view.
- Supply Chain Control Tower with stale-source evidence and critical risks.
- Supply Horizon with dated receipts, shortage windows, and intervention prompt.
- Factory Operations production trajectory and operational dimensions.
- Material planning view comparing the approved operational plan with expected and stress demand.

These should be copied into the website's public product asset folder with descriptive filenames and used as the primary visual proof. They contain demo entities rather than confusing hashes, but some screenshot copy still references a 210-day example; surrounding marketing copy will describe a configurable planning horizon.

## 6. Proposed routes and redirects

New canonical routes:

- `/platform`
- `/platform/supply-chain`
- `/platform/predictive-intelligence`
- `/platform/recovery-intelligence`
- `/platform/procurement`
- `/platform/operations`
- `/gigi`
- `/integrations`
- `/security-governance`
- `/demo`
- `/about`

Permanent redirects:

- `/product` to `/platform`
- `/modules/scm` to `/platform/supply-chain`
- `/modules/procurement` to `/platform/procurement`
- `/modules/operations` to `/platform/operations`
- `/enterprise` to `/security-governance`

Initial implementation intentionally omits thin solution, role, and resource pages until real standalone content exists.

## 7. Implementation phases

1. Global foundation: assets, tokens, header/footer, metadata defaults, navigation, 404, route redirects, and responsive foundations.
2. Homepage: complete risk-to-verified-recovery narrative using current product proof.
3. Platform and priority intelligence pages: platform, supply chain, predictive intelligence, and recovery intelligence.
4. Execution pages: procurement and operations connected to upstream planning decisions.
5. Trust and AI pages: Gigi, integrations, and security/governance.
6. Demo/about: broader planning-and-recovery demo path, concise form, and updated company mission.
7. Verification: typecheck, production build, route/status/link checks, desktop/mobile screenshot review, accessibility smoke checks, and claim/copy sweep.

## 8. Product screenshots or assets still needed

The supplied set is sufficient for V3 launch. Stronger future proof would include dedicated uncropped screens for Material 360, Product Readiness, Recovery Workbench plan comparison, Action Center approval, and a Gigi answer tied to one material risk. Until those are provided, the site will use the closest real product screens plus honest HTML diagrams for recovery-plan comparison rather than fabricate UI.

## 9. SEO gaps found

- Current page titles are generic and not aligned to high-intent manufacturing terms.
- Canonical URLs are not explicitly set per page.
- Social metadata defaults reference a file that does not exist.
- There is no branded 404 page.
- Sitemap contains only the old route architecture.
- Structured data leads with internal architecture terms and lacks truthful Organization/WebSite context.
- Internal links and navigation preserve outdated route names and siloed modules.
- Several core screenshot descriptions and page copy hard-code 210 days as a primary promise.
- The homepage does not expose predictive intelligence, recovery choices, Gigi boundaries, integration adoption, or governance in crawlable narrative form.

## 10. Risks and blocking questions

- Local `next dev` currently detects the nested `website` Git boundary and cannot resolve the hoisted Next.js package under Turbopack. The source can still be validated with the repository's installed dependencies after setting an explicit Turbopack root or making dependencies local to `website`.
- The demo submission endpoint depends on deployment environment configuration; local validation can cover error handling but not successful external delivery without a webhook.
- The supplied screenshots use a demo dataset with several material identifiers rather than the brief's illustrative Pune/PCB-CTRL-42 story. Marketing copy will avoid claiming the illustrative entities are literal screenshot data.
- No current certification, named integration validation, customer logo, ROI evidence, or case study is available, so none will be claimed.
- No issue blocks implementation of the core V3 site.
