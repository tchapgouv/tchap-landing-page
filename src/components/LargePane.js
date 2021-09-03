import React, { Component } from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid';
import WelcomePaper from "./welcome/WelcomePaper";
import WelcomeImage from "./welcome/WelcomeImage";

import "styles/LargePane.scss";

class LargePane extends Component {
	render() {
		return (
			<React.Fragment>
				<CssBaseline />
				<Container maxWidth={false} disableGutters={true}>
					<div className="tc_LargePane">
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

export default LargePane;
