import ReactDOM from 'react-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { MatomoProvider, createInstance } from '@datapunt/matomo-tracker-react'
import '../res/css/index.scss';

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
	urlBase: 'https://stats.data.gouv.fr/',
	siteId: 203,
	trackerUrl: 'https://stats.data.gouv.fr/piwik.php',
	srcUrl: 'https://stats.data.gouv.fr/piwik.js',
	disabled: isTrackingEnabled(),
	heartBeat: {
		active: false,
	},
});

ReactDOM.render(<MatomoProvider value={instance}><ThemeProvider theme={theme}><App /></ThemeProvider></MatomoProvider>, document.getElementById('root'));
