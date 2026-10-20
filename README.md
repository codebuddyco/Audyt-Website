# Audyt energetyczny — landing page (React + Vite + CSS)

Jedna responsywna strona zbudowana na podstawie makiet 1440 px i 390 px.

## Uruchomienie

Wymagany Node.js 18+.

```bash
npm install
npm run dev       # serwer deweloperski → http://localhost:5173
npm run build     # wersja produkcyjna do folderu dist/
npm run preview   # podgląd wersji produkcyjnej
```

## Przed wdrożeniem uzupełnij

W pliku `src/data/content.js`, obiekt `contact`:

- `company` — nazwa firmy (stopka)
- `phone` — telefon (przycisk w hero + sekcja kontaktu; spacje w linku `tel:` usuwane automatycznie)
- `email` — adres e-mail (przycisk `mailto:` + sekcja kontaktu)

## Struktura

```
src/
├── main.jsx                  wejście aplikacji
├── App.jsx                   składa wszystkie sekcje
├── data/content.js           CAŁA treść strony (teksty, linki, kontakt)
├── styles/
│   ├── tokens.css            kolory, fonty, promienie, odstępy, breakpointy układu
│   └── global.css            reset, kontener strony, przyciski, wspólne klasy
└── components/
    ├── common/               Icons.jsx (SVG), ResponsiveText.jsx
    ├── Navbar/               belka + menu hamburger (mobile)
    ├── Hero/                 Hero, CallNotch (wycięcie z telefonem), EnergyClassCard (skala A–G)
    ├── Benefits/             4 karty korzyści
    ├── Comparison/           Świadectwo a audyt
    ├── Scope/                Zakres audytu (kolumny / zakładki na mobile), ScopeGroup
    ├── Cta/                  ciemny baner kontaktowy
    └── Footer/               stopka
```

Każda sekcja ma własny plik `.jsx` i `.css` w swoim folderze.

## Breakpointy

- **> 1100 px** — układ desktopowy z makiety
- **≤ 1100 px** — tablet: mniejsze marginesy, karty korzyści 2×2
- **≤ 900 px** — menu hamburger, kolumny jedna pod drugą
- **≤ 640 px** — mobile z makiety 390 px: skrócone teksty, zakładki w „Zakresie”, karty bez ikon, bez grafiki w hero

Teksty w dwóch wersjach (pełna/krótka) mają w `content.js` pola `full` i `short`.

## Animacje

Zdefiniowane w `Hero.css` (fadeUp, paski skali, poświata, strzałka) oraz w hoverach przycisków i kart.
Przy `prefers-reduced-motion: reduce` wszystkie są wyłączone (`global.css`).
