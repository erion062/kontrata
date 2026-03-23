# Aplikacion për Nënshkrimin e Kontratës

Aplikacion i thjeshtë për nënshkrimin elektronik të kontratës ndërmjet **Convex SHPK** dhe **Nura Legacy**.

## Teknologjitë e Përdorura

- **Next.js 14** - Framework për React
- **Convex** - Backend serverless për ruajtjen e të dhënave
- **Resend** - Shërbim për dërgimin e email-eve
- **TailwindCSS** - Styling
- **react-signature-canvas** - Për nënshkrimet elektronike

## Konfigurimi

### 1. Instalimi i Varësive

```bash
npm install
```

### 2. Konfigurimi i Convex

```bash
npx convex dev
```

Kjo do të hapë një browser dhe do të të kërkojë të krijosh një projekt të ri në Convex. Pas krijimit, URL-ja e Convex do të shtohet automatikisht në `.env.local`.

### 3. Konfigurimi i Variablave të Mjedisit

Krijo një file `.env.local` bazuar në `.env.local.example`:

```env
NEXT_PUBLIC_CONVEX_URL=your-convex-url-here
NEXT_PUBLIC_APP_URL=http://localhost:3000
RESEND_API_KEY=your-resend-api-key-here
EMAIL_RECIPIENT_1=email1@example.com
EMAIL_RECIPIENT_2=email2@example.com
```

**Shënime:**
- `NEXT_PUBLIC_CONVEX_URL` - Merret automatikisht nga `npx convex dev`
- `RESEND_API_KEY` - Merr nga [resend.com](https://resend.com)
- `EMAIL_RECIPIENT_1` dhe `EMAIL_RECIPIENT_2` - Email-et ku do të dërgohet kontrata e nënshkruar

### 4. Ekzekutimi i Aplikacionit

```bash
npm run dev
```

Hap [http://localhost:3000](http://localhost:3000) në browser.

## Deployment në Vercel

### 1. Push në GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin your-repo-url
git push -u origin main
```

### 2. Deploy në Vercel

1. Shko në [vercel.com](https://vercel.com)
2. Import projektin nga GitHub
3. Shto variablat e mjedisit në Vercel Dashboard:
   - `NEXT_PUBLIC_CONVEX_URL`
   - `NEXT_PUBLIC_APP_URL` (URL-ja e Vercel)
   - `RESEND_API_KEY`
   - `EMAIL_RECIPIENT_1`
   - `EMAIL_RECIPIENT_2`

### 3. Konfiguro Convex për Production

```bash
npx convex deploy
```

Përdor URL-në e production të Convex në Vercel environment variables.

## Si Funksionon

1. Përdoruesi lexon kontratën
2. Klikon "Pranoj dhe Vazhdoj për Nënshkrim"
3. Plotëson emrat dhe nënshkruan për të dyja palët
4. Klikon "Nënshkruaj dhe Dërgo"
5. Kontrata ruhet në Convex
6. Dërgohet automatikisht në dy email-et e konfiguruar
7. Shfaqet mesazhi i suksesit

## Struktura e Projektit

```
kontrata/
├── app/
│   ├── api/
│   │   └── send-email/
│   │       └── route.ts          # API endpoint për dërgimin e email-eve
│   ├── ConvexClientProvider.tsx  # Convex provider
│   ├── globals.css               # Stilet globale
│   ├── layout.tsx                # Layout kryesor
│   └── page.tsx                  # Faqja kryesore
├── convex/
│   ├── _generated/               # Gjeneruar automatikisht nga Convex
│   ├── contracts.ts              # Funksionet e Convex
│   ├── schema.ts                 # Skema e databazës
│   └── tsconfig.json             # TypeScript config për Convex
├── .env.local.example            # Shembull i variablave të mjedisit
├── package.json
└── README.md
```

## Siguria

- Të dhënat ruhen në Convex (serverless database)
- Email-et dërgohen përmes Resend (shërbim i besueshëm)
- Nënshkrimet ruhen si base64 images
- Nuk ka nevojë për server backend

## Support

Për çdo pyetje ose problem, kontaktoni zhvilluesin.
