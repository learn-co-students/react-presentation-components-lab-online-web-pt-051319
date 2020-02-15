import  React, {Component} from 'react';

export default class SimpleComponent extends Component {
	state =({
		mood: 'happy'
	})
	handleClick = () => {
		const moodSwitch = {
			happy: 'sad',
			sad: 'happy'
		}
		this.setState({
			mood: moodSwitch[this.state.mood]
		})
	}
	render() {
		return (
			<React.Fragment>
				<div onClick={this.handleClick}>{this.state.mood}</div>
			</React.Fragment>
		)
	}
}