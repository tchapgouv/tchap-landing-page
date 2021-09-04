import React, { Component } from 'react';
import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";

import "styles/panels/LargePanel.scss";

class LargePanel extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="tc_LargePanel">
					<Container maxWidth="lg">
						<Grid container>
							<Grid item xs={2}>&nbsp;</Grid>
							<Grid item xs={8}>
								<div className="tc_LargePanel_title">Comment rejoindre Tchap ?</div>
								<div className="tc_LargePanel_content">
									Tout agent de l'État peut créer librement son compte Tchap à partir
									de son adresse email professionnelle, depuis l'application mobile
									ou la version web. Au besoin, il est possible d'inviter par email
									un correspodant extérieur à l'État à un salon spécifique.
									<br />
									<br />
									Les parlementaires et agents des parlements ont également accès à
									la messagerie depuis mai 2020.
									<a href="#">Consulter le guide utilisateur dédié - pdf,366ko</a> (disponible
									également en <a href="#">version accessible - docx,21ko</a>).
									<br />
									<br />
									Tchap est ouvert en expérimentation des plusieurs collectivités territoriales
									depuis février 2020. Vous souhaitez rejoindre l'expérimentation et proposer
									Tchap aux agents de votre collectivité ?
									Contactez <a href="mailto:tchap.dinum@modernisation.gouv.fr">tchap.dinum@modernisation.gouv.fr</a> pour plus d'information.
									<br />
									Une convention devra être établie et signé par la direction générale des services,
									téléchargez pour cela le modèle de convention en format <a href="#">Word (37ko)</a> ou <a href="#">OpenOffice/odt (22ko)</a>.
								</div>
							</Grid>
							<Grid item xs={2}>&nbsp;</Grid>
							<Grid item xs={12} className="tc_LargePanel_btn_container">
								<Button
									variant="contained"
									size="large"
									className="tc_LargePanel_btn"
									href="https://www.tchap.gouv.fr/#/register"
									target="_blank"
									rel="noreferrer noopener nofollow"
								>
									Créer un compte Tchap
								</Button>
							</Grid>
						</Grid>
					</Container>
				</div>
			</React.Fragment>
		);
	}
}

export default LargePanel;
