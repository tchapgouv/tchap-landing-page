import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class GenericLink extends Component {
	static propTypes = {
		to: PropTypes.string.isRequired,
	};

	constructor(props) {
		super(props);
		this.generateLink = this.generateLink.bind(this);
	}

	generateLink() {
		const url = this.props.to;
		if (url.startsWith("#") || url.startsWith("/#")) {
			return <Link to={{ hash: url }} {...this.props}>{this.props.children}</Link>;
		} else if (url.startsWith("/")) {
			return <Link className="tc_GenericLink_link" to={url} {...this.props}>{this.props.children}</Link>;
		} else {
			return <a className="tc_GenericLink_link" href={url} target="_blank" rel="noreferrer noopener nofollow" {...this.props}>{this.props.children}</a>;
		}
	}

	render() {
		return (
			<React.Fragment>
				{this.generateLink()}
			</React.Fragment>
		);
	}
}

export default GenericLink;
