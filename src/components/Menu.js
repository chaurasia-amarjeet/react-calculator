import React from 'react';

import './menu.css';

export default class Menu extends React.Component{
    render(){
        return (
            <div className="menu">
                <ul>
                    <li><a href="/Home">Calculator</a></li>
                    <li><a href="/About">About</a></li>
                    <li><a href="/Contact-us">Contact Us</a></li>
                </ul>
            </div>
        );
    }
}