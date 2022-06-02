import {Component} from "react";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TopBar from "components/bars/TopBar";
import BottomBar from "components/bars/BottomBar";

import "styles/pages/suivi/Suivi.scss";

class Suivi extends Component {

	constructor(props) {
		super(props);
		const tracking = localStorage ? localStorage.getItem('tracking') : "enabled";
		this.state = {
			tracking,
		};

		this._handleCheckboxChange = this._handleCheckboxChange.bind(this);
	}

	_handleCheckboxChange(e) {
		let tracking = "enabled";
		if (e.target.checked === false) {
			tracking = "disabled";
		}

		this.setState({tracking});
		localStorage ? localStorage.setItem('tracking', tracking) : null;
	}

	isTrackingEnabled(t) {
		return t === "enabled"
	}

	render() {
		return (
			<div className="tc_Suivi">
				<TopBar/>
				<Container maxWidth="lg">
					<Grid container>
						<Grid item xs={12}>
							<h1>Gestion des cookies et du stockage local</h1>

							<div className="tc_paragraph">
								Ce site utilise le stockage local sur votre ordinateur lorsque vous le consultez. Cela nous permet de mesurer le nombre de visites et de comprendre quelles sont les pages les plus consultées.
							</div>
							<div className="tc_paragraph">
								Vous pouvez vous opposer au suivi de votre navigation sur ce site web. Cela protégera votre vie privée, mais empêchera également le propriétaire d'apprendre de vos actions et de créer une meilleure expérience pour vous et les autres utilisateurs.
							</div>
							<FormGroup>
								<FormControlLabel className="tc_Suivi_checkbox" control={
									<Checkbox
										checked={this.isTrackingEnabled(this.state.tracking)}
										onChange={this._handleCheckboxChange}
									/>
								} label="Vous n'êtes pas exclu(e). Décochez cette case pour être exclu(e)." />
							</FormGroup>
						</Grid>
					</Grid>
				</Container>
				<BottomBar/>
			</div>
		);
	}
}

export default Suivi;
