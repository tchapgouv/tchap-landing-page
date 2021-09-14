import React, { Component } from 'react';
import WelcomeBtn from "./WelcomeBtn";
import { t } from 'react-i18nify';
import TchapUtils from "../../../utils/TchapUtils";

import "styles/home/welcome/WelcomePaper.scss";

class WelcomePaper extends Component {
	render() {
		return (
			<div className="tc_WelcomePaper">
				<div className="tc_WelcomePaper_title" dangerouslySetInnerHTML={{ __html: TchapUtils.sanitize(t('welcome.title')) }} />
				<div className="tc_WelcomePaper_content" dangerouslySetInnerHTML={{ __html: TchapUtils.sanitize(t('welcome.text')) }} />
				<div className="tc_WelcomePaper_content">
					<WelcomeBtn />
				</div>
			</div>
		);
	}
}

export default WelcomePaper;
