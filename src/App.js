import {Component} from "react";
import Home from "pages/home/Home";
import Convention from "pages/convention/Convention";
import Suivi from "pages/suivi/Suivi";
import { setLocale, setTranslations } from "react-i18nify";
import { Switch, Route, HashRouter } from "react-router-dom";
import { matomoHOC } from './utils/HOC';

import "@fontsource/roboto";

class App extends Component {

	constructor(props) {
		super(props);
		const hooks = this.props.hooks;
		setTranslations(require("locales/fr.json"));
		setLocale('fr');
		hooks.trackPageView();
	}

	render() {
		return (
			<HashRouter basename="/">
				<div>
					<Switch>
						<Route path="/convention">
							<Convention />
						</Route>
						<Route path="/suivi">
							<Suivi />
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

export default matomoHOC(App);
