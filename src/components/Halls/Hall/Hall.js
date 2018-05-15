import React from 'react';

import './Hall.css';

const hall = (props) => {
    const className = 'Hall' + props.className;

    return (
        <div className={className} id={props.id} onClick={props.onHallClicked}>
            {props.name}
        </div>
    );
};

export default hall;