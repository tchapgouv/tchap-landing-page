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
							<h4>Utilisez Tchap sur tous vos appareils</h4>
							Tchap est disponible simultanément sur mobile, tablette et web, ainsi que sur les appareils sécurisés.
						</HalfCard>
					</Grid>
					<Grid item md={6} xs={12}>
						<HalfCard
							backgroundColor="dark"
							imageLocalUri="centralized.png"
							imagePosition="top"
						>
							<h4>Retrouvez facilement vos collaborateurs</h4>
							L'annuaire intégré de Tchap vous permet d'entrer en contact avec l'ensemble de ses membres. Pas besoin de connaître le numéro de téléphone de vos interlocuteurs&nbsp;: retrouvez-les simplement en recherchant leur nom ou leur adresse mail professionnelle.
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
							<h4>Centralisez vos échanges</h4>
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
							<h4>Partagez vos centres d'intérêt</h4>
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
							<h4>Bénéficiez d'une application souveraine</h4>
							Tchap est conçue et hébergée en France. L'Etat en maîtrise donc l'infrastructure et les développements, spécialement pensés pour répondre aux besoins des agents publics.
						</HalfCard>
					</Grid>
					<Grid item md={6} xs={12}>
						<HalfCard
							backgroundColor="light"
							imageLocalUri="secu.png"
							imagePosition="top"
						>
							<h4>Echangez en toute sécurité</h4>
							Tous les messages privés échangés sur Tchap sont chiffrés de bout en bout. Concrètement, cela signifie que jamais personne d'autre que vous ne pourra avoir accès à ces échanges. Ni même nous.
						</HalfCard>
					</Grid>
				</Grid>
			</Container>
		);
	}
}

export default MainPanel;
