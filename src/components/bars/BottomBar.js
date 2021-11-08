import { Component } from 'react';
import { matomoHOC } from 'utils/HOC';
import { t } from "react-i18nify";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import GitHub from '@mui/icons-material/GitHub';
import GenericLink from "components/GenericLink";
import RepLogo from "icons/rep-logo.svg";
import TchapLogoMono from "icons/tchap-logo-mono.svg";
import MatrixLogo from "icons/matrix-logo.svg";
import TchapUtils from "utils/TchapUtils";

import "styles/components/bars/BottomBar.scss";

class BottomBar extends Component {

	constructor(props) {
		super(props);
		this._hookProbe = this._hookProbe.bind(this);
	}

	_hookProbe(e) {
		const hooks = this.props.hooks;
		const actionName = e.target.dataset.probeName;
		hooks.trackEvent({ category: 'footer', action: actionName });
	}

	render() {
		return (
			<div className="tc_BottomBar">
				<Container maxWidth="lg">
					<Grid container className="tc_BottomBar_container">
						<Grid item xs={6}>
							<RepLogo width="150"/>
						</Grid>
						<Grid item xs={6} className="tc_BottomBar_text">
							<div dangerouslySetInnerHTML={{ __html: TchapUtils.sanitize(t('footer.text')) }} />
						</Grid>
					</Grid>
					<Grid container className="tc_BottomBar_Menu_container">
						<GenericLink data-probe-name="github" onClick={this._hookProbe} to="https://github.com/tchapgouv/tchap-landing-page" className="tc_BottomBar_Menu_item">
							<GitHub className="tc_BottomBar_Menu_logo" /> GitHub
						</GenericLink>
						<GenericLink data-probe-name="tchap" onClick={this._hookProbe} to="https://www.tchap.gouv.fr/" className="tc_BottomBar_Menu_item">
							<TchapLogoMono className="tc_BottomBar_Menu_logo" /> Tchap
						</GenericLink>
						<GenericLink data-probe-name="matrix" onClick={this._hookProbe} to="https://matrix.org/" className="tc_BottomBar_Menu_item">
							<MatrixLogo className="tc_BottomBar_Menu_logo" /> matrix.org
						</GenericLink>
						<GenericLink data-probe-name="personal-data" onClick={this._hookProbe} to="/suivi" className="tc_BottomBar_Menu_item">
							Données personnelles
						</GenericLink>
					</Grid>
				</Container>
			</div>
		);
	}
}

export default matomoHOC(BottomBar);
