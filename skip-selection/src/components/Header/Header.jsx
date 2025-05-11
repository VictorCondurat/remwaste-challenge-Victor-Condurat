import s from './Header.module.css';
import StepTracker from '../StepTracker/StepTracker';

export default function Header({ currentStep }) {
    return (
        <header className={s.wrap}>
            <div className={s.inner}>
                <span className={s.title}>Skip Hire</span>
                <StepTracker
                    steps={['Postcode','Waste','Skip','Permit','Date','Pay']}
                    current={currentStep}
                />
            </div>
        </header>
    );
}
