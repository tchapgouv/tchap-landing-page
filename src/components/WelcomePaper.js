import React, { Component } from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid';

import "styles/WelcomePaper.scss";
import WelcomeBtn from "./WelcomeBtn";

class WelcomePaper extends Component {
	render() {
		return (
			<div className="tc_WelcomePaper">
				<div className="tc_WelcomePaper_title">
					Tchap, la messagerie instantanée de confiance de l'État français
				</div>
				<div className="tc_WelcomePaper_content">
					Conçue pour les agents publics, pour communiques facilement avec leur collaborateurs et partenaires en toute sécurité.
				</div>
				<div className="tc_WelcomePaper_content">
					<WelcomeBtn />
				</div>
			</div>
		);
	}
}

export default WelcomePaper;
