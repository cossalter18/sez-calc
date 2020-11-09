import React, { Component } from 'react'
import './App.css';
import Buttons from './Components/Buttons'
import {Input} from './Components/Input'
import {Clear} from './Components/Clear'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      input: ''
    }
  }


  equation = val => {
    console.log("Clicked")
    this.setState({input: this.state.input + val});
  }

  clear = () => {
    console.log('Clicked Clear');

    this.setState({
      input: ""
    })
  };



  render() {
    return (
      <div className="App">
        <div className="calc">
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
            <Buttons>=</Buttons>
          </div>

        </div>
      </div>
    );
  }
}

export default App;