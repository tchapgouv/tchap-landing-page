import React, { Component } from 'react';

import "styles/welcome/WelcomeImage.scss";

class WelcomeImage extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="tc_WelcomeImage">
					<img src={require('images/phone.png')} alt="Phone"/>
				</div>
			</React.Fragment>
		);
	}
}

export default WelcomeImage;
