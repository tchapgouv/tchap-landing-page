import { Container } from "@mui/material";
import { Component } from "react";
import BottomBar from "../../components/bars/BottomBar";
import TopBar from "../../components/bars/TopBar";
import config from "../../config"

class Stats extends Component {

	render() {
		return (
			<div className="tc_Stats">
				<TopBar borderBottom={true} />
				<Container maxWidth="lg">

					<iframe
							src={config.STATS_DASHBOARD_URL}
							frameBorder="0"
							width="100%"
							height="2200px"
							allowtransparency="true"
					></iframe>

				</Container>
				<BottomBar />
			</div>
		);
	}
}

export default Stats;
