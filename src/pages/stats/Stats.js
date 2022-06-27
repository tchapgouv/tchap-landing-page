import { Container } from "@mui/material";
import { Component } from "react";
import BottomBar from "../../components/bars/BottomBar";
import TopBar from "../../components/bars/TopBar";

class Stats extends Component {

	render() {
		return (
			<div className="tc_Stats">
				<TopBar borderBottom={true} />
				<Container maxWidth="lg">

					<iframe
							src="https://stats.tchap.incubateur.net/public/dashboard/c117db35-4909-4b0c-a5f0-e6852d6d6fb7"
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
