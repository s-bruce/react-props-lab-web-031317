import React from 'react';
import ReactDOM from 'react-dom';

class Spaceship extends React.Component {
	render() {
		return (
			<div>
				<h2>{this.props.name}</h2>
				<h5>Speed: {this.props.speed}</h5>
				<h5>Rockets? {this.props.hasRockets}</h5>
				<h5>Colors: {this.props.colors.join(', ')}</h5>
			</div>
		);
	}
}

Spaceship.defaultProps = {
	hasRockets: false,
	colors: ['black', 'red']
}

export default Spaceship;