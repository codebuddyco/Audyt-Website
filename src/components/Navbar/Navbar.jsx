import { useEffect, useState } from 'react';
import { navLinks } from '../../data/content.js';
import { LeafIcon, MenuIcon, CloseIcon } from '../common/Icons.jsx';
import './Navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Zamknij menu klawiszem Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`navbar${open ? ' navbar--open' : ''}`}>
      <div className="navbar__bar">
        <a href="#top" className="navbar__logo" aria-label="Strona główna" onClick={close}>
          <LeafIcon />
        </a>

        {/* Desktop */}
        <nav className="navbar__nav" aria-label="Główna nawigacja">
          {navLinks.map((link) => (
            <a key={link.href} className="navbar__link" href={link.href}>
              {link.label}
            </a>
          ))}
          <a className="btn btn--primary navbar__cta" href="#kontakt">
            Zamów audyt
          </a>
        </nav>

        {/* Mobile: hamburger */}
        <button
          type="button"
          className="navbar__toggle"
          aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile: rozwijane menu pionowe */}
      <nav id="mobile-menu" className="navbar__mobile" aria-label="Menu mobilne" hidden={!open}>
        {navLinks.map((link) => (
          <a key={link.href} className="navbar__mobile-link" href={link.href} onClick={close}>
            {link.label}
          </a>
        ))}
        <a className="btn btn--primary navbar__mobile-cta" href="#kontakt" onClick={close}>
          Zamów audyt
        </a>
      </nav>
    </header>
  );
}
