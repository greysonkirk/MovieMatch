import React from 'react'
import Poster from '../../poster.jpg'
import "./style.css";


export default function SwiperChoice(props) {
    return (
        <div class="card" style={{width:"18rem"}}>
        <img src={props.posterURLs[500]}  class="card-img-top" alt="..."></img>
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">{props.overview}</p>
        
        </div>
      </div>
    
    )
}
