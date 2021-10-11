import ReactDOM from 'react-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import '../res/css/index.scss';
import App from "./App"

const theme = createTheme();

ReactDOM.render(<ThemeProvider theme={theme}><App /></ThemeProvider>, document.getElementById('root'));
