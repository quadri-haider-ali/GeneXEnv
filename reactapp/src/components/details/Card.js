import React from 'react';
import './Card.css';    

const Card = (props) => {
    const classes = 'details-card p-4 my-4 mr-4 ' + props.className;
    return (
        <div className={classes}>{props.children}</div>
    )
}

export default Card;
