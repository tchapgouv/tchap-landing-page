import { Container } from "@mui/material";
import { Component } from "react";
import BottomBar from "../../components/bars/BottomBar";
import TopBar from "../../components/bars/TopBar";

// todo move this to a commun css file
import "styles/pages/tac/Tac.scss";

class PrivacyPolicy extends Component {

	render() {
		return (
			<div className="tc_Tac">
				<TopBar borderBottom={true} />
				<Container maxWidth="lg">

					<h1>Conditions générales d'utilisation en date du 21 avril 2022</h1>

					<div className="tc_Tac_paragraph">
						<h2>1. Champ d'application</h2>
						<div className="tc_Tac_subparagraph">
							<div>Le présent document définit les conditions générales d'utilisation (CGU) de Tchap (ci-après, Tchap ou l'Application), messagerie instantanée de l'administration française, par ses utilisateurs et utilisatrices (ci-après les Utilisateurs et Utilisatrices).</div>
							<div>L'Application permet d'échanger des messages textes et multimédia, avec un ou plusieurs autres Utilisateurs et Utilisatrices.</div>
							<div>Tchap est développée et opérée par la direction interministérielle du numérique de l'Etat (DINUM) des services du Premier ministre. Toute utilisation de Tchap doit respecter les présentes conditions générales d'utilisation.</div>
							<div>L'utilisation de l'Application est libre et gratuite.</div>
						</div>
					</div>
          </Container>
				<BottomBar />
			</div>
		);
	}
}

export default PrivacyPolicy;
