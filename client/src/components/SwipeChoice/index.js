import React from 'react'
import API from '../../utils/API';
import "./style.css";
import Prime from '../../prime.png'
import Disney from '../../disney-plus.png'
import Hulu from '../../hulu.png'
import Netflix from '../../Netflix.svg'

export default function SwiperChoice(props) {
 let logo
  if(props.streamer === "netflix"){
     { logo = Netflix}
  }else if (props.streamer === "hulu"){
   { logo = Hulu}
  }else if (props.streamer === "disney"){
     { logo = Disney}
  }else { { logo = Prime}}




    return (
      <>
      <div className="centerContent" style={{visibility:"hidden"}}><button>see matches</button></div>
        <div className="card" style={{width:"18rem"}}>
        <img src={props.img}  className="card-img-top" alt={props.title}></img>
        <div className="card-body">
         
          <h5 className="card-title"><img src={logo} width="50px" className="bg-dark rounded"></img>   {props.title}</h5>
          <p className="card-text">{props.desc}</p>

        </div>
      </div>
    </>
    )
}
