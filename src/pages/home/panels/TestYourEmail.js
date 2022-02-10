import React, { Component } from 'react';
import { matomoHOC } from 'utils/HOC/MatomoHOC';
import { t } from "react-i18nify";
import Container from "@mui/material/Container";
import Grid from '@mui/material/Grid';
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ConventionPdf from "public/CONVENTION DE SERVICE TCHAP 10.02.2022.pdf";

import "styles/pages/home/panels/TestYourEmail.scss";

class TestYourEmail extends Component {

	constructor(props) {
		super(props);
		this.state = {
			textFieldValue: '',
			errorText: '',
			isTested: false,
			isWled: false,
			disabled: true,
		}
		this.analyzeEmail = this.analyzeEmail.bind(this);
		this.clearField = this.clearField.bind(this);
		this._handleTextFieldChange = this._handleTextFieldChange.bind(this);
		this._handleKeyDown = this._handleKeyDown.bind(this);
		this._hookProbe = this._hookProbe.bind(this);
	}

	_handleTextFieldChange(e) {
		const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		const disabled = !re.test(String(e.target.value).toLowerCase());
		this.setState({
			disabled,
			textFieldValue: e.target.value,
			isTested: false,
			errorText: '',
		});
	}

	_handleKeyDown(e) {
		if (e.key === 'Enter') {
			e.preventDefault();
			e.stopPropagation();
			this.setState({errorText: ''})
			this.analyzeEmail();
		}
	}

	_hookProbe() {
		const matomoHook = this.props.matomoHook;
		matomoHook.trackEvent({ category: 'convention', action: 'download' });
		window.open(ConventionPdf, "_blank");
	}

	clearField() {
		this.setState({
			textFieldValue: '',
			disabled: true,
			isTested: false,
		})
	}

	analyzeEmail() {
		const email = this.state.textFieldValue;
		if (email !== null && email !== undefined && email !== "") {
			const matomoHook = this.props.matomoHook;
			matomoHook.trackEvent({category: 'email', action: 'verification'});
			fetch("https://matrix.agent.tchap.gouv.fr/_matrix/identity/api/v1/info?medium=email&address=" + String(email).toLowerCase())
				.then(res => res.json())
				.then(data => {
					let isWled = false;
					if (data.hs !== "agent.externe.tchap.gouv.fr") isWled = true;
					this.setState({
						isWled,
						isTested: true
					});
					const elem = document.getElementById("test-your-email");
					if (elem) elem.scrollIntoView( { behavior: 'smooth', block: 'start' } );
				}).catch(err => {
				this.setState({
					errorText: "Erreur : Impossible de joindre le serveur",
					isWled: false,
					isTested: true
				});
			});
		}
	}

	render() {
		let validateIcon = null;
		let colorClass = "tc_TestYourEmail_btn";
		let renderBlock = null;
		if (this.state.errorText) {
			validateIcon = <HelpOutlineIcon />;
			colorClass += " tc_TestYourEmail_btn_invalid";
			renderBlock = (
				<div className="tc_TestYourEmail_email_text">
					<div>{this.state.errorText}</div>
				</div>
			);
		}
		else if (this.state.isTested && this.state.isWled) {
			validateIcon = <CheckIcon className="tc_TestYourEmail_icon_valid" />;
			colorClass += " tc_TestYourEmail_btn_valid";
			renderBlock = (
				<div className="tc_TestYourEmail_email_text">
					<div>Votre administration est présente sur Tchap !</div>
					<Button variant="text" size="large" href="https://www.tchap.gouv.fr/#/register" target="_blank" rel="noreferrer noopener nofollow">
						Inscrivez-vous
					</Button>
				</div>
			);
		} else if (this.state.isTested && !this.state.isWled) {
			validateIcon = <ClearIcon className="tc_TestYourEmail_icon_invalid" />;
			colorClass += " tc_TestYourEmail_btn_invalid";
			renderBlock = (
				<div className="tc_TestYourEmail_email_text">
					<div>Votre administration n'est pas encore présente sur Tchap !</div>
					<ul className="tc_TestYourEmail_invalid_list">
						<li>Téléchargez la convention Tchap <a className="tc_TestYourEmail_link" onClick={this._hookProbe}>en cliquant ici</a></li>
						<li>Envoyez-la signée par votre direction à <a className="tc_TestYourEmail_link" href={"mailto:" + t("links.contact")}>{t("links.contact")}</a></li>
						<li>L'équipe Tchap se charge de l'ouverture du service à votre administration</li>
					</ul>
				</div>
			);
		}

		return (
			<Container maxWidth="lg" className="simple_container">
				<div className="tc_TestYourEmail_label">Votre administration est-elle déjà sur Tchap ?</div>

					<FormControl variant="outlined" size="small">
						<InputLabel htmlFor="test-your-email" className="tc_TestYourEmail_input_label">Testez votre adresse email professionnelle</InputLabel>
						<OutlinedInput
							id="test-your-email"
							className="tc_TestYourEmail_input"
							type="text"
							value={this.state.textFieldValue}
							onKeyDown={this._handleKeyDown}
							onChange={this._handleTextFieldChange}
							endAdornment={
								<InputAdornment position="end" className="tc_TestYourEmail_icon">
									{ validateIcon }
								</InputAdornment>
							}
							label="Testez votre adresse email professionnelle"
						/>
					</FormControl>
					<Button variant="contained" size="large" onClick={this.analyzeEmail} className={colorClass}>
						Vérifier
					</Button>
					{ renderBlock }

			</Container>
		);
	}
}

export default matomoHOC(TestYourEmail);
