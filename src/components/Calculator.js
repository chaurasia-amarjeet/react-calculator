import React from 'react';

import Button from './Button';
import Label from './Label';

export default class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            operator: '', 
            input1: '', 
            input2: '', 
            calculate: false, 
            output: 0
        };

        this.updateCurrentValue = this.updateCurrentValue.bind(this);
        this.calculate = this.calculate.bind(this);
        this.resetValue = this.resetValue.bind(this);
    }

    updateCurrentValue(value){
        this.setState((prevState) => ({
            input2: prevState.input2 + value,
            calculate: false
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
        }

        if(currentOperator == '='){
            console.log("Inside = if block");
            this.setState(
                {
                    operator: '', 
                    input1: '',
                    input2: '',
                    calculate: true
                });
        }else{
            this.setState({operator: currentOperator});
        }
    }

    resetValue(){
        this.setState(
            {operator: '', 
            input1: '', 
            input2: '', 
            calculate: false, 
            output: 0});
    }

    render (){
        const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

        return (
            <div>
                <Label value={"input1: " + this.state.input1}/>
                <Label value={"input2: " + this.state.input2}/>
                <Label value={"output: " +this.state.output}/>

                {numberArray.map((number) => {
                    return <Button 
                    key = {number}
                    displayText= {number} 
                    onClickHandler={() => this.updateCurrentValue(`${number}`)}/>
                })}
                
                <Button displayText="Reset Value" onClickHandler={this.resetValue}/>
                <Button displayText="+" onClickHandler={() => this.calculate('+')}/>
                <Button displayText="-" onClickHandler={() => this.calculate('-')}/>
                <Button displayText="*" onClickHandler={() => this.calculate('*')}/>
                <Button displayText="/" onClickHandler={() => this.calculate('/')}/>
                <Button displayText="Calculate" onClickHandler={() => this.calculate('=')}/>
            </div>
        );
    }
}