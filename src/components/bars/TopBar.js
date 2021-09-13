import React, { Component } from 'react';
import Container from "@material-ui/core/Container";
import MenuIcon from '@material-ui/icons/Menu';
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import TchapLogo from "images/icons/tchap-logo.svg";

import "styles/bars/TopBar.scss";

class TopBar extends Component {

	constructor(props) {
		super(props);
		this.state = {
			anchorEl: null,
		}
		this.handleClose = this.handleClose.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event) {
		this.setState({anchorEl: event.currentTarget});
	}

	handleClose() {
		this.setState({anchorEl: null});
	}

	render() {
		return (
			<React.Fragment>
				<Container maxWidth="lg">
					<div className="tc_TopBar">
						<div className="tc_TopBar_Left">
							<TchapLogo width="70px" />
							<span className="tc_TopBar_Left_name">Tchap</span>
						</div>
						<div className="tc_TopBar_Right_menu">
							<Button size="large" aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleClick} startIcon={<MenuIcon />} title="Top menu" />
							<Menu
								anchorEl={this.state.anchorEl}
								keepMounted
								open={Boolean(this.state.anchorEl)}
								onClose={this.handleClose}
							>
								<Link href="https://www.tchap.gouv.fr/tchap-prise-en-main.pdf"
									target="_blank"
									rel="noreferrer noopener nofollow">
									<MenuItem onClick={this.handleClose}>Prise en main</MenuItem>
								</Link>
								<Link href="https://www.tchap.gouv.fr/faq/"
									target="_blank"
									rel="noreferrer noopener nofollow">
									<MenuItem onClick={this.handleClose}>FAQ</MenuItem>
								</Link>
								<Link href="mailto:tchap.dinum@modernisation.gouv.fr"
									target="_blank"
									rel="noreferrer noopener nofollow">
									<MenuItem onClick={this.handleClose}>Contact</MenuItem>
								</Link>
							</Menu>
						</div>
						<div className="tc_TopBar_Right_text">
							<Link href="https://www.tchap.gouv.fr/tchap-prise-en-main.pdf"
								target="_blank"
								rel="noreferrer noopener nofollow"
							>
								Prise en main
							</Link>
							<Link href="https://www.tchap.gouv.fr/faq/"
								target="_blank"
								rel="noreferrer noopener nofollow"
							>
								FAQ
							</Link>
							<Link href="mailto:tchap.dinum@modernisation.gouv.fr"
								target="_blank"
								rel="noreferrer noopener nofollow"
							>
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
