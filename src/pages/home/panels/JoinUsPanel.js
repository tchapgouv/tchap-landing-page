import { Component } from 'react';
import Container from "@mui/material/Container";
import Grid from '@mui/material/Grid';
import TestYourEmail from "./TestYourEmail";

import "styles/pages/home/panels/JoinUsPanel.scss";

class JoinUsPanel extends Component {
	render() {
		return (
			<div className="tc_JoinUsPanel" id="test">
				<Container maxWidth="lg">
					<Grid container>
						<Grid item xs={12} className="tc_JoinUsPanel_joinus">
							<div className="tc_JoinUsPanel_title"><h2>Comment rejoindre Tchap ?</h2></div>
							<div className="tc_JoinUsPanel_content">Tchap est ouvert à toutes les personnes travaillant pour le secteur public, quel que soit leur statut.</div>
						
						<div className="tc_JoinUsPanel_testyouremail">
							<TestYourEmail />
						</div>
						</Grid>
					</Grid>
				</Container>
			</div>
		);
	}
}

export default JoinUsPanel;
