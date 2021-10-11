import {Component} from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from '@mui/material/TextField';

import "styles/pages/convention/Form.scss";

class Form extends Component {
	render() {
		return (
			<Container maxWidth="lg" className="tc_WelcomeBtn">
				<Grid container spacing={3}>
					<Grid item md={6} xs={12}>
						<form noValidate autoComplete="off">
							<TextField
								className="tc_Convention_Form_siret"
								variant="outlined"
								label="SIRET"
								type="number"
								shrink="true"
								fullWidth
							/>
						</form>
					</Grid>
				</Grid>
			</Container>
		);
	}
}

export default Form;
