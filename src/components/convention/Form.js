import {Component} from "react";

import "styles/convention/Form.scss";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {TextField} from "@material-ui/core";

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
								shrink
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
