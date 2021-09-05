import React, { Component } from 'react';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import HalfCard from "../cards/HalfCard";
import LargeCard from "../cards/LargeCard";

import "styles/panels/MainPanel.scss";
import {t} from "react-i18nify";

class MainPanel extends Component {
	render() {
		return (
			<React.Fragment>
				<Container maxWidth="lg" className="tc_MainPanel">
					<Grid container spacing={3} className="tc_MainPanel_grid">
						<Grid item xs={6}>
							<HalfCard
								title={ t('cards.government.title') }
								backgroundColor="light"
								imageName="etat.jpg"
								imageWidth={270}
								imageHeight={80}
								imagePosition="top"
							>
								{ t('cards.government.text') }
							</HalfCard>
						</Grid>
						<Grid item xs={6}>
							<HalfCard
								title={ t('cards.security.title') }
								backgroundColor="dark"
								imageName="secu.png"
								imageWidth={80}
								imageHeight={100}
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
								imageName="annuaire.png"
								imageWidth={380}
								imageHeight={400}
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
								imageName="forums.png"
								imageWidth={380}
								imageHeight={400}
								imagePosition="right"
							>
								{ t('cards.forums.text') }
							</LargeCard>
						</Grid>
					</Grid>

					<Grid container spacing={3} className="tc_MainPanel_grid">
						<Grid item xs={6}>
							<HalfCard
								title={ t('cards.devices.title') }
								backgroundColor="dark"
								imageName="multi.png"
								imageWidth={180}
								imageHeight={80}
								imagePosition="top"
							>
								{ t('cards.devices.text') }
							</HalfCard>
						</Grid>
						<Grid item xs={6}>
							<HalfCard
								title={ t('cards.osources.title') }
								backgroundColor="light"
								imageName="matrix.png"
								imageWidth={135}
								imageHeight={60}
								imagePosition="top"
							>
								{ t('cards.osources.text') }
							</HalfCard>
						</Grid>
					</Grid>
				</Container>
			</React.Fragment>
		);
	}
}

export default MainPanel;
