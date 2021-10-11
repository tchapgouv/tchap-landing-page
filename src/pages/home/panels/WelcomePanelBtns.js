import React, { Component } from 'react';
import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import AndroidIcon from '@mui/icons-material/Android';
import AppleIcon from '@mui/icons-material/Apple';

import "styles/pages/home/panels/WelcomePanelBtns.scss";

class WelcomePanelBtns extends Component {
	render() {
		return (
			<Container maxWidth="lg" className="tc_WelcomePanelBtn">
				<Grid container spacing={3}>
					<Grid item md={4} xs={12}>
						<Button
							variant="contained"
							size="large"
							className="tc_WelcomePanelBtn_default"
							startIcon={<AppleIcon />}
							href="https://apps.apple.com/fr/app/tchap/id1446253779"
							target="_blank"
							rel="noreferrer noopener nofollow"
						>iOS</Button>
					</Grid>
					<Grid item md={4} xs={12} className="tc_WelcomePanelBtn">
						<Button
							variant="contained"
							size="large"
							className="tc_WelcomePanelBtn_default"
							startIcon={<AndroidIcon />}
							href="https://play.google.com/store/apps/details?id=fr.gouv.tchap.a"
							target="_blank"
							rel="noreferrer noopener nofollow"
						>Android</Button>
					</Grid>
					<Grid item md={4} xs={12} className="tc_WelcomePanelBtn">
						<Button
							variant="outlined"
							size="large"
							className="tc_WelcomePanelBtn_outlined"
							href="https://www.tchap.gouv.fr/"
							target="_blank"
							rel="noreferrer noopener nofollow"
						>Application Web</Button>
					</Grid>
				</Grid>
			</Container>
		);
	}
}

export default WelcomePanelBtns;
