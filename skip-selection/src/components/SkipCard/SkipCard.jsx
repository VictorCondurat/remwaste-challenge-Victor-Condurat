import clsx from 'clsx';
import s from './SkipCard.module.css';
import { forwardRef } from 'react';

export default forwardRef(function SkipCard(
    { sk, selected, onSelect, tabIndex, onKey }, ref
){
    return (
        <li className={s.wrapper}>
            <button
                ref={ref}
                className={clsx(s.card, selected && s.sel)}
                aria-pressed={selected}
                onClick={() => onSelect(sk.id)}
                tabIndex={tabIndex}
                onKeyDown={onKey}
            >
                {selected && <span className={s.tick}>✓</span>}

                <figure className={s.fig}>
                    <img
                        src={sk.img}
                        alt={`${sk.size} yard skip`}
                        width="320"
                        height="180"
                        loading="lazy"
                        decoding="async"
                        onError={e => e.currentTarget.style.display = 'none'}
                    />
                    <figcaption className={s.size}>{sk.size} Yards</figcaption>
                    {sk.roadBan && <span className={s.warn}>Not road-legal</span>}
                </figure>

                <div className={s.row}>
                    <h3>{sk.size} Yards</h3>
                </div>
                <div className={s.row}>
                    <p className={s.meta}>{sk.hirePeriod}-day hire</p>
                    <p className={s.price}>£{sk.price}</p>
                </div>
            </button>
        </li>
    );
});