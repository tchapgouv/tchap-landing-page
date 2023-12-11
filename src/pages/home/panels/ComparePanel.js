import { Component } from 'react';
import Container from "@mui/material/Container";
import Grid from '@mui/material/Grid';
import CompareTable from 'images/compare_table.png';

import "styles/pages/home/panels/ComparePanel.scss";

class ComparePanel extends Component {
	render() {
		return (
			<div className="tc_ComparePanel" id="join">
				<Container maxWidth="lg">
					<Grid container>
						<Grid item xs={12} className="tc_ComparePanel_compare">
							<div className="tc_ComparePanel_title"><h2>Comparaison avec d'autres messageries</h2></div>
							<img src={CompareTable} />
						
						</Grid>
					</Grid>
				</Container>
			</div>
		);
	}
}

export default ComparePanel;
