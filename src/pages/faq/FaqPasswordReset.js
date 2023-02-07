import { Component } from "react";
import { routerHOC } from "utils/HOC/ReactRouterHOC";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import TopBar from "components/bars/TopBar";
import BottomBar from "components/bars/BottomBar";
import GenericLink from "components/GenericLink";
import { Tabs } from "components/tabs/Tabs";

import "styles/pages/faq/FaqComponent.scss";
import "styles/pages/faq/FaqPasswordReset.scss";

class FaqPasswordReset extends Component {
	constructor(props) {
		super(props);

		this.state = {
			initialTabToDisplay: "",
		};
	}

	componentDidMount() {
		const location = this.props.routerLocation;
		const anchor = location.hash.substring(1);

		this.setState({
			initialTabToDisplay: anchor && ['android', 'ios'].includes(anchor) ? anchor : 'web'
		});
	}

	webSection = [
		'web_loginPage',
		'web_resetPasswordPage',
		'web_inYourInbox',
		'web_inYourBrowser',
		'web_confirmationPage',
	];

	androidSection = [
		'android_mainMenu',
		'android_typeEmail',
		'android_resetPassword'
	]

	iosSection = [
		'ios_mainMenu',
		'ios_typeEmail',
		'ios_resetPassword',
	]

	questions = {
		// web
		web_loginPage: {
			title: <>Page de connexion : <a target="_blank" rel="noreferrer noopener nofollow" href="https://www.tchap.gouv.fr/#/login">https://www.tchap.gouv.fr/#/login</a></>,
			content: (
				<ul>
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
			)
		},
		web_resetPasswordPage: {
			title: 'Page de réinitialisation du mot de passe',
			content: (
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
			)
		},
		web_inYourInbox: {
			title: 'Dans votre boite de réception',
			content: (
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
			)
		},
		web_inYourBrowser: {
			title: 'Dans votre navigateur',
			content: (
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
			)
		},
		web_confirmationPage: {
			title: 'Page de confirmation',
			content: (
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
			)
		},
		// android
		android_mainMenu: {
			title: 'Menu principal',
			content: (
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
							<div className="tc_faq_reset_pw_horizontal_margin_between_imgs" />
							<img
								alt="Mail pour demande de réinitialisation"
								className="tc_FaqPasswordReset_wimg_halfScreen_mobile"
								src={require("images/faq/password_reset_screen8.png")}
								width={250}
							/>
						</div>
					<div className="tc_vertical_image_margin" />
				</ul>
			)
		},
		android_typeEmail: {
			title: 'Vérification de l’adresse mail',
			content: (
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
							<div className="tc_faq_reset_pw_horizontal_margin_between_imgs" />
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
			)
		},
		android_resetPassword: {
			title: 'Réinitialisation du mot de passe',
			content: (
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
							<div className="tc_faq_reset_pw_horizontal_margin_between_imgs" />
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
			)
		},
		// ios
		ios_mainMenu: {
			title: 'Menu principal',
			content: (
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
							<div className="tc_faq_reset_pw_horizontal_margin_between_imgs" />
							<img
								alt="Mail pour demande de réinitialisation"
								className="tc_FaqPasswordReset_wimg_halfScreen_mobile"
								src={require("images/faq/password_reset_screen16.png")}
								width={250}
							/>
						</div>
					<div className="tc_vertical_image_margin" />
				</ul>
			)
		},
		ios_typeEmail: {
			title: 'Vérification de l’adresse mail',
			content: (
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
							<div className="tc_faq_reset_pw_horizontal_margin_between_imgs" />
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
			)
		},
		ios_resetPassword: {
			title: 'Réinitialisation du mot de passe',
			content: (
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
							<div className="tc_faq_reset_pw_horizontal_margin_between_imgs" />
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
			)
		},
	}

	displaySection = section => section.map((questionId, index) => {
		const question = this.questions[questionId];
		return (
			<div key={questionId}>
				<div className="tc_faq_reset_pw_question_title">{index + 1}. {question.title}</div>
				{question.content}
				{index < section.length - 1 && <div className="tc_faq_reset_pw_question_vertical_margin" />}
			</div>
		)
	})

	render() {
		return (
			<div>
				<TopBar borderBottom={true} />
					<Container maxWidth="lg">
						<Grid container className="tc_FaqComponent">
							<Grid item xs={12}>
								<div className="tc_FaqComponent_menu_title">FAQ > réinitialisation de mot de passe</div>
							</Grid>

							<Grid item xs={12}>
								<div className="tc_text_nl tc_faq_reset_pw_vertical_margin">Si besoin, une FAQ de cette page est téléchargeable en cliquant sur <GenericLink className="tc_FaqComponent_link" download target="_blank" to={"/assets/pdf/bonnes_pratiques_reinitialisation_du_mot_de_passe.pdf"}>ce lien</GenericLink>.</div>
							</Grid>

							<Grid item xs={12}>
								<Tabs
									id="faq-reset-password"
									initialTabToDisplay={this.state.initialTabToDisplay}
									tabs={[
										{ id: 'web', label: 'Web' },
										{ id: 'android', label: 'Android' },
										{ id: 'ios', label: 'iOS' },
									]}
									tabPanels={{
										android: this.displaySection(this.androidSection),
										ios: this.displaySection(this.iosSection),
										web: this.displaySection(this.webSection),
									}}
								/>
							</Grid>
						</Grid>
					</Container>
				<BottomBar />
			</div>
		);
	}
}

export default routerHOC(FaqPasswordReset);
