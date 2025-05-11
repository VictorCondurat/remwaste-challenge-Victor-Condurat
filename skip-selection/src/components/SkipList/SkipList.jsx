import { useState, useEffect, useRef } from 'react';
import SkipCard from '../SkipCard/SkipCard';
import s from './SkipList.module.css';

export default function SkipList({ skips, sel, setSel, announce }) {
    const [focus, setFocus] = useState(0);
    const refs = useRef([]);

    useEffect(()=>{refs.current[focus]?.focus();},[focus]);

    const handleKey = i => e => {
        if(['ArrowRight','ArrowDown'].includes(e.key)){
            e.preventDefault();setFocus((i+1)%skips.length);
        }
        if(['ArrowLeft','ArrowUp'].includes(e.key)){
            e.preventDefault();setFocus((i-1+skips.length)%skips.length);
        }
    };

    return (
        <ul role="list" className={s.grid}>
            {skips.map((sk,i)=>(
                <SkipCard
                    key={sk.id}
                    sk={sk}
                    selected={sel===sk.id}
                    onSelect={id=>{setSel(id);announce(`${sk.size} yard skip selected`)}}
                    tabIndex={i===focus?0:-1}
                    onKey={handleKey(i)}
                    ref={el=>refs.current[i]=el}
                />
            ))}
        </ul>
    );
}
