import { Component } from 'react';
import Container from "@mui/material/Container";
import Grid from '@mui/material/Grid';
import WelcomePanelBtns from "pages/home/panels/WelcomePanelBtns";

import "styles/pages/home/panels/WelcomePanel.scss";

class WelcomePanel extends Component {
	render() {
		return (
			<Container maxWidth={false} disableGutters={true}>
				<div className="tc_WelcomePanel">
					<Container maxWidth="lg">
						<Grid container spacing={3}>
							<Grid item md={7} xs={12} className="tc_WelcomePanel_block">
								<h1>Tchap, la messagerie instantanée de confiance de l'Administration</h1>
								<div className="fr-text--lead">Conçue pour les agents des trois fonctions publiques, pour communiquer facilement en toute sécurité.</div>
								<div className="fr-text--lead">Utilisée par plus de 260 000 agents publics.</div>
								<div className="tc_WelcomePanel_content">
									<WelcomePanelBtns />
								</div>
							</Grid>
							<Grid item md={5} xs={12} className="tc_WelcomePanel_image">
								<img src={require('images/intro.png')} alt="Phone"/>
							</Grid>
						</Grid>
					</Container>
				</div>
			</Container>
		);
	}
}

export default WelcomePanel;
