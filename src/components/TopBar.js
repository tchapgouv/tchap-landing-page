import React, { Component } from 'react';
import Link from '@material-ui/core/Link';
import Container from "@material-ui/core/Container";
import TchapLogo from "images/icons/tchap-logo.svg";

import "styles/TopBar.scss";

class TopBar extends Component {
	render() {
		return (
			<React.Fragment>
				<Container maxWidth="lg">
					<div className="tc_TopBar">
						<div className="tc_TopBar-Left">
							<TchapLogo width="50px" />
							<span className="tc_TopBar-Left_name">Tchap</span>
						</div>
						<div className="tc_TopBar-Right">
							<Link href="#" component="button">
								Prise en main
							</Link>
							<Link href="#" component="button">
								FAQ
							</Link>
							<Link href="#" component="button">
								Contact
							</Link>
						</div>
					</div>
				</Container>
			</React.Fragment>
		);
	}
}

export default TopBar;
