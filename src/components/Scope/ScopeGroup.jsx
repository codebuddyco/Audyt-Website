/* Jedna kolumna zakresu audytu: nagłówek + numerowana lista */
export default function ScopeGroup({ group, active }) {
  return (
    <div
      id={`panel-${group.id}`}
      role="tabpanel"
      aria-labelledby={`tab-${group.id}`}
      className={`scope-group${active ? ' scope-group--active' : ''}`}
    >
      <div className="scope-group__head">
        <span className="scope-group__number">{group.number}</span>
        <h3 className="scope-group__title">{group.title}</h3>
        <span className="scope-group__subtitle">{group.subtitle}</span>
      </div>

      <ul className="scope-group__list">
        {group.items.map((item, i) => (
          <li key={item.title} className="scope-item">
            <span className="scope-item__number" aria-hidden="true">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="scope-item__body">
              <span className="scope-item__title">{item.title}</span>
              <span className="scope-item__text">{item.text}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
