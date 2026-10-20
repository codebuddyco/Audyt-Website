import { comparison } from '../../data/content.js';
import ResponsiveText from '../common/ResponsiveText.jsx';
import './Comparison.css';

/* Sekcja „Świadectwo energetyczne a audyt energetyczny” */
export default function Comparison() {
  return (
    <section id="czym-jest" className="comparison">
      <div className="comparison__header">
        <div className="eyebrow">{comparison.eyebrow}</div>
        <h2 className="section-title">{comparison.title}</h2>
      </div>

      <div className="comparison__grid">
        {comparison.cards.map((card) => (
          <article key={card.title} className="comparison-card">
            <div className="comparison-card__head">
              <h3 className="comparison-card__title">{card.title}</h3>
              <span className="comparison-card__subtitle">
                <ResponsiveText full={card.subtitle.full} short={card.subtitle.short} />
              </span>
            </div>

            <ul className="comparison-card__list">
              {card.points.map((point, i) => (
                <li key={i} className="comparison-card__item">
                  <span className="comparison-card__dot" aria-hidden="true" />
                  <span>
                    {point.before}
                    {point.strong && <strong>{point.strong}</strong>}
                    {point.after}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
