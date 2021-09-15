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
		console.error(this.props)
		if (url.startsWith("/")) {
			return <Link to={url} {...this.props}>{this.props.children}</Link>
		} else {
			return <a href={url} target="_blank" rel="noreferrer noopener nofollow" {...this.props}>{this.props.children}</a>
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
