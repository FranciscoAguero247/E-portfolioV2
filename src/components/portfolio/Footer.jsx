import React from 'react';

export default function Footer(){
  return (
    <footer style={{position:'fixed',left:0,right:0,bottom:0,zIndex:40,display:'flex',alignItems:'center',justifyContent:'space-between',gap:20,flexWrap:'wrap',background:'rgba(3,8,5,.9)',backdropFilter:'blur(4px)',borderTop:'1px solid rgba(53,255,106,.3)',padding:'10px 22px',fontSize:11,letterSpacing:'.1em',color:'#35ff6a'}}>
      <div>© Francisco Aguero — SERVICE RECORD</div>
      <div style={{display:'flex',gap:12}}>
        <a href="#" style={{color:'#35ff6a'}}>TERMS</a>
        <a href="#" style={{color:'#35ff6a'}}>PRIVACY</a>
      </div>
    </footer>
  );
}
