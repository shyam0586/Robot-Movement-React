import React, {Component} from 'react';

export default class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startButton : 0,
            resetButton : 1            
        };
      }
    handleStartButtonClick = () =>{
        this.setState({
            startButton : !this.state.startButton,
            resetButton : !this.state.resetButton
        })
    }
    handleResetButtonClick = () =>{
        this.setState({
            startButton : !this.state.startButton,
            resetButton : !this.state.resetButton
        })
    }
    render(){
        return <div>
                <button onClick = {this.handleStartButtonClick} disabled = {this.state.startButton}>Start</button>
                <button onClick = {this.handleResetButtonClick} disabled = {this.state.resetButton}>Reset</button>
               </div>
    }
}
