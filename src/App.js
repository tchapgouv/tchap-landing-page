import {Component} from "react";
import Home from "pages/home/Home";
import Convention from "pages/convention/Convention";
import { setLocale, setTranslations } from "react-i18nify";
import { Switch, Route, HashRouter } from "react-router-dom";

import "@fontsource/roboto";

class App extends Component {

	constructor(props) {
		super(props);
		setTranslations(require("locales/fr.json"));
		setLocale('fr');
	}

	render() {
		return (
			<HashRouter basename="/">
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
			</HashRouter>
		);
	}
}

export default App;
