import React, { Component } from 'react';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import GitHub from '@material-ui/icons/GitHub';
import RepLogo from "images/icons/rep-logo.svg";
import TchapLogoMono from "images/icons/tchap-logo-mono.svg";
import "styles/bars/BottomBar.scss";

class BottomBar extends Component {
	render() {
		return (
			<React.Fragment>
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
									<Link href="https://github.com/tchapgouv/"
										className="tc_BottomBar_Menu_item"
										target="_blank"
										rel="noreferrer noopener nofollow">
										<GitHub className="tc_BottomBar_Menu_btn" /> GitHub
									</Link>
									<Link href="https://www.tchap.gouv.fr/"
										className="tc_BottomBar_Menu_item"
										target="_blank"
										rel="noreferrer noopener nofollow">
										<TchapLogoMono className="tc_BottomBar_Menu_btn" /> Tchap
									</Link>
								</Grid>
							</Grid>
						</Container>
					</div>
			</React.Fragment>
		);
	}
}

export default BottomBar;
