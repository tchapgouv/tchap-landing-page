import React, { Component } from 'react';

import "styles/home/welcome/WelcomeImage.scss";

class WelcomeImage extends Component {
	render() {
		return (
			<div className="tc_WelcomeImage">
				<img src={require('images/phone.png')} alt="Phone"/>
			</div>
		);
	}
}

export default WelcomeImage;
