import React from 'react';

function Card(props){
    return(
  <div className="players">
        <div className="player">
          <img src={props.imgsrc} alt="Virat_Kohli" className="player_pic" />
            <div className="player_info">
              <span className="player_type"> {props.playertype} </span>
                <h3 className="player_name" > {props.playername} </h3>
                  <a href={props.statslink}tagret="_blank">
                    <button> Stats</button>
                  </a>
            </div>
        </div>
      </div>
  
    )
  }
export default Card;