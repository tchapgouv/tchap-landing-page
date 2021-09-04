import React, { Component } from 'react';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import HalfCard from "../cards/HalfCard";
import LargeCard from "../cards/LargeCard";

import "styles/panels/MainPanel.scss";

class MainPanel extends Component {
	render() {
		return (
			<React.Fragment>
				<Container maxWidth="lg" className="tc_MainPanel">
					<Grid container spacing={3} className="tc_MainPanel_grid">
						<Grid item xs={6}>
							<HalfCard
								title={"Solution souveraine"}
								backgroundColor="light"
								imageName="etat.jpg"
								imageWidth={270}
								imageHeight={80}
								imagePosition="top"
							>
								Conçue et entièrement maîtrisée par l'État français,
								hébergée sur ses serveurs en France, Tchap vous apporte
								les garanties nécessaires en termes de confidentialité
								et de protection des données.
							</HalfCard>
						</Grid>
						<Grid item xs={6}>
							<HalfCard
								title={"Sécurité des échanges"}
								backgroundColor="dark"
								imageName="secu.png"
								imageWidth={80}
								imageHeight={100}
								imagePosition="top"
							>
								Tous vos échanges privés sont chiffrés de bout en bout.
								Cela veut dire que même interceptés, ils seraient illisibles.
								Les fichiers partagés sont analysés avant leur remise au(x) destinataire(s)
								pour vérifier l'absence de virus.
							</HalfCard>
						</Grid>
					</Grid>

					<Grid container spacing={3} className="tc_MainPanel_grid">
						<Grid item xs={12}>
							<LargeCard
								title={"Annuaire intégré des utilisateurs"}
								backgroundColor="light"
								imageName="annuaire.png"
								imageWidth={380}
								imageHeight={400}
								imagePosition="left"
							>
								L'annuaire intégré de Tchap vous permet d'entrer en contact
								direct avec l'ensemble des utilisateurs de l'application,
								toutes administrations confondues. Vous pouvez également
								inviter des correspondants extérieurs à rejoindre vos échanges.
							</LargeCard>
						</Grid>
					</Grid>

					<Grid container spacing={3} className="tc_MainPanel_grid">
						<Grid item xs={12}>
							<LargeCard
								title={"Forums sur vos centres d'intérêt"}
								backgroundColor="dark"
								imageName="forums.png"
								imageWidth={380}
								imageHeight={400}
								imagePosition="right"
							>
								Les forums (non chiffrés) couvrent vos centres d'intérêt professionnels
								(mais pas que), avec des thématiques transverses communes à tous les
								ministères comme l'innovation publique, la cybersécurité, l'emploi
								public... mais aussi des salons dédiés à des communautés
								(BlueHats, beta.gouv.fr, DesignGouv...). Un répertoire des forums
								vous permet de trouver ceux qui vous intéressent.
							</LargeCard>
						</Grid>
					</Grid>

					<Grid container spacing={3} className="tc_MainPanel_grid">
						<Grid item xs={6}>
							<HalfCard
								title={"Multi-dispositif"}
								backgroundColor="dark"
								imageName="multi.png"
								imageWidth={180}
								imageHeight={80}
								imagePosition="top"
							>
								Vous pouvez utiliser Tchap de façon simultanée possible sur plusieurs
								appareils. L'application est disponible sur smartphones et tablettes
								Android et Apple, ainsi que sur ordinateur vis simple navigateur.
							</HalfCard>
						</Grid>
						<Grid item xs={6}>
							<HalfCard
								title={"Open-Source"}
								backgroundColor="light"
								imageName="matrix.png"
								imageWidth={135}
								imageHeight={60}
								imagePosition="top"
							>
								Tchap s'appuie sur une suite logicielle open source (Element, Matrix)
								et son code est librement accèssible.
							</HalfCard>
						</Grid>
					</Grid>
				</Container>
			</React.Fragment>
		);
	}
}

export default MainPanel;
