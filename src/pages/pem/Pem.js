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
					&#10004;&nbsp;&nbsp;Lien copi??
				</Popper>
				<TopBar/>
				<Container maxWidth="lg">
					<Grid container className="tc_Pem_topbar">
						<Grid item xs={12} className="tc_Pem_Container">

							<div className="tc_Pem_Intro_title">Prise en main de Tchap</div>
							<div className="tc_Pem_Intro_subtitle">Vous ??tes nouvellement inscrit sur Tchap ? Bienvenue !</div>
							<div className="tc_Pem_Intro_subtitle">
								Si ce n???est pas encore fait, n???h??sitez pas ?? t??l??charger l???application <GenericLink data-probe-name="android" onClick={this._hookProbe} className="tc_Pem_link" to={"https://play.google.com/store/apps/details?id=fr.gouv.tchap.a"}>Android</GenericLink> ou <GenericLink data-probe-name="ios" onClick={this._hookProbe} className="tc_Pem_link" to={"https://apps.apple.com/fr/app/tchap/id1446253779"}>iOS</GenericLink> depuis votre mobile, ou bien ?? ouvrir <GenericLink data-probe-name="web" onClick={this._hookProbe} className="tc_Pem_link" to={"https://www.tchap.gouv.fr/"}>Tchap sur le navigateur</GenericLink> de votre ordinateur.
							</div>
							<div className="tc_Pem_Intro_subtitle">Nous avons con??u ce guide pour vous accompagner dans la prise en main de votre compte.</div>
							<div className="tc_Pem_Intro_subtitle">C'est parti !</div>

							<ul className="tc_Pem_Menu">
								<li><GenericLink data-probe-name="menu-demarrer" onClick={this._onLocationChange} className="tc_Pem_Menu_item" to="#tcp01_001">Quelques conseils pour bien d??marrer...</GenericLink></li>
								<li><GenericLink data-probe-name="menu-type" onClick={this._onLocationChange} className="tc_Pem_Menu_item" to="#tcp02_001">Les diff??rents types de conversation</GenericLink></li>
								<li><GenericLink data-probe-name="menu-dm" onClick={this._onLocationChange} className="tc_Pem_Menu_item" to="#tcp03_001">Rechercher des interlocuteurs pour d??marrer une conversation</GenericLink></li>
								<li><GenericLink data-probe-name="menu-forum" onClick={this._onLocationChange} className="tc_Pem_Menu_item" to="#tcp04_001">Rejoindre des Salons Forum</GenericLink></li>
								<li><GenericLink data-probe-name="menu-administrer" onClick={this._onLocationChange} className="tc_Pem_Menu_item" to="#tcp05_001">Cr??er et administrer un salon</GenericLink></li>
								<li><GenericLink data-probe-name="menu-questions" onClick={this._onLocationChange} className="tc_Pem_Menu_item" to="#tcp06_001">Des questions ?</GenericLink></li>
							</ul>

							<div className="tc_Pem_Content_title" id="tcp01_001"><LinkIcon onClick={this._handleCopyClick} className="tc_Pem_Content_title_icon" /> 1. Quelques conseils pour bien d??marrer...</div>
							<div className="tc_Pem_Content_subtitle">Choisir une photo de profil</div>
							<div className="tc_Pem_Content_text">Vous pouvez le faire depuis les param??tres g??n??raux de l???application.</div>
							<div className="tc_Pem_Content_subtitle">G??rer les notifications</div>
							<div className="tc_Pem_Content_text">Si celles de l???application sont activ??es par d??faut, pensez ?? les autoriser sur votre appareil. Un simple tour dans les r??glages de votre dispositif devrait vous permettre de vous en assurer ! Vous pouvez ??galement choisir les notifications que vous souhaitez recevoir en les activant ou d??sactivant pour chaque salon.</div>
							<div className="tc_Pem_Content_subtitle">Conserver son historique</div>
							<div className="tc_Pem_Content_text">Pour conserver l???historique de vos ??changes, nous vous recommandons de ne pas vous d??connecter de Tchap. A ce titre, nous vous invitons ?? maintenir une session active sur au moins deux appareils (un mobile et un ordinateur par exemple).</div>
							<div className="tc_Pem_Content_text">Nous vous invitons ??galement ?? exporter vos cl??s de chiffrement ?? chaque fois que vous envisagez une d??connexion (R??glages >> Exporter les cl??s de chiffrement).</div>
							<div className="tc_Pem_Content_subtitle">Pourquoi est-il important de suivre cette ultime recommandation ?</div>
							<div className="tc_Pem_Content_text">Afin de garantir la s??curit?? des ??changes au sein de l???application, Tchap a mis en place un chiffrement de bout en bout des messages ??chang??s.</div>
							<div className="tc_Pem_Content_text">Chaque utilisateur dispose donc de son propre trousseau de cl??s afin de chiffrer puis d??chiffrer automatiquement ses messages. Or, par mesure de s??curit??, ce trousseau se renouvelle r??guli??rement (notamment ?? chaque nouvelle connexion).</div>
							<div className="tc_Pem_Content_text">Si aucun de vos dispositifs ne d??tient vos cl??s de chiffrement les plus r??centes, vous serez dans l???incapacit?? de lire l???historique de vos conversations !</div>

							<div className="tc_Pem_Content_title" id="tcp02_001"><LinkIcon onClick={this._handleCopyClick} className="tc_Pem_Content_title_icon" /> 2. Les diff??rents types de conversation</div>
							<div className="tc_Pem_Content_withAvatar">
								<img src={require("images/pem/avatar_dm.png")} alt="Avatar DM"/>
								<div>
									<div className="tc_Pem_Content_subsubtitle">Les messages directs</div>
									<div className="tc_Pem_Content_text">Entre deux utilisateurs, ces conversations priv??es sont chiffr??es de bout en bout.</div>
								</div>
							</div>
							<div className="tc_Pem_Content_withAvatar">
								<img src={require("images/pem/avatar_private.png")} alt="Avatar Priv??"/>
								<div>
									<div className="tc_Pem_Content_subsubtitle">Les salons priv??s</div>
									<div className="tc_Pem_Content_text">Trouvables et accessibles uniquement sur invitation d???un de leurs administrateurs, ces conversations de groupe sont chiffr??es de bout en bout.</div>
								</div>
							</div>
							<div className="tc_Pem_Content_withAvatar">
								<img src={require("images/pem/avatar_forum.png")} alt="Avatar Forum"/>
								<div>
									<div className="tc_Pem_Content_subsubtitle">Les salons forums</div>
									<div className="tc_Pem_Content_text">Trouvables et accessibles pour tous les utilisateurs de Tchap, ces conversation de groupe publiques ne sont pas chiffr??es.</div>
								</div>
							</div>

							<div className="tc_Pem_Content_title" id="tcp03_001"><LinkIcon onClick={this._handleCopyClick} className="tc_Pem_Content_title_icon" /> 3. Rechercher des interlocuteurs pour d??marrer une conversation</div>
							<div className="tc_Pem_Content_text">L???annuaire de Tchap vous permet d???entrer en contact direct avec l???ensemble des usagers de l???application en les recherchant par leur nom ou leur adresse mail.</div>
							<div className="tc_Pem_Content_withImage_double">
								<div className="tc_Pem_Content_withImage">
									<img src={require("images/pem/create_mobile.png")}  alt="Nouveau DM mobile" height="250"/>
									<div className="tc_Pem_Content_text"><span className="tc_text_b">Sur mobile</span>, cliquez sur le bouton ???+??? en bas de l?????cran et choisissez ???nouvelle discussion???.</div>
								</div>
								<div className="tc_Pem_Content_withImage">
									<img src={require("images/pem/create_dm_web.png")}  alt="Nouveau DM web"/>
									<div className="tc_Pem_Content_text"><span className="tc_text_b">Sur le web</span>, l???annuaire se trouve en cliquant sur le bouton ???+??? de la section ???messages directs???.</div>
								</div>
							</div>
							<div className="tc_Pem_Content_text tc_text_i">NB : si vous ne souhaitez pas appara??tre dans l???annuaire, vous pouvez passer sur liste rouge en vous rendant dans les r??glages g??n??raux de l???application.</div>
							<div className="tc_Pem_Content_subtitle">Qu'est-ce qu'un ???invit?? externe??? ?</div>
							<div className="tc_Pem_Content_text">Afin de centraliser vos ??changes, vous pouvez inviter des partenaires externes ?? l'administration ?? rejoindre vos discussions sur Tchap. Ils ne pourront n??anmoins participer qu'aux conversations auxquelles ils seront express??ment invit??s, et n'auront acc??s ni ?? l'annuaire, ni aux salons forums.</div>
							<div className="tc_Pem_Content_text">
								Pour inviter un partenaire externe, recherchez l???adresse e-mail de votre interlocuteur dans l???annuaire :
								<ul>
									<li>Si cette personne utilise d??j?? Tchap, vous pourrez d??marrer la conversation</li>
									<li>Si ce n???est pas le cas, une invitation ?? cr??er un compte ???invit?? externe??? lui sera adress??e par courriel</li>
								</ul>
							</div>

							<div className="tc_Pem_Content_title" id="tcp04_001"><LinkIcon onClick={this._handleCopyClick} className="tc_Pem_Content_title_icon" /> 4. Rejoindre des Salons Forum</div>
							<div className="tc_Pem_Content_text">Pour  tirer le meilleur parti de Tchap, soyez l?? o?? se d??roulent les conversations, c???est ?? dire dans les salons forums !</div>
							<div className="tc_Pem_Content_text">
								D??couvrez-les dans l???annuaire ou essayez quelques-unes de nos recommandations :
								<ul>
									<li><GenericLink className="tc_Pem_Menu_item" to={"https://tchap.gouv.fr/#/room/#EmploipublicZIRLWUY:agent.interieur.tchap.gouv.fr"}>Emploi Public</GenericLink></li>
									<li><GenericLink className="tc_Pem_Menu_item" to={"https://tchap.gouv.fr/#/room/#ElearningetformationsT372BJM:agent.interieur.tchap.gouv.fr"}>E-learning & Formations en ligne</GenericLink></li>
									<li><GenericLink className="tc_Pem_Menu_item" to={"https://tchap.gouv.fr/#/room/#TchapretexQAD0C1J:agent.dinum.tchap.gouv.fr"}>Tchap - Retours d'exp??rience</GenericLink></li>
								</ul>
							</div>
							<div className="tc_Pem_Content_text">L'annuaire des Salons Forum vous permet d'effectuer une recherche par mots cl??s :</div>
							<div className="tc_Pem_Content_withImage_double">
								<div className="tc_Pem_Content_withImage">
									<img src={require("images/pem/create_mobile.png")}  alt="Nouveau forum mobile" height="250"/>
									<div className="tc_Pem_Content_text"><span className="tc_text_b">Sur mobile</span>, cliquez sur le bouton ???+??? en bas de l?????cran et choisissez ???acc??der ?? un salon forum???.</div>
								</div>
								<div className="tc_Pem_Content_withImage">
									<img src={require("images/pem/create_room_web.png")}  alt="Nouveau forum web"/>
									<div className="tc_Pem_Content_text"><span className="tc_text_b">Sur le web</span>, l???annuaire des salons forums se trouve en cliquant sur le bouton ???+??? de la section ???salons???.</div>
								</div>
							</div>
							<div className="tc_Pem_Content_text">Et si vous ne trouvez pas votre bonheur, n'h??sitez pas ?? cr??er un nouveau salon forum pour discuter des sujets qui vous importent !</div>

							<div className="tc_Pem_Content_title" id="tcp05_001"><LinkIcon onClick={this._handleCopyClick} className="tc_Pem_Content_title_icon" /> 5. Cr??er et administrer un salon</div>
							<div className="tc_Pem_Content_withAvatar">
								<img src={require("images/pem/avatar_private.png")}  alt="Cr??ation d'un salon priv??"/>
								<div>
									<div className="tc_Pem_Content_subsubtitle">Cr??er un Salon Priv??</div>
									<div className="tc_Pem_Content_text">Pour que le salon ne soit trouvable et accessible que sur invitation de votre part, choisissez ???Salon Priv????? ou bien ???Salon priv?? ouvert aux externes??? si vous souhaitez pouvoir y inviter des partenaires externes ?? l'administration.</div>
								</div>
							</div>
							<div className="tc_Pem_Content_withAvatar">
								<img src={require("images/pem/avatar_forum.png")}  alt="Cr??ation d'un salon forum"/>
								<div>
									<div className="tc_Pem_Content_subsubtitle">Cr??er un Salon Forum</div>
									<div className="tc_Pem_Content_text">Pour que le salon soit visible et ouvert ?? tous les utilisateurs de Tchap (sauf invit??s externes), choisissez ???Salon Forum???.</div>
								</div>
							</div>
							<div className="tc_Pem_Content_text">Une fois que votre salon est cr????, vous en ??tes l???administrateur par d??faut !</div>
							<div className="tc_Pem_Content_subtitle">Quels pouvoirs cela vous conf??re-t-il ?</div>
							<div className="tc_Pem_Content_text">
								<ul>
									<li><span className="tc_text_b">Inviter des participants : </span>dans le cas des salons priv??s, seuls les administrateurs peuvent convier des membres ?? rejoindre la conversation.</li>
									<li>
										<span className="tc_text_b">Nommer plusieurs autres administrateurs et mod??rateurs </span>parmi les participants : ceci est fortement recommand?? pour qu???un salon ne se retrouve pas ???bloqu????? sans administrateur en cas de d??part de l???un d???entre eux !
									</li>
									<li className="tc_list_nobullet">
										<span className="tc_text_i">NB : Si un salon se retrouve sans administrateur, plus personne n'aura le pouvoir de l'administrer. Dans le cas d'un salon priv??, il sera ??galement impossible d'y inviter de nouveaux membres.</span>
									</li>
									<li><span className="tc_text_b">Exclure ou bannir des participants si n??cessaire : </span>attention, le bannissement d'un membre est irr??versible.</li>
								</ul>
							</div>

							<div className="tc_Pem_Content_title" id="tcp06_001"><LinkIcon onClick={this._handleCopyClick} className="tc_Pem_Content_title_icon" /> 6. Des questions ?</div>
							<div className="tc_Pem_Content_text">La FAQ de Tchap est disponible <GenericLink className="tc_Pem_Menu_item" to={t("links.faq")}>ici</GenericLink> pour toute pr??cision suppl??mentaire.</div>
							<div className="tc_Pem_Content_text">Et si vous rencontrez des difficult??s dans l'utilisation de votre messagerie, n'h??sitez pas ?? contacter le support !</div>
							<GenericLink className="tc_Pem_Menu_item" to={"mailto:" + t("links.support")}>{t("links.support")}</GenericLink>
							<br /><br /><br /><br />
							<div className="tc_Pem_Content_text tc_text_right">A tr??s vite sur Tchap !</div>
							<div className="tc_Pem_Content_text tc_text_right">L'??quipe Tchap</div>
							<div className="tc_Pem_Content_text tc_text_b tc_text_right">NB : Donnez-nous votre avis sur ce guide <GenericLink data-probe-name="satisfaction" onClick={this._hookProbe} className="tc_Pem_Menu_item" to={"https://xwfozb619ea.typeform.com/to/Uso2I4Ze"}>ici</GenericLink> et aidez-nous ?? l'am??liorer !</div>
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
