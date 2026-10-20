import { contact, cta, emailHref, phoneHref } from '../../data/content.js';
import { MailIcon, PhoneIcon } from '../common/Icons.jsx';
import ResponsiveText from '../common/ResponsiveText.jsx';
import './Cta.css';

export default function Cta() {
  return (
    <section id="kontakt" className="cta">
      <div className="cta__text">
        <h2 className="cta__title">
          {cta.titleStart}
          <span className="cta__title-accent">{cta.titleAccent}</span>
        </h2>
        <p className="cta__lead">
          <ResponsiveText full={cta.lead.full} short={cta.lead.short} />
        </p>
      </div>

      <div className="cta__side">
        <a className="btn btn--primary cta__button" href={emailHref}>
          {cta.button}
        </a>

        <div className="cta__contact">
          <a className="cta__contact-row" href={phoneHref}>
            <PhoneIcon size={18} strokeWidth={2} />
            <span>{contact.phone}</span>
          </a>
          <a className="cta__contact-row" href={emailHref}>
            <MailIcon />
            <span>{contact.email}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
