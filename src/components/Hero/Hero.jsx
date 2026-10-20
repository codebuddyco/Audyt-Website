import { hero } from '../../data/content.js';
import { DocumentIcon } from '../common/Icons.jsx';
import ResponsiveText from '../common/ResponsiveText.jsx';
import CallNotch from './CallNotch.jsx';
import EnergyClassCard from './EnergyClassCard.jsx';
import './Hero.css';

export default function Hero() {
  return (
    <section id="top" className="hero">
      <CallNotch />

      <div className="hero__grid">
        <div className="hero__content">
          <div className="hero__eyebrow fade-1">
            <span className="hero__eyebrow-dot" aria-hidden="true" />
            {hero.eyebrow}
          </div>

          <h1 className="hero__title fade-1">
            {hero.titleStart}
            <span className="hero__title-accent">{hero.titleAccent}</span>
          </h1>

          <p className="hero__lead fade-2">
            <ResponsiveText full={hero.lead.full} short={hero.lead.short} />
          </p>

          <div className="hero__actions fade-3">
            <a className="btn btn--primary hero__btn-primary" href={hero.primaryCta.href}>
              {hero.primaryCta.label}
              <DocumentIcon />
            </a>
            <a className="btn btn--light hero__btn-secondary" href={hero.secondaryCta.href}>
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>

        <div className="hero__illustration fade-2">
          <EnergyClassCard />
        </div>
      </div>

      <div className="hero__facts">
        {hero.facts.map((fact) => (
          <div key={fact.title} className="hero__fact">
            <div className="hero__fact-title">{fact.title}</div>
            <div className="hero__fact-text">
              <ResponsiveText full={fact.full} short={fact.short} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
