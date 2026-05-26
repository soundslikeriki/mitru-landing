# Mitru Landing

Limited beta landing page for Mitru.

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

If port 3000 is already in use:

```bash
npm run dev -- --port 3001
```

## Deploy

Deploy the `mitru-landing` directory as a standalone Next.js project on Vercel.

Recommended environment variables:

```text
NEXT_PUBLIC_SITE_URL=https://your-vercel-domain.vercel.app
NEXT_PUBLIC_MAC_DOWNLOAD_URL=https://github.com/soundslikeriki/Mitru/releases/download/v0.9.7-beta/Mitru_0.9.7-beta_aarch64.dmg
NEXT_PUBLIC_WINDOWS_EXE_DOWNLOAD_URL=https://github.com/soundslikeriki/Mitru/releases/download/v0.9.7-beta/Mitru_0.9.7-beta_x64-setup.exe
NEXT_PUBLIC_GITHUB_RELEASES_URL=https://github.com/soundslikeriki/Mitru/releases
```
