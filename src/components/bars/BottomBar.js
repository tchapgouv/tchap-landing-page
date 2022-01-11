import { Component } from 'react';
import { matomoHOC } from 'utils/HOC/MatomoHOC';

import "styles/components/bars/BottomBar.scss";

class BottomBar extends Component {

	constructor(props) {
		super(props);
		this._hookProbe = this._hookProbe.bind(this);
	}

	_hookProbe(e) {
		const matomoHook = this.props.matomoHook;
		const actionName = e.target.dataset.probeName;
		matomoHook.trackEvent({ category: 'footer', action: actionName });
	}

	render() {
		return (
			<footer class="fr-footer" role="contentinfo" id="footer">
				<div class="fr-container">
					<div class="fr-footer__body">
						<div class="fr-footer__brand fr-enlarge-link">
							<a href="/" title="Retour à l’accueil">
								<p class="fr-logo" title="république française">
									république
									<br/>française
								</p>
							</a>
						</div>
						<div class="fr-footer__content">
							<p class="fr-footer__content-desc">
							Le code de Tchap est consultable publiquement et se base sur le protocole Matrix. Le développement de l'application bénéficie ainsi des avancées de la communauté Matrix, en terme d'amélioration fonctionnelle et de sécurité.
							</p>
							<ul class="fr-footer__content-list">
								<li class="fr-footer__content-item">
									<a class="fr-footer__content-link" href="https://www.tchap.gouv.fr" data-probe-name="tchap-app" onClick={this._hookProbe}>
										Utiliser Tchap
									</a>
								</li>
								<li class="fr-footer__content-item">
									<a class="fr-footer__content-link" href="https://github.com/tchapgouv" data-probe-name="github" onClick={this._hookProbe}>
										Le code de Tchap sur Github
									</a>
								</li>
								<li class="fr-footer__content-item">
									<a class="fr-footer__content-link" href="https://beta.gouv.fr" data-probe-name="betagouv" onClick={this._hookProbe}>
										beta.gouv.fr
									</a>
								</li>
								<li class="fr-footer__content-item">
									<a class="fr-footer__content-link" href="https://matrix.org/" data-probe-name="matrix" onClick={this._hookProbe}>
										matrix.org
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div class="fr-footer__bottom">
						<ul class="fr-footer__bottom-list">
							<li class="fr-footer__bottom-item">
								<a class="fr-footer__bottom-link">Accessibilité: non conforme</a>
							</li>
							<li class="fr-footer__bottom-item">
								<a class="fr-footer__bottom-link" href="https://www.tchap.gouv.fr/tac/" data-probe-name="terms-of-service" onClick={this._hookProbe}>
									Mentions légales
								</a>
							</li>
							<li class="fr-footer__bottom-item">
								<a class="fr-footer__bottom-link" href="/suivi" data-probe-name="personal-data" onClick={this._hookProbe}>
									Données personnelles
								</a>
							</li>
							<li class="fr-footer__bottom-item">
								<a class="fr-footer__bottom-link" href="/cgu" data-probe-name="terms-and-conditions" onClick={this._hookProbe}>
									Conditions d'utilisation
								</a>
							</li>
						</ul>
						<div class="fr-footer__bottom-copy">
							<p>Sauf mention contraire, tous les contenus de ce site sont sous <a href="https://github.com/etalab/licence-ouverte/blob/master/LO.md" target="_blank">licence etalab-2.0</a>
							</p>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}

export default matomoHOC(BottomBar);
