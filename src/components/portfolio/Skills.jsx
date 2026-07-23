import React from 'react';
import { SKILL_MATRIX } from '../../portfolioDta';

export default function Skills(){
  return (
    <section style={{marginBottom:120}}>
      <div style={{display:'flex',alignItems:'baseline',gap:16,marginBottom:8}}>
        <h2 style={{fontSize:13,letterSpacing:'.28em',color:'#35ff6a'}}>TACTICAL_SKILL_MATRIX</h2>
        <span style={{fontSize:11,color:'#1fae44',letterSpacing:'.14em'}}>{"//"} CAPABILITY READOUT</span>
      </div>
      <div style={{height:2,background:'#35ff6a',transformOrigin:'left',boxShadow:'0 0 10px rgba(53,255,106,.5)',marginBottom:40}} />
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',gap:18}}>
        {SKILL_MATRIX.map((grp) => (
          <div key={grp.category} style={{border:'1px solid rgba(53,255,106,.28)',background:'rgba(4,10,6,.5)',padding:24}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:22}}>
              <div style={{fontSize:13,fontWeight:700,color:'#eafff0'}}>{grp.category}</div>
            </div>
            <ul style={{listStyle:'none',paddingLeft:0,display:'grid',gap:8}}>
              {grp.items.map(it => <li key={it} style={{fontSize:13,color:'#7fe89a'}}>{it}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
