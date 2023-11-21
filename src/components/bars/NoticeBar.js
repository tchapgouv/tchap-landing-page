import { Component } from 'react';
import { matomoHOC } from 'utils/HOC/MatomoHOC';
import { t } from "react-i18nify";
import TchapLogo from "icons/tchap-logo.svg";
import BackToTop from "../BackToTop";

import "styles/components/bars/NoticeBar.scss";

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
			<header role="notice">
				<div className="fr-header__body">
					<div class="fr-callout fr-callout--yellow-tournesol">
						<div className="fr-container">
							<p class="fr-badge fr-badge--sm">Annonce</p>	
							<h4 class="fr-callout__title">Tchap sera indisponible le 30 nov, de 7h30 à 10h30 CET (maximum)</h4>
							<p class="fr-callout__text">Pour plus d'infos : <a href="https://status.tchap.numerique.gouv.fr">https://status.tchap.numerique.gouv.fr</a></p>
						</div>

					</div>
				</div>
			</header>

		);
	}
}

export default matomoHOC(TopBar);
