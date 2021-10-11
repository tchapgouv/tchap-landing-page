import React, { Component } from 'react';
import {t} from "react-i18nify";
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
							title={ t('cards.government.title') }
							backgroundColor="light"
							imageLocalUri="etat.png"
							imageWidth={270}
							imageHeight={90}
							imagePosition="top"
						>
							{ t('cards.government.text') }
						</HalfCard>
					</Grid>
					<Grid item md={6} xs={12}>
						<HalfCard
							title={ t('cards.security.title') }
							backgroundColor="dark"
							imageLocalUri="secu.png"
							imageWidth={80}
							imageHeight={103}
							imagePosition="top"
						>
							{ t('cards.security.text') }
						</HalfCard>
					</Grid>
				</Grid>

				<Grid container spacing={3} className="tc_MainPanel_grid">
					<Grid item xs={12}>
						<LargeCard
							title={ t('cards.directory.title') }
							backgroundColor="light"
							imageLocalUri="annuaire.png"
							imageWidth={380}
							imageHeight={365}
							imagePosition="left"
						>
							{ t('cards.directory.text') }
						</LargeCard>
					</Grid>
				</Grid>

				<Grid container spacing={3} className="tc_MainPanel_grid">
					<Grid item xs={12}>
						<LargeCard
							title={ t('cards.forums.title') }
							backgroundColor="dark"
							imageLocalUri="forums.png"
							imageWidth={385}
							imageHeight={365}
							imagePosition="right"
						>
							{ t('cards.forums.text') }
						</LargeCard>
					</Grid>
				</Grid>

				<Grid container spacing={3} className="tc_MainPanel_grid">
					<Grid item md={6} xs={12}>
						<HalfCard
							title={ t('cards.devices.title') }
							backgroundColor="dark"
							imageLocalUri="devices.png"
							imageWidth={168}
							imageHeight={77}
							imagePosition="top"
						>
							{ t('cards.devices.text') }
						</HalfCard>
					</Grid>
					<Grid item md={6} xs={12}>
						<HalfCard
							title={ t('cards.osources.title') }
							backgroundColor="light"
							imageLocalUri="matrix.png"
							imageWidth={133}
							imageHeight={57}
							imagePosition="top"
						>
							{ t('cards.osources.text') }
						</HalfCard>
					</Grid>
				</Grid>
			</Container>
		);
	}
}

export default MainPanel;
