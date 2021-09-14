import React, { Component } from 'react';
import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import { t } from "react-i18nify";
import TchapUtils from "../../../utils/TchapUtils";

import "styles/home/panels/LargePanel.scss";

class LargePanel extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="tc_LargePanel">
					<Container maxWidth="lg">
						<Grid container>
							<Grid item xs={2}>&nbsp;</Grid>
							<Grid item xs={8}>
								<div className="tc_LargePanel_title" dangerouslySetInnerHTML={{ __html: TchapUtils.sanitize(t('join.title')) }} />
								<div className="tc_LargePanel_content" dangerouslySetInnerHTML={{ __html: TchapUtils.sanitize(t('join.text')) }} />
							</Grid>
							<Grid item xs={2}>&nbsp;</Grid>
							<Grid item xs={12} className="tc_LargePanel_btn_container">
								<Button
									variant="contained"
									size="large"
									className="tc_LargePanel_btn"
									href="https://www.tchap.gouv.fr/#/register"
									target="_blank"
									rel="noreferrer noopener nofollow"
								>
									Créer un compte Tchap
								</Button>
							</Grid>
						</Grid>
					</Container>
				</div>
			</React.Fragment>
		);
	}
}

export default LargePanel;
