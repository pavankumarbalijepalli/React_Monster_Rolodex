import React from "react";
import './card.styles.css'

export const Card = (props) => {
    return(
        //  Here for each monster, 
        // we give its name, email id, and an image based on its id
        <div className='card-container'>
            <img alt='monster' src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}/>
            <h2> { props.monster.name } </h2>
            <p> {props.monster.email }</p>   
            <p> {props.monster.username} </p>
        </div>
    )
}