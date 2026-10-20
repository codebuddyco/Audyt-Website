import { useRef, useState } from 'react';
import { scope } from '../../data/content.js';
import ResponsiveText from '../common/ResponsiveText.jsx';
import ScopeGroup from './ScopeGroup.jsx';
import './Scope.css';

/**
 * Zakres audytu.
 * Desktop: dwie kolumny obok siebie (zakładki ukryte w CSS).
 * Mobile (≤ 640 px): zakładki „Budynek / Systemy techniczne”, widoczna jedna kolumna.
 */
export default function Scope() {
  const [active, setActive] = useState(scope.groups[0].id);
  const tabRefs = useRef([]);

  // Nawigacja strzałkami między zakładkami (wzorzec WAI-ARIA Tabs)
  const onKeyDown = (e, index) => {
    const count = scope.groups.length;
    let next = null;
    if (e.key === 'ArrowRight') next = (index + 1) % count;
    if (e.key === 'ArrowLeft') next = (index - 1 + count) % count;
    if (next === null) return;
    e.preventDefault();
    setActive(scope.groups[next].id);
    tabRefs.current[next]?.focus();
  };

  return (
    <section id="zakres" className="scope">
      <div className="scope__header">
        <div className="scope__heading">
          <div className="eyebrow">{scope.eyebrow}</div>
          <h2 className="section-title scope__title">
            <ResponsiveText full={scope.title.full} short={scope.title.short} />
          </h2>
        </div>
        <p className="scope__lead">{scope.lead}</p>
      </div>

      <div className="scope__tabs" role="tablist" aria-label="Obszary audytu">
        {scope.groups.map((group, i) => {
          const selected = group.id === active;
          return (
            <button
              key={group.id}
              ref={(el) => (tabRefs.current[i] = el)}
              type="button"
              role="tab"
              id={`tab-${group.id}`}
              aria-selected={selected}
              aria-controls={`panel-${group.id}`}
              tabIndex={selected ? 0 : -1}
              className={`scope__tab${selected ? ' scope__tab--active' : ''}`}
              onClick={() => setActive(group.id)}
              onKeyDown={(e) => onKeyDown(e, i)}
            >
              {group.tab}
            </button>
          );
        })}
      </div>

      <div className="scope__grid">
        {scope.groups.map((group) => (
          <ScopeGroup key={group.id} group={group} active={group.id === active} />
        ))}
      </div>
    </section>
  );
}
