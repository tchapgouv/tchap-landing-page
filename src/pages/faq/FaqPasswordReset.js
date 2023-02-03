import { Component } from "react";
import { routerHOC } from "utils/HOC/ReactRouterHOC";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import LinkIcon from '@mui/icons-material/Link';
import Popper from "@mui/material/Popper";

import TopBar from "components/bars/TopBar";
import BottomBar from "components/bars/BottomBar";
import GenericAccordion from "components/accordion/GenericAccordion";
import GenericLink from "components/GenericLink";

import "styles/pages/faq/FaqComponent.scss";
import "styles/pages/faq/FaqPasswordReset.scss";

class FaqPasswordReset extends Component {

	//is this var still needed?
	static defaultState = {
		web_loginPage: false,
		web_resetPasswordPage: false
	};

	constructor(props) {
		super(props);
		const location = this.props.routerLocation;
		const anchor = location.hash.substring(1);
		const expanded = FaqPasswordReset.defaultState;

		if (anchor && this._isAccordion(anchor)) {
			expanded[anchor] = true;
		}

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

	sections = [
		{
			id: 'web_0',
			title: 'TCHAP WEB',
			questionIds: [
				'web_loginPage',
				'web_resetPasswordPage',
				'web_inYourInbox',
				'web_inYourBrowser',
				'web_confirmationPage',
			]
		},
		{
			id: 'android_0',
			title: 'TCHAP ANDROID',
			questionIds: [
				'android_mainMenu',
				'android_typeEmail',
				'android_resetPassword'
			]
		},
		{
			id: 'ios_0',
			title: 'TCHAP IOS',
			questionIds: [
				'ios_mainMenu',
				'ios_typeEmail',
				'ios_resetPassword',
			]
		},
	]

	questions = {
		// web
		web_loginPage: [
			<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Page de connexion</title>,
			<ul>
				<li><b>Allez sur <a target="_blank" rel="noreferrer noopener nofollow" href="https://www.tchap.gouv.fr/#/login">https://www.tchap.gouv.fr/#/login</a></b></li>
				<li>Cliquez sur « Mot de passe oublié ? ».</li>

				<div className="tc_vertical_image_margin" />
					<img
						alt="Se connecter"
						className="tc_FaqPasswordReset_wimg_fullScreen_mobile"
						src={require("images/faq/password_reset_screen1.png")}
						width={450}
					/>
				<div className="tc_vertical_image_margin" />
			</ul>
		],
		web_resetPasswordPage: [
			<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Page de réinitialisation du mot de passe</title>,
			<ul>
				<li>Entrez l’adresse mail avec laquelle vous avez un compte Tchap.</li>
				<li>Entrez votre nouveau mot de passe en veillant à ce qu’il possède tous les caractères indiqués dans la fenêtre qui apparait. Confirmez-le dans la case suivante.</li>
				<li>Cliquez sur « Envoyer l’e-mail de réinitialisation ».</li>

				<div className="tc_vertical_image_margin" />
					<img
						alt="Définir un nouveau mot de passe"
						className="tc_FaqPasswordReset_wimg_fullScreen_mobile"
						src={require("images/faq/password_reset_screen2.png")}
						width={450}
					/>
				<div className="tc_vertical_image_margin" />

				<li>La page « définir un nouveau de mot de passe » s’affiche : <b>Veuillez à bien laisser cette page ouverte la sinon la réinitialisation risque d’échouer !</b></li>
				
				<div className="tc_vertical_image_margin" />
					<img
						alt="Confirmation pour avoir défini un nouveau mot de passe"
						className="tc_FaqPasswordReset_wimg_fullScreen_mobile"
						src={require("images/faq/password_reset_screen3.png")}
						width={450}
					/>
				<div className="tc_vertical_image_margin" />
			</ul>
		],
		web_inYourInbox: [
			<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Dans votre boite de réception</title>,
			<ul>
				<li>Allez dans votre boite mail, ouvrez le mail « Changement de mot de passe » et cliquez sur “Réinitialiser mon mot de passe”.</li>
				
				<div className="tc_vertical_image_margin" />
					<img
						alt="Mail pour demande de réinitialisation"
						className="tc_FaqPasswordReset_wimg_fullScreen_mobile"
						src={require("images/faq/password_reset_screen4.png")}
						width={450}
						/>
				<div className="tc_vertical_image_margin" />
			</ul>
		],
		web_inYourBrowser: [
			<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Dans votre navigateur</title>,
			<ul>
				<li>Cliquez sur « continuez la réinitialisation ».</li>
				
				<div className="tc_vertical_image_margin" />
					<img
						alt="Mail pour demande de réinitialisation"
						className="tc_FaqPasswordReset_wimg_fullScreen_mobile"
						src={require("images/faq/password_reset_screen5.png")}
						width={450}
					/>
				<div className="tc_vertical_image_margin" />
			</ul>
		],
		web_confirmationPage: [
			<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Page de confirmation</title>,
			<ul>
				<li>Retournez sur la page restée ouverte et cliquez sur « J’ai vérifié mon adresse e-mail ».</li>
				<li><b>Votre mot de passe a été renouvelé avec succès !</b> Vous pouvez retourner à l’écran de connexion.</li>
				
				<div className="tc_vertical_image_margin" />
					<img
						alt="Mail pour demande de réinitialisation"
						className="tc_FaqPasswordReset_wimg_fullScreen_mobile"
						src={require("images/faq/password_reset_screen6.png")}
						width={450}
					/>
				<div className="tc_vertical_image_margin" />
			</ul>
		],
		// android
		android_mainMenu: [
			<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Menu principal</title>,
			<ul>
				<li>Appuyez sur “J’ai un compte » puis sur « Mot de passe oublié ? ».</li>
				
				<div className="tc_vertical_image_margin" />
					<div className="tc_align_horizontal">
						<img
							alt="Mail pour demande de réinitialisation"
							className="tc_FaqPasswordReset_wimg_halfScreen_mobile"
							src={require("images/faq/password_reset_screen7.png")}
							width={250}
						/>
						<div className="tc_horizontal_margin_between_imgs" />
						<img
							alt="Mail pour demande de réinitialisation"
							className="tc_FaqPasswordReset_wimg_halfScreen_mobile"
							src={require("images/faq/password_reset_screen8.png")}
							width={250}
						/>
					</div>
				<div className="tc_vertical_image_margin" />
			</ul>
		],
		android_typeEmail: [
			<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Vérification de l’adresse mail</title>,
			<ul>
				<li>Entrez l’adresse mail avec laquelle vous avez un compte Tchap puis cliquez sur « Suivant ».</li>
				
				<div className="tc_vertical_image_margin" />
					<img
						alt="Mail pour demande de réinitialisation"
						className="tc_FaqPasswordReset_wimg_halfScreen_mobile"
						src={require("images/faq/password_reset_screen9.png")}
						width={250}
					/>
				<div className="tc_vertical_image_margin" />

				<li>La page « vérifiez vos courriels » s’affiche : allez dans votre boite mail, ouvrez le mail « Changement de mot de passe » et cliquez sur « Réinitialiser mon mot de passe ».</li>
				
				<div className="tc_vertical_image_margin" />
					<div className="tc_align_horizontal">
						<img
							alt="Mail pour demande de réinitialisation"
							className="tc_FaqPasswordReset_wimg_halfScreen_mobile"
							src={require("images/faq/password_reset_screen10.png")}
							width={250}
						/>
						<div className="tc_horizontal_margin_between_imgs" />
						<img
							alt="Mail pour demande de réinitialisation"
							className="tc_FaqPasswordReset_wimg_fullScreen_mobile"
							src={require("images/faq/password_reset_screen11.png")}
							width={450}
						/>
					</div>
				<div className="tc_vertical_image_margin" />

				<li>Dans votre navigateur, cliquez sur «Continuer la réinitialisation ».</li>
				
				<div className="tc_vertical_image_margin" />
					<img
						alt="Mail pour demande de réinitialisation"
						className="tc_FaqPasswordReset_wimg_fullScreen_mobile"
						src={require("images/faq/password_reset_screen12.png")}
						width={450}
					/>
				<div className="tc_vertical_image_margin" />

				<li>Retournez sur votre application Tchap et cliquez sur « Suivant ».</li>
			</ul>
		],
		android_resetPassword: [
			<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Réinitialisation du mot de passe</title>,
			<ul>
				<li>Choisissez un nouveau mot de passe en veillant à ce qu’il possède 8 caractères au moins.</li>
				
				<div className="tc_vertical_image_margin" />
					<div className="tc_align_horizontal">
						<img
							alt="Mail pour demande de réinitialisation"
							className="tc_FaqPasswordReset_wimg_halfScreen_mobile"
							src={require("images/faq/password_reset_screen13.png")}
							width={250}
						/>
						<div className="tc_horizontal_margin_between_imgs" />
						<img
							alt="Mail pour demande de réinitialisation"
							className="tc_FaqPasswordReset_wimg_halfScreen_mobile"
							src={require("images/faq/password_reset_screen14.png")}
							width={250}
						/>
					</div>
				<div className="tc_vertical_image_margin" />

				<li>Ne cochez pas « Déconnecter tous les appareils » si vous souhaitez rester connecté aux sessions Tchap de vos autres appareils.</li>
				<li>Cliquez sur « Réinitialiser le mot de passe ».</li>
				<li><b>Votre mot de passe a été réinitialisé avec succès !</b></li>
				<li>Cliquez sur « Retourner à l’authentification » pour vous connecter.</li>
			</ul>
		],
		ios_mainMenu: [
			<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Menu principal</title>,
			<ul>
				<li>Appuyez sur “J’ai un compte » puis sur « Mot de passe oublié ? ».</li>
				
				<div className="tc_vertical_image_margin" />
					<div className="tc_align_horizontal">
						<img
							alt="Mail pour demande de réinitialisation"
							className="tc_FaqPasswordReset_wimg_halfScreen_mobile"
							src={require("images/faq/password_reset_screen15.png")}
							width={250}
						/>
						<div className="tc_horizontal_margin_between_imgs" />
						<img
							alt="Mail pour demande de réinitialisation"
							className="tc_FaqPasswordReset_wimg_halfScreen_mobile"
							src={require("images/faq/password_reset_screen16.png")}
							width={250}
						/>
					</div>
				<div className="tc_vertical_image_margin" />
			</ul>
		],
		ios_typeEmail: [
			<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Vérification de l’adresse mail</title>,
			<ul>
				<li>Entrez l’adresse mail avec laquelle vous avez un compte Tchap puis cliquez sur « Suivant ».</li>
				
				<div className="tc_vertical_image_margin" />
					<img
						alt="Mail pour demande de réinitialisation"
						className="tc_FaqPasswordReset_wimg_halfScreen_mobile"
						src={require("images/faq/password_reset_screen17.png")}
						width={250}
					/>
				<div className="tc_vertical_image_margin" />

				<li>La page « Relevez vos e-mails » s’affiche : allez dans votre boite mail, ouvrez le mail « Changement de mot de passe » et cliquez sur « Réinitialiser mon mot de passe ».</li>
				
				<div className="tc_vertical_image_margin" />
					<div className="tc_align_horizontal">
						<img
							alt="Mail pour demande de réinitialisation"
							className="tc_FaqPasswordReset_wimg_halfScreen_mobile"
							src={require("images/faq/password_reset_screen18.png")}
							width={250}
						/>
						<div className="tc_horizontal_margin_between_imgs" />
						<img
							alt="Mail pour demande de réinitialisation"
							className="tc_FaqPasswordReset_wimg_fullScreen_mobile"
							src={require("images/faq/password_reset_screen19.png")}
							width={250}
						/>
					</div>
				<div className="tc_vertical_image_margin" />

				<li>Dans votre navigateur, cliquez sur «Continuer la réinitialisation ».</li>
				<li>Retournez sur votre application Tchap et cliquez sur « Suivant ».</li>

				<div className="tc_vertical_image_margin" />
					<img
						alt="Mail pour demande de réinitialisation"
						className="tc_FaqPasswordReset_wimg_fullScreen_mobile"
						src={require("images/faq/password_reset_screen20.png")}
						width={450}
					/>
				<div className="tc_vertical_image_margin" />
			</ul>
		],
		ios_resetPassword: [
			<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Réinitialisation du mot de passe</title>,
			<ul>
				<li>Choisissez un nouveau mot de passe en veillant à ce qu’il possède 8 caractères au moins.</li>
				<li>Ne cochez pas « Déconnecter tous les appareils » si vous souhaitez rester connecté aux sessions Tchap de vos autres appareils.</li>
				<li>Cliquez sur « Réinitialiser le mot de passe ».</li>
				
				<div className="tc_vertical_image_margin" />
					<div className="tc_align_horizontal">
						<img
							alt="Mail pour demande de réinitialisation"
							className="tc_FaqPasswordReset_wimg_halfScreen_mobile"
							src={require("images/faq/password_reset_screen21.png")}
							width={250}
						/>
						<div className="tc_horizontal_margin_between_imgs" />
						<img
							alt="Mail pour demande de réinitialisation"
							className="tc_FaqPasswordReset_wimg_halfScreen_mobile"
							src={require("images/faq/password_reset_screen22.png")}
							width={250}
						/>
					</div>
				<div className="tc_vertical_image_margin" />

				<li><b>Votre mot de passe a été réinitialisé avec succès !</b></li>
				<li>Cliquez sur « Retourner à l’authentification » pour vous connecter.</li>
			</ul>
		],
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
								<div className="tc_FaqComponent_menu_title">FAQ > réinitialisation de mot de passe</div>
							</Grid>

							<Grid item xs={12}>
								<div className="tc_text_nl tc_vertical_margin">Si besoin, une FAQ de cette page est téléchargeable en cliquant sur <GenericLink className="tc_FaqComponent_link" to={"/assets/pdf/bonnes_pratiques_reinitialisation_du_mot_de_passe.pdf"}>ce lien</GenericLink>.</div>
							</Grid>
							
							<Grid item xs={12}>
								{this.sections.map(section => (
									<div key={section.id}>
										<div id={section.id} className="tc_FaqComponent_section">{section.title}</div>
										{section.questionIds.map(questionId => {
											if (!this.questions[questionId]) {
												return <div key={questionId} />
											}

											const content = this.questions[questionId];

											return (
												<GenericAccordion key={questionId} {...this._generateProps(questionId)}>{content}</GenericAccordion>
											)
										})}
									</div>
								))}
							</Grid>
						</Grid>
					</Container>
				<BottomBar />
			</div>
		);
	}
}

export default routerHOC(FaqPasswordReset);
