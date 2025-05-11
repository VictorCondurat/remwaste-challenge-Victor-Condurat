import s from './StepTracker.module.css';

export default function StepTracker({ steps, current }) {
    const pct = (current / (steps.length - 1)) * 100;

    return (
        <nav aria-label="Checkout progress" className={s.wrap}>
            <div className={s.rail}>
                <span className={s.fill} style={{ width: `${pct}%` }} />
            </div>

            <ol className={s.list}>
                {steps.map((label, i) => {
                    const state = i < current ? 'done' : i === current ? 'current' : 'todo';
                    return (
                        <li key={label} className={s[state]} aria-current={state === 'current' ? 'step' : undefined}>
                            <span className={s.dot}>{i < current ? '✓' : i + 1}</span>
                            <span className={s.label}>{label}</span>
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}
