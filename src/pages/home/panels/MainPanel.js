import { Component } from 'react';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import HalfCard from "components/cards/HalfCard";
import LargeCard from "components/cards/LargeCard";

import "styles/pages/home/panels/MainPanel.scss";

class MainPanel extends Component {
	render() {
		return (
			<Container maxWidth="lg" className="tc_MainPanel">
				<Grid container spacing={3} className="tc_MainPanel_grid">
					<Grid item md={6} xs={12}>
						<HalfCard
							backgroundColor="light"
							imageLocalUri="devices.png"
							imagePosition="top"
						>
							<h2>Utilisez Tchap sur tous vos appareils</h2>
							Tchap est disponible simultanément sur mobile, tablette et web, ainsi que sur les appareils sécurisés.
						</HalfCard>
					</Grid>
					<Grid item md={6} xs={12}>
						<HalfCard
							backgroundColor="dark"
							imageLocalUri="centralized.png"
							imagePosition="top"
						>
							<h2>Retrouvez facilement vos collaborateurs</h2>
							L'annuaire intégré de Tchap vous permet d'entrer en contact avec l'ensemble de ses utilisateurs. Pas besoin de connaître le numéro de téléphone de vos interlocuteurs&nbsp;: retrouvez-les simplement en recherchant leur nom ou leur adresse email professionnelle.
						</HalfCard>
					</Grid>
				</Grid>

				<Grid container className="tc_MainPanel_grid">
					<Grid item xs={12}>
						<LargeCard
							backgroundColor="light"
							imageLocalUri="contacts.png"
							imagePosition="left"
						>
							<h2>Centralisez vos échanges</h2>
							Un seul canal d'échange pour toute l'Administration : tous les agents publics peuvent s’inscrire et échanger sur Tchap. Vous pouvez également inviter vos partenaires externes à se joindre à certains de vos échanges.
						</LargeCard>
					</Grid>
				</Grid>

				<Grid container className="tc_MainPanel_grid">
					<Grid item xs={12}>
						<LargeCard
							backgroundColor="dark"
							imageLocalUri="forums.png"
							imagePosition="right"
						>
							<h2>Partagez vos centres d'intérêt</h2>
							Les forums couvrent vos centres d'intérêt professionnels (mais pas que !), avec des thématiques communes à toutes les administrations : innovation publique, formations en ligne, partage de bons plans... Et si vous ne trouvez pas votre bonheur, créez un nouveau forum !
						</LargeCard>
					</Grid>
				</Grid>

				<Grid container spacing={3} className="tc_MainPanel_grid">
					<Grid item md={6} xs={12}>
						<HalfCard
							backgroundColor="dark"
							imageLocalUri="etat.png"
							imagePosition="top"
						>
							<h2>Bénéficiez d'une application souveraine</h2>
							Tchap est conçue et hébergée en France. L'Etat en maîtrise donc l'infrastructure et les développements, spécialement pensés pour répondre aux besoins des agents publics.
						</HalfCard>
					</Grid>
					<Grid item md={6} xs={12}>
						<HalfCard
							backgroundColor="light"
							imageLocalUri="secu.png"
							imagePosition="top"
						>
							<h2>Echangez en toute sécurité</h2>
							Tous les messages privés échangés sur Tchap sont chiffrés de bout en bout. Concrètement, cela signifie que jamais personne d'autre que vous ne pourra avoir accès à ces échanges. Ni même nous.
						</HalfCard>
					</Grid>
				</Grid>
			</Container>
		);
	}
}

export default MainPanel;
