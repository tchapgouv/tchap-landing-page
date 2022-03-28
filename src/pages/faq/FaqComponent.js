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
import ConventionLink from "components/ConventionLink";

import "styles/pages/faq/FaqComponent.scss";

class FaqComponent extends Component {

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
		const sHash = location.href.split("#")[2];
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
									<title>Pourquoi Tchap ?<LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" /></title>
									La messagerie instantanée Tchap a été créée pour les agents publics comme l’alternative française et sécurisée aux messageries instantanées grand public.
									<div>Tchap est conçue et maîtrisée par l’Etat, toutes les données générées par son usage sont hébergées sur des serveurs français, garantissant ainsi que leur gestion répond aux normes européennes en vigueur (RGPD).</div>

									<div className="tc_FaqComponent_seemore">
										<GenericLink onClick={this._onLocationChange} to="#tcq05_001" className="tc_FaqComponent_link">Comment la confidentialité des échanges est-elle garantie ?</GenericLink>
									</div>
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq01_002")}>
									<title>Qui peut utiliser Tchap ?<LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" /></title>
									<div className="tc_FaqComponent_subtitle">Les agents publics</div>
									<div>Tchap s'adresse à tous les agents publics, peu importe leur contrat de travail.</div>
									<div>Pour utiliser Tchap, il faut un <span className="tc_text_b">e-mail professionnel d'une administration reconnue</span> comme :</div>
									<ul>
										<li>L’ensemble de l’administration et de la fonction publique (d’Etat, hospitalière et territoriale)</li>
										<li>L’ensemble des établissements publics comme les Etablissements Publics Administratifs (EPA) et Etablissements Publics Industriels et Commerciaux (EPIC)</li>
										<li>Les Autorités Administratives Indépendantes (AAI)</li>
										<li>Les universités</li>
										<li>Les collectivités</li>
										<li>Autres personnes morales de droit public comme les Groupements d'Intérêt Public (GIP)</li>
									</ul>
									<div>Vous pouvez vérifier si votre e-mail professionnel est bien reconnu par Tchap  <GenericLink className="tc_FaqComponent_link" to={"/#joinUs"}>en cliquant ici</GenericLink>.</div>
									<div className="tc_text_nl">
										Si votre e-mail professionnel n'est pas reconnu par Tchap, vous pouvez en faire la demande en
										envoyant <ConventionLink linkText="cette convention"/> signée
										par votre direction à l'adresse  <GenericLink className="tc_FaqComponent_link" to={"mailto:" + t("links.contact")}>{t("links.contact")}</GenericLink>.</div>
									<div className="tc_FaqComponent_subtitle">Les partenaires externes</div>
									<div>Les partenaires externes sont les personnes avec lesquelles vous travaillez qui ne sont pas agents publics.</div>
									<div>Ils peuvent utiliser Tchap, mais n'ont pas les mêmes droits que les agents publics :</div>
									<ul>
										<li>Ils doivent être invités par un agent public pour pouvoir créer un compte.</li>
										<li>Ils ne peuvent participer qu'aux échanges auxquels ils ont été invités.</li>
										<li>Ils ne peuvent pas créer d'échanges en dehors de ceux auxquels ils ont été invités.</li>
										<li>Ils n'ont pas accès à l'annuaire des utilisateurs de Tchap, ni aux salons forums.</li>
									</ul>
									<div className="tc_FaqComponent_seemore">
										<GenericLink onClick={this._onLocationChange} to="#tcq03_004" className="tc_FaqComponent_link">Comment inviter un partenaire externe à rejoindre Tchap ?</GenericLink>
									</div>
								</GenericAccordion>

								<div id="tcq02_000" className="tc_FaqComponent_section">Gestion du compte</div>
								<GenericAccordion {...this._generateProps("tcq02_001")}>
									<title>Comment s'inscrire ?<LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" /></title>
									<div>Pour vous inscrire sur Tchap :</div>
									<ul className="tc_list_decimal">
										<li>
											Allez sur Tchap  <GenericLink className="tc_FaqComponent_link" to={t("links.web")}>web</GenericLink>,  <GenericLink className="tc_FaqComponent_link" to={t("links.android")}>Android</GenericLink> ou  <GenericLink className="tc_FaqComponent_link" to={t("links.ios")}>iOS</GenericLink>.
											<br />
											Vous pourrez utiliser Tchap sur tous vos appareils. Choisissez-en un pour vous inscrire.
										</li>
										<li>Utilisez votre e-mail professionnel comme identifiant.</li>
										<li>
											Confirmez la création de votre compte en cliquant sur le lien dans l'e-mail que vous aurez reçu.
											<br />
											<span className="tc_text_i">Attention : ce lien expire au bout de 3 jours. Après ce délai, il faudra effectuer l'inscription à nouveau.</span>
										</li>
										<li>Vous pouvez commencer à utiliser Tchap tout de suite.</li>
									</ul>
									<div className="tc_FaqComponent_seemore">
										<GenericLink onClick={this._onLocationChange} to="#tcq01_002" className="tc_FaqComponent_link">Qui peut utiliser Tchap ?</GenericLink>
										<GenericLink onClick={this._onLocationChange} to="/prise-en-main" className="tc_FaqComponent_link">Guide de prise en main pour faciliter vos débuts sur Tchap.</GenericLink>
									</div>
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq02_002")}>
									<title>Pourquoi dois-je renouveler mon compte tous les 2 mois ?<LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" /></title>
									<div className="tc_text_nl">Vous ne pouvez utiliser Tchap qu'avec un e-mail professionnel valide. Tchap doit vérifier que votre e-mail est toujours valide pour <span className="tc_text_b">garder votre compte actif.</span></div>
									<div className="tc_text_nl">C'est pourquoi vous recevez toutes les 8 semaines un e-mail de Tchap avec un lien sur lequel cliquer pour garder votre compte actif.</div>
									<div className="tc_text_nl">Vous avez 7 jours pour cliquer sur le lien dans l'e-mail. </div>
									<div className="tc_text_nl">Si vous dépassez les 7 jours, vous pouvez réactiver votre compte depuis l'application mobile de Tchap en demandant l'envoi d'un nouvel e-mail de réactivation.</div>
									<div className="tc_text_nl">Attention : Veillez à bien utiliser le dernier e-mail de réactivation reçu. Toute nouvelle demande d'e-mail de réactivation annule et remplace le précédent e-mail.</div>
									<div className="tc_FaqComponent_seemore">
										<GenericLink onClick={this._onLocationChange} to="#tcq06_004" className="tc_FaqComponent_link">Mon compte a expiré : que faire ?</GenericLink>
									</div>
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq02_003")}>
									<title>Un compte peut-il être supprimé ?<LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" /></title>
									<div className="tc_text_nl">Vous pouvez désactiver votre compte depuis les <span className="tc_text_b">paramètres généraux</span> de Tchap.</div>
									<div className="tc_text_nl">En désactivant votre compte, <span className="tc_text_b">vous ne pourrez plus accéder à vos messages</span>, même si vous recréez un compte avec le même e-mail.</div>
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq02_004")}>
									<title>Que deviendra mon compte si je change de poste ou d'affectation ?<LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" /></title>
									<div className="tc_text_nl">Votre compte Tchap dépend de votre e-mail profsessionnel. Si vous changez d'adresse e-mail, vous devez donc créer un nouveau compte Tchap avec votre e-mail. Le compte précédent sera désactivé. </div>
									<div className="tc_text_nl">Si votre nouvelle administration n'est pas encore présente sur Tchap, vous pouvez formuler une demande d'ouverture auprès de votre direction informatique. Vous pouvez vérifier la présence de votre administration sur Tchap  <GenericLink className="tc_FaqComponent_link" to={"/#joinUs"}>ici</GenericLink>.</div>
								</GenericAccordion>

								<div id="tcq03_000" className="tc_FaqComponent_section">Echanger sur Tchap</div>
								<GenericAccordion {...this._generateProps("tcq03_001")}>
									<title>Quels sont les différents types de conversations sur Tchap ?<LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" /></title>
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
											<span className="tc_text_b">Les messages directs sont :</span>
											<ul>
												<li>des conversations entre plusieurs agents publics</li>
												<li>trouvables et accessibles à tous, sauf aux partenaires externes</li>
												<li>non chiffrés</li>
												<li>utilisés pour aborder des sujets transverses ou partager des centres d'intérêt professionnels (ou non !)</li>
											</ul>
										</Grid>
									</Grid>
									<div className="tc_FaqComponent_seemore">
										<GenericLink onClick={this._onLocationChange} to="#tcq03_003" className="tc_FaqComponent_link">Comment démarrer une nouvelle conversation ?</GenericLink>
										<GenericLink onClick={this._onLocationChange} to="#tcq03_006" className="tc_FaqComponent_link">Comment rejoindre un salon ?</GenericLink>
									</div>
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq03_002")}>
									<title>Comment conserver l'historique de mes messages ?<LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" /></title>
									<div className="tc_text_nl">Lorsque vous vous déconnectez puis reconnectez, vos messages passés deviennent illisibles. C'est une mesure de sécurité : la déconnexion de Tchap entraîne la perte des clés de chiffrement qui servent à déchiffrer vos messages.</div>
									<div className="tc_text_nl"><span className="tc_text_b">Pour conserver tous vos messages, il vous faut donc garder une connexion continue à Tchap sur au moins un appareil.</span></div>
									<div className="tc_text_nl">Pour vous assurer d'avoir toujours au moins un appareil connecté, une mesure préventive peut être de vous connecter depuis plusieurs appareils (un mobile et un ordinateur par exemple). Si l'un se déconnecte, vous pourrez alors récupérer vos clés de chiffrement grâce au second.</div>
									<div className="tc_text_nl">Votre mobile garde votre connexion automatiquement, comme pour toute application mobile.</div>
									<div className="tc_text_nl"><span className="tc_text_b">Pour assurer que votre navigateur web garde votre connexion, vérifiez dans les réglages de celui-ci que la conservation de vos données de navigation est autorisée pour Tchap</span> (c'est généralement le cas par défaut). Une intervention de vos services informatiques peut être nécéssaire s’il faut procéder à un changement de ce réglage.</div>
									<div className="tc_text_nl">Enfin, si vous anticipez une déconnexion, vous pouvez <span className="tc_text_b">exporter et sauvegarder vos clés de chiffrement en vous rendant dans les réglages de Tchap et en cliquant sur "Exporter les clés de chiffrement"</span>. Vous pourrez ensuite importer ces mêmes clés lors de votre prochaine connexion afin de récupérer l’historique de vos conversations.</div>
									<div className="tc_FaqComponent_seemore">
										<GenericLink onClick={this._onLocationChange} to="#tcq06_002" className="tc_FaqComponent_link">"Déchiffrement impossible" de mes messages :  comment y remédier ?</GenericLink>
										<GenericLink onClick={this._onLocationChange} to="#tcq05_001" className="tc_FaqComponent_link">Comment la confidentialité des échanges est-elle garantie ?</GenericLink>
									</div>
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq03_003")}>
									<title>Comment démarrer une nouvelle conversation ?<LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" /></title>
									<div className="tc_text_nl">L’annuaire intégré vous permet d’entrer en contact direct avec l’ensemble des utilisateurs de Tchap.</div>
									<div className="tc_text_nl">Pour démarrer une nouvelle conversation : </div>
									<ul className="tc_list_decimal">
										<li>
											<Grid container className="tc_FaqComponent_grid">
												<Grid item xl={6}>
													<div className="tc_text_nl"><span className="tc_text_b">Sur mobile</span>, cliquez sur le bouton “+” en bas de l’écran et choisissez “nouvelle discussion”.</div>
													<img src={require("images/pem/create_mobile.png")} className="tc_FaqComponent_wimg_mobile" alt="Création 1:1 mobile"/>
												</Grid>
												<Grid item xl={6}>
													<div className="tc_text_nl"><span className="tc_text_b">Sur le web</span>, cliquez sur le bouton “+” de la section “messages directs”.</div>
													<img src={require("images/pem/create_dm_web.png")} className="tc_FaqComponent_wimg_mobile" alt="Création 1:1 web"/>
												</Grid>
											</Grid>
										</li>
										<li>Dans la barre de recherche, tapez le prénom suivi du nom de la personne que vous voulez contacter, ou son e-mail.</li>
										<li>Une liste de personnes apparaîtra. Cliquez sur le nom de la personne qui vous intéresse.</li>
										<li>Une invitation lui est automatiquement envoyée. Dès qu'elle est acceptée, vous pourrez communiquer.</li>
									</ul>
									<div className="tc_FaqComponent_seemore">
										<GenericLink onClick={this._onLocationChange} to="#tcq03_004" className="tc_FaqComponent_link">Comment inviter un partenaire externe sur Tchap ?</GenericLink>
										<GenericLink onClick={this._onLocationChange} to="#tcq03_005" className="tc_FaqComponent_link">Que faire si je ne souhaite pas apparaître dans l'annuaire ?</GenericLink>
									</div>
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq03_004")}>
									<title>Comment inviter un partenaire externe sur Tchap ?<LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" /></title>
									<ul className="tc_list_decimal">
										<li>
											<Grid container className="tc_FaqComponent_grid">
												<Grid item xl={6}>
													<div className="tc_text_nl"><span className="tc_text_b">Sur mobile</span>, rendez-vous dans l'onglet "Contacts" et cliquez sur "Inviter des contacts dans Tchap"</div>
													<img src={require("images/faq/create_ext_mobile.jpg")} width="500" className="tc_FaqComponent_wimg_mobile" alt="Création 1:1 externe mobile"/>
												</Grid>
												<Grid item xl={6}>
													<div className="tc_text_nl"><span className="tc_text_b">Sur le web</span>, cliquez sur le bouton “+” de la section “messages directs”.</div>
													<img src={require("images/pem/create_dm_web.png")} className="tc_FaqComponent_wimg_mobile" alt="Création 1:1 externe web"/>
												</Grid>
											</Grid>
										</li>
										<li>Dans la barre de recherche, tapez l'e-mail de la personne que vous voulez inviter et validez.</li>
										<li>Une invitation lui est automatiquement envoyée par e-mail. Vous serez notifié lorsque cette personne aura créé son compte, et pourrez ensuite commencer à échanger.</li>
									</ul>
									<div className="tc_FaqComponent_seemore">
										<GenericLink onClick={this._onLocationChange} to="#tcq01_002" className="tc_FaqComponent_link">Qui peut utiliser Tchap ?</GenericLink>
									</div>
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq03_005")}>
									<title>Que faire si je ne souhaite pas apparaître dans l'annuaire ?<LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" /></title>
									<div className="tc_text_nl">Si vous ne souhaitez pas apparaître dans les résultats de recherche d'utilisateurs, vous pouvez passer sur <span className="tc_text_b">liste rouge</span> dans les Paramètres de Tchap.</div>
									<div className="tc_text_nl">Les autres utilisateurs ne pourront ainsi plus vous trouve, ni vous contacter, sauf s'ils renseignent votre e-mail complet dans la barre de recherche.</div>
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq03_006")}>
									<title>Comment rejoindre un salon ?<LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" /></title>
									<div className="tc_text_nl"><span className="tc_text_b">Pour rejoindre un salon privé</span>, vous devez obligatoirement être invité par un de ses administrateurs.</div>
									<div className="tc_text_nl"><span className="tc_text_b">Pour trouver et rejoindre un salon forum</span>, vous pouvez rechercher par mots clés : </div>
									<Grid container className="tc_FaqComponent_grid">
										<Grid item xl={6}>
											<div className="tc_text_nl"><span className="tc_text_b">Sur mobile</span>, rendez-vous dans l'onglet "Contacts" et cliquez sur "Inviter des contacts dans Tchap"</div>
											<img src={require("images/pem/create_mobile.png")} className="tc_FaqComponent_wimg_mobile" alt="Création salon mobile"/>
										</Grid>
										<Grid item xl={6}>
											<div className="tc_text_nl"><span className="tc_text_b">Sur le web</span>, cliquez sur le bouton “+” de la section “messages directs”.</div>
											<img src={require("images/pem/create_room_web.png")} className="tc_FaqComponent_wimg_mobile" alt="Création salon web"/>
										</Grid>
									</Grid>
									<div className="tc_text_nl">Vous pouvez également être invité à rejoindre un salon forum sur invitation d'un membre.</div>
									<div className="tc_FaqComponent_seemore">
										<GenericLink onClick={this._onLocationChange} to="#tcq04_000" className="tc_FaqComponent_link">Créer et administrer un salon</GenericLink>
									</div>
								</GenericAccordion>

								<div id="tcq04_000" className="tc_FaqComponent_section">Créer et administrer un salon</div>
								<GenericAccordion {...this._generateProps("tcq04_001")}>
									<title>Comment créer un salon ?<LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" /></title>
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
									<div className="tc_text_nl">Une fois que votre salon est créé, vous en êtes l’administrateur par défaut.</div>
									<div className="tc_FaqComponent_seemore">
										<GenericLink onClick={this._onLocationChange} to="#tcq04_002" className="tc_FaqComponent_link">Qu'est-ce qu'un administrateur ?</GenericLink>
									</div>
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq04_002")}>
									<title>Qu'est-ce qu'un administrateur ?<LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" /></title>
									<div className="tc_text_nl">Par défaut, le créateur d'un salon est sont administrateur.</div>
									<div className="tc_text_nl">Un administrateur peut :</div>
									<ul>
										<li>inviter des personnes à rejoindre un salon</li>
										<li>retirer des personnes d'un salon</li>
										<li>supprimer des messages</li>
										<li>changer le nom du salon</li>
									</ul>
									<div className="tc_text_nl">Un administrateur peut aussi désigner d'autres administrateurs et modérateurs, et partager certains pouvoirs avec eux, depuis les paramètres du Salon, dans les Rôles et Permissions.</div>
									<div className="tc_FaqComponent_seemore">
										<GenericLink onClick={this._onLocationChange} to="#tcq04_004" className="tc_FaqComponent_link">Pourquoi est-il indispensable de nommer plusieurs administrateurs par salon et comment procéder ?</GenericLink>
									</div>
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq04_003")}>
									<title>Comment inviter des participants à rejoindre un salon ?<LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" /></title>
									<div className="tc_text_nl">Pour les salons privés, seuls les administrateurs peuvent inviter des utilisateurs à rejoindre la conversation.</div>
									<div className="tc_text_nl">Pour les salons publics, l'invitation n'est pas indispensable mais peut être utilisée pour inviter des utilisateurs à rejoindre le salon.</div>
									<div className="tc_text_nl">Pour envoyer des invitations, rendez-vous dans les paramètres du salon, et cliquez sur "inviter dans ce salon". Plusieurs possibilités s'offrent alors à vous :</div>
									<ul>
										<li>Inviter les membres un par un en les recherchant dans l'annuaire des utilisateurs de Tchap</li>
										<li>Inviter plusieurs membres à la fois en important un fichier .txt ou .csv contenant les adresses e-mail des interlocuteurs visés.</li>
									</ul>
									<div className="tc_text_nl">Vous pouvez également partager le lien d'un salon pour inviter des utilisateurs à le rejoindre.</div>
									<div className="tc_text_nl">S'il s'agit d'un salon privé, assurez-vous au préalable d'avoir autorisé l'accès au salon par lien (dans les paramètres du salon). Attention : si cette option est activée, chaque personne disposant du lien pourra accéder au salon privé.</div>
									<div className="tc_FaqComponent_seemore">
										<GenericLink onClick={this._onLocationChange} to="#tcq04_004" className="tc_FaqComponent_link">Pourquoi est-il indispensable de nommer plusieurs administrateurs par salon et comment procéder ?</GenericLink>
									</div>
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq04_004")}>
									<title>Pourquoi est-il indispensable de nommer plusieurs administrateurs par salon et comment procéder ? <LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" /></title>
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
									<title>Comment retirer une personne d'un salon ?<LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" /></title>
									<div className="tc_text_nl">Seul un administrateur ou un modérateur peut retirer un membre d'un salon. Pour ce faire, rendez-vous dans la liste des membres du salon et cliquez sur le nom de la personne : </div>
									<ul>
										<li>Pour qu'il lui soit impossible de revenir, choisissez "bannir"</li>
										<li>Pour lui laisser la possibilité de revenir, choisissez "exclure" ou "expulser"</li>
									</ul>
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq04_006")}>
									<title>Comment supprimer un salon ?<LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" /></title>
									<div className="tc_text_nl">Si le salon est public, il faut d’abord le transformer en salon privé pour le retirer de la liste des salons publics.</div>
									<div className="tc_text_nl">Pour fermer complètement un salon, un administrateur doit exclure tous les participants puis le quitter lui-même. Le salon ne sera alors plus visible, et les invitations acceptées ultérieurement ne fonctionneront pas.</div>
								</GenericAccordion>

								<div id="tcq05_000" className="tc_FaqComponent_section">Sécurité des échanges</div>
								<GenericAccordion {...this._generateProps("tcq05_001")}>
									<title>Comment la confidentialité des échanges est-elle garantie ?<LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" /></title>
									<div className="tc_text_nl">Tous les messages échangés sur Tchap (hors Salons Forums) sont chiffrés de bout en bout. Concrètement, cela signifie que jamais personne d'autre que les auteurs et destinataires des messages n'y ont accès. </div>
									<div className="tc_text_nl">Comment cela fonctionne-t-il ? </div>
									<div className="tc_text_nl">Chaque utilisateur de Tchap dispose de clés de chiffrement qui permettent de chiffrer et de déchiffrer les messages reçus et envoyés. Ces clés sont stockées sur vos appareils, et se renouvellent régulièrement de façon automatique (à chaque nouvelle connexion par exemple).</div>
									<div className="tc_text_nl">Cela signifie que même en cas de vol de vos identifiants ou d'interception de vos messages, vos échanges restent indéchiffrables.</div>
									<div className="tc_text_nl">Pour vous assurer que vos messages restent toujours lisibles pour vous, pensez à exporter et sauvegarder vos clés de chiffrement à chaque fois que vous envisagez une déconnexion !</div>
									<div className="tc_FaqComponent_seemore">
										<GenericLink onClick={this._onLocationChange} to="#tcq07_001" className="tc_FaqComponent_link">
											Comment m’assurer de toujours pouvoir lire mes messages ?
										</GenericLink>
										<GenericLink onClick={this._onLocationChange} to="#tcq08_000" className="tc_FaqComponent_link">
											Déchiffrement impossible de mes messages : comment y remédier ?
										</GenericLink>
									</div>
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq05_002")}>
									<title>Où les données de Tchap sont-elles stockées ?<LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" /></title>
									<div className="tc_text_nl">Tchap est conçue et hébergée en France. L'Etat en maîtrise donc l'infrastructure et les développements, spécialement pensés pour répondre aux besoins des agents publics. N'hésitez pas à consulter nos <GenericLink onClick={this._onLocationChange} to="https://www.tchap.gouv.fr/cgu/" className="tc_FaqComponent_link">CGU</GenericLink> pour en savoir plus.</div>
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq05_003")}>
									<title>Puis-je utiliser Tchap pour échanger des informations confidentielles ?<LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" /></title>
									<div className="tc_text_nl">Tchap garantie la confidentialité des échanges au sein de la messagerie.</div>
									<div className="tc_text_nl">Cependant, Tchap ne sécurise pas votre téléphone, qui reste exposé aux menaces informatiques.</div>
									<div className="tc_text_nl">’échange d’informations et de documents sensibles ne doit donc pas être effectué sur Tchap, même dans une conversation à deux. Pour cela, vous devez utiliser les canaux et appareils sécurisés mis à disposition par votre direction.</div>
									<div className="tc_FaqComponent_seemore">
										<GenericLink onClick={this._onLocationChange} to="#tcq05_001" className="tc_FaqComponent_link">Comment la confidentialité des échanges est-elle garantie ?</GenericLink>
									</div>
								</GenericAccordion>

								<div id="tcq07_000" className="tc_FaqComponent_section">Gestion des Clés Tchap (clés de chiffrement)</div>
								<GenericAccordion {...this._generateProps("tcq07_001")}>
									<title>Comment m’assurer de toujours pouvoir lire mes messages ?<LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" /></title>
									<div className="tc_text_nl">
										<div>
											Après une nouvelle connexion (lorsque vous entrez votre mail et votre mot de passe), vous ne pouvez pas
											lire les messages échangés auparavant.
										</div>
										<div>
											C'est une mesure de sécurité : si une personne vole vos identifiants et se connecte à votre place, il
											lui est ainsi impossible de lire vos conversations.
										</div>
										<div className="tc_FaqComponent_subtitle">Voici quelques bonnes pratiques pour vous assurer de toujours pouvoir lire vos messages :</div>
										<div className="tc_FaqComponent_subtitle">Evitez de vous déconnecter de Tchap</div>
										<div>
											<span className="tc_text_b">Votre mobile</span> garde votre connexion automatiquement, même lorsque vous fermez l’application ou éteignez votre téléphone
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
											Si vos messages sont verrouillés sur votre ordinateur, mais qu’ils sont lisibles sur votre téléphone, alors vous pouvez utiliser votre téléphone pour transmettre les clés à votre ordinateur. Et vice et versa.
										</div>
										<div className="tc_FaqComponent_seemore">
											<GenericLink onClick={this._onLocationChange} to="#tcq08_001" className="tc_FaqComponent_link">
												Comment déverrouiller mes messages si j’ai un autre appareil connecté à Tchap ?
											</GenericLink>
										</div>
										<div className="tc_FaqComponent_subtitle">Sauvegardez manuellement vos Clés Tchap (clés de chiffrement) avant toute déconnexion</div>
										<div>
											Si vous savez que vous allez vous déconnecter, sauvegarder vos Clés Tchap (clés de chiffrement) vous permettra déverrouiller vos messages lors de votre reconnexion.
										</div>
										<div className="tc_FaqComponent_seemore">
											<GenericLink onClick={this._onLocationChange} to="#tcq07_002" className="tc_FaqComponent_link">
												Comment sauvegarder manuellement mes Clés Tchap (clés de chiffrement) ?
											</GenericLink>
										</div>
									</div>
								</GenericAccordion>

								<GenericAccordion {...this._generateProps("tcq07_002")}>
									<title>Comment sauvegarder manuellement mes Clés Tchap (clés de chiffrement) ?<LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" /></title>
									<div className="tc_text_nl">
										<div className="tc_FaqComponent_subtitle">Pour sauvegarder vos clés :</div>
										<div>
										<span class="tc_text_i">(Action à effectuer préalablement à une déconnexion ou une réinitialisation de mot de passe pour ne pas perdre accès à vos messages)</span>
										</div>
										<ol>
											<li>Rendez-vous dans les paramètres de Tchap :
												<div>
													<span className="tc_text_b">Sur le web :</span> section “Sécurité et Vie Privée” >> “Exporter les clés de chiffrement de salon”
												</div>
												<div>
													<img src={require("images/faq/export_keys_web.png")}
																alt="export des clés sur l'application web"
																className="tc_FaqComponent_border"/>
												</div>
												<div>
													<span className="tc_text_b">Sur mobile :</span> section “Chiffrement” >> “Exporter les clés”
												</div>
												<div>
													<img src={require("images/faq/export_keys_mobile.jpeg")}
															alt="export des clés sur l'application mobile"
															width="400px"
															className="tc_FaqComponent_border"/>
												</div>
											</li>
											<li>Choisissez un mot de passe (différent de votre mot de passe Tchap) : celui-ci vous sera demandé pour déverrouiller vos messages lors de votre reconnexion.</li>
											<li>Enregistrez le fichier à un emplacement où vous pourrez le retrouver. Ce fichier s’appelle “Tchap keys” par défaut, mais vous pouvez le renommer.</li>
											<li>C’est bon, vos clés Tchap sont sauvegardées ! Vous pourrez les importer lors de de votre reconnexion pour déverrouiller vos messages.</li>
										</ol>
										<div className="tc_FaqComponent_seemore">
											<GenericLink onClick={this._onLocationChange} to="#tcq07_003" className="tc_FaqComponent_link">
												Comment importer manuellement mes Clés Tchap (clés de chiffrement) ?
											</GenericLink>
										</div>
									</div>
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq07_003")}>
									<title>Comment importer manuellement mes Clés Tchap (clés de chiffrement) ?<LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" /></title>
									<div className="tc_text_nl">
										<div className="tc_FaqComponent_subtitle">Pour importer vos clés si vous les avez préalablement sauvegardées :</div>
										<ol>
											<li>Rendez-vous dans les paramètres de Tchap :
												<div>
													<span className="tc_text_b">Sur le web :</span> section “Sécurité et Vie Privée” >> “Importer les clés de chiffrement de bout en bout”
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
											<li>Sélectionnez le fichier que vous avez préalablement sauvegardé. Par défaut, ce fichier s’appelle “Tchap keys”.</li>
											<li>Entrez le mot de passe que vous avez choisi au moment de la sauvegarde.</li>
											<li>C’est bon, vos messages sont déverrouillés et de nouveau lisibles .</li>
										</ol>
									</div>
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq07_004")}>
									<title>Pourquoi mes messages sont-ils verrouillés ?<LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" /></title>
									<div className="tc_text_nl">
										<div>
											Après une nouvelle connexion (lorsque vous entrez votre mail et votre mot de passe), vous ne pouvez pas lire les messages échangés auparavant.
										</div>
										<div>
											C'est une mesure de sécurité : si une personne vole vos identifiants et se connecte à votre place, il lui est ainsi impossible de lire vos messages parce qu’ils sont verrouillés.
										</div>
										<div>
												Vous pouvez déverrouiller vos messages pour les lire grâce à vos Clés Tchap (clés de chiffrement).
										</div>

										<div className="tc_FaqComponent_seemore">
											<GenericLink onClick={this._onLocationChange} to="#tcq08_001" className="tc_FaqComponent_link">
												Comment déverrouiller mes messages si j’ai un autre appareil connecté à Tchap ?
											</GenericLink>
											<GenericLink onClick={this._onLocationChange} to="#tcq08_002" className="tc_FaqComponent_link">
												Comment déverrouiller mes messages si j’ai préalablement sauvegardé mes Clés Tchap (clés de chiffrement) ?
											</GenericLink>
											<GenericLink onClick={this._onLocationChange} to="#tcq08_003" className="tc_FaqComponent_link">
												Comment déverrouiller mes messages si je ne suis pas connecté à Tchap sur un autre appareil et que je n’ai pas préalablement sauvegardé mes Clés Tchap (clés de chiffrement) ?
											</GenericLink>
										</div>
									</div>
								</GenericAccordion>

								<div id="tcq08_000" className="tc_FaqComponent_section">“Déchiffrement impossible” de mes messages : comment y remédier ?</div>
								<GenericAccordion {...this._generateProps("tcq08_001")}>
									<title>Si j’ai un autre appareil déjà connecté à Tchap<LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" /></title>
									<div className="tc_text_nl">
										<div className="tc_FaqComponent_subtitle">Vous êtes déjà connecté à Tchap depuis un autre appareil sur lequel vos messages sont lisibles ? </div>
										<div>Vous pouvez déverrouiller vos messages comme suit :</div>
										<ol>
											<li>
												Sur l’appareil sur lequel les messages sont verrouillés, cliquez sur “Renvoyer” (en dessous du texte qui s’affiche à la place de vos messages)
											</li>
											<div>
													<img src={require("images/faq/resend_request.png")}
																alt="texte qui s'affiche dans l'appli : renvoyer"
																className="tc_FaqComponent_border"
																width="400px"/>
											</div>
											<li>
												Sur l’appareil sur lequel les messages sont lisibles, suivez les indications qui apparaissent automatiquement pour partager les Clés Tchap (clés de chiffrement) entre vos appareils
											</li>
										</ol>
										<div>
											Une fois les Clés Tchap partagées entre vos appareils, vos messages sont déverrouillés et deviennent lisibles au fur et à mesure.
										</div>
										<div className="tc_FaqComponent_seemore">
											<GenericLink onClick={this._onLocationChange} to="#tcq07_004" className="tc_FaqComponent_link">
												Pourquoi mes messages sont-ils verrouillés ?
											</GenericLink>
											<GenericLink onClick={this._onLocationChange} to="#tcq07_001" className="tc_FaqComponent_link">
												Comment m’assurer de toujours pouvoir lire mes messages ?
											</GenericLink>
										</div>
									</div>
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq08_002")}>
									<title>Si j’ai préalablement sauvegardé mes Clés Tchap (clés de chiffrement)<LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" /></title>
									<div className="tc_text_nl">
										<div className="tc_text_b">
											Vous avez préalablement sauvegardé vos Clés Tchap sur l’appareil que vous utilisez en ce moment ?
										</div>
										<div>
											Vous pouvez déverrouiller vos messages comme suit :
										</div>
										<ol>
											<li>
												<span className="tc_text_b">Allez dans les Paramètres</span> de Tchap :
												<ul>
													<li>
														Sur ordinateur, allez dans Paramètres > Sécurité & Vie Privée et cliquez sur “Importer les clés de chiffrement de bout en bout”.
													</li>
													<li>
														Sur Android, allez dans Paramètres > Sécurité & Vie Privée et cliquez sur “Importer les clés des conversations”.
													</li>
													<li>
														Sur iOS, allez dans Paramètres > Sécurité & Vie Privée et cliquez sur “Importer les clés de chiffrement de bout en bout”.
													</li>
												</ul>
											</li>
											<li>
											  <span className="tc_text_b">Sélectionnez le fichier “Tchap Keys” (ce fichier portera un autre nom si vous l’avez renommé lors de la sauvegarde)</span>
											</li>
											<li>
											  <span className="tc_text_b">Entrez votre mot de passe</span> que vous avez créé pour sauvegarder vos Clés Tchap (clé de chiffrement).
											</li>
										</ol>
										<div>
											Vos Clés Tchap déverouillent automatiquement vos messages qui seront alors à nouveau lisibles au fur à et mesure.
										</div>
										<div className="tc_FaqComponent_seemore">
											<GenericLink onClick={this._onLocationChange} to="#tcq07_004" className="tc_FaqComponent_link">
												Pourquoi mes messages sont-ils verrouillés ?
											</GenericLink>
											<GenericLink onClick={this._onLocationChange} to="#tcq07_001" className="tc_FaqComponent_link">
												Comment m’assurer de toujours pouvoir lire mes messages ?
											</GenericLink>
										</div>
									</div>
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq08_003")}>
									<title>Si je ne suis pas encore connecté à Tchap sur un autre appareil et que je n’ai pas préalablement sauvegardé mes Clés Tchap (clés de chiffrement)<LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" /></title>
									<div className="tc_text_nl">
										<div className="tc_text_b">
											Vous n’êtes pas connecté à Tchap sur un autre appareil et vous n’avez pas préalablement sauvegardé vos Clés Tchap ?
										</div>
										<div>
											Par mesure de sécurité, vos messages resteront verrouillés si vous n’avez pas vos Clés Tchap (clés de chiffrement).
										</div>
										<div>
											En revanche, vos nouveaux messages ne le seront pas : vous pourrez lire tous vos nouveaux messages.
										</div>
										<div className="tc_FaqComponent_seemore">
											<GenericLink onClick={this._onLocationChange} to="#tcq07_004" className="tc_FaqComponent_link">
												Pourquoi mes messages sont-ils verrouillés ?
											</GenericLink>
											<GenericLink onClick={this._onLocationChange} to="#tcq07_001" className="tc_FaqComponent_link">
												Comment m’assurer de toujours pouvoir lire mes messages ?
											</GenericLink>
										</div>
									</div>
								</GenericAccordion>

								<div id="tcq06_000" className="tc_FaqComponent_section">En cas de problème...</div>
								<GenericAccordion {...this._generateProps("tcq06_001")}>
									<title>Je ne reçois pas de notifications : que faire ?<LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" /></title>
									<div className="tc_text_nl tc_text_b">Il peut arriver de ne plus avoir les notifications pour avertir de l’arrivée de nouveau message, voici un tour des contrôles à effectuer.</div>
									<div className="tc_text_nl tc_text_b">Sur votre appareil mobile :</div>
									<ul className="tc_list_decimal">
										<li><span className="tc_text_b">Vérifier l’état du mode "Ne pas déranger"</span>
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
														<li>Cliquez sur l’application Tchap, vous arrivez sur une fenêtre où il vous sera proposer, entre autre, de désinstaller ou de forcer l’arrêt de l’application;</li>
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
												<li>Puis lancer "Résoudre les problèmes de notifications".</li>
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
										<li><span className="tc_text_b">Forcer l’arrêt de l’application et redémarrer le téléphone</span>
											<ul className="tc_list_alpha tc_FaqComponent_list_level_2">
												<li>Allez dans les paramètres généraux de votre téléphone;</li>
												<li>Allez dans la section "Applis et notifications" ;</li>
												<li>Cliquez sur l’application Tchap ;</li>
												<li>"Forcer l’arrêt" de l’application;</li>
												<li>Redémarrer votre téléphone.</li>
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
													<div className="tc_text_i">NB : S'il s’agit de votre première connexion sur le web (ou que vos historiques de navigation ont été effacés), vous pouvez partager vos clés de chiffrement à l’aide de votre téléphone portable pour déchiffrer les messages préalablement reçus</div>
												</li>
												<li>Allez dans les paramètres généraux de Tchap;</li>
												<li>Allez dans la section "Notifications";</li>
												<li>
													Vérifiez que les paramétrages correspondent à l’image ci-dessous (paramétrage par défaut) :
													<Grid container className="tc_FaqComponent_grid">
														<Grid item xl={6}>
															<img src={require("images/faq/notif_web_1.png")} className="tc_FaqComponent_limg_mobile" alt="Réparer les notifications web 1"/>
														</Grid>
														<Grid item xl={6}>
															<div className="tc_text_nl">Veillez à ce qu’aucune option ne soit sur « désactivé », hormis la dernière. Vous pouvez ensuite choisir librement si vous souhaitez que les notifications soient sur « Activé » ou « Bruyant ».</div>
														</Grid>
													</Grid>
												</li>
											</ul>
										</li>
										<li><span className="tc_text_b">Vérifier le paramétrage des salons:</span>
											<ul className="tc_list_alpha tc_FaqComponent_list_level_2">
												<li>Rendez-vous sur l’écran général de Tchap (où figure la liste de vos conversations sur la colonne de gauche)</li>
												<li>Cliquez sur les trois petits points à droite d'un ou plusieurs salons (ceux pour lesquels vous semblez ne plus recevoir de notifications)</li>
												<li>Vérifiez que les paramétrages correspondent à l’image ci-dessous :
													<Grid container className="tc_FaqComponent_grid">
														<Grid item xl={4}>
															<img src={require("images/faq/notif_web_2.png")} className="tc_FaqComponent_wimg_mobile" alt="Réparer les notifications web 2"/>
														</Grid>
														<Grid item xl={8}>
															<div className="tc_text_nl tc_text_i">NB : L’option "Seulement les mentions" n’est pas supportée pour les salons chiffrés dans la version mobile de Tchap (Android et iOS).</div>
														</Grid>
													</Grid>
												</li>
											</ul>
										</li>
									</ul>
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq06_002")}>
									<title>"Déchiffrement impossible" de mes messages :  comment y remédier ?<LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" /></title>
									<div className="tc_text_nl">Chaque nouvelle connexion à Tchap - c'est-à-dire le fait de renseigner votre e-mail et votre mot de passe - provoque le renouvellement immédiat de vos clés de chiffrement sur l'appareil que vous utilisez. </div>
									<div className="tc_text_nl">Par conséquent, vous ne pouvez plus lire les messages envoyés ou reçus avant votre connexion. Chaque message reçu ou envoyé est remplacé par cette phrase : </div>
									<div className="tc_text_nl tc_text_i">"Déchiffrement impossible : L'utilisateur n'a pas envoyé les clefs de déchiffrement pour ce message."</div>
									<div className="tc_text_nl">Pour pouvoir accéder à nouveau à vos anciens messages, vous devez restaurer vos clés de chiffrement. Deux possibilités s'offrent à vous :</div>
									<ol>
										<li>
											<div className="tc_text_nl">
												Si vous êtes connecté avec votre compte Tchap sur un autre appareil, vous pouvez demander à ce que ce second appareil vous partage les clés de chiffrement :
											</div>
											<div className="tc_text_nl">
												Sur l'appareil qui a perdu les clés, cliquez sur "Re-demander les clés de chiffrement depuis vos autres appareils" (lien cliquable situé juste en-dessous des messages "Déchiffrement impossible : L'utilisateur n'a pas envoyé les clefs de déchiffrement pour ce message"), puis validez les demandes d'envoi de clé qui s'affichent sur l'autre appareil.
											</div>
										</li>
										<li>Restaurer les clés que vous aurez pris le soin de sauvegarder préalablement à votre déconnexion de Tchap. </li>
									</ol>
									<div className="tc_text_nl">Cependant, si vous vous déconnectez de Tchap alors que vous n'avez pas de session Tchap ouverte sur un autre appareil ou si vous n'avez pas préalablement sauvegardé volontairement vos clés, vous ne pourrez pas lire l'historique de vos conversations Tchap.</div>
									<div className="tc_text_nl">Pour éviter que ce problème ne se reproduise, il est recommandé de ne pas vous déconnecter de Tchap, et de maintenir une session active sur au moins deux appareils différents (un ordinateur et un mobile par exemple).</div>
									<div className="tc_FaqComponent_seemore">
										<GenericLink onClick={this._onLocationChange} to="#tcq03_002" className="tc_FaqComponent_link">Comment conserver l'historique de mes messages ?</GenericLink>
									</div>
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq06_003")}>
									<title>Que faire si je ne reçois pas l'e-mail de création de compte ?<LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" /></title>
									<div className="tc_text_nl">Voici quelques vérifications que vous pouvez effectuer :</div>
									<ul>
										<li>Vérifiez vos spams</li>
										<li>Vérifiez que vous ne possédez pas déjà un compte Tchap avec cet e-mail, par exemple en faisant une demande de réinitialisation de mot de passe sur Tchap</li>
										<li>Vérifiez que votre compte a bien été créé, en recommençant votre procédure d'inscription</li>
										<li>Contactez vos services informatiques pour vous assurer que les e-mails de Tchap ne sont pas bloqués</li>
									</ul>
									<div className="tc_text_nl">Si le problème persiste, n'hésitez pas à contacter le support de Tchap : <GenericLink className="tc_FaqComponent_link" to={"mailto:" + t("links.contact")}>{t("links.contact")}</GenericLink></div>
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq06_004")}>
									<title>Mon compte a expiré : que faire ?<LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" /></title>
									<div className="tc_text_nl">Toutes les 8 semaines, vous recevez un e-mail de Tchap avec un lien sur lequel cliquer pour garder votre compte actif.</div>
									<div className="tc_text_nl">Vous avez 7 jours pour cliquer sur le lien dans l'e-mail.</div>
									<div className="tc_text_nl">Si vous dépassez les 7 jours, votre compte se désactive automatiquement.</div>
									<div className="tc_text_nl">Cette situation n'est cependant pas irréversible. Vous pouvez réactiver votre compte depuis l'application mobile de Tchap en demandant l'envoi d'un nouvel e-mail de réactivation.</div>
									<div className="tc_text_nl">Attention : Veillez à bien utiliser le dernier e-mail de réactivation reçu. Toute nouvelle demande d'e-mail de réactivation annule et remplace le précédent e-mail.</div>
									<div className="tc_FaqComponent_seemore">
										<GenericLink onClick={this._onLocationChange} to="#tcq02_002" className="tc_FaqComponent_link">Pourquoi dois-je renouveler mon compte tous les 2 mois ?</GenericLink>
									</div>
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
