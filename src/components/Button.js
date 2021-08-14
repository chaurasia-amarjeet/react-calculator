import React from 'react';

import './button.css';

export default function Button(props){
    return (
        <button className="btn" onClick={props.onClickHandler}>{props.displayText}</button>
    );
}
