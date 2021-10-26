import React, { Component } from 'react';
import PropTypes from "prop-types";
import TchapUtils from "utils/TchapUtils";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import "styles/components/cards/HalfCard.scss";

class HalfCard extends Component {

	static propTypes = {
		title: PropTypes.string.isRequired,
		imageLocalUri: PropTypes.string.isRequired,
		imagePosition: PropTypes.oneOf(['top', 'bottom']).isRequired,
		backgroundColor: PropTypes.oneOf(['light', 'dark']).isRequired,
		imageWidth: PropTypes.number,
		imageHeight: PropTypes.number,
	};

	constructor(props) {
		super(props);
	}

	render() {
		const classes = `tc_HalfCard tc_HalfCard_${this.props.backgroundColor} tc_HalfCard_image_${this.props.imagePosition}`;
		return (
			<Container maxWidth="lg" className={classes}>
				<Grid container className="tc_HalfCard_image_container">
					<img src={require(`images/${this.props.imageLocalUri}`)}
						alt={this.props.imageLocalUri}
						width={this.props.imageWidth}
						height={this.props.imageHeight}/>
				</Grid>
				<Grid container className="tc_HalfCard_text_container">
					<div className="tc_HalfCard_title">
						{this.props.title}
					</div>
					<div className="tc_HalfCard_content" dangerouslySetInnerHTML={{ __html: TchapUtils.sanitize(this.props.children) }} />
				</Grid>
			</Container>
		);
	}
}

export default HalfCard;
