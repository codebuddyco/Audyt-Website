/*
 * Cała treść strony w jednym miejscu.
 * `short` = krótsza wersja tekstu pokazywana na mobile (≤ 640 px).
 */

// ▼▼▼ UZUPEŁNIJ PRZED WDROŻENIEM ▼▼▼
export const contact = {
  company: '',
  phone: '+48 790 030 122', // np. '+48 600 000 000' — w linku tel: spacje są usuwane automatycznie
  email: 'michalpomag@op.pl',
};
// ▲▲▲

export const phoneHref = `tel:${contact.phone.replace(/\s+/g, '')}`;
export const emailHref = `mailto:${contact.email}`;

export const navLinks = [
  { href: '#top', label: 'Strona główna' },
  { href: '#czym-jest', label: 'Czym jest audyt' },
  { href: '#zakres', label: 'Zakres' },
  { href: '#kontakt', label: 'Kontakt' },
];

export const footerLinks = navLinks.slice(1);

export const hero = {
  eyebrow: 'Audyt energetyczny budynku',
  titleStart: 'Sprawdź, gdzie Twój budynek ',
  titleAccent: 'traci energię.',
  lead: {
    full: 'Analiza zużycia energii i potencjału oszczędności — podstawa decyzji o modernizacji, niższych kosztach eksploatacji i dalszej poprawie efektywności energetycznej.',
    short: 'Analiza zużycia energii i potencjału oszczędności — podstawa decyzji o modernizacji i niższych kosztach eksploatacji.',
  },
  primaryCta: { href: '#kontakt', label: 'Zamów audyt' },
  secondaryCta: { href: '#zakres', label: 'Zakres audytu' },
  facts: [
    { title: 'Bilans cieplny', full: 'straty i zyski ciepła przez przegrody', short: 'straty i zyski ciepła' },
    { title: 'Systemy techniczne', full: 'ogrzewanie, wentylacja, c.w.u., OZE', short: 'ogrzewanie, wentylacja, OZE' },
    { title: 'EU ETS2', full: 'uwzględniony w planie modernizacji', short: 'uwzględniony w planie' },
    { title: 'Raport', full: 'ocena stanu i propozycje modernizacji', short: 'propozycje modernizacji' },
  ],
};

export const benefits = [
  {
    icon: 'search',
    title: 'Lokalizacja strat',
    full: 'Wskazujemy miejsca, w których występują nieuzasadnione straty energii.',
    short: 'Wskazujemy miejsca nieuzasadnionych strat energii.',
  },
  {
    icon: 'wrench',
    title: 'Sposoby eliminacji',
    full: 'Określamy konkretne działania, które pozwolą ograniczyć straty.',
    short: 'Określamy działania, które ograniczą straty.',
  },
  {
    icon: 'trend',
    title: 'Szacunek oszczędności',
    full: 'Szacujemy oszczędności wynikające z wdrożenia zmian w budynku.',
    short: 'Szacujemy efekty wdrożenia zmian w budynku.',
  },
  {
    icon: 'eye',
    title: 'Ukryte koszty',
    full: 'Wychwytujemy nieefektywne zużycie, wady systemów i niezauważone dotąd koszty.',
    short: 'Wychwytujemy nieefektywne zużycie, wady systemów i niezauważone koszty.',
  },
];

/* W punktach `strong` to fragment pogrubiony, `before`/`after` — tekst wokół niego */
export const comparison = {
  eyebrow: 'Podstawowe pojęcia',
  title: 'Świadectwo energetyczne a audyt energetyczny.',
  cards: [
    {
      title: 'Świadectwo energetyczne',
      subtitle: { full: 'świadectwo charakterystyki energetycznej', short: 'świadectwo charakterystyki energetycznej' },
      points: [
        { before: 'Dokument wymagany przy ', strong: 'sprzedaży i wynajmie', after: ' budynku lub lokalu' },
        { before: 'Potrzebny przy zakończeniu budowy i wniosku o pozwolenie na użytkowanie' },
        { before: 'Określa zapotrzebowanie obiektu na energię użytkową, końcową i pierwotną' },
        { before: 'Zawiera zalecenia, ale nie plan modernizacji' },
        { before: 'Sporządza osoba uprawniona; dokument ma numer z centralnego rejestru' },
        { before: 'Ważny 10 lat — krócej, gdy prace zmienią charakterystykę energetyczną' },
      ],
    },
    {
      title: 'Audyt energetyczny',
      subtitle: { full: 'analiza zużycia energii i potencjału oszczędności', short: 'analiza zużycia energii i oszczędności' },
      points: [
        { strong: 'Szczegółowa analiza', after: ' zużycia energii w budynku i instalacjach' },
        { before: 'Wskazuje miejsca strat ciepła i ich przyczyny' },
        { before: 'Proponuje warianty modernizacji wraz z szacunkiem oszczędności' },
        { before: 'Podstawa decyzji inwestycyjnych i wniosków o dofinansowanie' },
        { before: 'Dobrowolny — wykonywany, gdy chcesz obniżyć koszty eksploatacji' },
        { before: 'Kończy się raportem z oceną stanu technicznego obiektu' },
      ],
    },
  ],
};

export const scope = {
  eyebrow: 'Zakres audytu',
  title: {
    full: 'Co dokładnie obejmuje audyt energetyczny?',
    short: 'Co dokładnie obejmuje audyt?',
  },
  lead: '',
  groups: [
    {
      id: 'budynek',
      number: '01',
      tab: 'Budynek',
      title: 'Analiza energetyczna budynku',
      subtitle: 'bilans cieplny',
      items: [
        { title: 'Przegrody zewnętrzne', text: 'Ocena strat i zysków ciepła przez ściany, dach i posadzkę' },
        { title: 'Stolarka okienna i drzwiowa', text: 'Wpływ szczelności i nasłonecznienia' },
        { title: 'Zapotrzebowanie na energię', text: 'Energia użytkowa, końcowa i pierwotna' },
        { title: 'Potencjał poprawy przegród', text: 'Możliwości zwiększenia efektywności energetycznej' },
        { title: 'Zyski ciepła', text: 'Od osób, urządzeń i promieniowania słonecznego' },
      ],
    },
    {
      id: 'systemy',
      number: '02',
      tab: 'Systemy techniczne',
      title: 'Analiza systemów technicznych',
      subtitle: 'instalacje i automatyka',
      items: [
        { title: 'Wentylacja', text: 'Mechaniczna lub grawitacyjna — wydajność, tryb pracy, odzysk ciepła' },
        { title: 'Klimatyzacja i chłodzenie', text: 'Wydajność, zapotrzebowanie na energię, automatyka sterująca' },
        { title: 'Ogrzewanie', text: 'Źródło ciepła, parametry pracy, sprawność, modernizacja z uwzględnieniem EU ETS2' },
        { title: 'Ciepła woda użytkowa', text: 'Źródło ciepła, straty ciepła, izolacja' },
        { title: 'Automatyka budynkowa', text: 'Integracja systemów technicznych' },
        { title: 'OZE', text: 'Zastosowanie odnawialnych źródeł energii' },
        { title: 'Szybkie oszczędności', text: 'Niskokosztowe działania możliwe do wdrożenia od zaraz' },
      ],
    },
  ],
};

export const cta = {
  titleStart: 'Zacznij od audytu. ',
  titleAccent: 'Oszczędzaj świadomie.',
  lead: {
    full: 'Otrzymasz raport z oceną stanu technicznego budynku i konkretnymi propozycjami modernizacji.',
    short: 'Otrzymasz raport z oceną stanu technicznego budynku i propozycjami modernizacji.',
  },
  button: 'Zamów audyt energetyczny',
};
