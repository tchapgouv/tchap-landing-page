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
					&#10004;&nbsp;&nbsp;Lien copi??
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
									La messagerie instantan??e Tchap a ??t?? cr????e pour les agents publics comme l'alternative fran??aise et s??curis??e aux messageries instantan??es grand public.
									<div>Tchap est con??ue et ma??tris??e par l'Etat, toutes les donn??es g??n??r??es par son usage sont h??berg??es sur des serveurs fran??ais, garantissant ainsi que leur gestion r??pond aux normes europ??ennes en vigueur (RGPD).</div>

									<SeeMoreLinks
										onClick={this._onLocationChange}
										links={[
											{ to: "#tcq05_001", text: "Comment la confidentialit?? des ??changes est-elle garantie ?" },
										]}/>
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq01_002")}>
									<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Qui peut utiliser Tchap ?</title>
									<div className="tc_FaqComponent_subtitle">Les agents publics</div>
									<div>Tchap s'adresse ?? tous les agents publics, peu importe leur contrat de travail.</div>
									<div>Pour utiliser Tchap, il faut un <span className="tc_text_b">e-mail professionnel d'une administration reconnue</span> comme :</div>
									<ul>
										<li>L'ensemble de l'administration et de la fonction publique (d'Etat, hospitali??re et territoriale)</li>
										<li>L'ensemble des ??tablissements publics comme les Etablissements Publics Administratifs (EPA) et Etablissements Publics Industriels et Commerciaux (EPIC)</li>
										<li>Les Autorit??s Administratives Ind??pendantes (AAI)</li>
										<li>Les universit??s</li>
										<li>Les collectivit??s</li>
										<li>Autres personnes morales de droit public comme les Groupements d'Int??r??t Public (GIP)</li>
									</ul>
									<div>Vous pouvez v??rifier si votre e-mail professionnel est bien reconnu par Tchap  <GenericLink className="tc_FaqComponent_link" to={"/#joinUs"}>en cliquant ici</GenericLink>.</div>
									<div className="tc_text_nl">
										Si votre e-mail professionnel n'est pas reconnu par Tchap, vous pouvez en faire la demande en
										renseignant <a target="_blank" rel="noreferrer noopener nofollow" href="https://www.demarches-simplifiees.fr/commencer/utiliser-tchap">ce formulaire.</a>
									</div>
									<div className="tc_FaqComponent_subtitle">Les partenaires externes</div>
									<div>Les partenaires externes sont les personnes avec lesquelles vous travaillez qui ne sont pas agents publics.</div>
									<div>Ils peuvent utiliser Tchap, mais n'ont pas les m??mes droits que les agents publics :</div>
									<ul>
										<li>Ils doivent ??tre invit??s par un agent public pour pouvoir cr??er un compte.</li>
										<li>Ils ne peuvent participer qu'aux ??changes auxquels ils ont ??t?? invit??s.</li>
										<li>Ils ne peuvent pas cr??er d'??changes en dehors de ceux auxquels ils ont ??t?? invit??s.</li>
										<li>Ils n'ont pas acc??s ?? l'annuaire des utilisateurs de Tchap, ni aux salons forums.</li>
									</ul>

									<SeeMoreLinks
										onClick={this._onLocationChange}
										links={[
											{ to: "#tcq03_004", text: "Comment inviter un partenaire externe ?? rejoindre Tchap ?" },
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
											Confirmez la cr??ation de votre compte en cliquant sur le lien dans l'e-mail que vous aurez re??u.
											<br />
											<span className="tc_text_i">Attention : ce lien expire au bout de 3 jours. Apr??s ce d??lai, il faudra effectuer l'inscription ?? nouveau.</span>
										</li>
										<li>Vous pouvez commencer ?? utiliser Tchap tout de suite.</li>
									</ul>
									<SeeMoreLinks
										onClick={this._onLocationChange}
										links={[
											{ to: "#tcq01_002", text: "Qui peut utiliser Tchap ?" },
											{ to: "/prise-en-main", text: "Guide de prise en main pour faciliter vos d??buts sur Tchap" },
										]}/>
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq02_002")}>
									<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Pourquoi dois-je renouveler mon compte tous les 3 mois ?</title>
									<div className="tc_text_nl">Vous ne pouvez utiliser Tchap qu'avec une adresse mail professionnelle valide. Tchap doit v??rifier que votre adresse mail est toujours valide pour <span className="tc_text_b">garder votre compte actif.</span></div>
									<div className="tc_text_nl">C'est pourquoi vous recevez tous les 3 mois un e-mail de Tchap avec un lien sur lequel cliquer pour garder votre compte actif.</div>
									<div className="tc_text_nl">Si vous d??passez le d??lai imparti, vous pouvez r??activer votre compte depuis Tchap en demandant l'envoi d'un nouvel e-mail de r??activation.</div>
									<div className="tc_text_nl">Attention : toute nouvelle demande d'e-mail de r??activation annule et remplace le pr??c??dent e-mail. Veillez ?? bien utiliser le lien contenu dans le dernier e-mail de r??activation re??u.</div>
									<SeeMoreLinks
										onClick={this._onLocationChange}
										links={[
											{ to: "#tcq06_004", text: "Mon compte a expir?? : que faire ?" },
										]}/>
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq02_003")}>
									<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Un compte peut-il ??tre supprim?? ?</title>
									<div className="tc_text_nl">Vous pouvez d??sactiver votre compte depuis les <span className="tc_text_b">param??tres g??n??raux</span> de Tchap.</div>
									<div className="tc_text_nl">En d??sactivant votre compte, <span className="tc_text_b">vous ne pourrez plus acc??der ?? vos messages</span>, m??me si vous recr??ez un compte avec la m??me adresse mail.</div>
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq02_004")}>
									<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Que deviendra mon compte si je change de poste ou d'affectation ?</title>
									<div className="tc_text_nl">Votre compte Tchap d??pend de votre adresse mail professionnelle. Si vous changez d'adresse mail, vous devrez donc cr??er un nouveau compte Tchap avec la nouvelle. Le compte pr??c??dent sera d??sactiv??. </div>
									<div className="tc_text_nl">Si votre nouvelle administration n'est pas encore pr??sente sur Tchap, vous pouvez formuler une demande d'ouverture aupr??s de votre direction informatique. Vous pouvez v??rifier la pr??sence de votre administration sur Tchap  <GenericLink className="tc_FaqComponent_link" to={"/#joinUs"}>ici</GenericLink>.</div>
								</GenericAccordion>

								<div id="tcq03_000" className="tc_FaqComponent_section">Echanger sur Tchap</div>
								<GenericAccordion {...this._generateProps("tcq03_001")}>
									<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Quels sont les diff??rents types de conversations sur Tchap ?</title>
									<Grid container className="tc_FaqComponent_grid">
										<Grid item xl={2}>
											<img src={require("images/pem/avatar_dm.png")} alt="DM"/>
										</Grid>
										<Grid item xl={10}>
											<span className="tc_text_b">Les messages directs sont :</span>
											<ul>
												<li>des conversations entre deux utilisateurs</li>
												<li>accessibles aux agents publics et aux partenaires externes</li>
												<li>chiffr??s de bout en bout</li>
											</ul>
										</Grid>
									</Grid>
									<Grid container className="tc_FaqComponent_grid">
										<Grid item xl={2}>
											<img src={require("images/pem/avatar_private.png")} alt="Salon Priv??"/>
										</Grid>
										<Grid item xl={10}>
											<span className="tc_text_b">Les salons priv??s sont :</span>
											<ul>
												<li>des conversations entre plusieurs utilisateurs</li>
												<li>trouvables et accessibles sur invitation uniquement</li>
												<li>accessibles aux agents publics et aux partenaires externes</li>
												<li>chiffr??s de bout en bout</li>
												<li>utilis??s pour la collaboration et la coordination d'??quipes</li>
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
												<li>trouvables et accessibles ?? tous, sauf aux partenaires externes</li>
												<li>non chiffr??s</li>
												<li>utilis??s pour aborder des sujets transverses ou partager des centres d'int??r??t professionnels (ou non !)</li>
											</ul>
										</Grid>
									</Grid>
									<SeeMoreLinks
										onClick={this._onLocationChange}
										links={[
											{ to: "#tcq03_003", text: "Comment d??marrer une nouvelle conversation ?" },
											{ to: "#tcq03_006", text: "Comment rejoindre un salon ?" },
										]}/>
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq03_003")}>
									<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Comment d??marrer une nouvelle conversation ?</title>
									<div className="tc_text_nl">L'annuaire int??gr?? vous permet d'entrer en contact direct avec l'ensemble des utilisateurs de Tchap.</div>
									<div className="tc_text_nl">Pour d??marrer une nouvelle conversation : </div>
									<ul className="tc_list_decimal">
										<li>
											<Grid container className="tc_FaqComponent_grid">
												<Grid item xl={6}>
													<div className="tc_text_nl"><span className="tc_text_b">Sur mobile</span>, cliquez sur le bouton ???+??? en bas de l'??cran et choisissez ???nouvelle discussion???.</div>
													<img src={require("images/pem/create_mobile.png")} className="tc_FaqComponent_wimg_mobile" alt="Cr??ation 1:1 mobile"/>
												</Grid>
												<Grid item xl={6}>
													<div className="tc_text_nl"><span className="tc_text_b">Sur le web</span>, cliquez sur le bouton ???+??? de la section ???messages directs???.</div>
													<img src={require("images/pem/create_dm_web.png")} className="tc_FaqComponent_wimg_mobile" alt="Cr??ation 1:1 web"/>
												</Grid>
											</Grid>
										</li>
										<li>Dans la barre de recherche, tapez le pr??nom suivi du nom de la personne que vous voulez contacter, ou son adresse mail.</li>
										<li>Une liste de personnes appara??tra. Cliquez sur le nom de la personne qui vous int??resse.</li>
										<li>Une invitation lui est automatiquement envoy??e. D??s qu'elle est accept??e, vous pourrez communiquer.</li>
									</ul>
									<SeeMoreLinks
										onClick={this._onLocationChange}
										links={[
											{ to: "#tcq03_004", text: "Comment inviter un partenaire externe sur Tchap ?" },
											{ to: "#tcq03_005", text: "Que faire si je ne souhaite pas appara??tre dans l'annuaire ?" },
										]}/>
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq03_004")}>
									<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Comment inviter un partenaire externe sur Tchap ?</title>
									<ul className="tc_list_decimal">
										<li>
											<Grid container className="tc_FaqComponent_grid">
												<Grid item xl={6}>
													<div className="tc_text_nl"><span className="tc_text_b">Sur mobile</span>, rendez-vous dans l'onglet "Contacts" et cliquez sur "Inviter des contacts dans Tchap"</div>
													<img src={require("images/faq/create_ext_mobile.jpg")} width="500" className="tc_FaqComponent_wimg_mobile" alt="Cr??ation 1:1 externe mobile"/>
												</Grid>
												<Grid item xl={6}>
													<div className="tc_text_nl"><span className="tc_text_b">Sur le web</span>, cliquez sur le bouton ???+??? de la section ???messages directs???.</div>
													<img src={require("images/pem/create_dm_web.png")} className="tc_FaqComponent_wimg_mobile" alt="Cr??ation 1:1 externe web"/>
												</Grid>
											</Grid>
										</li>
										<li>Dans la barre de recherche, renseignez l'adresse mail professionnelle de la personne que vous voulez inviter et validez.</li>
										<li>Une invitation lui est automatiquement envoy??e par e-mail. Vous serez notifi?? lorsque cette personne aura cr???? son compte, et pourrez ensuite commencer ?? ??changer.</li>
									</ul>
									<SeeMoreLinks
										onClick={this._onLocationChange}
										links={[
											{ to: "#tcq01_002", text: "Qui peut utiliser Tchap ?" },
										]}/>
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq03_005")}>
									<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Que faire si je ne souhaite pas appara??tre dans l'annuaire ?</title>
									<div className="tc_text_nl">Si vous ne souhaitez pas appara??tre dans les r??sultats de recherche d'utilisateurs, vous pouvez vous mettre sur <span className="tc_text_b">liste rouge</span> dans les Param??tres de Tchap.</div>
									<div className="tc_text_nl">Les autres utilisateurs ne pourront ainsi plus vous trouver, ni vous contacter, sauf s'ils renseignent votre adresse mail compl??te dans la barre de recherche.</div>
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq03_006")}>
									<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Comment rejoindre un salon ?</title>
									<div className="tc_text_nl"><span className="tc_text_b">Pour rejoindre un salon priv??</span>, vous devez obligatoirement ??tre invit?? par un de ses administrateurs.</div>
									<div className="tc_text_nl"><span className="tc_text_b">Pour trouver et rejoindre un salon forum</span>, vous pouvez rechercher par mots cl??s : </div>
									<Grid container className="tc_FaqComponent_grid">
										<Grid item xl={6}>
											<div className="tc_text_nl"><span className="tc_text_b">Sur mobile</span>, rendez-vous dans l'onglet "Contacts" et cliquez sur "Inviter des contacts dans Tchap"</div>
											<img src={require("images/pem/create_mobile.png")} className="tc_FaqComponent_wimg_mobile" alt="Cr??ation salon mobile"/>
										</Grid>
										<Grid item xl={6}>
											<div className="tc_text_nl"><span className="tc_text_b">Sur le web</span>, cliquez sur le bouton ???+??? de la section ???messages directs???.</div>
											<img src={require("images/pem/create_room_web.png")} className="tc_FaqComponent_wimg_mobile" alt="Cr??ation salon web"/>
										</Grid>
									</Grid>
									<div className="tc_text_nl">Vous pouvez ??galement ??tre invit?? ?? rejoindre un salon forum sur invitation d'un membre.</div>
									<SeeMoreLinks
										onClick={this._onLocationChange}
										links={[
											{ to: "#tcq04_000", text: "Cr??er et administrer un salon" },
										]}/>
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq03_007")}>
									<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Qu???est-ce qu???un contenu inappropri?? sur Tchap ?</title>
									<div className="tc_text_nl">
									Le cadre de l???usage de Tchap est fix?? par ses <a target="_blank" href="/cgu">Conditions G??n??rales d???Utilisation</a>, et notamment par leur article n??3. 
									</div>
									<div className="tc_text_nl">
									Chaque utilisateur de Tchap est tenu de respecter ces directives.
									</div>
									<div> </div>
									<div className="tc_text_nl">
									Sont notamment consid??r??s comme inappropri??s :
									</div>
									<ul>
										<li>Les contenus insultants, diffamatoires ou ind??cents</li>
										<li>Les contenus pouvant s???apparenter ?? du spam ou ?? de la publicit??</li>
										<li>Les contenus corrompus, contenant des virus</li>
										<li>La violation du secret professionnel par le partage de contenus confidentiels dans des salons inad??quats</li>
									</ul>
									<SeeMoreLinks
										onClick={this._onLocationChange}
										links={[
											{ to: "#tcq03_008", text: "Comment signaler un contenu inappropri?? sur Tchap ?" },
										        { to: "#tcq04_0021", text: "Quelles sont les responsabilit??s de l???administrateur d???un salon ?" },
										]}/>
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq03_008")}>
									<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Comment signaler un contenu inappropri?? sur Tchap ?</title>
									<div className="tc_text_nl">Lorsque vous constatez la pr??sence d???un contenu inappropri?? sur Tchap, il est recommand?? de demander ?? un administrateur ou mod??rateur du salon d'intervenir pour retirer le contenu probl??matique.</div> 
									<div className="tc_text_nl">Si n??cessaire, vous pouvez ??galement effectuer un signalement en cliquant sur le message, puis sur ?????????, puis sur ???Signaler le contenu???.</div>
									<div className="tc_text_nl">Vous pouvez ??galement ??crire un e-mail ?? <GenericLink className="tc_FaqComponent_link" to={"mailto:" + t("links.support")}>{t("links.support")}</GenericLink> en pr??cisant les motifs de votre signalement.</div>
									<SeeMoreLinks
										onClick={this._onLocationChange}
										links={[
											{ to: "#tcq03_009", text: "Que se passe-t-il lorsque je signale un contenu inappropri?? sur Tchap ?" },
											{ to: "#tcq04_0021", text: "Quelles sont les responsabilit??s de l???administrateur d???un salon ?" },

										]}/>
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq03_009")}>
									<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Que se passe-t-il lorsque je signale un contenu inappropri?? sur Tchap ?</title>
									<div className="tc_text_nl">Tout d??pend du salon duquel provient le contenu signal??.</div>
									<div> </div>
									<div className="tc_text_nl"><span className="tc_text_b">Si le salon est priv??</span></div>
									<div className="tc_text_nl">Il vous sera recommand?? de contacter les administrateurs ou mod??rateurs du salon pour demander la suppression des contenus jug??s probl??matiques.</div>
									<div className="tc_text_nl">Les coordonn??es d???un r??f??rent ?? contacter au sein de votre administration vous seront ??galement transmises.</div>
     									<div> </div>
									<div className="tc_text_nl"><span className="tc_text_b">Si le salon est un Forum public</span></div>
									<ol>
										<li>L?????quipe Tchap contacte directement les administrateurs et mod??rateurs du forum pour demander une mise en conformit?? du salon avec les CGU.</li>
										<li>Sans mise en conformit?? dans les d??lais indiqu??s, l?????quipe Tchap poste un message de rappel ?? l???ordre aux utilisateurs sur le forum.</li>
										<li>Si malgr?? cela, le salon n???est pas mis en conformit??, l?????quipe contacte le correspondant Tchap de l???administration dont d??pend le forum, afin de lui demander la nomination d???un nouvel administrateur.</li>
										<li>En l???absence de r??ponse du correspondant, ou ?? sa demande, et apr??s en avoir inform?? les utilisateurs, le forum peut ??ventuellement ??tre ferm??.</li>
									</ol>
									<SeeMoreLinks
										onClick={this._onLocationChange}
										links={[
											{ to: "#tcq03_008", text: "Comment signaler un contenu inappropri?? sur Tchap ?" },
										       	{ to: "#tcq04_0021", text: "Quelles sont les responsabilit??s de l???administrateur d???un salon ?" },

										]}/>
								</GenericAccordion>
								<div id="tcq04_000" className="tc_FaqComponent_section">Cr??er et administrer un salon</div>
								<GenericAccordion {...this._generateProps("tcq04_001")}>
									<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Comment cr??er un salon ?</title>
									<Grid container className="tc_FaqComponent_grid">
										<Grid item xl={2}>
											<img src={require("images/pem/avatar_private.png")} alt="Salon Priv??"/>
										</Grid>
										<Grid item xl={10}>
											<span className="tc_text_b">Cr??er un Salon Priv??</span>
											<ul className="tc_list_nobullet">
												<li>Pour que le salon ne soit trouvable et accessible que sur invitation de votre part, choisissez ???Salon Priv????? ou ???Salon priv?? ouvert aux externes??? si vous souhaitez inviter des partenaires externes ?? l'administration.</li>
												<li>Les salons priv??s sont particuli??rement recommand??s pour coordonner le travail d'??quipe.</li>
											</ul>
										</Grid>
									</Grid>
									<Grid container className="tc_FaqComponent_grid">
										<Grid item xl={2}>
											<img src={require("images/pem/avatar_forum.png")} alt="Salon Forum"/>
										</Grid>
										<Grid item xl={10}>
											<span className="tc_text_b">Cr??er un Salon Forum</span>
											<ul className="tc_list_nobullet">
												<li>Pour que le salon soit visible et ouvert ?? tous les utilisateurs de Tchap (sauf partenaires externes), choisissez ???Salon Forum???.</li>
												<li>Le Salon Forum est recommand?? s'il vise ?? aborder des sujets transverses susceptibles d'int??resser d'autres utilisateurs de Tchap.</li>
												<li>Veillez ?? ce que le nom du Salon Forum soit le plus explicite possible pour que les utilisateurs puissent le trouver facilement.</li>
											</ul>
										</Grid>
									</Grid>
									<div className="tc_text_nl">Une fois que votre salon est cr????, vous en ??tes l'administrateur par d??faut.</div>
									<SeeMoreLinks
										onClick={this._onLocationChange}
										links={[
											{ to: "#tcq04_002", text: "Qu'est-ce qu'un administrateur ?" },
										]}/>
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq04_002")}>
									<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Qu'est-ce qu'un administrateur ?</title>
									<div className="tc_text_nl">Par d??faut, le cr??ateur d'un salon est son administrateur.</div>
									<div className="tc_text_nl">Un administrateur peut :</div>
									<ul>
										<li>inviter des personnes ?? rejoindre un salon</li>
										<li>retirer des personnes d'un salon</li>
										<li>supprimer des messages</li>
										<li>changer le nom du salon</li>
									</ul>
									<div className="tc_text_nl">Un administrateur peut aussi d??signer d'autres administrateurs et mod??rateurs, et partager certains pouvoirs avec eux, depuis les param??tres du Salon, dans les R??les et Permissions.</div>
									<SeeMoreLinks
										onClick={this._onLocationChange}
										links={[
											{ to: "#tcq04_004", text: "Pourquoi est-il indispensable de nommer plusieurs administrateurs par salon et comment proc??der ?" },
										]}/>
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq04_0021")}>
									<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Quelles sont les responsabilit??s de l???administrateur d???un salon ?</title>
									<div className="tc_text_nl">
									En cas de violation des <a target="_blank" href="/cgu">Conditions G??n??rales d???Utilisation de Tchap</a> au sein d???un salon, 

									notamment en cas de diffusion de contenus inappropri??s, les administrateurs et mod??rateurs du salon ont le devoir d???intervenir :
									</div>
									<ul>
										<li>en rappelant ?? l???ordre les utilisateurs concern??s</li>
										<li>en supprimant les contenus non conformes</li>
										<li>en bannissant les utilisateurs concern??s du salon en cas de r??cidive</li>
									</ul>
									<div className="tc_text_nl">Si un salon n???est pas administr?? en conformit?? avec les CGU de Tchap, une intervention de l???administration d???origine de ses administrateurs peut ??tre sollicit??e, et la fermeture du salon peut ??tre envisag??e.</div>
									<SeeMoreLinks
										onClick={this._onLocationChange}
										links={[
											{ to: "#tcq03_007", text: "Qu???est-ce qu???un contenu inappropri?? sur Tchap ?" },
										]}/>
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq04_003")}>
									<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Comment inviter des participants ?? rejoindre un salon ?</title>
									<div className="tc_text_nl">Pour les salons priv??s, seuls les administrateurs peuvent inviter des utilisateurs ?? rejoindre la conversation.</div>
									<div className="tc_text_nl">Pour les salons publics, l'invitation n'est pas indispensable mais peut ??tre utilis??e pour inviter des utilisateurs ?? rejoindre le salon.</div>
									<div className="tc_text_nl">Pour envoyer des invitations, rendez-vous dans les param??tres du salon, et cliquez sur "inviter dans ce salon". Plusieurs possibilit??s s'offrent alors ?? vous :</div>
									<ul>
										<li>Inviter les membres un par un en les recherchant dans l'annuaire des utilisateurs de Tchap</li>
										<li>Inviter plusieurs membres ?? la fois en important un fichier .txt ou .csv contenant les adresses e-mail des interlocuteurs vis??s.</li>
									</ul>
									<div className="tc_text_nl">Vous pouvez ??galement partager le lien d'un salon pour inviter des utilisateurs ?? le rejoindre.</div>
									<div className="tc_text_nl">S'il s'agit d'un salon priv??, assurez-vous au pr??alable d'avoir autoris?? l'acc??s au salon par lien (dans les param??tres du salon). Attention : si cette option est activ??e, chaque personne disposant du lien pourra acc??der au salon priv??.</div>
									<SeeMoreLinks
										onClick={this._onLocationChange}
										links={[
											{ to: "#tcq04_004", text: "Pourquoi est-il indispensable de nommer plusieurs administrateurs par salon et comment proc??der ?" },
										]}/>
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq04_004")}>
									<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Pourquoi est-il indispensable de nommer plusieurs administrateurs par salon et comment proc??der ? </title>
									<div className="tc_text_nl">Il est fortement recommand?? de nommer plusieurs administrateurs et mod??rateurs parmi les participants d'un salon.</div>
									<div className="tc_text_nl">Ainsi, en cas de d??part d'un administrateur, le salon ne se retrouvera pas gel??.</div>
									<div className="tc_text_nl">En effet, seul un administrateur a le pouvoir de nommer un autre administrateur. Si un salon se retrouve sans administrateur, plus personne n'a donc le pouvoir de l'administrer, et cette situation est irr??versible. Dans le cas d'un salon priv??, cela rend notamment impossible d'y inviter de nouveaux membres.</div>
									<div className="tc_text_nl">Pour nommer un administrateur, rendez-vous dans la liste des membres du salon.</div>
									<div className="tc_text_nl">Cliquez sur le membre que vous souhaitez, puis : </div>
									<ul>
										<li>Sur le web, cliquez sur "Rang" et s??lectionnez "Administrateur"</li>
										<li>Sur mobile, cliquez sur "Nommer administrateur"</li>
									</ul>
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq04_005")}>
									<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Comment retirer une personne d'un salon ?</title>
									<div className="tc_text_nl">Seul un administrateur ou un mod??rateur peut retirer un membre d'un salon. Pour ce faire, rendez-vous dans la liste des membres du salon et cliquez sur le nom de la personne : </div>
									<ul>
										<li>Pour qu'il lui soit impossible de revenir, choisissez "bannir"</li>
										<li>Pour lui laisser la possibilit?? de revenir, choisissez "exclure" ou "expulser"</li>
									</ul>
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq04_006")}>
									<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Comment supprimer un salon ?</title>
									<div className="tc_text_nl">Si le salon est public, il faut d'abord le transformer en salon priv?? pour le retirer de la liste des salons forums.</div>
									<div className="tc_text_nl">Pour fermer compl??tement un salon, un administrateur doit exclure tous les participants puis le quitter lui-m??me. Le salon ne sera alors plus visible, et les invitations accept??es ult??rieurement ne fonctionneront pas.</div>
								</GenericAccordion>

								<div id="tcq05_000" className="tc_FaqComponent_section">S??curit?? des ??changes</div>
								<GenericAccordion {...this._generateProps("tcq05_001")}>
									<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Comment la confidentialit?? des ??changes est-elle garantie ?</title>
									<div className="tc_text_nl">Tous les messages ??chang??s sur Tchap (hors Salons Forums) sont chiffr??s de bout en bout. Concr??tement, cela signifie que jamais personne d'autre que les auteurs et destinataires des messages n'y ont acc??s. </div>
									<div className="tc_text_nl">Comment cela fonctionne-t-il ? </div>
									<div className="tc_text_nl">Chaque utilisateur de Tchap dispose de cl??s de chiffrement appel??es Cl??s Tchap qui permettent de chiffrer et de d??chiffrer les messages re??us et envoy??s. Ces cl??s sont stock??es sur vos appareils, et se renouvellent r??guli??rement de fa??on automatique (?? chaque nouvelle connexion par exemple).</div>
									<div className="tc_text_nl">Cela signifie que m??me en cas de vol de vos identifiants ou d'interception de vos messages, vos ??changes restent ind??chiffrables.</div>
									<div className="tc_text_nl">Pour vous assurer que vos messages restent toujours lisibles pour vous, pensez ?? exporter et sauvegarder vos Cl??s Tchap ?? chaque fois que vous envisagez une d??connexion !</div>
									<SeeMoreLinks
										onClick={this._onLocationChange}
										links={[
											{ to: "#tcq07_001", text: "Comment m'assurer de toujours pouvoir lire mes messages ?" },
											{ to: "#tcq08_000", text: "D??chiffrement impossible de mes messages : comment y rem??dier ?" },
										]}/>
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq05_002")}>
									<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />O?? les donn??es de Tchap sont-elles stock??es ?</title>
									<div className="tc_text_nl">Tchap est con??ue et h??berg??e en France. L'Etat en ma??trise donc l'infrastructure et les d??veloppements, sp??cialement pens??s pour r??pondre aux besoins des agents publics. N'h??sitez pas ?? consulter nos <GenericLink onClick={this._onLocationChange} to="/cgu" className="tc_FaqComponent_link">CGU</GenericLink> pour en savoir plus.</div>
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq05_003")}>
									<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Puis-je utiliser Tchap pour ??changer des informations confidentielles ?</title>
									<div className="tc_text_nl">Tchap garantit la confidentialit?? des ??changes au sein de la messagerie.</div>
									<div className="tc_text_nl">Cependant, Tchap ne s??curise pas votre t??l??phone, qui reste expos?? aux menaces informatiques.</div>
									<div className="tc_text_nl">L'??change d'informations et de documents sensibles ne doit donc pas ??tre effectu?? sur Tchap, m??me dans une conversation ?? deux. Pour cela, vous devez utiliser les canaux et appareils s??curis??s mis ?? disposition par votre direction.</div>
									<SeeMoreLinks
										onClick={this._onLocationChange}
										links={[
											{ to: "#tcq05_001", text: "Comment la confidentialit?? des ??changes est-elle garantie ?" },
										]}/>
								</GenericAccordion>

								<div id="tcq07_000" className="tc_FaqComponent_section">Gestion des Cl??s Tchap (cl??s de chiffrement)</div>
								<GenericAccordion {...this._generateProps("tcq07_001")}>
									<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Comment m'assurer de toujours pouvoir lire mes messages ?</title>
									<div className="tc_text_nl">
										<div>
											Apr??s une nouvelle connexion (lorsque vous entrez votre adresse mail professionnelle et votre mot de passe), vous ne pouvez pas
											lire les messages ??chang??s auparavant.
										</div>
										<div>
											C'est une mesure de s??curit?? : si une personne vole vos identifiants et se connecte ?? votre place, il
											lui est ainsi impossible de lire vos conversations.
										</div>
										<div className="tc_FaqComponent_subtitle">Voici quelques bonnes pratiques pour vous assurer de toujours pouvoir lire vos messages :</div>
										<div className="tc_FaqComponent_subtitle">Evitez de vous d??connecter de Tchap</div>
										<div>
											<span className="tc_text_b">Votre t??l??phone mobile</span> garde automatiquement votre connexion, m??me lorsque vous l'??teignez ou fermez l'application Tchap.
										</div>
										<div>
											<span className="tc_text_b">Votre navigateur web</span> provoque peut-??tre la d??connexion automatique de Tchap lorsque vous le fermez :
											dans ce cas, allez dans les r??glages du navigateur et autorisez la conservation des donn??es de navigation pour Tchap. Une intervention de vos services informatiques peut ??tre n??cessaire.
										</div>
										<div>
											<span class="tc_text_i">Si vous souhaitez mettre Tchap ???en pause??? (lors de vos cong??s par exemple), vous pouvez d??sactiver les notifications sans avoir ?? vous d??connecter.</span>
										</div>
										<div className="tc_FaqComponent_subtitle">Gardez au moins deux appareils connect??s ?? Tchap</div>
										<div>
											Les appareils peuvent partager entre eux les Cl??s Tchap (cl??s de chiffrement) qui permettent de d??verrouiller vos messages.
										</div>
										<div>
											Si vos messages sont verrouill??s sur votre ordinateur, mais qu'ils sont lisibles sur votre t??l??phone, alors vous pouvez utiliser votre t??l??phone pour transmettre les cl??s ?? votre ordinateur. Et vice et versa.
										</div>
										<SeeMoreLinks
											onClick={this._onLocationChange}
											links={[
												{ to: "#tcq08_001", text: "Comment d??verrouiller mes messages si j'ai un autre appareil connect?? ?? Tchap ?" },
											]}/>

										<div className="tc_FaqComponent_subtitle">Sauvegardez manuellement vos Cl??s Tchap (cl??s de chiffrement) avant toute d??connexion</div>
										<div>
											Si vous envisagez de vous d??connecter, sauvegarder vos Cl??s Tchap vous permettra d??verrouiller vos messages lors de votre reconnexion.
										</div>
										<SeeMoreLinks
											onClick={this._onLocationChange}
											links={[
												{ to: "#tcq07_002", text: "Comment sauvegarder manuellement mes Cl??s Tchap (cl??s de chiffrement) ?" },
											]}/>
									</div>
								</GenericAccordion>

								<GenericAccordion {...this._generateProps("tcq07_002")}>
									<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Comment sauvegarder manuellement mes Cl??s Tchap (cl??s de chiffrement) ?</title>
									<div className="tc_text_nl">
										<div className="tc_FaqComponent_subtitle">Pour sauvegarder vos cl??s :</div>
										<div>
										<span class="tc_text_i">(Action ?? effectuer pr??alablement ?? une d??connexion ou une r??initialisation de mot de passe pour ne pas perdre acc??s ?? vos messages)</span>
										</div>
										<ol>
											<li>Rendez-vous dans les param??tres de Tchap :
												<div>
													<span className="tc_text_b">Sur le web :</span> section ???S??curit?? et Vie Priv??e??? >> ???Exporter les cl??s de chiffrement de salon???
												</div>
												<div>
													<img src={require("images/faq/export_keys_web.png")}
																alt="export des cl??s sur l'application web"
																className="tc_FaqComponent_border"/>
												</div>
												<div>
													<span className="tc_text_b">Sur mobile :</span> section ???Chiffrement??? >> ???Exporter les cl??s???
												</div>
												<div>
													<img src={require("images/faq/export_keys_mobile.jpeg")}
															alt="export des cl??s sur l'application mobile"
															width="400px"
															className="tc_FaqComponent_border"/>
												</div>
											</li>
											<li>Choisissez un mot de passe (diff??rent de votre mot de passe Tchap) : celui-ci vous sera demand?? pour d??verrouiller vos messages lors de votre reconnexion.</li>
											<li>Enregistrez le fichier ?? un emplacement o?? vous pourrez le retrouver. Ce fichier s'appelle ???Tchap keys??? par d??faut, mais vous pouvez le renommer.</li>
											<li>Exportation r??ussie, vos Cl??s Tchap sont sauvegard??es ! Vous pourrez les importer lors de votre reconnexion pour d??verrouiller vos messages.</li>
										</ol>
										<SeeMoreLinks
											onClick={this._onLocationChange}
											links={[
												{ to: "#tcq07_003", text: "Comment importer manuellement mes Cl??s Tchap (cl??s de chiffrement) ?" },
											]}/>
									</div>
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq07_003")}>
									<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Comment importer manuellement mes Cl??s Tchap (cl??s de chiffrement) ? </title>
									<div className="tc_text_nl">
										<div className="tc_FaqComponent_subtitle">Pour importer vos cl??s si vous les avez pr??alablement sauvegard??es :</div>
										<ol>
											<li>Rendez-vous dans les param??tres de Tchap :
												<div>
													<span className="tc_text_b">Sur le web :</span> section ???S??curit?? et Vie Priv??e??? >> ???Importer les cl??s de chiffrement de bout en bout???
												</div>
												<div>
													<img src={require("images/faq/export_keys_web.png")}
																alt="export des cl??s sur l'application web"
																className="tc_FaqComponent_border"/>
												</div>
												<div>
													<span className="tc_text_b">Sur mobile :</span> section ???Chiffrement??? >> ???Importer les cl??s???
												</div>
												<div>
													<img src={require("images/faq/export_keys_mobile.jpeg")}
															alt="export des cl??s sur l'application mobile"
															width="400px"
															className="tc_FaqComponent_border"/>
												</div>
											</li>
											<li>S??lectionnez le fichier que vous avez pr??alablement sauvegard??. Par d??faut, ce fichier s'appelle ???Tchap keys???.</li>
											<li>Entrez le mot de passe que vous avez choisi au moment de la sauvegarde.</li>
											<li>Importation r??ussie, vos messages sont d??verrouill??s et de nouveau lisibles.</li>
										</ol>
									</div>
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq07_004")}>
									<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Pourquoi mes messages sont-ils verrouill??s ? </title>
									<div className="tc_text_nl">
										<div>
											Apr??s une nouvelle connexion (lorsque vous entrez votre adresse mail professionnelle et votre mot de passe), vous ne pouvez pas lire les messages ??chang??s auparavant.
										</div>
										<div>
											C'est une mesure de s??curit?? : si une personne vole vos identifiants et se connecte ?? votre place, il lui est ainsi impossible de lire vos messages parce qu'ils sont verrouill??s.
										</div>
										<div>
												Vous pouvez d??verrouiller vos messages pour les lire gr??ce ?? vos Cl??s Tchap (cl??s de chiffrement).
										</div>

										<SeeMoreLinks
											onClick={this._onLocationChange}
											links={[
												{ to: "#tcq08_001", text: "Comment d??verrouiller mes messages si j'ai un autre appareil connect?? ?? Tchap ?" },
												{ to: "#tcq08_002", text: "Comment d??verrouiller mes messages si j'ai pr??alablement sauvegard?? mes Cl??s Tchap (cl??s de chiffrement) ?" },
												{ to: "#tcq08_003", text: "Comment d??verrouiller mes messages si je ne suis pas connect?? ?? Tchap sur un autre appareil et que je n'ai pas pr??alablement sauvegard?? mes Cl??s Tchap (cl??s de chiffrement) ?" },
											]}/>
									</div>
								</GenericAccordion>

								<div id="tcq08_000" className="tc_FaqComponent_section">???D??chiffrement impossible??? de mes messages : comment y rem??dier ?</div>
								<GenericAccordion {...this._generateProps("tcq08_001")}>
									<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Si j'ai un autre appareil d??j?? connect?? ?? Tchap</title>
									<div className="tc_text_nl">
										<div className="tc_FaqComponent_subtitle">Vous ??tes d??j?? connect?? ?? Tchap depuis un autre appareil sur lequel vos messages sont lisibles ? </div>
										<div>Vous pouvez d??verrouiller vos messages comme suit :</div>
										<ol>
											<li>
												Sur l'appareil sur lequel les messages sont verrouill??s, cliquez sur ???Renvoyer??? (en dessous du texte qui s'affiche ?? la place de vos messages)
											</li>
											<div>
													<img src={require("images/faq/resend_request.png")}
																alt="texte qui s'affiche dans l'appli : renvoyer"
																className="tc_FaqComponent_border"
																width="400px"/>
											</div>
											<li>
												Sur l'appareil sur lequel les messages sont lisibles, suivez les indications qui apparaissent automatiquement pour partager les Cl??s Tchap (cl??s de chiffrement) entre vos appareils
											</li>
										</ol>
										<div>
											Une fois les Cl??s Tchap partag??es entre vos appareils, vos messages sont d??verrouill??s et deviennent lisibles au fur et ?? mesure.
										</div>
										<SeeMoreLinks
											onClick={this._onLocationChange}
											links={[
												{ to: "#tcq07_004", text: "Pourquoi mes messages sont-ils verrouill??s ?" },
												{ to: "#tcq07_001", text: "Comment m'assurer de toujours pouvoir lire mes messages ?" },
											]}/>
									</div>
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq08_002")}>
									<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Si j'ai pr??alablement sauvegard?? mes Cl??s Tchap (cl??s de chiffrement)</title>
									<div className="tc_text_nl">
										<div className="tc_text_b">
											Vous avez pr??alablement sauvegard?? vos Cl??s Tchap sur l'appareil que vous utilisez en ce moment ?
										</div>
										<div>
											Vous pouvez d??verrouiller vos messages comme suit :
										</div>
										<ol>
											<li>
												<span className="tc_text_b">Allez dans les Param??tres</span> de Tchap :
												<ul>
													<li>
														Sur ordinateur, allez dans Param??tres > S??curit?? & Vie Priv??e et cliquez sur ???Importez vos Cl??s Tchap depuis le fichier sauvegard?????.
													</li>
													<li>
														Sur Android, allez dans Param??tres > S??curit?? & Vie Priv??e et cliquez sur ???Importer les cl??s de chiffrement des conversations???.
													</li>
													<li>
														Sur iOS, allez dans Param??tres > S??curit?? & Vie Priv??e et cliquez sur ???Importer les Cl??s???.
													</li>
												</ul>
											</li>
											<li>
											  <span className="tc_text_b">S??lectionnez le fichier ???Tchap Keys??? (ce fichier portera un autre nom si vous l'avez renomm?? lors de la sauvegarde)</span>
											</li>
											<li>
											  <span className="tc_text_b">Entrez votre mot de passe</span> que vous avez cr???? pour sauvegarder vos Cl??s Tchap (cl?? de chiffrement).
											</li>
										</ol>
										<div>
											Vos Cl??s Tchap d??verouillent automatiquement vos messages qui seront alors ?? nouveau lisibles au fur ?? et mesure.
										</div>
										<SeeMoreLinks
											onClick={this._onLocationChange}
											links={[
												{ to: "#tcq07_004", text: "Pourquoi mes messages sont-ils verrouill??s ?" },
												{ to: "#tcq07_001", text: "Comment m'assurer de toujours pouvoir lire mes messages ?" },
											]}/>
									</div>
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq08_003")}>
									<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Si je ne suis pas encore connect?? ?? Tchap sur un autre appareil et que je n'ai pas pr??alablement sauvegard?? mes Cl??s Tchap (cl??s de chiffrement)</title>
									<div className="tc_text_nl">
										<div className="tc_text_b">
											Vous n'??tes pas connect?? ?? Tchap sur un autre appareil et vous n'avez pas pr??alablement sauvegard?? vos Cl??s Tchap ?
										</div>
										<div>
											Par mesure de s??curit??, vos messages resteront verrouill??s si vous n'avez pas vos Cl??s Tchap (cl??s de chiffrement).
										</div>
										<div>
											En revanche, vos nouveaux messages ne le seront pas : vous pourrez lire tous vos nouveaux messages.
										</div>
										<SeeMoreLinks
											onClick={this._onLocationChange}
											links={[
												{ to: "#tcq07_004", text: "Pourquoi mes messages sont-ils verrouill??s ?" },
												{ to: "#tcq07_001", text: "Comment m'assurer de toujours pouvoir lire mes messages ?" },
											]}/>
									</div>
								</GenericAccordion>

								<div id="tcq06_000" className="tc_FaqComponent_section">En cas de probl??me...</div>
								<GenericAccordion {...this._generateProps("tcq06_001")}>
									<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Je ne re??ois pas de notifications : que faire ?</title>
									<div className="tc_text_nl tc_text_b">En cas de non r??ception des notifications avertissant de l'arriv??e de nouveaux messages, voici la liste des contr??les ?? effectuer.</div>
									<div className="tc_text_nl tc_text_b">Sur votre appareil mobile :</div>
									<ul className="tc_list_decimal">
										<li><span className="tc_text_b">V??rifier l'??tat du mode "Ne pas d??ranger"</span>
											<Grid container className="tc_FaqComponent_grid">
												<Grid item xl={6}>
													<ul className="tc_list_alpha tc_FaqComponent_list_level_2">
														<li>Allez dans les param??tres g??n??raux de votre t??l??phone;</li>
														<li>Puis dans "son";</li>
														<li>V??rifier que le mode "Ne pas d??ranger" est d??sactiv??.</li>
													</ul>
												</Grid>
												<Grid item xl={6}>
													<img src={require("images/faq/npd.png")} className="tc_FaqComponent_himg_mobile" alt="Ne pas d??ranger"/>
												</Grid>
											</Grid>
										</li>
										<li><span className="tc_text_b">V??rifier la consommation en arri??re-plan</span>
											<Grid container className="tc_FaqComponent_grid">
												<Grid item xl={6}>
													<ul className="tc_list_alpha tc_FaqComponent_list_level_2">
														<li>Allez dans les param??tres g??n??raux de votre t??l??phone;</li>
														<li>Allez dans la section "Applis et notifications";</li>
														<li>Cliquez sur l'application Tchap, vous arrivez sur une fen??tre o?? il vous sera propos??, entre autres, de d??sinstaller ou de forcer l'arr??t de l'application;</li>
														<li>Cliquez sur "Donn??es mobiles et Wi-Fi";</li>
														<li>V??rifiez que la consommation des "Donn??es en arri??re-plan" est bien activ??e.</li>
													</ul>
												</Grid>
												<Grid item xl={6}>
													<img src={require("images/faq/dap.png")} className="tc_FaqComponent_himg_mobile" alt="Donn??es en ari??re plan"/>
												</Grid>
											</Grid>
										</li>
										<li><span className="tc_text_b">Effectuer une r??paration du service des notifications:</span>
											<ul className="tc_list_alpha tc_FaqComponent_list_level_2">
												<li>Allez dans les param??tres g??n??raux de Tchap;</li>
												<li>Allez dans la section "Notifications";</li>
												<li>Puis lancez "R??soudre les probl??mes de notifications".</li>
											</ul>
											<Grid container className="tc_FaqComponent_grid">
												<Grid item xl={6}>
													<img src={require("images/faq/notif_mobile_1.png")} className="tc_FaqComponent_himg_mobile" alt="R??parer les notifications mobile 1"/>
												</Grid>
												<Grid item xl={6}>
													<img src={require("images/faq/notif_mobile_2.png")} className="tc_FaqComponent_himg_mobile" alt="R??parer les notifications mobile 2"/>
												</Grid>
											</Grid>
										</li>
										<li><span className="tc_text_b">Forcer l'arr??t de l'application et red??marrer le t??l??phone</span>
											<ul className="tc_list_alpha tc_FaqComponent_list_level_2">
												<li>Allez dans les param??tres g??n??raux de votre t??l??phone;</li>
												<li>Allez dans la section "Applis et notifications" ;</li>
												<li>Cliquez sur l'application Tchap ;</li>
												<li>"Forcer l'arr??t" de l'application;</li>
												<li>Red??marrez votre t??l??phone.</li>
											</ul>
										</li>
									</ul>
									<br /><br /><br />
									<div className="tc_text_nl tc_text_b">Sur le Web :</div>
									<ul className="tc_list_decimal">
										<li><span className="tc_text_b">V??rifier des param??trages de vos notifications</span>
											<ul className="tc_list_alpha tc_FaqComponent_list_level_2">
												<li>
													Rendez-vous sur la page web de Tchap et connectez-vous:<GenericLink onClick={this._onLocationChange} to="https://www.tchap.gouv.fr">https://www.tchap.gouv.fr</GenericLink>;
													<div className="tc_text_i">NB : S'il s'agit de votre premi??re connexion sur le web (ou que vos historiques de navigation ont ??t?? effac??s), vous pouvez partager vos Cl??s Tchap ?? l'aide de votre t??l??phone portable pour d??chiffrer les messages pr??alablement re??us</div>
												</li>
												<li>Allez dans les param??tres g??n??raux de Tchap;</li>
												<li>Allez dans la section "Notifications";</li>
												<li>
													V??rifiez que les param??trages correspondent ?? l'image ci-dessous (param??trage par d??faut) :
													<Grid container className="tc_FaqComponent_grid">
														<Grid item xl={6}>
															<img src={require("images/faq/notif_web_1.png")} className="tc_FaqComponent_limg_mobile" alt="R??parer les notifications web 1"/>
														</Grid>
														<Grid item xl={6}>
															<div className="tc_text_nl">Veillez ?? ce qu'aucune option ne soit sur ?? d??sactiv?? ??, hormis la derni??re. Vous pouvez ensuite choisir librement si vous souhaitez que les notifications soient sur ?? Activ?? ?? ou ?? Bruyant ??.</div>
														</Grid>
													</Grid>
												</li>
											</ul>
										</li>
										<li><span className="tc_text_b">V??rifier le param??trage des salons:</span>
											<ul className="tc_list_alpha tc_FaqComponent_list_level_2">
												<li>Rendez-vous sur l'??cran g??n??ral de Tchap (o?? figure la liste de vos conversations sur la colonne de gauche)</li>
												<li>Cliquez sur les trois petits points ?? droite d'un ou plusieurs salons (ceux pour lesquels vous semblez ne plus recevoir de notifications)</li>
												<li>V??rifiez que les param??trages correspondent ?? l'image ci-dessous :
													<Grid container className="tc_FaqComponent_grid">
														<Grid item xl={4}>
															<img src={require("images/faq/notif_web_2.png")} className="tc_FaqComponent_wimg_mobile" alt="R??parer les notifications web 2"/>
														</Grid>
														<Grid item xl={8}>
															<div className="tc_text_nl tc_text_i">NB : L'option "Seulement les mentions" n'est pas support??e pour les salons priv??s dans la version mobile de Tchap (Android et iOS).</div>
														</Grid>
													</Grid>
												</li>
											</ul>
										</li>
									</ul>
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq06_003")}>
									<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Que faire si je ne re??ois pas l'e-mail de cr??ation de compte ?</title>
									<div className="tc_text_nl">Voici quelques v??rifications que vous pouvez effectuer :</div>
									<ul>
										<li>V??rifiez votre dossier "courriers ind??sirables", "pourriels" ou "spams"</li>
										<li>V??rifiez que vous ne poss??dez pas d??j?? un compte Tchap avec cette adresse mail, par exemple en faisant une demande de r??initialisation de mot de passe sur Tchap</li>
										<li>V??rifiez que votre compte a bien ??t?? cr????, en recommen??ant votre proc??dure d'inscription</li>
										<li>Contactez vos services informatiques pour vous assurer que les e-mails de Tchap ne sont pas bloqu??s</li>
									</ul>
									<div className="tc_text_nl">Si le probl??me persiste, n'h??sitez pas ?? contacter le support de Tchap : <GenericLink className="tc_FaqComponent_link" to={"mailto:" + t("links.support")}>{t("links.support")}</GenericLink></div>
								</GenericAccordion>
								<GenericAccordion {...this._generateProps("tcq06_004")}>
									<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Mon compte a expir?? : que faire ?</title>
									<div className="tc_text_nl">Tous les 3 mois, vous recevez un e-mail de Tchap avec un lien sur lequel cliquer pour garder votre compte actif.</div>
									<div className="tc_text_nl">Si vous d??passez le d??lai imparti, votre compte se d??sactive automatiquement.</div>
									<div className="tc_text_nl">Cette situation n'est cependant pas irr??versible. Vous pouvez r??activer votre compte depuis Tchap en demandant l'envoi d'un nouvel e-mail de r??activation.</div>
									<div className="tc_text_nl">Attention : toute nouvelle demande d'e-mail de r??activation annule et remplace le pr??c??dent e-mail. Veillez ?? bien utiliser le dernier e-mail de r??activation re??u.</div>
									<SeeMoreLinks
											onClick={this._onLocationChange}
											links={[
												{ to: "#tcq02_002", text: "Pourquoi dois-je renouveler mon compte tous les 3 mois ?" },
											]}/>
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
