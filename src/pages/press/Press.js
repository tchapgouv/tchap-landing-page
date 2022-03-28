import { Container } from "@mui/material";
import { Component } from "react";
import BottomBar from "../../components/bars/BottomBar";
import TopBar from "../../components/bars/TopBar";

import "styles/pages/press/Press.scss";

class Press extends Component {

	render() {
		return (
			<div className="tc_Press">
				<TopBar borderBottom={true} />
				<Container maxWidth="lg">

					<h1>Press Kit</h1>

					<div className="tc_Press_paragraph">
						<h3>I - Contact</h3>
						<div className="tc_Press_subparagraph">
							<div>Pour toute demande presse, écrivez à <a href="mailto:tchap@beta.gouv.fr">tchap@beta.gouv.fr</a></div>
							<div>L'équipe sera ravie de vous répondre !</div>
						</div>
					</div>
					<div className="tc_Press_paragraph">
						<h3>II - Infos clés</h3>
						<div className="tc_Press_subparagraph">
							<div>Tchap est la messagerie instantanée souveraine et sécurisée de l’Administration.</div>
							<div>Lancée en 2019 par la Direction Interministérielle du Numérique (DINUM), elle permet aux agents du service public de communiquer facilement, en toute confidentialité.</div>
							<div>En permettant à tous ses utilisateurs d'entrer en conPresst et d'échanger au sein de conversations privées et publiques, Tchap est conçue pour rassembler l’ensemble des agents du secteur public.</div>
							<div>Disponible sur navigateur web et applications mobiles, Tchap offre de multiples cas d’usage. Ses utilisateurs s’en servent aussi bien pour coordonner leurs projets, former des communautés autour des sujets qui leur importent, que pour simplement inviter leurs collègues à prendre un café.</div>
							<div>En janvier 2022, Tchap compte 285 000 utilisateurs qui échangent plus d’un million de messages par semaine.</div>
							<div>Le code de Tchap est consultable publiquement et se base sur le protocole <a href="https://matrix.org/docs/guides/end-to-end-encryption-implementation-guide">Matrix</a>. Le développement de l'application bénéficie ainsi des avancées de la communauté Matrix, en terme d'amélioration fonctionnelle et de sécurité.</div>
						</div>
					</div>
					<div className="tc_Press_paragraph">
						<h3>III - Visuels</h3>
						<div className="tc_Press_subparagraph">
							<div>Au lien suivant vous trouvez une séléction de visuels à utiliser librement dans la presse:</div>
							<div><a href="https://osmose.numerique.gouv.fr/front/publicLink/publicDownload.jsp?id=0d5abab9-ad40-48c3-8eb3-b00f8faa7a3472b5348c-1a42-4823-85d4-298c2c52a3ce">https://osmose.numerique.gouv.fr/front/publicLink/publicDownload.jsp?id=0d5abab9-ad40-48c3-8eb3-b00f8faa7a3472b5348c-1a42-4823-85d4-298c2c52a3ce</a></div>
						</div>
					</div>

					
				</Container>
				<BottomBar />
			</div>
		);
	}
}

export default Press;