import { Component } from "react";
import { matomoHOC } from 'utils/HOC/MatomoHOC';
import { setLocale, setTranslations } from "react-i18nify";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "pages/home/Home";
import Convention from "pages/convention/Convention";
import CookiesManagement from "pages/cookiesManagement/CookiesManagement";
import About from "pages/about/About";
import PrivacyPolicy from "pages/privacy-policy/PrivacyPolicy";

import Tac from "pages/tac/Tac";

import "@fontsource/roboto";

class App extends Component {

	constructor(props) {
		super(props);
		const matomoHook = this.props.matomoHook;
		setTranslations(require("locales/fr.json"));
		setLocale('fr');
		matomoHook.trackPageView();
	}

	render() {
		return (
			<BrowserRouter basename="/">
				<Routes>
					<Route path="/convention" element={<Convention />} />
					<Route path="/gestion-des-cookies" element={<CookiesManagement />} />
					<Route path="/cgu" element={<Tac />} />
					<Route path="/politique-de-confidentialite" element={<PrivacyPolicy />} />
					<Route path="/a-propos" element={<About />} />
					<Route path="/" element={<Home />} />
				</Routes>
			</BrowserRouter>
		);
	}
}

export default matomoHOC(App);
