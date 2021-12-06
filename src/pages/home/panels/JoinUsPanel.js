import { Component } from 'react';
import Container from "@mui/material/Container";
import Grid from '@mui/material/Grid';
import TestYourEmail from "./TestYourEmail";

import "styles/pages/home/panels/JoinUsPanel.scss";

class JoinUsPanel extends Component {
	render() {
		return (
			<div className="tc_JoinUsPanel">
				<Container maxWidth="lg">
					<Grid container>
						<Grid item xs={12} className="tc_JoinUsPanel_joinus">
							<div className="tc_JoinUsPanel_title">Comment rejoindre Tchap ?</div>
							<div className="tc_JoinUsPanel_content">Tchap est ouvert aux agents des trois fonctions publiques, quel que soit leur statut, à condition que leur administration y soit déjà présente.</div>
						</Grid>
						<Grid item xs={12} className="tc_JoinUsPanel_testyouremail">
							<TestYourEmail />
						</Grid>
					</Grid>
				</Container>
			</div>
		);
	}
}

export default JoinUsPanel;
