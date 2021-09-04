import React, { Component } from 'react';
import PropTypes from "prop-types";

import "styles/cards/HalfCard.scss";

class HalfCard extends Component {

	static propTypes = {
		title: PropTypes.string.isRequired,
		imageName: PropTypes.string.isRequired,
		imagePosition: PropTypes.oneOf(['top', 'bottom']).isRequired,
		backgroundColor: PropTypes.oneOf(['light', 'dark']).isRequired,
		imageWidth: PropTypes.number.isRequired,
		imageHeight: PropTypes.number.isRequired,
	};

	constructor(props) {
		super(props);
	}

	render() {
		const classes = `tc_HalfCard tc_HalfCard_${this.props.backgroundColor} tc_HalfCard_image_${this.props.imagePosition}`;
		return (
			<div className={classes}>
				<img src={require(`images/${this.props.imageName}`)}
					alt={this.props.imageName}
					width={this.props.imageWidth}
					height={this.props.imageHeight}/>
				<div>
					<div className="tc_HalfCard_title">
						{this.props.title}
					</div>
					<div className="tc_HalfCard_content">
						{this.props.children}
					</div>
				</div>
			</div>
		);
	}
}

export default HalfCard;
