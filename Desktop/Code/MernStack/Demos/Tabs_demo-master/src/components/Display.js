import React from 'react';

const Display = (props) => {
    const {theTab} = props
    console.log(theTab);

    return <h2>{props.theTab}</h2>
}

export default Display;
