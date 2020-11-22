import React from 'react';
import './Card.css';


const Card = (props) => (
    <div className='card'>
        <img src={props.src} alt=''></img>
        <div className='card_info'>
            <h2>{props.title}</h2>
            <h4>{props.description}</h4>
            <h2>{props.price}</h2>
        </div>

    </div>

);

export default Card;



