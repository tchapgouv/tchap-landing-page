import ReactDOM from 'react-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { MatomoProvider, createInstance } from '@datapunt/matomo-tracker-react'
import '../res/css/index.scss';

import App from "./App"


const theme = createTheme({
	palette: {
		primary: {
			main: "#110091",
		},
	},
});

const instance = createInstance({
	urlBase: 'https://stats.data.gouv.fr/',
	siteId: 203,
	trackerUrl: 'https://stats.data.gouv.fr/piwik.php',
	srcUrl: 'https://stats.data.gouv.fr/piwik.js',
	disabled: process.env.NODE_ENV === "development",
	heartBeat: {
		active: false,
	},
});

ReactDOM.render(<MatomoProvider value={instance}><ThemeProvider theme={theme}><App /></ThemeProvider></MatomoProvider>, document.getElementById('root'));
