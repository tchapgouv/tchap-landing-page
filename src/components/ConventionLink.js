import React, { Component } from 'react';
import PropTypes from "prop-types";
import ConventionPdf from "public/CONVENTION_DE_SERVICE_TCHAP_2022.02.10.pdf";

class ConventionLink extends Component {
	static propTypes = {
		linkText: PropTypes.string.isRequired,
	};

	constructor(props) {
		super(props);
		this._hookProbe = this._hookProbe.bind(this);
	}

	_hookProbe() {
		const matomoHook = this.props.matomoHook;
		matomoHook.trackEvent({ category: 'convention', action: 'download' });
	}

	findFilenameFromPath(fullPath) {
		var filename = fullPath.replace(/^.*[\\\/]/, '')
		return filename;
	}

	render() {
		return (
			<React.Fragment>
				<a href={ConventionPdf} download={this.findFilenameFromPath(ConventionPdf)}>{this.props.linkText}</a>
			</React.Fragment>
		);
	}
}

export default ConventionLink;