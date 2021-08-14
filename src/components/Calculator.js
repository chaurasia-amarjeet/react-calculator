import React from 'react';

import Button from './Button';
import Label from './Label';

import './calculator.css';

export default class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            operator: '', 
            input1: '', 
            input2: '',
            output: 0,
            expression: ''
        };

        this.updateCurrentValue = this.updateCurrentValue.bind(this);
        this.calculate = this.calculate.bind(this);
        this.resetValue = this.resetValue.bind(this);
    }

    updateCurrentValue(value){
        this.setState((prevState) => ({
            input2: prevState.input2 + value,
            expression: prevState.expression.concat(value)
        }));
    }
    
    add(){
        this.setState((prevState) => ({
            output: parseInt(prevState.input1) + parseInt(prevState.input2),
            input1: `${parseInt(prevState.input1) + parseInt(prevState.input2)}`,
            input2: ''
        }));
    }

    subtract(){
        this.setState((prevState) => ({
            output: parseInt(prevState.input1) - parseInt(prevState.input2),
            input1: `${parseInt(prevState.input1) - parseInt(prevState.input2)}`,
            input2: ''
        }));
    }

    multiply(){
        this.setState((prevState) => ({
            output: parseInt(prevState.input1) * parseInt(prevState.input2),
            input1: `${parseInt(prevState.input1) * parseInt(prevState.input2)}`,
            input2: ''
        }));
    }

    divide(){
        this.setState((prevState) => ({
            output: parseInt(prevState.input1) / parseInt(prevState.input2),
            input1: `${parseInt(prevState.input1) / parseInt(prevState.input2)}`,
            input2: ''
        }));
    }

    calculate(currentOperator){
        console.log('currentOperator :' + currentOperator);
        const prevOperator = this.state.operator;
        console.log('prevOperator :' + prevOperator);

        switch(prevOperator){
            case '':
                this.setState((prevState) => ({
                    input1: prevState.input2,
                    input2: ''
                }));
                break;
            case '+':
                this.add();
                break;
            case '-':
                this.subtract();
                break;
            case '*':
                this.multiply();
                break;
            case '/':
                this.divide();
                break;
            default:
                break;
        }

        if(currentOperator === '='){
            console.log("Inside = if block");
            this.setState(
                {
                    operator: '', 
                    input1: '', 
                    input2: ''
                });
        }else{
            this.setState((prevState) => 
                ({
                    operator: currentOperator,
                    expression:prevState.expression.concat(currentOperator)
                }));
        }
    }

    resetValue(){
        this.setState(
            {
                operator: '', 
                input1: '', 
                input2: '',
                output: 0,
                expression: ''
            });
    }

    render (){
        const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

        return (
            <div className="calculator">
                <div className="calc-labels">
                    <Label value={"Expression : " + this.state.expression}/>
                    <Label value={"Result : " +this.state.output}/>
                </div>

                <div className="calc-numpad">
                    {numberArray.map((number) => {
                        return <Button 
                        className="btn"
                        key = {number}
                        displayText= {number} 
                        onClickHandler={() => this.updateCurrentValue(`${number}`)}/>
                    })}
                </div>
                
                <div calc-operator>
                    <Button displayText="+" onClickHandler={() => this.calculate('+')}/>
                    <Button displayText="-" onClickHandler={() => this.calculate('-')}/>
                    <Button displayText="*" onClickHandler={() => this.calculate('*')}/>
                    <Button displayText="/" onClickHandler={() => this.calculate('/')}/>
                    <Button displayText="Calculate" onClickHandler={() => this.calculate('=')}/>
                    <Button displayText="Reset Value" onClickHandler={this.resetValue}/>
                </div>
            </div>
        );
    }
}