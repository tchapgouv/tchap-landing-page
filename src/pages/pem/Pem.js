import React, { Component } from 'react';
import { routerHOC } from "utils/HOC/ReactRouterHOC";
import { matomoHOC } from 'utils/HOC/MatomoHOC';
import { t } from "react-i18nify";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TopBar from "components/bars/TopBar";
import BottomBar from "components/bars/BottomBar";
import GenericLink from "../../components/GenericLink";
import LinkIcon from '@mui/icons-material/Link';
import Popper from "@mui/material/Popper";

import "styles/pages/pem/Pem.scss";

class Pem extends Component {

	constructor(props) {
		super(props);
		this.state = {
			popperAnchorEl: null,
			popperOpen: false,
			popperId: "",
		};
		this._handleCopyClick = this._handleCopyClick.bind(this);
		this._hookProbe = this._hookProbe.bind(this);
		this._onLocationChange = this._onLocationChange.bind(this);
	}

	componentDidMount() {
		const location = this.props.routerLocation;
		const anchor = location.hash.substring(1);
		if (anchor) {
			const elem = document.getElementById(anchor);
			if (elem) elem.scrollIntoView( { behavior: 'smooth', block: 'start' } );
		} else {
			const body = document.body;
			if (body) body.scrollIntoView( { behavior: 'smooth', block: 'start' } );
		}
	}

	_handleCopyClick(e) {
		const currentTarget = e.currentTarget;
		const linkId = currentTarget.parentNode.id;
		const baseUrl = location.href;
		const sHash = location.href.split("#")[1];
		const anchorUrl = Boolean(sHash) ? baseUrl.replace(sHash, linkId) : `${baseUrl}#${linkId}`;

		navigator.clipboard.writeText(anchorUrl).then(() => {
			this.setState({
				popperAnchorEl: currentTarget,
				popperOpen: true,
				popperId: "popper_" + currentTarget.parentNode.id,
			});
			setTimeout(() => {
				this.setState({
					popperAnchorEl: null,
					popperOpen: false,
					popperId: "",
				});
			}, 1200);
		});
	}

	_scrollToElem(id) {
		const elem = document.getElementById(id);
		if (elem) elem.scrollIntoView( { behavior: 'smooth', block: 'start' } );
	}

	_onLocationChange(e) {
		const id = e.target.hash.substring(1);
		this._hookProbe(e)
		this._scrollToElem(id);
	}

	_hookProbe(e) {
		const matomoHook = this.props.matomoHook;
		const actionName = e.target.dataset.probeName;
		matomoHook.trackEvent({ category: 'pem', action: actionName });
	}

	render() {
		return (
			<React.Fragment>
				<Popper
					id={this.state.popperId}
					open={this.state.popperOpen}
					anchorEl={this.state.popperAnchorEl}
					placement="top"
					className="tc_Pem_Poper"
				>
					&#10004;&nbsp;&nbsp;Lien copié
				</Popper>
				<TopBar/>
				<Container maxWidth="lg">
					<Grid container className="tc_Pem_topbar">
						<Grid item xs={12} className="tc_Pem_Container">

							<div className="tc_Pem_Intro_title">Prise en main de Tchap</div>
							<div className="tc_Pem_Intro_subtitle">Vous êtes nouvellement inscrit sur Tchap ? Bienvenue !</div>
							<div className="tc_Pem_Intro_subtitle">
								Si ce n’est pas encore fait, n’hésitez pas à télécharger l’application <GenericLink data-probe-name="android" onClick={this._hookProbe} className="tc_Pem_link" to={"https://play.google.com/store/apps/details?id=fr.gouv.tchap.a"}>Android</GenericLink> ou <GenericLink data-probe-name="ios" onClick={this._hookProbe} className="tc_Pem_link" to={"https://apps.apple.com/fr/app/tchap/id1446253779"}>iOS</GenericLink> depuis votre mobile, ou bien à ouvrir <GenericLink data-probe-name="web" onClick={this._hookProbe} className="tc_Pem_link" to={"https://www.tchap.gouv.fr/"}>Tchap sur le navigateur</GenericLink> de votre ordinateur.
							</div>
							<div className="tc_Pem_Intro_subtitle">Nous avons conçu ce guide pour vous accompagner dans la prise en main de votre compte.</div>
							<div className="tc_Pem_Intro_subtitle">C'est parti !</div>

							<ul className="tc_Pem_Menu">
								<li><GenericLink data-probe-name="menu-demarrer" onClick={this._onLocationChange} className="tc_Pem_Menu_item" to="#tcp01_001">Quelques conseils pour bien démarrer...</GenericLink></li>
								<li><GenericLink data-probe-name="menu-type" onClick={this._onLocationChange} className="tc_Pem_Menu_item" to="#tcp02_001">Les différents types de conversation</GenericLink></li>
								<li><GenericLink data-probe-name="menu-dm" onClick={this._onLocationChange} className="tc_Pem_Menu_item" to="#tcp03_001">Rechercher des interlocuteurs pour démarrer une conversation</GenericLink></li>
								<li><GenericLink data-probe-name="menu-forum" onClick={this._onLocationChange} className="tc_Pem_Menu_item" to="#tcp04_001">Rejoindre des Salons Forum</GenericLink></li>
								<li><GenericLink data-probe-name="menu-administrer" onClick={this._onLocationChange} className="tc_Pem_Menu_item" to="#tcp05_001">Créer et administrer un salon</GenericLink></li>
								<li><GenericLink data-probe-name="menu-questions" onClick={this._onLocationChange} className="tc_Pem_Menu_item" to="#tcp06_001">Des questions ?</GenericLink></li>
							</ul>

							<div className="tc_Pem_Content_title" id="tcp01_001"><LinkIcon onClick={this._handleCopyClick} className="tc_Pem_Content_title_icon" /> 1. Quelques conseils pour bien démarrer...</div>
							<div className="tc_Pem_Content_subtitle">Choisir une photo de profil</div>
							<div className="tc_Pem_Content_text">Vous pouvez le faire depuis les paramètres généraux de l’application.</div>
							<div className="tc_Pem_Content_subtitle">Gérer les notifications</div>
							<div className="tc_Pem_Content_text">Si celles de l’application sont activées par défaut, pensez à les autoriser sur votre appareil. Un simple tour dans les réglages de votre dispositif devrait vous permettre de vous en assurer ! Vous pouvez également choisir les notifications que vous souhaitez recevoir en les activant ou désactivant pour chaque salon.</div>
							<div className="tc_Pem_Content_subtitle">Conserver son historique</div>
							<div className="tc_Pem_Content_text">Pour conserver l’historique de vos échanges, nous vous recommandons de ne pas vous déconnecter de Tchap. A ce titre, nous vous invitons à maintenir une session active sur au moins deux appareils (un mobile et un ordinateur par exemple).</div>
							<div className="tc_Pem_Content_text">Nous vous invitons également à exporter vos clés Tchap à chaque fois que vous envisagez une déconnexion (Réglages >> Exporter les clés Tchap).</div>
							<div className="tc_Pem_Content_subtitle">Pourquoi est-il important de suivre cette ultime recommandation ?</div>
							<div className="tc_Pem_Content_text">Afin de garantir la sécurité des échanges au sein de l’application, Tchap a mis en place un chiffrement de bout en bout des messages échangés.</div>
							<div className="tc_Pem_Content_text">Chaque membre dispose donc de son propre trousseau de clés afin de chiffrer puis déchiffrer automatiquement ses messages. Or, par mesure de sécurité, ce trousseau se renouvelle régulièrement (notamment à chaque nouvelle connexion).</div>
							<div className="tc_Pem_Content_text">Si aucun de vos dispositifs ne détient vos clés Tchap les plus récentes, vous serez dans l’incapacité de lire l’historique de vos conversations !</div>

							<div className="tc_Pem_Content_title" id="tcp02_001"><LinkIcon onClick={this._handleCopyClick} className="tc_Pem_Content_title_icon" /> 2. Les différents types de conversation</div>
							<div className="tc_Pem_Content_withAvatar">
								<img src={require("images/pem/avatar_dm.png")} alt="Avatar DM"/>
								<div>
									<div className="tc_Pem_Content_subsubtitle">Les messages directs</div>
									<div className="tc_Pem_Content_text">Entre deux membres, ces conversations privées sont chiffrées de bout en bout.</div>
								</div>
							</div>
							<div className="tc_Pem_Content_withAvatar">
								<img src={require("images/pem/avatar_private.png")} alt="Avatar Privé"/>
								<div>
									<div className="tc_Pem_Content_subsubtitle">Les salons privés</div>
									<div className="tc_Pem_Content_text">Trouvables et accessibles uniquement sur invitation d’un de leurs administrateurs, ces conversations de groupe sont chiffrées de bout en bout.</div>
								</div>
							</div>
							<div className="tc_Pem_Content_withAvatar">
								<img src={require("images/pem/avatar_forum.png")} alt="Avatar Forum"/>
								<div>
									<div className="tc_Pem_Content_subsubtitle">Les salons forums</div>
									<div className="tc_Pem_Content_text">Trouvables et accessibles pour tous les membres de Tchap, ces conversation de groupe publiques ne sont pas chiffrées.</div>
								</div>
							</div>

							<div className="tc_Pem_Content_title" id="tcp03_001"><LinkIcon onClick={this._handleCopyClick} className="tc_Pem_Content_title_icon" /> 3. Rechercher des interlocuteurs pour démarrer une conversation</div>
							<div className="tc_Pem_Content_text">L'annuaire intégré vous permet d'entrer en contact direct avec l'ensemble des membres de Tchap.</div>
							<div className="tc_Pem_Content_withImage_double">
								<div className="tc_Pem_Content_withImage">
									<img src={require("images/pem/create_mobile.png")}  alt="Nouveau DM mobile" height="250"/>
									<div className="tc_Pem_Content_text"><span className="tc_text_b">Sur mobile</span>, rendez-vous dans l’onglet des messages directs et cliquez sur le bouton “💬+” en bas de l'écran </div>
								</div>
								<div className="tc_Pem_Content_withImage">
									<img src={require("images/pem/create_dm_web.png")}  alt="Nouveau DM web"/>
									<div className="tc_Pem_Content_text"><span className="tc_text_b">Sur le web</span>, l’annuaire se trouve en cliquant sur le bouton “+” de la section “messages directs”.</div>
								</div>
							</div>
							<div className="tc_Pem_Content_text tc_text_i">NB : si vous ne souhaitez pas apparaître dans l’annuaire, vous pouvez passer sur liste rouge en vous rendant dans les réglages généraux de l’application.</div>
							<div className="tc_Pem_Content_subtitle">Qu'est-ce qu'un “invité externe” ?</div>
							<div className="tc_Pem_Content_text">Afin de centraliser vos échanges, vous pouvez inviter des partenaires externes à l'administration à rejoindre vos discussions sur Tchap. Ils ne pourront néanmoins participer qu'aux conversations auxquelles ils seront expressément invités, et n'auront accès ni à l'annuaire, ni aux salons forums.</div>
							<div className="tc_Pem_Content_text">
								Pour inviter un partenaire externe, recherchez l’adresse mail de votre interlocuteur dans l’annuaire :
								<ul>
									<li>Si cette personne utilise déjà Tchap, vous pourrez démarrer la conversation</li>
									<li>Si ce n’est pas le cas, une invitation à créer un compte “invité externe” lui sera adressée par courriel</li>
								</ul>
							</div>

							<div className="tc_Pem_Content_title" id="tcp04_001"><LinkIcon onClick={this._handleCopyClick} className="tc_Pem_Content_title_icon" /> 4. Rejoindre des Salons Forum</div>
							<div className="tc_Pem_Content_text">Pour  tirer le meilleur parti de Tchap, soyez là où se déroulent les conversations, c’est à dire dans les salons forums !</div>
							<div className="tc_Pem_Content_text">
								Découvrez-les dans l’annuaire ou essayez quelques-unes de nos recommandations :
								<ul>
									<li><GenericLink className="tc_Pem_Menu_item" to={"https://tchap.gouv.fr/#/room/#EmploipublicZIRLWUY:agent.interieur.tchap.gouv.fr"}>Emploi Public</GenericLink></li>
									<li><GenericLink className="tc_Pem_Menu_item" to={"https://tchap.gouv.fr/#/room/#ElearningetformationsT372BJM:agent.interieur.tchap.gouv.fr"}>E-learning & Formations en ligne</GenericLink></li>
									<li><GenericLink className="tc_Pem_Menu_item" to={"https://tchap.gouv.fr/#/room/#TchapretexQAD0C1J:agent.dinum.tchap.gouv.fr"}>Tchap - Retours d'expérience</GenericLink></li>
								</ul>
							</div>
							<div className="tc_Pem_Content_text">L'annuaire des Salons Forum vous permet d'effectuer une recherche par mots clés :</div>
							<div className="tc_Pem_Content_withImage_double">
								<div className="tc_Pem_Content_withImage">
									<img src={require("images/pem/create_mobile.png")}  alt="Nouveau forum mobile" height="250"/>
									<div className="tc_Pem_Content_text"><span className="tc_text_b">Sur mobile</span>, rendez-vous dans l'onglet des salons (#), cliquez sur le bouton "#+" et sélectionnez “Accéder à un salon forum”. </div>
								</div>
								<div className="tc_Pem_Content_withImage">
									<img src={require("images/pem/create_room_web.png")}  alt="Nouveau forum web"/>
									<div className="tc_Pem_Content_text"><span className="tc_text_b">Sur le web</span>, cliquez sur le bouton “+” de la section “Salons”.</div>
								</div>
							</div>
							<div className="tc_Pem_Content_text">Et si vous ne trouvez pas votre bonheur, n'hésitez pas à créer un nouveau salon forum pour discuter des sujets qui vous importent !</div>

							<div className="tc_Pem_Content_title" id="tcp05_001"><LinkIcon onClick={this._handleCopyClick} className="tc_Pem_Content_title_icon" /> 5. Créer et administrer un salon</div>
							<div className="tc_Pem_Content_withAvatar">
								<img src={require("images/pem/avatar_private.png")}  alt="Création d'un salon privé"/>
								<div>
									<div className="tc_Pem_Content_subsubtitle">Créer un Salon Privé</div>
									<div className="tc_Pem_Content_text">Pour que le salon ne soit trouvable et accessible que sur invitation de votre part, choisissez “Salon Privé” ou bien “Salon privé ouvert aux externes” si vous souhaitez pouvoir y inviter des partenaires externes à l'administration.</div>
								</div>
							</div>
							<div className="tc_Pem_Content_withAvatar">
								<img src={require("images/pem/avatar_forum.png")}  alt="Création d'un salon forum"/>
								<div>
									<div className="tc_Pem_Content_subsubtitle">Créer un Salon Forum</div>
									<div className="tc_Pem_Content_text">Pour que le salon soit visible et ouvert à tous les membres de Tchap (sauf invités externes), choisissez “Salon Forum”.</div>
								</div>
							</div>
							<div className="tc_Pem_Content_text">Une fois que votre salon est créé, vous en êtes l’administrateur par défaut !</div>
							<div className="tc_Pem_Content_subtitle">Quels pouvoirs cela vous confère-t-il ?</div>
							<div className="tc_Pem_Content_text">
								<ul>
									<li><span className="tc_text_b">Inviter des participants : </span>dans le cas des salons privés, seuls les administrateurs peuvent convier des membres à rejoindre la conversation.</li>
									<li>
										<span className="tc_text_b">Nommer plusieurs autres administrateurs et modérateurs </span>parmi les participants : ceci est fortement recommandé pour qu’un salon ne se retrouve pas “bloqué” sans administrateur en cas de départ de l’un d’entre eux !
									</li>
									<li className="tc_list_nobullet">
										<span className="tc_text_i">NB : Si un salon se retrouve sans administrateur, plus personne n'aura le pouvoir de l'administrer. Dans le cas d'un salon privé, il sera également impossible d'y inviter de nouveaux membres.</span>
									</li>
									<li><span className="tc_text_b">Exclure ou bannir des participants si nécessaire : </span>attention, le bannissement d'un membre est irréversible.</li>
								</ul>
							</div>

							<div className="tc_Pem_Content_title" id="tcp06_001"><LinkIcon onClick={this._handleCopyClick} className="tc_Pem_Content_title_icon" /> 6. Des questions ?</div>
							<div className="tc_Pem_Content_text">La FAQ de Tchap est disponible <GenericLink className="tc_Pem_Menu_item" to={t("links.faq")}>ici</GenericLink> pour toute précision supplémentaire.</div>
							<div className="tc_Pem_Content_text">Et si vous rencontrez des difficultés dans l'utilisation de votre messagerie, n'hésitez pas à contacter le support !</div>
							<GenericLink className="tc_Pem_Menu_item" to={"mailto:" + t("links.support")}>{t("links.support")}</GenericLink>
							<br /><br /><br /><br />
							<div className="tc_Pem_Content_text tc_text_right">A très vite sur Tchap !</div>
							<div className="tc_Pem_Content_text tc_text_right">L'équipe Tchap</div>
							<div className="tc_Pem_Content_text tc_text_b tc_text_right">NB : Donnez-nous votre avis sur ce guide <GenericLink data-probe-name="satisfaction" onClick={this._hookProbe} className="tc_Pem_Menu_item" to={"https://xwfozb619ea.typeform.com/to/Uso2I4Ze"}>ici</GenericLink> et aidez-nous à l'améliorer !</div>
							<div className="tc_Pem_Content_text tc_text_i tc_text_right">(Cela ne vous prendra pas plus de 5 minutes, promis)</div>
						</Grid>
					</Grid>
				</Container>

				<BottomBar/>
			</React.Fragment>
		);
	}
}

export default routerHOC(matomoHOC(Pem));
