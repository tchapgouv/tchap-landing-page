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
			<footer className="fr-footer" role="contentinfo" id="footer">
				<div className="fr-container">
					<div className="fr-footer__body">
						<div className="fr-footer__brand fr-enlarge-link">
							<a href="/" title="Retour à l’accueil">
								<p className="fr-logo" title="république française">
									république
									<br/>française
								</p>
							</a>
						</div>
						<div className="fr-footer__content">
							<p className="fr-footer__content-desc">
							Le code de Tchap est consultable publiquement et se base sur le protocole Matrix. Le développement de l'application bénéficie ainsi des avancées de la communauté Matrix, en terme d'amélioration fonctionnelle et de sécurité.
							</p>
							<ul className="fr-footer__content-list">
								<li className="fr-footer__content-item">
									<a className="fr-footer__content-link" href="https://www.tchap.gouv.fr" data-probe-name="tchap-app" target="_blank" onClick={this._hookProbe}>
										Utiliser Tchap
									</a>
								</li>
								<li className="fr-footer__content-item">
									<a className="fr-footer__content-link" href="https://github.com/tchapgouv" data-probe-name="github" target="_blank" onClick={this._hookProbe}>
										Le code de Tchap sur Github
									</a>
								</li>
								<li className="fr-footer__content-item">
									<a className="fr-footer__content-link" href="/assets/download/Tchap-KitVisuel.zip" data-probe-name="github" onClick={this._hookProbe}>
										Télécharger le kit visuel Tchap
									</a>
								</li>
								<li className="fr-footer__content-item">
									<a className="fr-footer__content-link" href="https://beta.gouv.fr" data-probe-name="betagouv" target="_blank" onClick={this._hookProbe}>
										beta.gouv.fr
									</a>
								</li>
								<li className="fr-footer__content-item">
									<a className="fr-footer__content-link" href="https://matrix.org/" data-probe-name="matrix" target="_blank" onClick={this._hookProbe}>
										matrix.org
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="fr-footer__bottom">
						<ul className="fr-footer__bottom-list">
							<li className="fr-footer__bottom-item">
								<a className="fr-footer__bottom-link">Accessibilité: non conforme</a>
							</li>
							<li className="fr-footer__bottom-item">
								<a className="fr-footer__bottom-link" href="/gestion-des-cookies" data-probe-name="personal-data" onClick={this._hookProbe}>
									Gestion des cookies
								</a>
							</li>
							<li className="fr-footer__bottom-item">
								<a className="fr-footer__bottom-link" href="/politique-de-confidentialite" data-probe-name="personal-data" onClick={this._hookProbe}>
									Politique de confidentialité
								</a>
							</li>
							<li className="fr-footer__bottom-item">
								<a className="fr-footer__bottom-link" href="/cgu" data-probe-name="terms-and-conditions" onClick={this._hookProbe}>
									Conditions d'utilisation
								</a>
							</li>
							<li className="fr-footer__bottom-item">
								<a className="fr-footer__bottom-link" href="https://stats.tchap.incubateur.net/public/dashboard/8c6560e3-c27a-487b-b242-eb1636912f1a" data-probe-name="stats" target="_blank" onClick={this._hookProbe}>
									Statistiques
								</a>
							</li>
						</ul>
						<div className="fr-footer__bottom-copy">
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
