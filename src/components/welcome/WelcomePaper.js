import React, { Component } from 'react';
import WelcomeBtn from "./WelcomeBtn";

import "styles/welcome/WelcomePaper.scss";

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
