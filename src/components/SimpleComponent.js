// Code SimpleComponent Here
import React from 'react';

export default class SimpleComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            mood: 'happy'
        }
    }

    handleClick = () => {
        //had to peek for this simplified ternary...had the rest
        const updatedMood = this.state.mood === 'happy' ? 'sad' : 'happy'
        this.setState({mood: updatedMood})
    }

    render() {
        return <div onClick={this.handleClick}>{this.state.mood}</div>
    }
}