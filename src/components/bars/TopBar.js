import React, { Component } from 'react';
import Container from "@mui/material/Container";
import MenuIcon from '@mui/icons-material/Menu';
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {t} from "react-i18nify";
import GenericLink from "components/GenericLink";
import TchapLogo from "icons/tchap-logo.svg";
import RepLogo from "icons/rep-logo.svg";

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
					<RepLogo width="120"/>
					<GenericLink to="/" className="tc_TopBar_Left">
						<TchapLogo width="60px" />
						<span className="tc_TopBar_Left_name">Tchap</span>
					</GenericLink>
					<div className="tc_TopBar_Right_menu">
						<Button
							className="tc_TopBar_Right_menu_btn"
							size="large" aria-controls="simple-menu"
							aria-haspopup="true"
							onClick={this.handleClick}
							startIcon={<MenuIcon />}
							title="Top menu" />
						<Menu
							anchorEl={this.state.anchorEl}
							keepMounted
							open={Boolean(this.state.anchorEl)}
							onClose={this.handleClose} >
							<GenericLink className="tc_TopBar_Right_menu_item" to={t('links.prise-en-main')}>
								<MenuItem onClick={this.handleClose}>Prise en main</MenuItem>
							</GenericLink>
							<GenericLink className="tc_TopBar_Right_menu_item" to={t('links.faq')}>
								<MenuItem onClick={this.handleClose}>FAQ</MenuItem>
							</GenericLink>
							<GenericLink className="tc_TopBar_Right_menu_item" to={"mailto:" + t('links.contact')}>
								<MenuItem onClick={this.handleClose}>Contact</MenuItem>
							</GenericLink>
						</Menu>
					</div>
					<div className="tc_TopBar_Right_text">
						<GenericLink to={t('links.prise-en-main')}>
							Prise en main
						</GenericLink>
						<GenericLink to={t('links.faq')}>
							FAQ
						</GenericLink>
						<GenericLink to={"mailto:" + t('links.contact')}>
							Contact
						</GenericLink>
					</div>
				</div>
			</Container>
		);
	}
}

export default TopBar;
