import { Component } from 'react';
import PropTypes from "prop-types";
import { matomoHOC } from 'utils/HOC';
import {t} from "react-i18nify";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from '@mui/icons-material/Menu';
import GenericLink from "components/GenericLink";
import TchapLogo from "icons/tchap-logo.svg";
import RepLogo from "icons/rep-logo.svg";
import BackToTop from "../BackToTop";

import "styles/components/bars/TopBar.scss";

class TopBar extends Component {

	static propTypes = {
		borderBottom: PropTypes.bool,
	};

	constructor(props) {
		super(props);
		this.state = {
			anchorEl: null,
			borderBottom: this.props.borderBottom || false,
		}
		this._handleClose = this._handleClose.bind(this);
		this._handleClick = this._handleClick.bind(this);
		this._hookProbe = this._hookProbe.bind(this);
	}

	_handleClick(event) {
		this.setState({ anchorEl: event.currentTarget });
	}

	_handleClose() {
		this.setState({ anchorEl: null });
	}

	_hookProbe(e) {
		const hooks = this.props.hooks;
		let actionName = e.target.dataset.probeName;
		actionName = actionName ? actionName : e.target.parentNode.dataset.probeName;
		hooks.trackEvent({ category: 'header', action: actionName });
	}

	render() {
		let topBarClasses = "tc_TopBar";
		if (this.state.borderBottom === true) {
			topBarClasses += " tc_TopBar_border";
		}
		return (
			<Container maxWidth="lg">
				<BackToTop />
				<div className={topBarClasses}>
					<RepLogo width="120" className="tc_TopBar_Left_rep"/>
					<GenericLink data-probe-name="home" onClick={this._hookProbe} to="/" className="tc_TopBar_Left">
						<TchapLogo width="60px" />
						<span className="tc_TopBar_Left_name">Tchap</span>
					</GenericLink>
					<div className="tc_TopBar_Right_menu">
						<Button
							className="tc_TopBar_Right_menu_btn"
							size="large" aria-controls="simple-menu"
							aria-haspopup="true"
							onClick={this._handleClick}
							startIcon={<MenuIcon />}
							title="Top menu" />
						<Menu
							anchorEl={this.state.anchorEl}
							keepMounted
							open={Boolean(this.state.anchorEl)}
							onClose={this._handleClose} >
							<GenericLink data-probe-name="mobile-pem" onClick={this._hookProbe} className="tc_TopBar_Right_menu_item" to={t('links.prise-en-main')}>
								<MenuItem onClick={this._handleClose}>Prise en main</MenuItem>
							</GenericLink>
							<GenericLink data-probe-name="mobile-faq" onClick={this._hookProbe} className="tc_TopBar_Right_menu_item" to={t('links.faq')}>
								<MenuItem onClick={this._handleClose}>FAQ</MenuItem>
							</GenericLink>
							<GenericLink data-probe-name="mobile-contact" onClick={this._hookProbe} className="tc_TopBar_Right_menu_item" to={"mailto:" + t('links.contact')}>
								<MenuItem onClick={this._handleClose}>Contact</MenuItem>
							</GenericLink>
						</Menu>
					</div>
					<div className="tc_TopBar_Right_text">
						<GenericLink data-probe-name="pem" onClick={this._hookProbe} to={t('links.prise-en-main')}>
							Prise en main
						</GenericLink>
						<GenericLink data-probe-name="faq" onClick={this._hookProbe} to={t('links.faq')}>
							FAQ
						</GenericLink>
						<GenericLink data-probe-name="contact" onClick={this._hookProbe} to={"mailto:" + t('links.contact')}>
							Contact
						</GenericLink>
					</div>
				</div>
			</Container>
		);
	}
}

export default matomoHOC(TopBar);
