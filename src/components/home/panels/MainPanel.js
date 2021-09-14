import React, { Component } from 'react';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import HalfCard from "../cards/HalfCard";
import LargeCard from "../cards/LargeCard";

import "styles/home/panels/MainPanel.scss";
import {t} from "react-i18nify";

class MainPanel extends Component {
	render() {
		return (
			<React.Fragment>
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
			</React.Fragment>
		);
	}
}

export default MainPanel;
