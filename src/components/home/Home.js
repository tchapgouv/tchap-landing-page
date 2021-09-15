import {Component} from "react";
import TopBar from "./bars/TopBar";
import MainPanel from "components/home/panels/MainPanel";
import IntroPanel from "components/home/panels/IntroPanel";
import LargePanel from "components/home/panels/LargePanel";
import BottomBar from "components/home/bars/BottomBar";
import "styles/home/Home.scss";

class Home extends Component {

	render() {
		return (
			<div className="tc_Home">
				<TopBar/>
				<IntroPanel/>
				<MainPanel/>
				<LargePanel/>
				<BottomBar/>
			</div>
		);
	}
}

export default Home;
