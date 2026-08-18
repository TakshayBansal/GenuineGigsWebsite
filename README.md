# GenuineGigs marketing website

Production-ready Next.js marketing website for the GenuineGigs manufacturing recovery operating system. This directory is a standalone project: it can be uploaded as its own GitHub repository and imported directly into Vercel.

## Run locally

Requirements: Node.js 22+ and npm 10+.

```bash
npm ci
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

## Environment variables

| Variable | Required | Visibility | Purpose |
| --- | --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Recommended | Browser | Canonical website URL. Defaults to `https://genuinegigs.com`. |
| `DEMO_WEBHOOK_URL` | For demo submissions | Server only | HTTPS endpoint that receives validated demo requests. |
| `DEMO_WEBHOOK_TOKEN` | Optional | Server only | Bearer token sent to the demo webhook. |

Never commit `.env.local`. If `DEMO_WEBHOOK_URL` is absent, the demo form reports that submissions are unavailable instead of showing a false success state.

## Deploy to Vercel from GitHub

1. Create an empty GitHub repository.
2. Upload the contents of this directory to the repository root. `package.json` should be at the top level, not inside another folder.
3. In Vercel, select **Add New → Project**, import the GitHub repository, and leave the detected framework as **Next.js**.
4. Keep the root directory as `.` and the default install, build, and output settings.
5. Add the three variables above under **Project Settings → Environment Variables**. Apply the public URL to Production and Preview as appropriate; keep webhook values secret.
6. Deploy. After assigning a custom domain, update `NEXT_PUBLIC_SITE_URL` to that final HTTPS URL and redeploy.

Vercel will create preview deployments for branches and production deployments from the configured production branch. See the official [Vercel Git deployment guide](https://vercel.com/docs/git).

## Demo webhook payload

`POST /api/demo` validates the form and forwards JSON to `DEMO_WEBHOOK_URL`:

```json
{
  "name": "...",
  "email": "...",
  "company": "...",
  "role": "...",
  "companySize": "...",
  "erp": "...",
  "challenge": "...",
  "message": "...",
  "source": "genuinegigs-website",
  "submittedAt": "ISO-8601 timestamp"
}
```

When `DEMO_WEBHOOK_TOKEN` is configured, the request includes `Authorization: Bearer <token>`.

## Verification

```bash
npm run typecheck
npm run build
```

Both commands are also run by the included GitHub Actions workflow on pushes and pull requests.
