import {Component} from "react";
import TopBar from "./bars/TopBar";
import MainPanel from "./panels/MainPanel";
import IntroPanel from "./panels/IntroPanel";
import LargePanel from "./panels/LargePanel";
import BottomBar from "./bars/BottomBar";
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
