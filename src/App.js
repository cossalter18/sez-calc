import React, { Component } from 'react'
import './App.css';
import Buttons from './Components/Buttons'
import { Input } from './Components/Input'
import * as math from 'mathjs'
import ReadOut from './Components/readOut'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      input: '',
      readOut: '',
      problem: ''
    }
  }


  equation = val => {
    console.log("Clicked")
    this.setState({ input: this.state.input + val });
  }

  clear = () => {
    console.log('Clicked Clear');

    this.setState({
      input: ""
    })
  };

  answer = () => {
    console.log("Equal Clicked")
    this.setState({ input: math.evaluate(this.state.input), readOut: this.state.input })
    // this.newReadOut()
  }

  newReadOut(newReadOut) {
    this.setState({ readOut: [...this.state.readOut, newReadOut] })
  }


  render() {
    return (
      <div className="App">
        <div className="calc">
          <ReadOut readOut={this.state.readOut}></ReadOut>
          <Input input={this.state.input}></Input>
          <div className="row">
            <Buttons handleClick={this.equation}>1</Buttons>
            <Buttons handleClick={this.equation}>2</Buttons>
            <Buttons handleClick={this.equation}>3</Buttons>
            <Buttons handleClick={this.equation}>+</Buttons>
          </div>
          <div className="row">
            <Buttons handleClick={this.equation}>4</Buttons>
            <Buttons handleClick={this.equation}>5</Buttons>
            <Buttons handleClick={this.equation}>6</Buttons>
            <Buttons handleClick={this.equation}> -</Buttons>
          </div>
          <div className="row">
            <Buttons handleClick={this.equation}>7</Buttons>
            <Buttons handleClick={this.equation}>8</Buttons>
            <Buttons handleClick={this.equation}>9</Buttons>
            <Buttons handleClick={this.equation}>*</Buttons>
          </div>
          <div className="row">
            <Buttons handleClick={this.clear}>C</Buttons>
            <Buttons handleClick={this.equation}>0</Buttons>
            <Buttons handleClick={this.equation}>.</Buttons>
            <Buttons handleClick={this.equation}>/</Buttons>
          </div>
          <div className="row">
            <Buttons handleClick={this.answer}>=</Buttons>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
