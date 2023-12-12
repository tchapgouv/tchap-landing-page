import {Component} from "react";
{/* Uncomment the following line to enable the notice bar */}
{/* import NoticeBar from "components/bars/NoticeBar"; */} 
import TopBar from "components/bars/TopBar";
import BottomBar from "components/bars/BottomBar";
import WelcomePanel from "./panels/WelcomePanel";
import MainPanel from "pages/home/panels/MainPanel";
import JoinUsPanel from "pages/home/panels/JoinUsPanel";
import ComparePanel from "pages/home/panels/ComparePanel";
import ContactPanel from "pages/home/panels/ContactPanel";
import "styles/pages/home/Home.scss";

class Home extends Component {

	render() {
		return (
			<div className="tc_Home">
				<TopBar/>
				{/* Uncomment the following line to enable the notice bar */}
				{/*  <NoticeBar/> */}
				<WelcomePanel/>
				<JoinUsPanel/>
				<MainPanel/>
				<ComparePanel/>
				<ContactPanel/>
				<BottomBar/>
			</div>
		);
	}
}

export default Home;
