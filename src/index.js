import ReactDOM from 'react-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { MatomoProvider, createInstance } from '@datapunt/matomo-tracker-react'
import '../res/css/index.scss';
import config from './config'

import App from "./App"
import '@gouvfr/dsfr/dist/dsfr/dsfr.module.js'


const theme = createTheme({
	palette: {
		primary: {
			main: "#110091",
		},
	},
});

const isTrackingEnabled = () => {
	let tracking = "enabled";
	if (localStorage && !localStorage.getItem('tracking')) {
		localStorage.setItem('tracking', tracking)
	} else if (localStorage && localStorage.getItem('tracking')) {
		tracking = localStorage.getItem('tracking');
	}
	if (process.env.NODE_ENV !== "production") {
		return true;
	} else {
		return tracking === "disabled";
	}
};

const instance = createInstance({
	urlBase: config.MATOMO_URL,
	siteId: 203,
	trackerUrl: config.MATOMO_URL + '/piwik.php',
	srcUrl: config.MATOMO_URL + '/piwik.js',
	disabled: isTrackingEnabled(),
	heartBeat: {
		active: false,
	},
});

ReactDOM.render(<MatomoProvider value={instance}><ThemeProvider theme={theme}><App /></ThemeProvider></MatomoProvider>, document.getElementById('root'));
