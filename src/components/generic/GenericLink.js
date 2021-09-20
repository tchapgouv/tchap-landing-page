import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Mailto from 'react-mailto.js';

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
		if (url.startsWith("/")) {
			return <Link to={url} {...this.props}>{this.props.children}</Link>;
		} else if (url.startsWith("mailto:")) {
			const email = url.split("mailto:")[1];
			console.error(email)
			return <Mailto
				secure={true}
				to={email}
				subject="Tchap contact"
				rel="noreferrer noopener nofollow"
				target="_blank"
				{...this.props}>
				{this.props.children}
			</Mailto>;
			//return <a href={url} target="_blank" rel="noreferrer noopener nofollow" {...this.props}>{this.props.children}</a>
		} else {
			return <a href={url} target="_blank" rel="noreferrer noopener nofollow" {...this.props}>{this.props.children}</a>;
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
