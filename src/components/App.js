import {Component} from "react";
import Home from "components/home/Home";
import Convention from "components/convention/Convention";
import { setLocale, setTranslations } from "react-i18nify";
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

import "@fontsource/roboto";
import "styles/App.scss";

class App extends Component {

	constructor(props) {
		super(props);
		setTranslations(require("locales/fr.json"));
		setLocale('fr');
	}

	render() {
		return (
			<Router>
				<div>
					<Switch>
						<Route path="/convention">
							<Convention />
						</Route>
						<Route path="/">
							<Home />
						</Route>
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
