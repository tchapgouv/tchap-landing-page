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

import "styles/pages/home/TestYourEmail.scss";

class TestYourEmail extends Component {

	constructor(props) {
		super(props);
		this.state = {
			textFieldValue: '',
			isWled: false,
			disabled: true,
		}
		this.analyzeEmail = this.analyzeEmail.bind(this);
		this.clearField = this.clearField.bind(this);
		this._handleTextFieldChange = this._handleTextFieldChange.bind(this);
	}

	_handleTextFieldChange(e) {
		const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		let disabled = this.state.disabled
		if (re.test(String(e.target.value).toLowerCase())) {
			disabled = false;
		} else {
			disabled = true;
		}
		this.setState({
			disabled,
			textFieldValue: e.target.value
		});
	}

	clearField() {
		this.setState({
			textFieldValue: '',
			disabled: true,
		})
	}

	analyzeEmail() {
		const email = this.state.textFieldValue;
		fetch("https://matrix.agent.tchap.gouv.fr/_matrix/identity/api/v1/info?medium=email&address=" + email)
			.then(res => res.json())
			.then(data => {
				console.log(data)
			}).catch(err => {
				console.error("ERROR !")
		})
	}

	render() {
		return (
			<Container maxWidth="lg">
				<Grid item xs={12}>
					<FormControl variant="outlined" size="small">
						<InputLabel htmlFor="test-your-email">Testez votre adresse email</InputLabel>
						<OutlinedInput
							id="test-your-email"
							type={'text'}
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
							label="Testez votre adresse email"
						/>
					</FormControl>
					<Button variant="contained" size="large" disabled={this.state.disabled} onClick={this.analyzeEmail}>
						Test
					</Button>
				</Grid>
			</Container>
		);
	}
}

export default TestYourEmail;
