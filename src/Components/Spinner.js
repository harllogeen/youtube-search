import React from 'react'
import './VideoItem.css'

const Spinner = props => {
    return ( 
     <div className="loader-display">
        <div class="ui active dimmer">
           <div class="ui text loader">{props.message}</div>
        </div>
      </div>
    )
}


export default Spinner;