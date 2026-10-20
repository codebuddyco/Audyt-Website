import { benefits } from '../../data/content.js';
import { benefitIcons } from '../common/Icons.jsx';
import ResponsiveText from '../common/ResponsiveText.jsx';
import './Benefits.css';

export default function Benefits() {
  return (
    <section className="benefits" aria-label="Korzyści z audytu">
      {benefits.map((item) => {
        const Icon = benefitIcons[item.icon];
        return (
          <article key={item.title} className="benefit-card">
            <div className="benefit-card__icon" aria-hidden="true">
              <Icon />
            </div>
            <div className="benefit-card__body">
              <h3 className="benefit-card__title">{item.title}</h3>
              <p className="benefit-card__text">
                <ResponsiveText full={item.full} short={item.short} />
              </p>
            </div>
          </article>
        );
      })}
    </section>
  );
}
