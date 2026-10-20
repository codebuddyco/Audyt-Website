import { contact, footerLinks } from '../../data/content.js';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <span>
        © {year}· Audyty energetyczne budynków
      </span>
      <nav className="footer__links" aria-label="Stopka">
        {footerLinks.map((link) => (
          <a key={link.href} className="footer__link" href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
    </footer>
  );
}
