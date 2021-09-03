import React, { Component } from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid';

import "styles/WelcomeImage.scss";

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
