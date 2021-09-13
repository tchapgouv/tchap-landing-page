import React, { Component } from 'react';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import RepLogo from "images/icons/rep-logo.svg";
import "styles/bars/BottomBar.scss";

class BottomBar extends Component {
	render() {
		return (
			<React.Fragment>
					<div className="tc_BottomBar">
						<Container maxWidth="lg">
							<Grid container className="tc_BottomBar_container">
								<Grid item xs={6}>
									<RepLogo width="150px"/>
								</Grid>
								<Grid item xs={6} className="tc_BottomBar_text">
									&nbsp;
								</Grid>
							</Grid>
							<Grid container className="tc_BottomBar-Menu_container">
								<Grid item xs={12}>
									&nbsp;
								</Grid>
							</Grid>
						</Container>
					</div>
			</React.Fragment>
		);
	}
}

export default BottomBar;
