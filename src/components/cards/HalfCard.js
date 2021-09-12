import React, { Component } from 'react';
import PropTypes from "prop-types";
import TchapUtils from "../../utils/TchapUtils";

import "styles/cards/HalfCard.scss";

class HalfCard extends Component {

	static propTypes = {
		title: PropTypes.string.isRequired,
		imageLocalUri: PropTypes.string.isRequired,
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
				<div className="tc_HalfCard_image_container">
					<img src={require(`images/${this.props.imageLocalUri}`)}
						alt={this.props.imageLocalUri}
						width={this.props.imageWidth}
						height={this.props.imageHeight}/>
				</div>
				<div className="tc_HalfCard_text_container">
					<div className="tc_HalfCard_title">
						{this.props.title}
					</div>
					<div className="tc_HalfCard_content" dangerouslySetInnerHTML={{ __html: TchapUtils.sanitize(this.props.children) }} />
				</div>
			</div>
		);
	}
}

export default HalfCard;
