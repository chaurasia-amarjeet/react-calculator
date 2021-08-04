import React from 'react';

import Calculator from './Calculator';

export default class App extends React.Component{
    constructor(props){
        super(props);
    }

    render (){
        return (
            <div>
                <h3 style={{textAlign: 'center'}}>Calcultor</h3>
                <Calculator />
            </div>
    );
 }
}