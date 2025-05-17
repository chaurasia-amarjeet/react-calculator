import React from 'react';

import './label.css';

export default function Label(props){
    return(
        <label className="label">
            {props.value}
        </label>
    );
}