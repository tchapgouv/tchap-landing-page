import { Component } from 'react';
import PropTypes from "prop-types";
import { matomoHOC } from 'utils/HOC/MatomoHOC';
import { t } from "react-i18nify";
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

	constructor(props) {
		super(props);
		this._hookProbe = this._hookProbe.bind(this);
	}

	_hookProbe(e) {
		const matomoHook = this.props.matomoHook;
		let actionName = e.target.dataset.probeName;
		actionName = actionName ? actionName : e.target.parentNode.dataset.probeName;
		matomoHook.trackEvent({ category: 'header', action: actionName });
	}

	render() {
		return (
			<header role="banner" class="fr-header">
				<BackToTop />
				<div class="fr-header__body">
					<div class="fr-container">
						<div class="fr-header__body-row">
							<div class="fr-header__brand fr-enlarge-link">
								<div class="fr-header__brand-top">
									<div class="fr-header__logo">
										<p class="fr-logo">
											République
											<br />Française
										</p>
									</div>
									<div class="fr-header__navbar">
										<button class="fr-btn--menu fr-btn" data-fr-opened="false" aria-controls="modal-833" aria-haspopup="menu" title="Menu" id="fr-btn-menu-mobile">
											Menu
										</button>
									</div>
								</div>
								<TchapLogo width="60px" />
								<div class="fr-header__service">
									<a href="/" title="Accueil - Tchap" data-probe-name="home" onClick={this._hookProbe}>
										<p class="fr-header__service-title">Tchap</p>
									</a>
									<p class="fr-header__service-tagline">La messagerie instantanée de confiance de l'Administration</p>
								</div>
							</div>
							<div class="fr-header__tools">
								<div class="fr-header__tools-links">
									<ul class="fr-links-group">
										<li>
											<a class="fr-link" href={t('links.prise-en-main')} data-probe-name="pem" onClick={this._hookProbe}>
												Prise en main
											</a>
										</li>
										<li>
											<a class="fr-link" href={t('links.faq')} data-probe-name="faq" onClick={this._hookProbe}>
												FAQ
											</a>
										</li>
										<li>
											<a class="fr-link fr-fi-external-link-line"
												href={'mailto:' + t('links.contact')}
												target="_blank"
												rel="noreferer noopener"
												data-probe-name="contact"
												onClick={this._hookProbe}>
													Contact
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="fr-header__menu fr-modal" id="modal-833" aria-labelledby="fr-btn-menu-mobile">
					<div class="fr-container">
						<button class="fr-link--close fr-link" aria-controls="modal-833">Fermer</button>
						<div class="fr-header__menu-links"></div>
					</div>
				</div>
			</header>
		);
	}
}

export default matomoHOC(TopBar);
