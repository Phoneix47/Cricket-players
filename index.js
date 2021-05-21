import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Cards'
import SData from './SData.js';





ReactDOM.render( 
  <>
  <h1 className="heading">List of India Best {(SData.length)} Cricket Players </h1>
  
    {SData.map((val, index) => {  
    return ( <Card imgsrc = {val.imgsrc}
    playername= {val.playername}
    playertype= {val.playertype}
    statslink= {val.statslink}
    />
  );
  })}

  </>,
  document.getElementById('root')
);


