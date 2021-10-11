import React, { Component } from 'react';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import GitHub from '@mui/icons-material/GitHub';
import GenericLink from "components/GenericLink";
import RepLogo from "icons/rep-logo.svg";
import TchapLogoMono from "icons/tchap-logo-mono.svg";

import "styles/components/bars/BottomBar.scss";

class BottomBar extends Component {
	render() {
		return (
			<div className="tc_BottomBar">
				<Container maxWidth="lg">
					<Grid container className="tc_BottomBar_container">
						<Grid item xs={6}>
							<RepLogo width="150"/>
						</Grid>
						<Grid item xs={6} className="tc_BottomBar_text">
							&nbsp;
						</Grid>
					</Grid>
					<Grid container className="tc_BottomBar_Menu_container">
						<Grid item xs={12}>
							<GenericLink to="https://github.com/tchapgouv/tchap-landing-page" className="tc_BottomBar_Menu_item">
								<GitHub className="tc_BottomBar_Menu_logo" /> GitHub
							</GenericLink>
							<GenericLink to="https://www.tchap.gouv.fr/" className="tc_BottomBar_Menu_item">
								<TchapLogoMono className="tc_BottomBar_Menu_logo" /> Tchap
							</GenericLink>
						</Grid>
					</Grid>
				</Container>
			</div>
		);
	}
}

export default BottomBar;
