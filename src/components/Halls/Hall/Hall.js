import React from 'react';

import './Hall.css';

const hall = (props) => {
    return (
        <div className='Hall'>
            {props.name}
        </div>
    );
};

export default hall;