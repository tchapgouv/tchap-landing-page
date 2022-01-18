import React, { Component } from 'react';
import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import AndroidIcon from '@mui/icons-material/Android';
import AppleIcon from '@mui/icons-material/Apple';
import ComputerIcon from '@mui/icons-material/Computer';
import { matomoHOC } from 'utils/HOC/MatomoHOC';

import "styles/pages/home/panels/WelcomePanelBtns.scss";

class WelcomePanelBtns extends Component {
	constructor(props) {
		super(props);
		this._handleClick = this._handleClick.bind(this);
	}

	_handleClick(e) {
		e.preventDefault();
		const matomoHook = this.props.matomoHook;
		matomoHook.trackEvent({ category: 'platform', action: e.target.dataset.platform });
		window.open(e.target.href, "_self", "noreferrer");
	}

	render() {
		return (
			<Container maxWidth="lg" className="tc_WelcomePanelBtn">
				<Grid container spacing={3}>
					<Grid item md={4} xs={12}>
						<Button
							variant="contained"
							size="large"
							className="tc_WelcomePanelBtn_default"
							onClick={this._handleClick}
							href="#test"
							data-platform="ios"
						>S'inscrire</Button>
					</Grid>
				</Grid>
			</Container>
		);
	}
}

export default matomoHOC(WelcomePanelBtns);
