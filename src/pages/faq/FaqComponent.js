import { Component } from "react";
import PropTypes from "prop-types";
import { routerHOC } from "utils/HOC/ReactRouterHOC";
import { t } from "react-i18nify";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import LinkIcon from '@mui/icons-material/Link';
import Popper from "@mui/material/Popper";
import TopBar from "components/bars/TopBar";
import BottomBar from "components/bars/BottomBar";
import GenericAccordion from "components/accordion/GenericAccordion";
import GenericLink from "components/GenericLink";
import SeeMoreLinks from "components/SeeMoreLinks";

import "styles/pages/faq/FaqComponent.scss";

class FaqComponent extends Component {

	//is this var still needed?
	static defaultState = {
		"tcq01_001": false,
		"tcq01_002": false,
		"tcq02_001": false,
		"tcq02_002": false,
		"tcq02_003": false,
		"tcq02_004": false,
		"tcq03_001": false,
		"tcq03_002": false,
		"tcq03_003": false,
		"tcq03_004": false,
		"tcq03_005": false,
		"tcq03_006": false,
		"tcq04_001": false,
		"tcq04_002": false,
		"tcq04_003": false,
		"tcq04_004": false,
		"tcq04_005": false,
		"tcq04_006": false,
		"tcq05_001": false,
		"tcq05_002": false,
		"tcq05_003": false,
		"tcq06_001": false,
		"tcq06_002": false,
		"tcq06_003": false,
		"tcq06_004": false,
		"tcq06_005": false,
		"tcq06_006": false,
		"tcq06_007": false,
		"tcq07_001": false,
		"tcq07_002": false,
		"tcq07_003": false,
		"tcq07_004": false,
		"tcq07_005": false,
		"tcq08_001": false,
		"tcq08_002": false,
		"tcq08_003": false,
	};

	constructor(props) {
		super(props);
		const location = this.props.routerLocation;
		const anchor = location.hash.substring(1);
		const expanded = FaqComponent.defaultState;
		if (anchor && this._isAccordion(anchor)) expanded[anchor] = true;
		this.state = {
			expanded,
			popperAnchorEl: null,
			popperOpen: false,
			popperId: "",
		};
		this._onChange = this._onChange.bind(this);
		this._onLocationChange = this._onLocationChange.bind(this);
		this._handleCopyClick = this._handleCopyClick.bind(this);
	}

	componentDidMount() {
		const location = this.props.routerLocation;
		const anchor = location.hash.substring(1);
		if (anchor) this._scrollToElem(anchor);
	}

	_isAccordion(id) {
		return !id.split("_")[0].endsWith("0");
	}

	_scrollToElem(id) {
		const elem = document.getElementById(id);
		if (elem) elem.scrollIntoView( { behavior: 'smooth', block: 'start' } );
	}

	_onLocationChange(e) {
		const id = e.target.hash.substring(1);
		if (this._isAccordion(id)) {
			const exp = this.state.expanded;
			exp[id] = true;
			this.setState({
				expanded: exp
			});
		}
		this._scrollToElem(id);
	}

	_onChange(id) {
		const exp = this.state.expanded;
		exp[id] = !exp[id];
		this.setState({
			expanded: exp
		});
	}

	_handleCopyClick(e) {
		const currentTarget = e.currentTarget;
		const ancestorWithId = currentTarget.closest(".tc_FaqComponent_Accordion");
		const linkId = ancestorWithId.id;
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
		e.stopPropagation();
	}

	_generateProps(id) {
		const exp = this.state.expanded;
		return {
			id: id,
			expanded: exp[id],
			onChange: () => this._onChange(id),
			className: "tc_FaqComponent_Accordion"
		};
	}

	render() {
		return (
			<div>
				<Popper
					id={this.state.popperId}
					open={this.state.popperOpen}
					anchorEl={this.state.popperAnchorEl}
					placement="top"
					className="tc_FaqComponent_Popper"
				>
					&#10004;&nbsp;&nbsp;Lien copié
				</Popper>
				<TopBar borderBottom={true} />
					<Container maxWidth="lg">
						<Grid container className="tc_FaqComponent">
							<Grid item xs={12}>
								<div className="tc_FaqComponent_menu_title">FAQ</div>
							</Grid>
							<Grid item xs={12}>

								<div id="tcq01_000" className="tc_FaqComponent_section">A propos</div>
								<GenericAccordion {...this._generateProps("tcq01_001")}>
									<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Pourquoi Tchap ?</title>
									La messagerie instantanée Tchap a été créée pour les agents publics comme l'alternative française et sécurisée aux messageries instantanées grand public.
									<div>Tchap est conçue et maîtrisée par l'Etat, toutes les données générées par son usage sont hébergées sur des serveurs français, garantissant ainsi que leur gestion répond aux normes européennes en vigueur (RGPD).</div>

									<SeeMoreLinks
										onClick={this._onLocationChange}
										links={[
											{ to: "#tcq05_001", text: "Comment la confidentialité des échanges est-elle garantie ?" },
										]}/>
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq01_002")}>
									<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Qui peut utiliser Tchap ?</title>
									<div className="tc_FaqComponent_subtitle">Les agents publics</div>
									<div>Tchap s'adresse à tous les agents publics, peu importe leur contrat de travail.</div>
									<div>Pour utiliser Tchap, il faut un <span className="tc_text_b">e-mail professionnel d'une administration reconnue</span> comme :</div>
									<ul>
										<li>L'ensemble de l'administration et de la fonction publique (d'Etat, hospitalière et territoriale)</li>
										<li>L'ensemble des établissements publics comme les Etablissements Publics Administratifs (EPA) et Etablissements Publics Industriels et Commerciaux (EPIC)</li>
										<li>Les Autorités Administratives Indépendantes (AAI)</li>
										<li>Les universités</li>
										<li>Les collectivités</li>
										<li>Autres personnes morales de droit public comme les Groupements d'Intérêt Public (GIP)</li>
									</ul>
									<div>Vous pouvez vérifier si votre e-mail professionnel est bien reconnu par Tchap  <GenericLink className="tc_FaqComponent_link" to={"/#joinUs"}>en cliquant ici</GenericLink>.</div>
									<div className="tc_text_nl">
										Si votre e-mail professionnel n'est pas reconnu par Tchap, vous pouvez en faire la demande en
										renseignant <a target="_blank" rel="noreferrer noopener nofollow" href="https://www.demarches-simplifiees.fr/commencer/utiliser-tchap">ce formulaire.</a>
									</div>
									<div className="tc_FaqComponent_subtitle">Les partenaires externes</div>
									<div>Les partenaires externes sont les personnes avec lesquelles vous travaillez qui ne sont pas agents publics.</div>
									<div>Ils peuvent utiliser Tchap, mais n'ont pas les mêmes droits que les agents publics :</div>
									<ul>
										<li>Ils doivent être invités par un agent public pour pouvoir créer un compte.</li>
										<li>Ils ne peuvent participer qu'aux échanges auxquels ils ont été invités.</li>
										<li>Ils ne peuvent pas créer d'échanges en dehors de ceux auxquels ils ont été invités.</li>
										<li>Ils n'ont pas accès à l'annuaire des utilisateurs de Tchap, ni aux salons forums.</li>
									</ul>

									<SeeMoreLinks
										onClick={this._onLocationChange}
										links={[
											{ to: "#tcq03_004", text: "Comment inviter un partenaire externe à rejoindre Tchap ?" },
										]}/>
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq01_003")}>
									<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Je ne suis pas agent public, comment accéder à Tchap ?</title>
									<div className="tc_text_nl">Tchap est une messagerie sécurisée réservée aux agents publics.</div>
									<div className="tc_text_nl">Si vous souhaitez accéder à Tchap, vous devez être invité par un agent public ayant un compte actif.</div>
									<div className="tc_text_nl">En tant qu’invité, vous ne pouvez accéder qu’aux conversations (privées ou salons) pour lesquelles vous avez reçu un lien d’invitation.</div>
									<SeeMoreLinks
											onClick={this._onLocationChange}
											links={[
												{ to: "#tcq03_004", text: "Comment inviter un partenaire externe à rejoindre Tchap ?" },
											]}/>
								</GenericAccordion>
								<div id="tcq02_000" className="tc_FaqComponent_section">Gestion du compte</div>
								<GenericAccordion {...this._generateProps("tcq02_001")}>
									<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Comment s'inscrire ?</title>
									<div>Pour vous inscrire sur Tchap :</div>
									<ul className="tc_list_decimal">
										<li>
											Allez sur Tchap  <GenericLink className="tc_FaqComponent_link" to={t("links.web")}>web</GenericLink>,  <GenericLink className="tc_FaqComponent_link" to={t("links.android")}>Android</GenericLink> ou  <GenericLink className="tc_FaqComponent_link" to={t("links.ios")}>iOS</GenericLink>.
											<br />
											Vous pourrez utiliser Tchap sur tous vos appareils. Choisissez-en un pour vous inscrire.
										</li>
										<li>Utilisez votre adresse mail professionnelle comme identifiant.</li>
										<li>
											Confirmez la création de votre compte en cliquant sur le lien dans l'e-mail que vous aurez reçu.
											<br />
											<span className="tc_text_i">Attention : ce lien expire au bout de 3 jours. Après ce délai, il faudra effectuer l'inscription à nouveau.</span>
										</li>
										<li>Vous pouvez commencer à utiliser Tchap tout de suite.</li>
									</ul>
									<SeeMoreLinks
										onClick={this._onLocationChange}
										links={[
											{ to: "#tcq01_002", text: "Qui peut utiliser Tchap ?" },
											{ to: "/prise-en-main", text: "Guide de prise en main pour faciliter vos débuts sur Tchap" },
										]}/>
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq02_002")}>
									<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Pourquoi dois-je renouveler mon compte tous les 3 mois ?</title>
									<div className="tc_text_nl">Vous ne pouvez utiliser Tchap qu'avec une adresse mail professionnelle valide. Tchap doit vérifier que votre adresse mail est toujours valide pour <span className="tc_text_b">garder votre compte actif.</span></div>
									<div className="tc_text_nl">C'est pourquoi vous recevez tous les 3 mois un e-mail de Tchap avec un lien sur lequel cliquer pour garder votre compte actif.</div>
									<div className="tc_text_nl">Si vous dépassez le délai imparti, vous pouvez réactiver votre compte depuis Tchap en demandant l'envoi d'un nouvel e-mail de réactivation.</div>
									<div className="tc_text_nl">Attention : toute nouvelle demande d'e-mail de réactivation annule et remplace le précédent e-mail. Veillez à bien utiliser le lien contenu dans le dernier e-mail de réactivation reçu.</div>
									<SeeMoreLinks
										onClick={this._onLocationChange}
										links={[
											{ to: "#tcq06_004", text: "Mon compte a expiré : que faire ?" },
										]}/>
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq02_003")}>
									<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Un compte peut-il être supprimé ?</title>
									<div className="tc_text_nl">Vous pouvez désactiver votre compte depuis les <span className="tc_text_b">paramètres généraux</span> de Tchap.</div>
									<div className="tc_text_nl">En désactivant votre compte, <span className="tc_text_b">vous ne pourrez plus accéder à vos messages</span>, même si vous recréez un compte avec la même adresse mail.</div>
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq02_004")}>
									<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Que deviendra mon compte si je change de poste ou d'affectation ?</title>
									<div className="tc_text_nl">Votre compte Tchap dépend de votre adresse mail professionnelle. Si vous changez d'adresse mail, vous devrez donc créer un nouveau compte Tchap avec la nouvelle. Le compte précédent sera désactivé. </div>
									<div className="tc_text_nl">Si votre nouvelle administration n'est pas encore présente sur Tchap, vous pouvez formuler une demande d'ouverture auprès de votre direction informatique. Vous pouvez vérifier la présence de votre administration sur Tchap  <GenericLink className="tc_FaqComponent_link" to={"/#joinUs"}>ici</GenericLink>.</div>
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq02_005")}>
									<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Comment réinitialiser mon mot de passe ?</title>
									<div className="tc_text_nl">Pour réinitialiser votre mot de passe Tchap, veuillez suivre minutieusement les étapes décrites <GenericLink className="tc_FaqComponent_link" to={"/assets/pdf/bonnes_pratiques_reinitialisation_du_mot_de_passe.pdf"}>dans ce guide</GenericLink>.</div>
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq02_006")}>
									<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Je change de téléphone ou d’ordinateur : que faire ?</title>
									<div className="tc_text_nl">Si vous vous connectez à Tchap avec un nouvel appareil, celui-ci ne sera pas en possession de vos Clés Tchap.</div>
									<div className="tc_text_nl">Cela signifie que vous ne pourrez pas lire les messages échangés avant votre connexion sur cet appareil.</div>
									<div className="tc_text_nl">Les messages échangés après votre connexion seront en revanche lisibles.</div>
									<div className="tc_text_nl"><span className="tc_text_b">Pour rendre possible la lecture de l’historique antérieur à votre connexion, vous devrez récupérer vos clés Tchap depuis un autre appareil sur lequel cet historique est déjà lisible. </span></div>
									<div className="tc_text_nl">Le partage de clés peut vous être proposé automatiquement lorsque vous ouvrez Tchap sur le second appareil. Dans ce cas, acceptez la demande qui s’affiche en simultané sur les deux appareils et suivez les instructions.</div>
									<div className="tc_text_nl">Si le partage automatique ne fonctionne pas, vous pouvez également sauvegarder manuellement les clés depuis l’appareil sur lequel tous vos messages sont lisibles, puis importer les clés sur le nouvel appareil.</div>	
									<SeeMoreLinks
										onClick={this._onLocationChange}
										links={[
											{ to: "#tcq07_002", text: "Comment sauvegarder manuellement mes Clés Tchap (clés de chiffrement) ?" },
											{ to: "#tcq07_003", text: "Comment importer manuellement mes Clés Tchap (clés de chiffrement) ?" },
										]}/>	
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq02_007")}>
									<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Comment modifier mon nom sur Tchap ?</title>
									<div className="tc_text_nl">Votre nom d’affichage sur Tchap est automatiquement déduit de votre adresse mail, sur la base d’une construction prénom.nom@adresse.fr</div>
									<div className="tc_text_nl">Pour des raisons de sécurité, il est impossible de le modifier.<br/>Si vous souhaitez changer votre nom d’utilisateur, il vous faudra créer une nouvelle adresse mail, puis créer un nouveau compte Tchap. </div>
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq02_008")}>
									<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Pourquoi dois-je activer la conservation des cookies pour Tchap sur mon navigateur web ? </title>
									<div className="tc_text_nl">Après une nouvelle connexion (lorsque vous entrez votre adresse e-mail professionnelle et votre mot de passe), vous ne pouvez pas lire les messages échangés auparavant.</div>
									<div className="tc_text_nl">Pour cette raison, il est déconseillé de se déconnecter de Tchap.<br/>Si votre navigateur web provoque une déconnexion automatique de votre session Tchap à chaque fermeture, il est recommandé de changer ce réglage dans les paramètres de votre navigateur en autorisant la conservation des cookies pour  <GenericLink className="tc_FaqComponent_link" to={"https://www.tchap.gouv.fr"}> https://www.tchap.gouv.fr/</GenericLink></div>
									<SeeMoreLinks
										onClick={this._onLocationChange}
										links={[
											{ to: "#tcq07_005", text: "Comment faire pour que ma session sur Tchap web ne se déconnecte pas automatiquement ?" },
										]}/>
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq02_009")}>
										<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" /> Je ne parviens pas à confirmer le mail de réinitialisation du mot de passe.</title> 
										<div className="tc_text_nl">Nous vous invitons à transférer le mail de réinitialisation du mot de passe sur une adresse mail accessible sur un appareil ayant un accès à internet afin de poursuivre la procédure de réinitialisation.</div>
										<div className="tc_text_nl">En effet certains appareils sécurisés ne permettent pas l’accès à internet et donc de confirmer la réinitialisation du mot de passe.</div>
								</GenericAccordion>
								<div id="tcq03_000" className="tc_FaqComponent_section">Echanger sur Tchap</div>
								<GenericAccordion {...this._generateProps("tcq03_001")}>
									<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Quels sont les différents types de conversations sur Tchap ?</title>
									<Grid container className="tc_FaqComponent_grid">
										<Grid item xl={2}>
											<img src={require("images/pem/avatar_dm.png")} alt="DM"/>
										</Grid>
										<Grid item xl={10}>
											<span className="tc_text_b">Les messages directs sont :</span>
											<ul>
												<li>des conversations entre deux utilisateurs</li>
												<li>accessibles aux agents publics et aux partenaires externes</li>
												<li>chiffrés de bout en bout</li>
											</ul>
										</Grid>
									</Grid>
									<Grid container className="tc_FaqComponent_grid">
										<Grid item xl={2}>
											<img src={require("images/pem/avatar_private.png")} alt="Salon Privé"/>
										</Grid>
										<Grid item xl={10}>
											<span className="tc_text_b">Les salons privés sont :</span>
											<ul>
												<li>des conversations entre plusieurs utilisateurs</li>
												<li>trouvables et accessibles sur invitation uniquement</li>
												<li>accessibles aux agents publics et aux partenaires externes</li>
												<li>chiffrés de bout en bout</li>
												<li>utilisés pour la collaboration et la coordination d'équipes</li>
											</ul>
										</Grid>
									</Grid>
									<Grid container className="tc_FaqComponent_grid">
										<Grid item xl={2}>
											<img src={require("images/pem/avatar_forum.png")} alt="Salon Forum"/>
										</Grid>
										<Grid item xl={10}>
											<span className="tc_text_b">Les salons forums sont :</span>
											<ul>
												<li>des conversations entre plusieurs agents publics</li>
												<li>trouvables et accessibles à tous, sauf aux partenaires externes</li>
												<li>non chiffrés</li>
												<li>utilisés pour aborder des sujets transverses ou partager des centres d'intérêt professionnels (ou non !)</li>
											</ul>
										</Grid>
									</Grid>
									<SeeMoreLinks
										onClick={this._onLocationChange}
										links={[
											{ to: "#tcq03_003", text: "Comment démarrer une nouvelle conversation ?" },
											{ to: "#tcq03_006", text: "Comment rejoindre un salon ?" },
										]}/>
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq03_003")}>
									<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Comment démarrer une nouvelle conversation ?</title>
									<div className="tc_text_nl">L'annuaire intégré vous permet d'entrer en contact direct avec l'ensemble des utilisateurs de Tchap.</div>
									<div className="tc_text_nl">Pour démarrer une nouvelle conversation :</div>
									<ul className="tc_list_decimal">
										<li>
											<Grid container className="tc_FaqComponent_grid">
												<Grid item xl={6}>
													<div className="tc_text_nl"><span className="tc_text_b">Sur mobile</span>, rendez-vous dans l’onglet des messages directs et cliquez sur le bouton “💬+” en bas de l'écran </div>
													<img src={require("images/pem/create_mobile.png")} className="tc_FaqComponent_wimg_mobile" alt="Création 1:1 mobile" width="485" />
												</Grid>
												<Grid item xl={6}>
													<div className="tc_text_nl"><span className="tc_text_b">Sur le web</span>, cliquez sur le bouton “+” de la section “messages directs”.</div>
													<img src={require("images/pem/create_dm_web.png")} className="tc_FaqComponent_wimg_mobile" alt="Création 1:1 web"/>
												</Grid>
											</Grid>
										</li>
										<li>Dans la barre de recherche, tapez le prénom suivi du nom de la personne que vous voulez contacter, ou son adresse mail.</li>
										<li>Une liste de personnes apparaîtra. Cliquez sur le nom de la personne que vous souhaitez contacter.</li>
										<li>Une invitation lui est automatiquement envoyée. Dès qu'elle est acceptée, vous pourrez communiquer.</li>
									</ul>
									<SeeMoreLinks
										onClick={this._onLocationChange}
										links={[
											{ to: "#tcq03_004", text: "Comment inviter un partenaire externe sur Tchap ?" },
											{ to: "#tcq03_005", text: "Que faire si je ne souhaite pas apparaître dans l'annuaire ?" },
										]}/>
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq03_004")}>
									<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Comment inviter un partenaire externe sur Tchap ?</title>
									<ul className="tc_list_decimal">
										<li>
											<Grid container className="tc_FaqComponent_grid">
												<Grid item xl={6}>
													<div className="tc_text_nl"><span className="tc_text_b">Sur mobile</span>, rendez-vous dans le menu latéral et cliquez sur “Inviter à rejoindre Tchap”.</div>
													<img src={require("images/faq/create_ext_mobile.jpg")} width="500" className="tc_FaqComponent_wimg_mobile" alt="Création 1:1 externe mobile"/>
												</Grid>
												<Grid item xl={6}>
													<div className="tc_text_nl"><span className="tc_text_b">Sur le web</span>, cliquez sur le bouton “+” de la section “messages directs”.</div>
													<img src={require("images/pem/create_dm_web.png")} className="tc_FaqComponent_wimg_mobile" alt="Création 1:1 externe web"/>
												</Grid>
											</Grid>
										</li>
										<li>Dans la barre de saisie, renseignez l'adresse mail professionnelle de la personne que vous voulez inviter et validez.</li>
										<li>Une invitation lui est automatiquement envoyée par e-mail. Vous serez notifié lorsque cette personne aura créé son compte, et pourrez ensuite commencer à échanger.</li>
									</ul>
									<div className="tc_text_nl"><span className="tc_text_b">Pour inviter un partenaire externe à rejoindre un salon privé</span>, assurez-vous d’abord que ce salon privé est bien “ouvert aux externes” (depuis les paramètres du salon). Si vous en êtes administrateur ou modérateur, vous pourrez ensuite inviter la personne en renseignant son adresse mail depuis l’interface de gestion des membres du salon.</div>
									<div className="tc_text_nl"><span className="tc_text_b">À noter:</span> les partenaires externes n’ont pas accès aux salons forums.</div>

									<SeeMoreLinks
										onClick={this._onLocationChange}
										links={[
											{ to: "#tcq01_002", text: "Qui peut utiliser Tchap ?" },
										]}/>
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq03_005")}>
									<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Que faire si je ne souhaite pas apparaître dans l'annuaire ?</title>
									<div className="tc_text_nl">Si vous ne souhaitez pas apparaître dans les résultats de recherche d'utilisateurs, vous pouvez vous mettre sur <span className="tc_text_b">liste rouge</span> dans les Paramètres de Tchap.</div>
									<div className="tc_text_nl">Les autres utilisateurs ne pourront ainsi plus vous trouver, ni vous contacter, sauf s'ils renseignent votre adresse mail complète dans la barre de recherche.</div>
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq03_006")}>
									<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Comment rejoindre un salon ?</title>
									<div className="tc_text_nl"><span className="tc_text_b">Pour rejoindre un salon privé</span>, vous devez recevoir une invitation de la part d’un de ses administrateurs.</div>
									<div className="tc_text_nl"><span className="tc_text_b">Pour trouver et rejoindre un salon forum</span>, vous pouvez rechercher par mots clés :</div>
									<Grid container className="tc_FaqComponent_grid">
										<Grid item xl={6}>
											<div className="tc_text_nl"><span className="tc_text_b">Sur mobile</span>, rendez-vous dans l'onglet des salons (#), cliquez sur le bouton "#+" et sélectionnez “Accéder à un salon forum”.</div>
											<img src={require("images/pem/create_room_mobile.png")} className="tc_FaqComponent_wimg_mobile" alt="Création salon mobile" width="485"/>
										</Grid>
										<Grid item xl={6}>
											<div className="tc_text_nl"><span className="tc_text_b">Sur le web</span>, cliquez sur le bouton “+” de la section “salons”.</div>
											<img src={require("images/pem/create_room_web.png")} className="tc_FaqComponent_wimg_mobile" alt="Création salon web"/>					
										</Grid>
									</Grid>
									<div className="tc_text_nl">Vous pouvez ensuite parcourir la liste des salons forums, ou procéder à une recherche par mots clés.</div>
									<div className="tc_text_nl">Il est également possible de rejoindre un salon forum sur invitation d'un membre.</div>
									<SeeMoreLinks
										onClick={this._onLocationChange}
										links={[
											{ to: "#tcq04_000", text: "Créer et administrer un salon" },
										]}/>
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq03_007")}>
									<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Qu’est-ce qu’un contenu inapproprié sur Tchap ?</title>
									<div className="tc_text_nl">
									Le cadre de l’usage de Tchap est fixé par ses <a target="_blank" href="/cgu">Conditions Générales d’Utilisation</a>, et notamment par leur article n°3. 
									</div>
									<div className="tc_text_nl">
									Chaque utilisateur de Tchap est tenu de respecter ces directives.
									</div>
									<div> </div>
									<div className="tc_text_nl">
									Sont notamment considérés comme inappropriés :
									</div>
									<ul>
										<li>Les contenus insultants, diffamatoires ou indécents</li>
										<li>Les contenus pouvant s’apparenter à du spam ou à de la publicité</li>
										<li>Les contenus corrompus, contenant des virus</li>
										<li>La violation du secret professionnel par le partage de contenus confidentiels dans des salons inadéquats</li>
									</ul>
									<SeeMoreLinks
										onClick={this._onLocationChange}
										links={[
											{ to: "#tcq03_008", text: "Comment signaler un contenu inapproprié sur Tchap ?" },
										    { to: "#tcq04_0021", text: "Quelles sont les responsabilités de l’administrateur d’un salon ?" },
										]}/>
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq03_008")}>
									<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Comment signaler un contenu inapproprié sur Tchap ?</title>
									<div className="tc_text_nl">Lorsque vous constatez la présence d’un contenu inapproprié sur Tchap, il est recommandé de demander à un administrateur ou modérateur du salon d'intervenir pour retirer le contenu problématique.</div> 
									<div className="tc_text_nl">Si nécessaire, vous pouvez également effectuer un signalement en cliquant sur le message, puis sur “…”, puis sur “Signaler le contenu”.</div>
									<div className="tc_text_nl">Vous pouvez également écrire un e-mail à <GenericLink className="tc_FaqComponent_link" to={"mailto:" + t("links.support")}>{t("links.support")}</GenericLink> en précisant les motifs de votre signalement.</div>
									<SeeMoreLinks
										onClick={this._onLocationChange}
										links={[
											{ to: "#tcq03_009", text: "Que se passe-t-il lorsque je signale un contenu inapproprié sur Tchap ?" },
											{ to: "#tcq04_0021", text: "Quelles sont les responsabilités de l’administrateur d’un salon ?" },

										]}/>
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq03_009")}>
									<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Que se passe-t-il lorsque je signale un contenu inapproprié sur Tchap ?</title>
									<div className="tc_text_nl">Tout dépend du salon duquel provient le contenu signalé.</div>
									<div> </div>
									<div className="tc_text_nl"><span className="tc_text_b">Si le salon est privé</span></div>
									<div className="tc_text_nl">Il vous sera recommandé de contacter les administrateurs ou modérateurs du salon pour demander la suppression des contenus jugés problématiques.</div>
									<div className="tc_text_nl">Les coordonnées d’un référent à contacter au sein de votre administration vous seront également transmises.</div>
     									<div> </div>
									<div className="tc_text_nl"><span className="tc_text_b">Si le salon est un Forum public</span></div>
									<ol>
										<li>L’équipe Tchap contacte directement les administrateurs et modérateurs du forum pour demander une mise en conformité du salon avec les CGU.</li>
										<li>Sans mise en conformité dans les délais indiqués, l’équipe Tchap poste un message de rappel à l’ordre aux utilisateurs sur le forum.</li>
										<li>Si malgré cela, le salon n’est pas mis en conformité, l’équipe contacte le correspondant Tchap de l’administration dont dépend le forum, afin de lui demander la nomination d’un nouvel administrateur.</li>
										<li>En l’absence de réponse du correspondant, ou à sa demande, et après en avoir informé les utilisateurs, le forum peut éventuellement être fermé.</li>
									</ol>
									<SeeMoreLinks
										onClick={this._onLocationChange}
										links={[
											{ to: "#tcq03_008", text: "Comment signaler un contenu inapproprié sur Tchap ?" },
										       	{ to: "#tcq04_0021", text: "Quelles sont les responsabilités de l’administrateur d’un salon ?" },

										]}/>
								</GenericAccordion>
								<div id="tcq04_000" className="tc_FaqComponent_section">Créer et administrer un salon</div>
								<GenericAccordion {...this._generateProps("tcq04_001")}>
									<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Comment créer un salon ?</title>
									

									<ul className="tc_list_decimal">
										<li>
											<Grid container className="tc_FaqComponent_grid">
												<Grid item xl={6}>
													<div className="tc_text_nl"><span className="tc_text_b">Sur mobile</span>, rendez-vous dans l’onglet des salons, cliquez sur le bouton “#+” et sélectionnez l’option “Nouveau salon/forum”.</div>
													<img src={require("images/pem/create_room_mobile.png")} className="tc_FaqComponent_wimg_mobile" alt="Création 1:1 mobile" width="485" />
												</Grid>
												<Grid item xl={6}>
													<div className="tc_text_nl"><span className="tc_text_b">Sur web</span>, cliquez sur le bouton “+” de la section “Salons” et sélectionnez “Créer un nouveau salon”.</div>
													<img src={require("images/pem/create_dm_web.png")} className="tc_FaqComponent_wimg_mobile" alt="Création 1:1 web"/>
												</Grid>
											</Grid>
										</li>
									</ul>								

									<Grid container className="tc_FaqComponent_grid">
										<Grid item xl={2}>
											<img src={require("images/pem/avatar_private.png")} alt="Salon Privé"/>
										</Grid>
										<Grid item xl={10}>
											<span className="tc_text_b">Créer un Salon Privé</span>
											<ul className="tc_list_nobullet">
												<li>Pour que le salon ne soit trouvable et accessible que sur invitation de votre part, choisissez “Salon Privé” ou “Salon privé ouvert aux externes” si vous souhaitez inviter des partenaires externes à l'administration.</li>
												<li>Les salons privés sont particulièrement recommandés pour coordonner le travail d'équipe.</li>
											</ul>
										</Grid>
									</Grid>
									<Grid container className="tc_FaqComponent_grid">
										<Grid item xl={2}>
											<img src={require("images/pem/avatar_forum.png")} alt="Salon Forum"/>
										</Grid>
										<Grid item xl={10}>
											<span className="tc_text_b">Créer un Salon Forum</span>
											<ul className="tc_list_nobullet">
												<li>Pour que le salon soit visible et ouvert à tous les utilisateurs de Tchap (sauf partenaires externes), choisissez “Salon Forum”.</li>
												<li>Le Salon Forum est recommandé s'il vise à aborder des sujets transverses susceptibles d'intéresser d'autres utilisateurs de Tchap.</li>
												<li>Veillez à ce que le nom du Salon Forum soit le plus explicite possible pour que les utilisateurs puissent le trouver facilement.</li>
											</ul>
										</Grid>
									</Grid>
									<div className="tc_text_nl"><span className="tc_text_b">Une fois que votre salon est créé, vous en êtes l'administrateur par défaut.</span></div>
									<SeeMoreLinks
										onClick={this._onLocationChange}
										links={[
											{ to: "#tcq04_002", text: "Qu'est-ce qu'un administrateur ?" },
										]}/>
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq04_002")}>
									<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Qu'est-ce qu'un administrateur ?</title>
									<div className="tc_text_nl">Par défaut, le créateur d'un salon est son administrateur.</div>
									<div className="tc_text_nl">Un administrateur peut :</div>
									<ul>
										<li>inviter des personnes à rejoindre un salon</li>
										<li>retirer des personnes d'un salon</li>
										<li>supprimer des messages</li>
										<li>changer le nom du salon</li>
									</ul>
									<div className="tc_text_nl">Un administrateur peut aussi désigner d'autres administrateurs et modérateurs, et partager certains pouvoirs avec eux, depuis les paramètres du Salon, dans les Rôles et Permissions.</div>
									<div className="tc_text_nl">Attention : seul un administrateur est en mesure de se rétrograder, ou de s’expulser.
									Si le dernier administrateur quitte le salon, ce salon ne sera plus administrable.
									Il sera impossible de nommer un nouvel administrateur.</div>
									
									<SeeMoreLinks
										onClick={this._onLocationChange}
										links={[
											{ to: "#tcq04_004", text: "Pourquoi est-il indispensable de nommer plusieurs administrateurs par salon et comment procéder ?" },
											{ to: "#tcq04_0021", text: "Quelles sont les responsabilités de l’administrateur d’un salon ? " },
										]}/>
									



								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq04_0021")}>
									<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Quelles sont les responsabilités de l’administrateur d’un salon ?</title>
									<div className="tc_text_nl">
									En cas de violation des <a target="_blank" href="/cgu">Conditions Générales d’Utilisation de Tchap</a> au sein d’un salon, 

									notamment en cas de diffusion de contenus inappropriés, les administrateurs et modérateurs du salon ont le devoir d’intervenir :
									</div>
									<ul>
										<li>en rappelant à l’ordre les utilisateurs concernés</li>
										<li>en supprimant les contenus non conformes</li>
										<li>en bannissant les utilisateurs concernés du salon en cas de récidive</li>
									</ul>
									<div className="tc_text_nl">Si un salon n’est pas administré en conformité avec les CGU de Tchap, une intervention de l’administration d’origine de ses administrateurs peut être sollicitée, et la fermeture du salon peut être envisagée.</div>
									<SeeMoreLinks
										onClick={this._onLocationChange}
										links={[
											{ to: "#tcq03_007", text: "Qu’est-ce qu’un contenu inapproprié sur Tchap ?" },
										]}/>
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq04_003")}>
									<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Comment inviter des participants à rejoindre un salon ?</title>
									<div className="tc_text_nl">Pour les salons privés, seuls les administrateurs peuvent inviter des utilisateurs à rejoindre la conversation.</div>
									<div className="tc_text_nl">Pour les salons publics, l'invitation n'est pas indispensable mais peut être utilisée pour inviter des utilisateurs à rejoindre le salon.</div>
									<div className="tc_text_nl">Pour envoyer des invitations, rendez-vous dans les paramètres du salon, et cliquez sur "inviter dans ce salon". Plusieurs possibilités s'offrent alors à vous :</div>
									<ul>
										<li>Inviter les membres un par un en les recherchant dans l'annuaire des utilisateurs de Tchap</li>
										<li>Inviter plusieurs membres à la fois en important un fichier .txt ou .csv contenant les adresses e-mail des interlocuteurs visés.</li>
									</ul>
									<div className="tc_text_nl">Vous pouvez également partager le lien d'un salon pour inviter des utilisateurs à le rejoindre.</div>
									<div className="tc_text_nl">S'il s'agit d'un salon privé, assurez-vous au préalable d'avoir autorisé l'accès au salon par lien (dans les paramètres du salon). Attention : si cette option est activée, chaque personne disposant du lien pourra accéder au salon privé.</div>
									<SeeMoreLinks
										onClick={this._onLocationChange}
										links={[
											{ to: "#tcq04_004", text: "Pourquoi est-il indispensable de nommer plusieurs administrateurs par salon et comment procéder ?" },
										]}/>
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq04_004")}>
									<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Pourquoi est-il indispensable de nommer plusieurs administrateurs par salon et comment procéder ? </title>
									<div className="tc_text_nl">Il est fortement recommandé de nommer plusieurs administrateurs et modérateurs parmi les participants d'un salon.</div>
									<div className="tc_text_nl">Ainsi, en cas de départ d'un administrateur, le salon ne se retrouvera pas gelé.</div>
									<div className="tc_text_nl">En effet, seul un administrateur a le pouvoir de nommer un autre administrateur. Si un salon se retrouve sans administrateur, plus personne n'a donc le pouvoir de l'administrer, et cette situation est irréversible. Dans le cas d'un salon privé, cela rend notamment impossible d'y inviter de nouveaux membres.</div>
									<div className="tc_text_nl">Pour nommer un administrateur, rendez-vous dans la liste des membres du salon.</div>
									<div className="tc_text_nl">Cliquez sur le membre que vous souhaitez, puis : </div>
									<ul>
										<li>Sur le web, cliquez sur "Rang" et sélectionnez "Administrateur"</li>
										<li>Sur mobile, cliquez sur "Nommer administrateur"</li>
									</ul>
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq04_005")}>
									<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Comment retirer une personne d'un salon ?</title>
									<div className="tc_text_nl">Seul un administrateur ou un modérateur peut retirer un membre d'un salon. Pour ce faire, rendez-vous dans la liste des membres du salon et cliquez sur le nom de la personne :</div>
									<ul>
										<li>Pour qu'il lui soit impossible de revenir, choisissez "bannir"</li>
										<li>Pour lui laisser la possibilité de revenir, choisissez "exclure" ou "expulser"</li>
									</ul>
									<div className="tc_text_nl">Il est en revanche impossible de retirer un administrateur d’un salon : dans ce cas de figure, la personne doit elle-même quitter le salon.</div>

								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq04_006")}>
									<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Comment supprimer un salon ?</title>
									<div className="tc_text_nl">Si le salon est public, il faut d'abord le transformer en salon privé pour le retirer de la liste des salons forums.</div>
									<div className="tc_text_nl">Pour fermer complètement un salon, un administrateur doit exclure tous les participants puis le quitter lui-même. Le salon ne sera alors plus visible, et les invitations acceptées ultérieurement ne fonctionneront pas.</div>
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq04_007")}>
									<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Je souhaite créer un salon privé où seuls les administrateurs peuvent envoyer des messages, comment procéder ?</title> 
									<ul>
												<li>Créer votre salon (privé, privé avec externes ou forum public)</li>
												<li>Vous rendre dans les informations du salon</li> 
												<li>Cliquer sur “Paramètres du Salon”</li>
												<li>Aller dans “Rôles et Permissions”</li>
												<li>Donner les droits "envoyer des messages" à l’administrateur</li>
										</ul>
											<div className="tc_text_nl">Ainsi les participants ne pourront envoyer des messages.</div>
								</GenericAccordion>
								<div id="tcq05_000" className="tc_FaqComponent_section">Sécurité des échanges</div>
								<GenericAccordion {...this._generateProps("tcq05_001")}>
									<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Comment la confidentialité des échanges est-elle garantie ?</title>
									<div className="tc_text_nl">Tous les messages échangés sur Tchap (hors Salons Forums) sont chiffrés de bout en bout. Concrètement, cela signifie que jamais personne d'autre que les auteurs et destinataires des messages n'y ont accès. </div>
									<div className="tc_text_nl">Comment cela fonctionne-t-il ? </div>
									<div className="tc_text_nl">Chaque utilisateur de Tchap dispose de clés de chiffrement appelées Clés Tchap qui permettent de chiffrer et de déchiffrer les messages reçus et envoyés. Ces clés sont stockées sur vos appareils, et se renouvellent régulièrement de façon automatique (à chaque nouvelle connexion par exemple).</div>
									<div className="tc_text_nl">Cela signifie que même en cas de vol de vos identifiants ou d'interception de vos messages, vos échanges restent indéchiffrables.</div>
									<div className="tc_text_nl">Pour vous assurer que vos messages restent toujours lisibles pour vous, pensez à exporter et sauvegarder vos Clés Tchap à chaque fois que vous envisagez une déconnexion !</div>
									<SeeMoreLinks
										onClick={this._onLocationChange}
										links={[
											{ to: "#tcq07_001", text: "Comment m'assurer de toujours pouvoir lire mes messages ?" },
											{ to: "#tcq08_000", text: "Déchiffrement impossible de mes messages : comment y remédier ?" },
										]}/>
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq05_002")}>
									<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Où les données de Tchap sont-elles stockées ?</title>
									<div className="tc_text_nl">Tchap est conçue et hébergée en France. L'Etat en maîtrise donc l'infrastructure et les développements, spécialement pensés pour répondre aux besoins des agents publics. N'hésitez pas à consulter nos <GenericLink onClick={this._onLocationChange} to="/cgu" className="tc_FaqComponent_link">CGU</GenericLink> pour en savoir plus.</div>
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq05_003")}>
									<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Puis-je utiliser Tchap pour échanger des informations confidentielles ?</title>
									<div className="tc_text_nl">Tchap garantit la confidentialité des échanges au sein de la messagerie.</div>
									<div className="tc_text_nl">Cependant, Tchap ne sécurise pas votre téléphone, qui reste exposé aux menaces informatiques.</div>
									<div className="tc_text_nl">L'échange d'informations et de documents sensibles ne doit donc pas être effectué sur Tchap, même dans une conversation à deux. Pour cela, vous devez utiliser les canaux et appareils sécurisés mis à disposition par votre direction.</div>
									<SeeMoreLinks
										onClick={this._onLocationChange}
										links={[
											{ to: "#tcq05_001", text: "Comment la confidentialité des échanges est-elle garantie ?" },
										]}/>
								</GenericAccordion>

								<div id="tcq07_000" className="tc_FaqComponent_section">Gestion des Clés Tchap (clés de chiffrement)</div>
								<GenericAccordion {...this._generateProps("tcq07_001")}>
									<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Comment m'assurer de toujours pouvoir lire mes messages ?</title>
									<div className="tc_text_nl">
										<div>
											Après une nouvelle connexion (lorsque vous entrez votre adresse mail professionnelle et votre mot de passe), vous ne pouvez pas
											lire les messages échangés auparavant.
										</div>
										<div>
											C'est une mesure de sécurité : si une personne vole vos identifiants et se connecte à votre place, il
											lui est ainsi impossible de lire vos conversations.
										</div>
										<div className="tc_FaqComponent_subtitle">Voici quelques bonnes pratiques pour vous assurer de toujours pouvoir lire vos messages :</div>
										<div className="tc_FaqComponent_subtitle">Evitez de vous déconnecter de Tchap</div>
										<div>
											<span className="tc_text_b">Votre téléphone mobile</span> garde automatiquement votre connexion, même lorsque vous l'éteignez ou fermez l'application Tchap.
										</div>
										<div>
											<span className="tc_text_b">Votre navigateur web</span> provoque peut-être la déconnexion automatique de Tchap lorsque vous le fermez :
											dans ce cas, allez dans les réglages du navigateur et autorisez la conservation des données de navigation pour Tchap. Une intervention de vos services informatiques peut être nécessaire.
										</div>
										<div>
											<span class="tc_text_i">Si vous souhaitez mettre Tchap “en pause” (lors de vos congés par exemple), vous pouvez désactiver les notifications sans avoir à vous déconnecter.</span>
										</div>
										<div className="tc_FaqComponent_subtitle">Gardez au moins deux appareils connectés à Tchap</div>
										<div>
											Les appareils peuvent partager entre eux les Clés Tchap (clés de chiffrement) qui permettent de déverrouiller vos messages.
										</div>
										<div>
											Si vos messages sont verrouillés sur votre ordinateur, mais qu'ils sont lisibles sur votre téléphone, alors vous pouvez utiliser votre téléphone pour transmettre les clés à votre ordinateur. Et vice et versa.
										</div>
										<SeeMoreLinks
											onClick={this._onLocationChange}
											links={[
												{ to: "#tcq08_001", text: "Comment déverrouiller mes messages si j'ai un autre appareil connecté à Tchap ?" },
											]}/>

										<div className="tc_FaqComponent_subtitle">Sauvegardez manuellement vos Clés Tchap (clés de chiffrement) avant toute déconnexion</div>
										<div>
											Si vous envisagez de vous déconnecter, sauvegarder vos Clés Tchap vous permettra déverrouiller vos messages lors de votre reconnexion.
										</div>
										<SeeMoreLinks
											onClick={this._onLocationChange}
											links={[
												{ to: "#tcq07_002", text: "Comment sauvegarder manuellement mes Clés Tchap (clés de chiffrement) ?" },
											]}/>
									</div>
								</GenericAccordion>

								<GenericAccordion {...this._generateProps("tcq07_002")}>
									<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Comment sauvegarder manuellement mes Clés Tchap (clés de chiffrement) ?</title>
									<div className="tc_text_nl">
										<div className="tc_FaqComponent_subtitle">Pour sauvegarder vos clés :</div>
										<div>
										<span class="tc_text_i">(Action à effectuer préalablement à une déconnexion ou une réinitialisation de mot de passe pour ne pas perdre accès à vos messages)</span>
										</div>
										<ol>
											<li>Rendez-vous dans les paramètres de Tchap :
												<div>
													<span className="tc_text_b">Sur le web :</span> section “Sécurité et Vie Privée” >> “Sauvegardez vos Clés Tchap”
												</div>
												<div>
													<img src={require("images/faq/export_keys_web.png")}
																alt="export des clés sur l'application web"
																className="tc_FaqComponent_border"/>
												</div>
												<div>
													<span className="tc_text_b">Sur mobile :</span> section “Chiffrement” >> “Exporter les clés manuellement”
												</div>
												<div>
													<img src={require("images/faq/export_keys_mobile.jpeg")}
															alt="export des clés sur l'application mobile"
															width="400px"
															className="tc_FaqComponent_border"/>
												</div>
											</li>
											<li>Choisissez un mot de passe (différent de votre mot de passe Tchap) : celui-ci vous sera demandé pour déverrouiller vos messages lors de votre reconnexion.</li>
											<li>Enregistrez le fichier à un emplacement où vous pourrez le retrouver. Ce fichier s'appelle “Tchap keys” par défaut, mais vous pouvez le renommer.</li>
											<li>Exportation réussie, vos Clés Tchap sont sauvegardées ! Vous pourrez les importer lors de votre reconnexion pour déverrouiller vos messages.</li>
										</ol>
										<SeeMoreLinks
											onClick={this._onLocationChange}
											links={[
												{ to: "#tcq07_003", text: "Comment importer manuellement mes Clés Tchap (clés de chiffrement) ?" },
											]}/>
									</div>
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq07_003")}>
									<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Comment importer manuellement mes Clés Tchap (clés de chiffrement) ? </title>
									<div className="tc_text_nl">
										<div className="tc_FaqComponent_subtitle">Pour importer vos clés si vous les avez préalablement sauvegardées :</div>
										<ol>
											<li>Rendez-vous dans les paramètres de Tchap :
												<div>
													<span className="tc_text_b">Sur le web :</span> section “Sécurité et Vie Privée” >> “Importez vos Clés Tchap depuis le fichier sauvegardé”
												</div>
												<div>
													<img src={require("images/faq/export_keys_web.png")}
																alt="export des clés sur l'application web"
																className="tc_FaqComponent_border"/>
												</div>
												<div>
													<span className="tc_text_b">Sur mobile :</span> section “Chiffrement” >> “Importer les clés”
												</div>
												<div>
													<img src={require("images/faq/export_keys_mobile.jpeg")}
															alt="export des clés sur l'application mobile"
															width="400px"
															className="tc_FaqComponent_border"/>
												</div>
											</li>
											<li>Sélectionnez le fichier que vous avez préalablement sauvegardé. Par défaut, ce fichier s'appelle “Tchap keys”.</li>
											<li>Entrez le mot de passe que vous avez choisi au moment de la sauvegarde.</li>
											<li>Importation réussie, vos messages sont déverrouillés et de nouveau lisibles.</li>
										</ol>
									</div>
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq07_004")}>
									<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Pourquoi mes messages sont-ils verrouillés ? </title>
									<div className="tc_text_nl">
										<div>
											Après une nouvelle connexion (lorsque vous entrez votre adresse mail professionnelle et votre mot de passe), vous ne pouvez pas lire les messages échangés auparavant.
										</div>
										<div>
											C'est une mesure de sécurité : si une personne vole vos identifiants et se connecte à votre place, il lui est ainsi impossible de lire vos messages parce qu'ils sont verrouillés.
										</div>
										<div>
												Vous pouvez déverrouiller vos messages pour les lire grâce à vos Clés Tchap (clés de chiffrement).
										</div>

										<SeeMoreLinks
											onClick={this._onLocationChange}
											links={[
												{ to: "#tcq08_001", text: "Comment déverrouiller mes messages si j'ai un autre appareil connecté à Tchap ?" },
												{ to: "#tcq08_002", text: "Comment déverrouiller mes messages si j'ai préalablement sauvegardé mes Clés Tchap (clés de chiffrement) ?" },
												{ to: "#tcq08_003", text: "Comment déverrouiller mes messages si je ne suis pas connecté à Tchap sur un autre appareil et que je n'ai pas préalablement sauvegardé mes Clés Tchap (clés de chiffrement) ?" },
											]}/>
									</div>
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq07_005")}>
									<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Comment faire en sorte que ma session sur Tchap web ne se déconnecte pas automatiquement ? </title>
									<div className="tc_text_nl">
										<div>Lorsque vous utilisez la version web de Tchap, il est possible que votre session Tchap se déconnecte à chaque fermeture de votre navigateur, entrainant une perte vos clés Tchap (clés de chiffrement).</div>
										<div>Pour pallier à cette difficulté, vous devez vous rendre dans les paramètres de votre navigateur et autoriser la conservation des cookies pour la page https://www.tchap.gouv.fr/.</div>


										<div>La marche à suivre dépend de votre navigateur :</div>
										<ul>
											<li><GenericLink onClick={this._onLocationChange} to="https://support.mozilla.org/fr/kb/api-stockage-sites-web-enregistrer-fichiers#w_autoriser-ou-bloquer-les-sites-web-de-stocker-des-informations">Firefox</GenericLink> (section Autoriser ou bloquer les sites web de stocker des informations)</li>
											<li><GenericLink onClick={this._onLocationChange} to="https://support.google.com/chrome/answer/95647#zippy=%2Cautoriser-ou-bloquer-les-cookies-dun-site-sp%C3%A9cifique">Chrome</GenericLink> (section Autoriser ou bloquer les cookies d'un site spécifique)</li>
											<li>Edge : Paramètres et plus… &gt; Paramètres &gt; Autorisations du site &gt; cookies et données de site</li>

										</ul>
										<div>A noter : il est possible qu’une intervention de vos services informatiques soit nécéssaire pour modifier ces paramètres.</div>
									</div>
										<SeeMoreLinks
											onClick={this._onLocationChange}
											links={[
												{ to: "#tcq02_008", text: "Pourquoi dois-je activer la conservation des cookies pour Tchap sur mon navigateur ?"},
											]}/>
									
								</GenericAccordion>

								<div id="tcq08_000" className="tc_FaqComponent_section">“Déchiffrement impossible” de mes messages : comment y remédier ?</div>
								<GenericAccordion {...this._generateProps("tcq08_001")}>
									<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Si j'ai un autre appareil déjà connecté à Tchap</title>
									<div className="tc_text_nl">
										<div className="tc_FaqComponent_subtitle">Vous êtes déjà connecté à Tchap depuis un autre appareil sur lequel vos messages sont lisibles ? </div>
										<div>Vous pouvez déverrouiller vos messages comme suit :</div>
										<ol>
											<li>
												Sur l'appareil sur lequel les messages sont verrouillés, cliquez sur “Renvoyer une demande à un autre appareil” (en dessous du texte qui s'affiche à la place de vos messages)
											</li>
											<div>
													<img src={require("images/faq/resend_request.png")}
																alt="texte qui s'affiche dans l'appli : renvoyer"
																className="tc_FaqComponent_border"
																width="400px"/>
											</div>
											<li>
												Sur l'appareil sur lequel les messages sont lisibles, suivez les indications qui apparaissent automatiquement pour partager les Clés Tchap (clés de chiffrement) entre vos appareils
											</li>
										</ol>
										<div>
											Une fois les Clés Tchap partagées entre vos appareils, vos messages sont déverrouillés et deviennent lisibles au fur et à mesure.
										</div>
										<SeeMoreLinks
											onClick={this._onLocationChange}
											links={[
												{ to: "#tcq07_004", text: "Pourquoi mes messages sont-ils verrouillés ?" },
												{ to: "#tcq07_001", text: "Comment m'assurer de toujours pouvoir lire mes messages ?" },
											]}/>
									</div>
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq08_002")}>
									<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Si j'ai préalablement sauvegardé mes Clés Tchap (clés de chiffrement)</title>
									<div className="tc_text_nl">
										<div className="tc_text_b">
											Vous avez préalablement sauvegardé vos Clés Tchap sur l'appareil que vous utilisez en ce moment ?
										</div>
										<div>
											Vous pouvez déverrouiller vos messages comme suit :
										</div>
										<ol>
											<li>
												<span className="tc_text_b">Allez dans les Paramètres</span> de Tchap :
												<ul>
													<li>
														Sur ordinateur, allez dans Paramètres > Sécurité & Vie Privée et cliquez sur “Importez vos Clés Tchap depuis le fichier sauvegardé”.
													</li>
													<li>
														Sur Android, allez dans Paramètres > Sécurité & Vie Privée et cliquez sur “Importer les clés de chiffrement des conversations”.
													</li>
													<li>
														Sur iOS, allez dans Paramètres > Sécurité & Vie Privée et cliquez sur “Importer les Clés”.
													</li>
												</ul>
											</li>
											<li>
											  <span className="tc_text_b">Sélectionnez le fichier “Tchap Keys” (ce fichier portera un autre nom si vous l'avez renommé lors de la sauvegarde)</span>
											</li>
											<li>
											  <span className="tc_text_b">Entrez votre mot de passe</span> que vous avez créé pour sauvegarder vos Clés Tchap (clé de chiffrement).
											</li>
										</ol>
										<div>
											Vos Clés Tchap déverouillent automatiquement vos messages qui seront alors à nouveau lisibles au fur à et mesure.
										</div>
										<SeeMoreLinks
											onClick={this._onLocationChange}
											links={[
												{ to: "#tcq07_004", text: "Pourquoi mes messages sont-ils verrouillés ?" },
												{ to: "#tcq07_001", text: "Comment m'assurer de toujours pouvoir lire mes messages ?" },
											]}/>
									</div>
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq08_003")}>
									<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Si je ne suis pas encore connecté à Tchap sur un autre appareil et que je n'ai pas préalablement sauvegardé mes Clés Tchap (clés de chiffrement)</title>
									<div className="tc_text_nl">
										<div className="tc_text_b">
											Vous n'êtes pas connecté à Tchap sur un autre appareil et vous n'avez pas préalablement sauvegardé vos Clés Tchap ?
										</div>
										<div>
											Par mesure de sécurité, vos messages resteront verrouillés si vous n'avez pas vos Clés Tchap (clés de chiffrement).
										</div>
										<div>
											En revanche, vos nouveaux messages ne le seront pas : vous pourrez lire tous vos nouveaux messages.
										</div>
										<SeeMoreLinks
											onClick={this._onLocationChange}
											links={[
												{ to: "#tcq07_004", text: "Pourquoi mes messages sont-ils verrouillés ?" },
												{ to: "#tcq07_001", text: "Comment m'assurer de toujours pouvoir lire mes messages ?" },
											]}/>
									</div>
								</GenericAccordion>

								<div id="tcq06_000" className="tc_FaqComponent_section">En cas de problème...</div>
								<GenericAccordion {...this._generateProps("tcq06_001")}>
									<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Je ne reçois pas de notifications : que faire ?</title>
									<div className="tc_text_nl tc_text_b">En cas de non réception des notifications avertissant de l'arrivée de nouveaux messages, voici la liste des contrôles à effectuer.</div>
									<div className="tc_text_nl tc_text_b">Sur votre appareil mobile :</div>
									<ul className="tc_list_decimal">
										<li><span className="tc_text_b">Vérifier l'état du mode "Ne pas déranger"</span>
											<Grid container className="tc_FaqComponent_grid">
												<Grid item xl={6}>
													<ul className="tc_list_alpha tc_FaqComponent_list_level_2">
														<li>Allez dans les paramètres généraux de votre téléphone;</li>
														<li>Puis dans "son";</li>
														<li>Vérifier que le mode "Ne pas déranger" est désactivé.</li>
													</ul>
												</Grid>
												<Grid item xl={6}>
													<img src={require("images/faq/npd.png")} className="tc_FaqComponent_himg_mobile" alt="Ne pas déranger"/>
												</Grid>
											</Grid>
										</li>
										<li><span className="tc_text_b">Vérifier la consommation en arrière-plan</span>
											<Grid container className="tc_FaqComponent_grid">
												<Grid item xl={6}>
													<ul className="tc_list_alpha tc_FaqComponent_list_level_2">
														<li>Allez dans les paramètres généraux de votre téléphone;</li>
														<li>Allez dans la section "Applis et notifications";</li>
														<li>Cliquez sur l'application Tchap, vous arrivez sur une fenêtre où il vous sera proposé, entre autres, de désinstaller ou de forcer l'arrêt de l'application;</li>
														<li>Cliquez sur "Données mobiles et Wi-Fi";</li>
														<li>Vérifiez que la consommation des "Données en arrière-plan" est bien activée.</li>
													</ul>
												</Grid>
												<Grid item xl={6}>
													<img src={require("images/faq/dap.png")} className="tc_FaqComponent_himg_mobile" alt="Données en arière plan"/>
												</Grid>
											</Grid>
										</li>
										<li><span className="tc_text_b">Effectuer une réparation du service des notifications:</span>
											<ul className="tc_list_alpha tc_FaqComponent_list_level_2">
												<li>Allez dans les paramètres généraux de Tchap;</li>
												<li>Allez dans la section "Notifications";</li>
												<li>Puis lancez "Résoudre les problèmes de notifications".</li>
											</ul>
											<Grid container className="tc_FaqComponent_grid">
												<Grid item xl={6}>
													<img src={require("images/faq/notif_mobile_1.png")} className="tc_FaqComponent_himg_mobile" alt="Réparer les notifications mobile 1"/>
												</Grid>
												<Grid item xl={6}>
													<img src={require("images/faq/notif_mobile_2.png")} className="tc_FaqComponent_himg_mobile" alt="Réparer les notifications mobile 2"/>
												</Grid>
											</Grid>
										</li>
										<li><span className="tc_text_b">Forcer l'arrêt de l'application et redémarrer le téléphone</span>
											<ul className="tc_list_alpha tc_FaqComponent_list_level_2">
												<li>Allez dans les paramètres généraux de votre téléphone;</li>
												<li>Allez dans la section "Applis et notifications" ;</li>
												<li>Cliquez sur l'application Tchap ;</li>
												<li>"Forcer l'arrêt" de l'application;</li>
												<li>Redémarrez votre téléphone.</li>
											</ul>
										</li>
									</ul>
									<br /><br /><br />
									<div className="tc_text_nl tc_text_b">Sur le Web :</div>
									<ul className="tc_list_decimal">
										<li><span className="tc_text_b">Vérifier des paramétrages de vos notifications</span>
											<ul className="tc_list_alpha tc_FaqComponent_list_level_2">
												<li>
													Rendez-vous sur la page web de Tchap et connectez-vous:<GenericLink onClick={this._onLocationChange} to="https://www.tchap.gouv.fr">https://www.tchap.gouv.fr</GenericLink>;
													<div className="tc_text_i">NB : S'il s'agit de votre première connexion sur le web (ou que vos historiques de navigation ont été effacés), vous pouvez partager vos Clés Tchap à l'aide de votre téléphone portable pour déchiffrer les messages préalablement reçus</div>
												</li>
												<li>Allez dans les paramètres généraux de Tchap;</li>
												<li>Allez dans la section "Notifications";</li>
												<li>
													Vérifiez que les paramétrages correspondent à l'image ci-dessous (paramétrage par défaut) :
													<Grid container className="tc_FaqComponent_grid">
														<Grid item xl={6}>
															<img src={require("images/faq/notif_web_1.png")} className="tc_FaqComponent_limg_mobile" alt="Réparer les notifications web 1"/>
														</Grid>
														<Grid item xl={6}>
															<div className="tc_text_nl">Veillez à ce qu'aucune option ne soit sur « désactivé », hormis la dernière. Vous pouvez ensuite choisir librement si vous souhaitez que les notifications soient sur « Activé » ou « Bruyant ».</div>
														</Grid>
													</Grid>
												</li>
											</ul>
										</li>
										<li><span className="tc_text_b">Vérifier le paramétrage des salons:</span>
											<ul className="tc_list_alpha tc_FaqComponent_list_level_2">
												<li>Rendez-vous sur l'écran général de Tchap (où figure la liste de vos conversations sur la colonne de gauche)</li>
												<li>Cliquez sur les trois petits points à droite d'un ou plusieurs salons (ceux pour lesquels vous semblez ne plus recevoir de notifications)</li>
												<li>Vérifiez que les paramétrages correspondent à l'image ci-dessous :
													<Grid container className="tc_FaqComponent_grid">
														<Grid item xl={4}>
															<img src={require("images/faq/notif_web_2.png")} className="tc_FaqComponent_wimg_mobile" alt="Réparer les notifications web 2"/>
														</Grid>
														<Grid item xl={8}>
															<div className="tc_text_nl tc_text_i">NB : L'option "Seulement les mentions" n'est pas supportée pour les salons privés dans la version mobile de Tchap (Android et iOS).</div>
														</Grid>
													</Grid>
												</li>
											</ul>
										</li>
									</ul>
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq06_003")}>
									<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Que faire si je ne reçois pas le mail de création de compte ?</title>
									<div className="tc_text_nl">Voici quelques vérifications que vous pouvez effectuer :</div>
									<ul>
										<li>Vérifiez votre dossier "courriers indésirables", "pourriels" ou "spams"</li>
										<li>Vérifiez que vous ne possédez pas déjà un compte Tchap avec cette adresse mail, par exemple en faisant une demande de réinitialisation de mot de passe sur Tchap</li>
										<li>Vérifiez que votre compte a bien été créé, en recommençant votre procédure d'inscription</li>
										<li>Contactez vos services informatiques pour vous assurer que les mails de Tchap ne sont pas bloqués</li>
									</ul>
									<div className="tc_text_nl">Si le problème persiste, n'hésitez pas à contacter le support de Tchap : <GenericLink className="tc_FaqComponent_link" to={"mailto:" + t("links.support")}>{t("links.support")}</GenericLink></div>
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq06_004")}>
									<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Mon compte a expiré : que faire ?</title>
									<div className="tc_text_nl">Tous les 3 mois, vous recevez un e-mail de Tchap avec un lien sur lequel cliquer pour garder votre compte actif.</div>
									<div className="tc_text_nl">Si vous dépassez le délai imparti, votre compte se désactive automatiquement.</div>
									<div className="tc_text_nl">Cette situation n'est cependant pas irréversible. Vous pouvez réactiver votre compte depuis Tchap en demandant l'envoi d'un nouvel e-mail de réactivation.</div>
									<div className="tc_text_nl">Attention : toute nouvelle demande d'e-mail de réactivation annule et remplace le précédent e-mail. Veillez à bien utiliser le dernier e-mail de réactivation reçu.</div>
									<SeeMoreLinks
											onClick={this._onLocationChange}
											links={[
												{ to: "#tcq02_002", text: "Pourquoi dois-je renouveler mon compte tous les 3 mois ?" },
											]}/>
								</GenericAccordion>
                                                                <GenericAccordion {...this._generateProps("tcq06_005")}>
									<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />J’ai reçu une pièce jointe mais je ne parviens pas à l’ouvrir : que dois-je faire ?</title>
									<div className="tc_text_nl">Si vous avez reçu une pièce jointe sur Tchap, mais que vous ne parvenez pas à l’ouvrir (message d’erreur, ou absence de réaction), il est possible de recharger à nouveau la pièce jointe.</div>
									<div className="tc_text_nl">Pour cela, vous pouvez vous rendre dans les paramètres de Tchap, puis :</div>
                                                                        <div className="tc_text_b"> 
                                                                                                   Sur la version mobile de Tchap :
                                                                        </div>
                                                                        <li>Rendez-vous dans la section “Autres”</li>
                                                                        <li>Cliquez sur “Vider le cache”</li>
                                                                        <div className="tc_text_b">
                                                                                                  Sur la version Web de Tchap :
                                                                        </div>
                                                                        <li>Rendez-vous dans la section “Aide & A propos”</li>
                                                                        <li>Cliquez sur “Vider le cache et rafraîchir”</li>
                                                                        <div className="tc_text_nl">Rendez-vous ensuite dans l’échange sur lequel vous avez reçu la pièce jointe, et essayez à nouveau de l’ouvrir.</div> 
                                                                        <div className="tc_text_nl">Si la difficulté persiste, vous pouvez contacter l’équipe de Tchap par mail à :</div> 
                                                                        <div className="tc_text_nl"><GenericLink className="tc_FaqComponent_link" to={"mailto:" + t("links.support")}>{t("links.support")}</GenericLink></div>
                                                                                                                     
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq06_006")}>
									<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Un partenaire externe ne parvient pas à créer son compte : que faire ?</title>
									<ul>
										<li>Vérifier que le mail d’invitation n’a pas été filtré dans les spams du partenaire externe</li>
										<li>Vérifier que le partenaire externe utilise bien l’adresse mail qui a été renseignée dans l’invitation pour créer son compte</li>
										<li>Vérifier que l’adresse mail saisie au moment de l’invitation ne contient pas de coquille</li>
										<li>Vérifier que l’adresse mail a été saisie sans majuscules : Tchap étant sensible à la casse, il est important que l’adresse mail soit renseignée sans majuscules dans l’invitation et au moment de l’inscription.</li>
									</ul>
									<div className="tc_text_nl">Si l’adresse mail saisie au moment de l’invitation contient une erreur ou des majuscules, il sera nécessaire de recommencer l’invitation.</div>
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq06_007")}>
									<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Je ne parviens pas à lire les messages provenant d’une personne en particulier</title>
									<div className="tc_text_nl">Il peut arriver que les messages d’une personne spécifique deviennent illisibles. Il s’agit d’une anomalie qui peut être résolue de la façon suivante : </div>									<ul>
										<li>Rendez-vous dans les paramètres de Tchap </li>
										<li>Si vous êtes sur le web, allez dans la section “Aide et à propos”.<br/>
											Si vous êtes sur mobile, allez dans la section “Avancé”.</li>
										<li>Cliquez sur “Vider le cache”</li>
										<li>Demandez à la personne dont vous ne pouvez pas lire les messages de faire la même manipulation</li>
									</ul>
								</GenericAccordion>
							</Grid>
						</Grid>
					</Container>
				<BottomBar />
			</div>
		);
	}
}

export default routerHOC(FaqComponent);
