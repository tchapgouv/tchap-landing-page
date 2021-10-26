import React, { Component } from 'react';
import {t} from "react-i18nify";
import { HashLink } from 'react-router-hash-link';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TopBar from "components/bars/TopBar";
import BottomBar from "components/bars/BottomBar";
import GenericLink from "../../components/GenericLink";
import LinkIcon from '@mui/icons-material/Link';
import Popper from "@mui/material/Popper";
import TchapUtils from "../../utils/TchapUtils";

import "styles/pages/pem/Pem.scss";

class Pem extends Component {

	constructor(props) {
		super(props);
		this.state = {
			popperAnchorEl: null,
			popperOpen: false,
			popperId: "",
		};
		this._handleClick = this._handleClick.bind(this);
	}

	componentDidMount() {
		const anchor = location.hash.split("#")[2];
		if (anchor) {
			const elemId = anchor.replace("/", "");
			const elem = document.getElementById(elemId);
			if (elem) {
				window.scrollTo({
					behavior: "smooth",
					top: elem.offsetTop
				});
			}
		}
	}

	_handleClick(e) {
		const currentTarget = e.currentTarget;
		const linkId = currentTarget.parentNode.id;
		const anchorUrl = `${window.location.href}#${linkId}`
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
					Copié
				</Popper>
				<TopBar/>
				<Container maxWidth="lg">
					<Grid container className="tc_Pem_topbar">
						<Grid item xs={12} className="tc_Pem_Container">

							<div className="tc_Pem_Intro_title">Prise en main de Tchap</div>
							<div className="tc_Pem_Intro_subtitle tc_text_b">Bienvenue sur Tchap !</div>
							<div className="tc_Pem_Intro_subtitle">L'équipe est ravie de vous compter parmi nos nouveaux utilisateurs.</div>
							<div className="tc_Pem_Intro_subtitle">
								Si ce n’est pas encore fait, n’hésitez pas à télécharger l’application <GenericLink to={"https://play.google.com/store/apps/details?id=fr.gouv.tchap.a"} className="tc_link">Android</GenericLink> ou <GenericLink to={"https://apps.apple.com/fr/app/tchap/id1446253779"} className="tc_link">iOS</GenericLink> depuis votre mobile, ou bien à ouvrir <GenericLink to={"https://www.tchap.gouv.fr/"} className="tc_link">Tchap sur le navigateur</GenericLink> de votre ordinateur.
							</div>
							<div className="tc_Pem_Intro_subtitle">Nous avons conçu ce guide pour vous accompagner dans la prise en main de votre compte.</div>
							<div className="tc_Pem_Intro_subtitle">C'est parti !</div>

							<ul className="tc_Pem_Menu">
								<li><HashLink className="tc_Pem_Menu_item" to="#start" smooth>Quelques conseils pour bien démarrer...</HashLink></li>
								<li><HashLink className="tc_Pem_Menu_item" to="#type" smooth>Les différents types de conversation</HashLink></li>
								<li><HashLink className="tc_Pem_Menu_item" to="#search" smooth>Rechercher des interlocuteurs pour démarrer une conversation</HashLink></li>
								<li><HashLink className="tc_Pem_Menu_item" to="#forum" smooth>Rejoindre des Salons Forum</HashLink></li>
								<li><HashLink className="tc_Pem_Menu_item" to="#admin" smooth>Créer et administrer un salon</HashLink></li>
								<li><HashLink className="tc_Pem_Menu_item" to="#question" smooth>Des questions ?</HashLink></li>
							</ul>

							<div className="tc_Pem_Content_title" id="tcp01_001"><LinkIcon onClick={this._handleClick} className="tc_Pem_Content_title_icon" /> Quelques conseils pour bien démarrer...</div>
							<div className="tc_Pem_Content_subtitle">Choisir une photo de profil</div>
							<div className="tc_Pem_Content_text">Vous pouvez le faire depuis les paramètres généraux de l’application.</div>
							<div className="tc_Pem_Content_subtitle">Gérer les notifications</div>
							<div className="tc_Pem_Content_text">Si celles de l’application sont activées par défaut, pensez à les autoriser sur votre appareil. Un simple tour dans les réglages de votre dispositif devrait vous permettre de vous en assurer ! Vous pouvez également choisir les notifications que vous souhaitez recevoir en les activant ou désactivant pour chaque salon.</div>
							<div className="tc_Pem_Content_subtitle">Conserver son historique</div>
							<div className="tc_Pem_Content_text">Pour conserver l’historique de vos échanges, nous vous recommandons de ne pas vous déconnecter de Tchap. A ce titre, nous vous invitons à maintenir une session active sur au moins deux appareils (un mobile et un ordinateur par exemple).</div>
							<div className="tc_Pem_Content_text">Nous vous invitons également à exporter vos clés de chiffrement à chaque fois que vous envisagez une déconnexion (Réglages >> Exporter les clés de chiffrement).</div>
							<div className="tc_Pem_Content_subtitle">Pourquoi est-il important de suivre cette ultime recommandation ?</div>
							<div className="tc_Pem_Content_text">Afin de garantir la sécurité des échanges au sein de l’application, Tchap a mis en place un chiffrement de bout en bout des messages échangés.</div>
							<div className="tc_Pem_Content_text">Chaque utilisateur dispose donc de son propre trousseau de clés afin de chiffrer puis déchiffrer automatiquement ses messages. Or, par mesure de sécurité, ce trousseau se renouvelle régulièrement (notamment à chaque nouvelle connexion).</div>
							<div className="tc_Pem_Content_text">Si aucun de vos dispositifs ne détient vos clés de chiffrement les plus récentes, vous serez dans l’incapacité de lire l’historique de vos conversations !</div>

							<div className="tc_Pem_Content_title" id="tcp02_001"><LinkIcon onClick={this._handleClick} className="tc_Pem_Content_title_icon" /> Les différents types de conversation</div>
							<div className="tc_Pem_Content_withAvatar">
								<img src={require("images/pem/avatar_dm.jpeg")}  alt="Avatar DM"/>
								<div>
									<div className="tc_Pem_Content_subsubtitle">Les messages directs</div>
									<div className="tc_Pem_Content_text">Entre deux utilisateurs, ces conversations privées sont chiffrées de bout en bout.</div>
								</div>
							</div>
							<div className="tc_Pem_Content_withAvatar">
								<img src={require("images/pem/avatar_private.jpeg")}  alt="Avatar Privé"/>
								<div>
									<div className="tc_Pem_Content_subsubtitle">Les salons privés</div>
									<div className="tc_Pem_Content_text">Trouvables et accessibles uniquement sur invitation d’un de leurs administrateurs, ces conversations de groupe sont chiffrées de bout en bout.</div>
								</div>
							</div>
							<div className="tc_Pem_Content_withAvatar">
								<img src={require("images/pem/avatar_forum.jpeg")}  alt="Avatar Forum"/>
								<div>
									<div className="tc_Pem_Content_subsubtitle">Les salons forums</div>
									<div className="tc_Pem_Content_text">Trouvables et accessibles pour tous les utilisateurs de Tchap, ces conversation de groupe publiques ne sont pas chiffrées.</div>
								</div>
							</div>

							<div className="tc_Pem_Content_title" id="tcp03_001"><LinkIcon onClick={this._handleClick} className="tc_Pem_Content_title_icon" /> Rechercher des interlocuteurs pour démarrer une conversation</div>
							<div className="tc_Pem_Content_text">L’annuaire de Tchap vous permet d’entrer en contact direct avec l’ensemble des usagers de l’application en les recherchant par leur nom ou leur adresse mail.</div>
							<div className="tc_Pem_Content_withImage_double">
								<div className="tc_Pem_Content_withImage">
									<img src={require("images/pem/dm_mobile.jpeg")}  alt="Nouveau DM mobile" height="250"/>
									<div className="tc_Pem_Content_text"><span className="tc_text_b">Sur mobile</span>, cliquez sur le bouton “+” en bas de l’écran et choisissez “nouvelle discussion”.</div>
								</div>
								<div className="tc_Pem_Content_withImage">
									<img src={require("images/pem/dm_web.jpeg")}  alt="Nouveau DM web"/>
									<div className="tc_Pem_Content_text"><span className="tc_text_b">Sur le web</span>, l’annuaire se trouve en cliquant sur le bouton “+” de la section “messages directs”.</div>
								</div>
							</div>
							<div className="tc_Pem_Content_text tc_text_i">NB : si vous ne souhaitez pas apparaître dans l’annuaire, vous pouvez passer sur liste rouge en vous rendant dans les réglages généraux de l’application.</div>
							<div className="tc_Pem_Content_subtitle">Qu'est-ce qu'un “invité externe” ?</div>
							<div className="tc_Pem_Content_text">Afin de centraliser vos échanges, vous pouvez inviter des partenaires externes à l'administration à rejoindre vos discussions sur Tchap. Ils ne pourront néanmoins participer qu'aux conversations auxquelles ils seront expressément invités, et n'auront accès ni à l'annuaire, ni aux salons forums.</div>
							<div className="tc_Pem_Content_text">
								Pour inviter un partenaire externe, recherchez l’adresse e-mail de votre interlocuteur dans l’annuaire :
								<ul>
									<li>Si cette personne utilise déjà Tchap, vous pourrez démarrer la conversation</li>
									<li>Si ce n’est pas le cas, une invitation à créer un compte “invité externe” lui sera adressée par courriel</li>
								</ul>
							</div>

							<div className="tc_Pem_Content_title" id="tcp04_001"><LinkIcon onClick={this._handleClick} className="tc_Pem_Content_title_icon" /> Rejoindre des Salons Forum</div>
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
									<img src={require("images/pem/forum_mobile.jpeg")}  alt="Nouveau forum mobile" height="250"/>
									<div className="tc_Pem_Content_text"><span className="tc_text_b">Sur mobile</span>, cliquez sur le bouton “+” en bas de l’écran et choisissez “accéder à un salon forum”.</div>
								</div>
								<div className="tc_Pem_Content_withImage">
									<img src={require("images/pem/forum_web.png")}  alt="Nouveau forum web"/>
									<div className="tc_Pem_Content_text"><span className="tc_text_b">Sur le web</span>, l’annuaire des salons forums se trouve en cliquant sur le bouton “+” de la section “salons”.</div>
								</div>
							</div>
							<div className="tc_Pem_Content_text">Et si vous ne trouvez pas votre bonheur, n'hésitez pas à créer un nouveau salon forum pour discuter des sujets qui vous importent !</div>

							<div className="tc_Pem_Content_title" id="tcp05_001"><LinkIcon onClick={this._handleClick} className="tc_Pem_Content_title_icon" /> Créer et administrer un salon</div>
							<div className="tc_Pem_Content_withAvatar">
								<img src={require("images/pem/avatar_create_private.jpeg")}  alt="Création d'un salon privé"/>
								<div>
									<div className="tc_Pem_Content_subsubtitle">Créer un Salon Privé</div>
									<div className="tc_Pem_Content_text">Pour que le salon ne soit trouvable et accessible que sur invitation de votre part, choisissez “Salon Privé” ou bien “Salon privé ouvert aux externes” si vous souhaitez pouvoir y inviter des partenaires externes à l'administration.</div>
								</div>
							</div>
							<div className="tc_Pem_Content_withAvatar">
								<img src={require("images/pem/avatar_create_forum.jpeg")}  alt="Création d'un salon forum"/>
								<div>
									<div className="tc_Pem_Content_subsubtitle">Créer un Salon Forum</div>
									<div className="tc_Pem_Content_text">Pour que le salon soit visible et ouvert à tous les utilisateurs de Tchap (sauf invités externes), choisissez “Salon Forum”.</div>
								</div>
							</div>
							<div className="tc_Pem_Content_text">Une fois que votre salon est créé, vous en êtes l’administrateur par défaut !</div>
							<div className="tc_Pem_Content_subtitle">Quels pouvoirs cela vous confère-t-il ?</div>
							<div className="tc_Pem_Content_text"><span className="tc_text_b">Inviter des participants : </span>dans le cas des salons privés, seuls les administrateurs peuvent convier des membres à rejoindre la conversation.</div>
							<div className="tc_Pem_Content_text"><span className="tc_text_b">Nommer plusieurs autres administrateurs et modérateurs </span>parmi les participants : ceci est fortement recommandé pour qu’un salon ne se retrouve pas “bloqué” sans administrateur en cas de départ de l’un d’entre eux !</div>
							<div className="tc_Pem_Content_text tc_text_b">NB : Si un salon se retrouve sans administrateur, plus personne n'aura le pouvoir de l'administrer. Dans le cas d'un salon privé, il sera également impossible d'y inviter de nouveaux membres.</div>
							<div className="tc_Pem_Content_text"><span className="tc_text_b">Exclure ou bannir des participants si nécessaire : </span>attention, le bannissement d'un membre est irréversible.</div>

							<div className="tc_Pem_Content_title" id="tcp06_001"><LinkIcon onClick={this._handleClick} className="tc_Pem_Content_title_icon" /> Des questions ?</div>
							<div className="tc_Pem_Content_text">La FAQ de Tchap est disponible <GenericLink className="tc_Pem_Menu_item" to={t("links.faq")}>ici</GenericLink> pour toute précision supplémentaire.</div>
							<div className="tc_Pem_Content_text">Et si vous rencontrez des difficultés dans l'utilisation de votre messagerie, n'hésitez pas à contacter le support !</div>
							<GenericLink className="tc_Pem_Menu_item" to={"mailto:" + t("links.contact")}>{t("links.contact")}</GenericLink>
							<div className="tc_Pem_Content_subtitle">A très vite sur Tchap !</div>
							<div className="tc_Pem_Content_subtitle">L'équipe Tchap</div>
							<div className="tc_Pem_Content_text tc_text_b">NB : Donnez-nous votre avis sur ce guide <GenericLink className="tc_Pem_Menu_item" to={"https://xwfozb619ea.typeform.com/to/Uso2I4Ze"}>ici</GenericLink> et aidez-nous à l'améliorer !</div>
							<div className="tc_Pem_Content_text tc_text_i">(Cela ne vous prendra pas plus de 5 minutes, promis)</div>
						</Grid>
					</Grid>
				</Container>

				<BottomBar/>
			</React.Fragment>
		);
	}
}

export default Pem;
