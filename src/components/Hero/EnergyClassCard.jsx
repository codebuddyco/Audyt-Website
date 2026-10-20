/**
 * Karta „Klasa energetyczna” — skala A–G.
 * E = stan obecny, B = cel po modernizacji, kropkowana strzałka między nimi.
 * Zmieniając `current` / `target` przesuniesz wyróżnienia (pozycje etykiet liczone automatycznie).
 */

const CLASSES = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const BAR_X = 80;
const BAR_TOP = 112;
const BAR_STEP = 32;
const BAR_HEIGHT = 24;
const BAR_MIN_WIDTH = 108;

const current = 'E';
const target = 'B';

export default function EnergyClassCard() {
  const rowY = (i) => BAR_TOP + i * BAR_STEP;
  const barWidth = (i) => BAR_MIN_WIDTH + i * BAR_STEP;

  const targetIdx = CLASSES.indexOf(target);
  const currentIdx = CLASSES.indexOf(current);
  const targetMid = rowY(targetIdx) + BAR_HEIGHT / 2;
  const targetEnd = BAR_X + barWidth(targetIdx);

  return (
    <svg
      className="energy-card"
      viewBox="0 0 460 400"
      fill="none"
      role="img"
      aria-label="Skala klasy energetycznej budynku od A do G, ze stanem obecnym i celem po modernizacji"
    >
      <rect x="8" y="12" width="444" height="376" rx="20" fill="#FFFFFF" />
      <text x="36" y="56" fontSize="15" fontWeight="600" fill="#1B211D">Klasa energetyczna</text>
      <text x="36" y="76" fontSize="12" fill="#8A948C">skala od A do G</text>

      {CLASSES.map((letter, i) => {
        const isTarget = i === targetIdx;
        const isCurrent = i === currentIdx;
        const highlighted = isTarget || isCurrent;
        const fill = isTarget ? '#2F6B3F' : isCurrent ? '#C7CFC6' : '#E9EDE6';

        return (
          <g key={letter}>
            <text
              x="56"
              y={rowY(i) + 16}
              textAnchor="end"
              fontSize="13"
              fontWeight={highlighted ? 700 : 600}
              fill={highlighted ? '#1B211D' : '#A3ACA4'}
            >
              {letter}
            </text>
            <rect
              className="energy-card__bar"
              x={BAR_X}
              y={rowY(i)}
              width={barWidth(i)}
              height={BAR_HEIGHT}
              rx="6"
              fill={fill}
              style={{ animationDelay: `${(i * 0.1).toFixed(2)}s` }}
            />
          </g>
        );
      })}

      {/* Cel po modernizacji */}
      <g className="energy-card__tick">
        <circle className="energy-card__glow" cx={targetEnd + 16} cy={targetMid} r="8" fill="#2F6B3F" />
        <circle cx={targetEnd + 16} cy={targetMid} r="4.5" fill="#2F6B3F" />
        <text x={targetEnd + 30} y={targetMid + 4} fontSize="12" fontWeight="600" fill="#2F6B3F">
          cel po modernizacji
        </text>
      </g>

      {/* Stan obecny */}
      <text
        className="energy-card__tick"
        x={BAR_X + barWidth(currentIdx) + 16}
        y={rowY(currentIdx) + 16}
        fontSize="12"
        fontWeight="600"
        fill="#6B756D"
      >
        stan obecny
      </text>

      {/* Kropkowana strzałka od klasy obecnej do docelowej */}
      <g className="energy-card__arrow" stroke="#2F6B3F" strokeLinecap="round" strokeLinejoin="round">
        <path
          d={`M66 ${rowY(currentIdx) - 2} V ${rowY(targetIdx) + 26}`}
          strokeWidth="1.6"
          strokeDasharray="3 5"
        />
        <path
          d={`M62 ${rowY(targetIdx) + 32} L66 ${rowY(targetIdx) + 26} L70 ${rowY(targetIdx) + 32}`}
          strokeWidth="1.8"
        />
      </g>

      <path d="M36 352 H424" stroke="#ECEEEA" strokeWidth="1" />
      <text x="36" y="374" fontSize="13" fill="#56615A">
        Audyt wskazuje, co dzieli budynek od wyższej klasy
      </text>
    </svg>
  );
}
