import React, { Component } from 'react';
import Container from "@mui/material/Container";
import MenuIcon from '@mui/icons-material/Menu';
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import GenericLink from "components/GenericLink";
import TchapLogo from "icons/tchap-logo.svg";

import "styles/components/bars/TopBar.scss";

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
		this.setState({ anchorEl: event.currentTarget });
	}

	handleClose() {
		this.setState({ anchorEl: null });
	}

	render() {
		return (
			<Container maxWidth="lg">
				<div className="tc_TopBar">
					<GenericLink to="/" className="tc_TopBar_Left">
						<TchapLogo width="70px" />
						<span className="tc_TopBar_Left_name">Tchap</span>
					</GenericLink>
					<div className="tc_TopBar_Right_menu">
						<Button size="large" aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleClick} startIcon={<MenuIcon />} title="Top menu" />
						<Menu
							anchorEl={this.state.anchorEl}
							keepMounted
							open={Boolean(this.state.anchorEl)}
							onClose={this.handleClose}
						>
							<GenericLink to="https://www.tchap.gouv.fr/tchap-prise-en-main.pdf">
								<MenuItem onClick={this.handleClose}>Prise en main</MenuItem>
							</GenericLink>
							<GenericLink to="https://www.tchap.gouv.fr/faq/">
								<MenuItem onClick={this.handleClose}>FAQ</MenuItem>
							</GenericLink>
							<GenericLink to="mailto:tchap.dinum@modernisation.gouv.fr">
								<MenuItem onClick={this.handleClose}>Contact</MenuItem>
							</GenericLink>
						</Menu>
					</div>
					<div className="tc_TopBar_Right_text">
						<GenericLink to="https://www.tchap.gouv.fr/tchap-prise-en-main.pdf">
							Prise en main
						</GenericLink>
						<GenericLink to="https://www.tchap.gouv.fr/faq/">
							FAQ
						</GenericLink>
						<GenericLink to="mailto:tchap.dinum@modernisation.gouv.fr">
							Contact
						</GenericLink>
					</div>
				</div>
			</Container>
		);
	}
}

export default TopBar;
