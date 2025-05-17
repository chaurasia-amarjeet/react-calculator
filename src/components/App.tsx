import React from 'react';

import Calculator from './Calculator';
import Menu from './Menu';

export default class App extends React.Component{
    render(){
        return (
            <div>
                <Menu />
                <Calculator />
            </div>
        );
    }
}