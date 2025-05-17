import React from 'react';

import './button.css';

type ButtonProps = {
    onClickHandler: () => void;
    displayText: string;
}

const button = ({onClickHandler, displayText}: ButtonProps) => 
<button className="btn" onClick={onClickHandler}>{displayText}</button>;

export default button;