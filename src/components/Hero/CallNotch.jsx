import { contact, phoneHref } from '../../data/content.js';
import { PhoneIcon } from '../common/Icons.jsx';


export default function CallNotch() {
  return (
    <>
      <span className="call-notch__curve call-notch__curve--right" aria-hidden="true" />
      <span className="call-notch__curve call-notch__curve--bottom" aria-hidden="true" />
      <div className="call-notch">
        <a
          className="call-notch__btn"
          href={phoneHref}
          aria-label={`Zadzwoń do nas: ${contact.phone}`}
          title={`Zadzwoń: ${contact.phone}`}
        >
          <PhoneIcon />
        </a>
      </div>
    </>
  );
}
