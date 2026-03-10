# Zenith Air

A luxury private jet charter booking flow built in React. Seven-step wizard covering route selection, aircraft, departure scheduling, passengers, catering, ground transport, and a cinematic trip summary.

## Stack

- React 18
- Vite 5
- Zero external UI dependencies — all components hand-built

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Deploy to Vercel

### Option A — GitHub (recommended)

1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repository
4. Vercel auto-detects Vite — click **Deploy**

### Option B — Vercel CLI

```bash
npm install -g vercel
vercel
```

### Option C — Drag & drop

Drag the project folder onto [vercel.com/new](https://vercel.com/new)

## Project structure

```
zenith-air/
├── index.html              # HTML entry
├── vite.config.js          # Vite + React plugin
├── vercel.json             # Vercel deploy config
├── package.json
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx            # React root
    └── BookingShell.jsx    # Entire application
```

## Design tokens

| Token      | Value     |
|------------|-----------|
| Background | `#F8F6F1` |
| Text       | `#1A1A1A` |
| Accent     | `#C9A96E` |
| Secondary  | `#E8E8E4` |
| Muted      | `#9A9A94` |

## Typefaces

- **Cormorant Garamond** — headings, display text, key values
- **Noto Sans** — UI labels, body, navigation

Both loaded via Google Fonts in `GlobalStyles`.

---

*Above everything.*
