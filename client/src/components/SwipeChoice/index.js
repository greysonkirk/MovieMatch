import React from 'react'
import "./style.css";


export default function SwiperChoice(props) {
    return (
        <div class="card" style={{width:"18rem"}}>
        <img src={props.img}  class="card-img-top" alt={props.title}></img>
        <div class="card-body">
          <h5 class="card-title">{props.title}   {props.streamer}</h5>
          <p class="card-text">{props.desc}</p>
        
        </div>
      </div>
    
    )
}
