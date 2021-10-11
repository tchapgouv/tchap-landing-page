import React, { Component } from 'react';
import Container from "@mui/material/Container";
import Grid from '@mui/material/Grid';
import WelcomePaper from "components/home/welcome/WelcomePaper";
import WelcomeImage from "components/home/welcome/WelcomeImage";

import "styles/home/panels/IntroPanel.scss";

class IntroPanel extends Component {
	render() {
		return (
			<Container maxWidth={false} disableGutters={true}>
				<div className="tc_IntroPanel">
					<Container maxWidth="lg">
						<Grid container spacing={3}>
							<Grid item md={6} xs={12}>
								<WelcomePaper />
							</Grid>
							<Grid item md={6} xs={12}>
								<WelcomeImage />
							</Grid>
						</Grid>
					</Container>
				</div>
			</Container>
		);
	}
}

export default IntroPanel;
