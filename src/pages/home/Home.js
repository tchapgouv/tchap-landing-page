import {Component} from "react";
import TopBar from "components/bars/TopBar";
import BottomBar from "components/bars/BottomBar";
import WelcomePanel from "./panels/WelcomePanel";
import MainPanel from "pages/home/panels/MainPanel";
import JoinUsPanel from "pages/home/panels/JoinUsPanel";
import ContactPanel from "pages/home/panels/ContactPanel";
import "styles/pages/home/Home.scss";

class Home extends Component {

	render() {
		return (
			<div className="tc_Home">
				<TopBar/>
				<WelcomePanel/>
				<JoinUsPanel/>
				<MainPanel/>
				<ContactPanel/>
				<BottomBar/>
			</div>
		);
	}
}

export default Home;
