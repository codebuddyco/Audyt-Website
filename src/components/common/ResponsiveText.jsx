/**
 * Pokazuje pełny tekst na desktopie i skróconą wersję na mobile (≤ 640 px).
 * Przełączanie odbywa się w CSS (.text-full / .text-short w global.css).
 */
export default function ResponsiveText({ full, short }) {
  if (!short || short === full) return <>{full}</>;
  return (
    <>
      <span className="text-full">{full}</span>
      <span className="text-short">{short}</span>
    </>
  );
}
