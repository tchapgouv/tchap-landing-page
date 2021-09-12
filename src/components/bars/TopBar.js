import React, { Component } from 'react';
import Container from "@material-ui/core/Container";

import TchapLogo from "images/icons/tchap-logo.svg";
import "styles/bars/TopBar.scss";

class TopBar extends Component {
	render() {
		return (
			<React.Fragment>
				<Container maxWidth="lg">
					<div className="tc_TopBar">
						<div className="tc_TopBar-Left">
							<TchapLogo width="70px" />
							<span className="tc_TopBar-Left_name">Tchap</span>
						</div>
						<div className="tc_TopBar-Right">
							<a href="https://www.tchap.gouv.fr/tchap-prise-en-main.pdf"
								target="_blank"
								rel="noreferrer noopener nofollow"
							>
								Prise en main
							</a>
							<a href="https://www.tchap.gouv.fr/faq/"
								target="_blank"
								rel="noreferrer noopener nofollow"
							>
								FAQ
							</a>
							<a href="mailto:tchap.dinum@modernisation.gouv.fr"
								target="_blank"
								rel="noreferrer noopener nofollow"
							>
								Contact
							</a>
						</div>
					</div>
				</Container>
			</React.Fragment>
		);
	}
}

export default TopBar;
