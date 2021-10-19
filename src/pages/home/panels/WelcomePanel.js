import React, { Component } from 'react';
import {t} from "react-i18nify";
import Container from "@mui/material/Container";
import Grid from '@mui/material/Grid';
import WelcomePanelBtns from "pages/home/panels/WelcomePanelBtns";
import TchapUtils from "utils/TchapUtils";

import "styles/pages/home/panels/WelcomePanel.scss";

class WelcomePanel extends Component {
	render() {
		return (
			<Container maxWidth={false} disableGutters={true}>
				<div className="tc_WelcomePanel">
					<Container maxWidth="lg">
						<Grid container spacing={3}>
							<Grid item md={7} xs={12} className="tc_WelcomePanel_block">
								<div className="tc_WelcomePanel_title" dangerouslySetInnerHTML={{ __html: TchapUtils.sanitize(t('welcome.title')) }} />
								<div className="tc_WelcomePanel_content" dangerouslySetInnerHTML={{ __html: TchapUtils.sanitize(t('welcome.text')) }} />
								<div className="tc_WelcomePanel_subcontent">{t("welcome.subtext")}</div>
								<div className="tc_WelcomePanel_content">
									<WelcomePanelBtns />
								</div>
							</Grid>
							<Grid item md={5} xs={12}>
								<div className="tc_WelcomePanel_image">
									<img src={require('images/intro.png')} alt="Phone"/>
								</div>
							</Grid>
						</Grid>
					</Container>
				</div>
			</Container>
		);
	}
}

export default WelcomePanel;
