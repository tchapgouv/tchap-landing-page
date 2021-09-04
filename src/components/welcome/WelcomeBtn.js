import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import AndroidIcon from '@material-ui/icons/Android';
import AppleIcon from '@material-ui/icons/Apple';

import "styles/welcome/WelcomeBtn.scss";

class WelcomeBtn extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="tc_WelcomeBtn">
					<Button
						variant="contained"
						size="large"
						className="tc_WelcomeBtn_default"
						startIcon={<AppleIcon />}
						href="https://apps.apple.com/fr/app/tchap/id1446253779"
						target="_blank"
						rel="noreferrer noopener nofollow"
					>iOS</Button>
					<Button
						variant="contained"
						size="large"
						className="tc_WelcomeBtn_default"
						startIcon={<AndroidIcon />}
						href="https://play.google.com/store/apps/details?id=fr.gouv.tchap.a"
						target="_blank"
						rel="noreferrer noopener nofollow"
					>Android</Button>
					<Button
						variant="outlined"
						size="large"
						className="tc_WelcomeBtn_outlined"
						href="https://www.tchap.gouv.fr/"
						target="_blank"
						rel="noreferrer noopener nofollow"

					>Application Web</Button>
				</div>
			</React.Fragment>
		);
	}
}

export default WelcomeBtn;
