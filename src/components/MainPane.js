import React, { Component } from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import "styles/MainPane.scss";

class MainPane extends Component {
	render() {
		return (
			<React.Fragment>
				<CssBaseline />
				<Container maxWidth="lg">
					<Typography component="div" className="tc_MainPane">
						TEST
					</Typography>
				</Container>
			</React.Fragment>
		);
	}
}

export default MainPane;
