import React, { Component } from 'react';
import PropTypes from "prop-types";
import GenericLink from "components/GenericLink";

class SeeMoreLinks extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		const links = this.props.links.map(linkInfo => {
			return <li key={linkInfo.to}>
				<GenericLink onClick={this.props.onClick} to={linkInfo.to}>{linkInfo.text}</GenericLink>
			</li>;
		});
		return (
			<React.Fragment>
				<div className="tc_FaqComponent_seemore">
					<ul>
						{links}
					</ul>
				</div>
			</React.Fragment>
		);
	}
}

export default SeeMoreLinks;
