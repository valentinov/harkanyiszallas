import React from 'react';
import './Card.css';

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.img} alt="" />
            <div className="card__content">
                <h2 className="card-title">{props.title}</h2>
                <h3 className="card-text">{(props.content).substring(0, 85) + '...'}</h3>
            </div>
        </div>
    );
}

export default Card;