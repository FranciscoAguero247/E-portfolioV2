import React from 'react';
import { SYSTEM_CREDENTIALS } from '../../portfolioDta';

export default function Hero() {
  return (
    <section style={{display:'grid',gridTemplateColumns:'1.35fr .9fr',gap:48,alignItems:'start',marginBottom:120}}>
      <div>
        <div style={{display:'flex',alignItems:'center',gap:14,fontSize:12,letterSpacing:'.24em',color:'#1fae44',marginBottom:26,flexWrap:'wrap'}}>
          <span>FILE_REF: FRN-247-ALPHA</span>
          <span style={{color:'#0f5220'}}>//</span>
          <span style={{display:'inline-flex',alignItems:'center',gap:7,color:'#35ff6a'}}><span style={{width:8,height:8,background:'#35ff6a',borderRadius:'50%'}}></span>STATUS: ACTIVE_DEPLOYMENT</span>
        </div>
        <h1 style={{fontSize:'clamp(38px,7vw,88px)',fontWeight:800,lineHeight:.94,letterSpacing:'-.01em',color:'#eafff0',marginBottom:8}}>FRANCISCO<br/>AGUERO</h1>
        <div style={{fontSize:'clamp(14px,2vw,19px)',letterSpacing:'.16em',color:'#35ff6a',margin:'18px 0 30px'}}>SOFTWARE DEVELOPER<span style={{color:'#0f5220'}}> // </span>FULL-STACK OPERATIVE</div>
        <p style={{maxWidth:560,fontSize:14.5,lineHeight:1.85,color:'#7fe89a',marginBottom:34}}>{SYSTEM_CREDENTIALS.bio}</p>
        <div style={{display:'flex',flexWrap:'wrap',gap:10,marginBottom:38}}>
          <span style={{border:'1px solid rgba(53,255,106,.28)',padding:'7px 12px',fontSize:11.5,letterSpacing:'.1em',color:'#9dffb5'}}>LOC: WEST_VALLEY_CITY_UT</span>
          <span style={{border:'1px solid rgba(53,255,106,.28)',padding:'7px 12px',fontSize:11.5,letterSpacing:'.1em',color:'#9dffb5'}}>REPOS: 27</span>
          <span style={{border:'1px solid rgba(53,255,106,.28)',padding:'7px 12px',fontSize:11.5,letterSpacing:'.1em',color:'#9dffb5'}}>COMMITS/YR: 189</span>
          <span style={{border:'1px solid rgba(53,255,106,.28)',padding:'7px 12px',fontSize:11.5,letterSpacing:'.1em',color:'#9dffb5'}}>EST: 2022</span>
        </div>
        <div style={{display:'flex',flexWrap:'wrap',gap:14}}>
          <a href="#operations" style={{display:'inline-flex',alignItems:'center',gap:10,background:'#35ff6a',color:'#020402',fontWeight:700,fontSize:13,letterSpacing:'.08em',padding:'13px 22px',boxShadow:'0 0 24px rgba(53,255,106,.35)'}}>VIEW_OPERATIONS <span>↓</span></a>
          <a href="#contact" style={{display:'inline-flex',alignItems:'center',gap:10,border:'1px solid rgba(53,255,106,.5)',color:'#35ff6a',fontSize:13,letterSpacing:'.08em',padding:'13px 22px'}}>ESTABLISH_CONTACT</a>
        </div>
      </div>

      <div style={{border:'1px solid rgba(53,255,106,.4)',background:'rgba(4,10,6,.55)',boxShadow:'0 0 34px rgba(53,255,106,.1)'}}>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'11px 14px',borderBottom:'1px solid rgba(53,255,106,.25)',fontSize:10.5,letterSpacing:'.18em',color:'#1fae44'}}>
          <span>DOSSIER_PHOTO</span><span>FRN-247</span>
        </div>
        <div style={{position:'relative',height:300,filter:'grayscale(1) contrast(1.15) brightness(1.02)'}}>
          <img alt="dossier" src="/logs/Screenshot from 2026-06-20 17-29-00.png" style={{width:'100%',height:'100%',objectFit:'cover'}} />
          <div style={{position:'absolute',inset:0,pointerEvents:'none',background:'linear-gradient(180deg,transparent 60%,rgba(3,10,5,.55))',boxShadow:'inset 0 0 60px rgba(53,255,106,.12)'}} />
        </div>
        <div style={{padding:14,fontSize:11.5,lineHeight:2,color:'#7fe89a'}}>
          <div style={{display:'flex',justifyContent:'space-between'}}><span style={{color:'#1fae44'}}>DESIGNATION</span><span style={{color:'#cfffdb'}}>FULL-STACK DEV</span></div>
          <div style={{display:'flex',justifyContent:'space-between'}}><span style={{color:'#1fae44'}}>CORE</span><span style={{color:'#cfffdb'}}>REACT / NODE</span></div>
          <div style={{display:'flex',justifyContent:'space-between'}}><span style={{color:'#1fae44'}}>CLEARANCE</span><span style={{color:'#cfffdb'}}>ACTIVE</span></div>
          <div style={{display:'flex',justifyContent:'space-between'}}><span style={{color:'#1fae44'}}>DEGREE</span><span style={{color:'#cfffdb'}}>B.S. SYS ENG</span></div>
        </div>
      </div>
    </section>
  );
}
