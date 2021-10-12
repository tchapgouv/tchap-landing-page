import React, { Component } from 'react';
import { t } from "react-i18nify";
import Container from "@mui/material/Container";
import Grid from '@mui/material/Grid';
import Button from "@mui/material/Button";
import TchapUtils from "utils/TchapUtils";
import TestYourEmail from "./TestYourEmail";

import "styles/pages/home/panels/JoinUsPanel.scss";

class JoinUsPanel extends Component {
	render() {
		return (
			<div className="tc_JoinUsPanel">
				<Container maxWidth="lg">
					<Grid container>
						<Grid item xs={2}>&nbsp;</Grid>
						<Grid item xs={8}>
							<div className="tc_JoinUsPanel_title" dangerouslySetInnerHTML={{ __html: TchapUtils.sanitize(t('join.title')) }} />
							<div className="tc_JoinUsPanel_content" dangerouslySetInnerHTML={{ __html: TchapUtils.sanitize(t('join.text')) }} />
						</Grid>
						<Grid item xs={2}>&nbsp;</Grid>
						<Grid item xs={12} className="tc_JoinUsPanel_btn_container">
							<Button
								variant="contained"
								size="large"
								className="tc_JoinUsPanel_btn"
								href="https://www.tchap.gouv.fr/#/register"
								target="_blank"
								rel="noreferrer noopener nofollow"
							>
								Créer un compte Tchap
							</Button>
						</Grid>
						<Grid item xs={12}>
							<TestYourEmail />
						</Grid>
					</Grid>
				</Container>
			</div>
		);
	}
}

export default JoinUsPanel;
