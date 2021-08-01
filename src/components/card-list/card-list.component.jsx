import React from "react";
import './card-list.styles.css'
import { Card } from "../card/card.component";

export const CardList = (props) => {
    return (
    <div className='card-list'>
        {
            // Here we map the array of monsters
            // and print out Card component for each item.
            props.monsters.map(monster => <Card id={monster.id} monster = {monster}/>)
        }
    </div>
    )
}