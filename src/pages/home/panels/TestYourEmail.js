import React, { Component } from 'react';
import Container from "@mui/material/Container";
import Grid from '@mui/material/Grid';
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CancelIcon from '@mui/icons-material/Cancel';
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import "styles/pages/home/TestYourEmail.scss";

class TestYourEmail extends Component {

	constructor(props) {
		super(props);
		this.state = {
			textFieldValue: '',
			textError: '',
			isTested: false,
			isWled: false,
			disabled: true,
		}
		this.analyzeEmail = this.analyzeEmail.bind(this);
		this.clearField = this.clearField.bind(this);
		this._handleTextFieldChange = this._handleTextFieldChange.bind(this);
	}

	_handleTextFieldChange(e) {
		const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		const disabled = !re.test(String(e.target.value).toLowerCase());
		this.setState({
			disabled,
			textFieldValue: e.target.value,
			isTested: false,
		});
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
		fetch("https://matrix.agent.tchap.gouv.fr/_matrix/identity/api/v1/info?medium=email&address=" + String(email).toLowerCase())
			.then(res => res.json())
			.then(data => {
				let isWled = false;
				if (data.hs !== "agent.externe.tchap.gouv.fr") isWled = true;
				this.setState({
					isWled,
					isTested: true
				});
			}).catch(err => {
			this.setState({
				testError: "Erreur : Impossible de joindre le serveur",
				isWled: false,
				isTested: true
			});
		})
	}

	render() {
		let validateIcon = <HelpOutlineIcon />;
		let colorClass = "";
		let renderBlock = "";
		if (this.state.isTested && this.state.isWled) {
			validateIcon = <TaskAltIcon />;
			colorClass = "tc_TestYourEmail_email_valid";
			renderBlock = (
				<div className="tc_TestYourEmail_email_text">
					<div>Votre administration est présente sur Tchap !</div>
					<Button variant="text" size="large" href="https://www.tchap.gouv.fr/#/register" target="_blank" rel="noreferrer noopener nofollow">
						Inscrivez-vous
					</Button>
				</div>
			);
		} else if (this.state.isTested && !this.state.isWled) {
			validateIcon = <HighlightOffIcon />;
			colorClass = "tc_TestYourEmail_email_invalid";
			renderBlock = (
				<div className="tc_TestYourEmail_email_text">
					<div>Votre administration n'est pas encore présente sur Tchap !</div>
					<div>Téléchargez la convention <a href="https://osmose.numerique.gouv.fr/front/publicDownload.jsp?docId=108585184_DBFileDocument&authKey=Y18yMDQwMzQyOjE2MzY0ODA2MTEwMTQ6JDJhJDA0JGY0UHVLbEU4VEtRL2NxZHZUaXRxc3VTaUJ0UXZWTzgzdmxLS0I1ME1ZYm90cm1HVmcxcDlx" target="_blank" rel="noreferrer noopener nofollow">ici</a>.</div>
				</div>
			);
		}

		return (
			<Container maxWidth="lg">
				<Grid item xs={12}>
					<FormControl variant="outlined" size="small">
						<InputLabel htmlFor="test-your-email" className="tc_TestYourEmail_input_label">Testez votre adresse email professionnelle</InputLabel>
						<OutlinedInput
							id="test-your-email"
							className="tc_TestYourEmail_input"
							type="text"
							value={this.state.textFieldValue}
							onChange={this._handleTextFieldChange}
							endAdornment={
								<InputAdornment position="end">
									<IconButton
										aria-label="clear input field"
										onClick={this.clearField}
										edge="end"
									>
										<CancelIcon />
									</IconButton>
								</InputAdornment>
							}
							label="Testez votre adresse email professionnelle"
						/>
					</FormControl>
					<Button variant="text" size="large" disabled={this.state.disabled} onClick={this.analyzeEmail} className={colorClass}>
						{ validateIcon }
					</Button>
					{ renderBlock }
				</Grid>
			</Container>
		);
	}
}

export default TestYourEmail;
