import React, { Component } from 'react';
import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid';
import WelcomePaper from "../welcome/WelcomePaper";
import WelcomeImage from "../welcome/WelcomeImage";

import "styles/panels/IntroPanel.scss";

class IntroPanel extends Component {
	render() {
		return (
			<React.Fragment>
				<Container maxWidth={false} disableGutters={true}>
					<div className="tc_IntroPanel">
						<Container maxWidth="lg">
							<Grid container spacing={3}>
								<Grid item xs={6}>
									<WelcomePaper />
								</Grid>
								<Grid item xs={6}>
									<WelcomeImage />
								</Grid>
							</Grid>
						</Container>
					</div>
				</Container>
			</React.Fragment>
		);
	}
}

export default IntroPanel;
