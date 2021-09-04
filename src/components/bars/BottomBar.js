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
								<Grid item xs={6} className="tc_BottomBar_text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
									Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
									when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Grid>
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
