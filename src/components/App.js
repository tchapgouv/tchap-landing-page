import {Component} from "react";
import TopBar from "./bars/TopBar";
import MainPanel from "./panels/MainPanel";
import IntroPanel from "./panels/IntroPanel";
import LargePanel from "./panels/LargePanel";
import BottomBar from "./bars/BottomBar";
import { setLocale, setTranslations } from "react-i18nify";

import "styles/App.scss";

class App extends Component {

	constructor(props) {
		super(props);
		setTranslations(require("locales/fr.json"));
		setLocale('fr');
	}

	render() {
		return (
			<div className="tc_App">
				<TopBar/>
				<IntroPanel/>
				<MainPanel/>
				<LargePanel/>
				<BottomBar/>
			</div>
		);
	}
}

export default App;
