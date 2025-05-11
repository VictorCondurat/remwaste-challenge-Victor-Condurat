import { useEffect, useState, useRef } from 'react';
import { fetchSkipsByLocation } from '../utils/api';
import Header from '../components/Header/Header';
import SkipList from '../components/SkipList/SkipList';

export default function SkipSelectionPage() {
    const [skips,setSkips]=useState([]);
    const [sel,setSel] = useState(null);
    const live = useRef(null);

    useEffect(()=>{
        fetchSkipsByLocation('NR32','Lowestoft')
            .then(setSkips)
            .catch(err=>{
                console.error(err);
                alert('Could not load skips. Please try again later.');
            });
    },[]);

    const chosen = skips.find(s=>s.id===sel);

    return (
        <>
            <a href="#main" className="skip-link">Skip to content</a>

            <Header currentStep={2} />

            <main id="main" style={{maxWidth:1200,margin:'0 auto',padding:'0 16px 130px'}}>
                <h1 style={{textAlign:'center',fontSize:28,margin:'24px 0 4px'}}>Choose Your Skip Size</h1>
                <p style={{textAlign:'center',color:'var(--muted)',margin:'0 0 28px'}}>
                    Pick the capacity that fits your project
                </p>

                <SkipList
                    skips={skips}
                    sel={sel}
                    setSel={setSel}
                    announce={msg=>live.current.textContent=msg}
                />
            </main>

            <footer
                style={{
                    zIndex:1000,
                    position:'fixed',bottom:0,left:0,right:0,background:'var(--surface)',
                    borderTop:'1px solid var(--border)',padding:'14px 20px',
                    display:'flex',justifyContent:'space-evenly',alignItems:'center',gap:24
                }}
            >
                <div style={{ flex:'1 1 0',color:'var(--muted)',minWidth:0 }}>
                    {chosen ? (
                        <>
                            {chosen.size} yd&nbsp;
                            <strong style={{ color:'var(--primary)' }}>£{chosen.price}</strong>
                            <span style={{ color:'var(--muted)' }}> / {chosen.hirePeriod} days</span>
                        </>
                    ) : (
                        'No skip selected'
                    )}
                </div>

                <div style={{ display:'flex',gap:12 }}>
                    <button className="btn-ghost">Back</button>
                    <button className="btn-primary" disabled={!sel}>Continue</button>
                </div>
            </footer>


            <span ref={live} aria-live="polite" className="sr-only"></span>
        </>
    );
}
