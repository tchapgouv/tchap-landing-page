import { Component } from "react";
import { routerHOC } from "utils/HOC/ReactRouterHOC";
import { t } from "react-i18nify";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import LinkIcon from '@mui/icons-material/Link';
import Popper from "@mui/material/Popper";
import Chip from "@mui/material/Chip";

import TopBar from "components/bars/TopBar";
import BottomBar from "components/bars/BottomBar";
import GenericAccordion from "components/accordion/GenericAccordion";
import GenericLink from "components/GenericLink";
import SeeMoreLinks from "components/SeeMoreLinks";
import { Tabs } from "components/tabs/Tabs";

import "styles/pages/faq/FaqComponent.scss";

class FaqPasswordReset extends Component {

	//is this var still needed?
	static defaultState = {
		web_1: false,
		web_2: false
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
				'web_1',
				'web_2',
			]
		},
		{
			id: 'android_0',
			title: 'TCHAP ANDROID',
			questionIds: []
		},
		{
			id: 'ios_0',
			title: 'TCHAP IOS',
			questionIds: []
		},
	]

	questions = {
		web_1: [
			<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Page de connexion</title>,
			<ul>
				<li><b>Allez sur <a target="_blank" rel="noreferrer noopener nofollow" href="https://www.tchap.gouv.fr/#/login">https://www.tchap.gouv.fr/#/login</a></b></li>
				<li>Cliquez sur « Mot de passe oublié ? ».</li>
				<div className="tc_vertical_image_margin" />
				<img src={require("images/faq/password_reset_screen1.png")} alt="Salon Privé"/>
				<div className="tc_vertical_image_margin" />
			</ul>
		],
		web_2: [
			<title><LinkIcon onClick={this._handleCopyClick} className="tc_FaqComponent_copy_icon" />Page de réinitialisation du mot de passe</title>,
			<ul>
				<li>Entrez l’adresse mail avec laquelle vous avez un compte Tchap.</li>
				<li>Entrez votre nouveau mot de passe en veillant à ce qu’il possède tous les caractères indiqués dans la fenêtre qui apparait. Confirmez-le dans la case suivante.</li>
				<li>Cliquez sur « Envoyer l’e-mail de réinitialisation ».</li>
				<div className="tc_vertical_image_margin" />
				<img src={require("images/faq/password_reset_screen2.png")} alt="Salon Privé"/>
				<div className="tc_vertical_image_margin" />
				<li>La page « définir un nouveau de mot de passe » s’affiche : <b>Veillez à bien laisser cette page ouverte la sinon la réinitialisation risque d’échouer !</b></li>
				<div className="tc_vertical_image_margin" />
				<img src={require("images/faq/password_reset_screen3.png")} alt="Salon Privé"/>
				<div className="tc_vertical_image_margin" />
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
								<div className="tc_FaqComponent_menu_title">FAQ</div>
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
