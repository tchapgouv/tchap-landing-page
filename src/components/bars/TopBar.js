import { Component } from 'react';
import { matomoHOC } from 'utils/HOC/MatomoHOC';
import { t } from "react-i18nify";
import TchapLogo from "icons/tchap-logo.svg";
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
			<header role="banner" className="fr-header">
				<BackToTop />
				<div className="fr-header__body">
					<div className="fr-container">
						<div className="fr-header__body-row">
							<div className="fr-header__brand fr-enlarge-link">
								<div className="fr-header__brand-top">
									<div className="fr-header__logo">
										<p className="fr-logo">
											République
											<br />Française
										</p>
									</div>
									<div className="fr-header__navbar">
										<button className="fr-btn--menu fr-btn" data-fr-opened="false" aria-controls="modal-833" aria-haspopup="menu" title="Menu" id="fr-btn-menu-mobile">
											Menu
										</button>
									</div>
								</div>
								<TchapLogo width="50px" />
								<div className="fr-header__service">
									<a href="/" title="Accueil - Tchap" data-probe-name="home" onClick={this._hookProbe}>
										<p className="fr-header__service-title">Tchap</p>
									</a>
								</div>
							</div>
							<div className="fr-header__tools">
								<div className="fr-header__tools-links">
									<ul className="fr-links-group">
									<li>
											<a className="fr-link" href="/a-propos" data-probe-name="tchap-app" target="_blank" onClick={this._hookProbe}>
												À propos de Tchap
											</a>
										</li>
										<li>
											<a className="fr-link" href="https://www.tchap.gouv.fr" data-probe-name="tchap-app" target="_blank" onClick={this._hookProbe}>
												Utiliser Tchap
											</a>
										</li>
										<li>
											<a className="fr-link" href="https://aide.tchap.beta.gouv.fr/fr" data-probe-name="faq" onClick={this._hookProbe}>
												FAQ
											</a>
										</li>
										<li>
											<a className="fr-link"
												href="/#contact"
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
				<div className="fr-header__menu fr-modal" id="modal-833" aria-labelledby="fr-btn-menu-mobile">
					<div className="fr-container">
						<button className="fr-link--close fr-link" aria-controls="modal-833">Fermer</button>
						<div className="fr-header__menu-links"></div>
					</div>
				</div>
			</header>
		);
	}
}

export default matomoHOC(TopBar);
