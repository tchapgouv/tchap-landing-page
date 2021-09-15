import React, { Component } from 'react';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";

import "styles/home/cards/LargeCard.scss";

class LargeCard extends Component {

	static propTypes = {
		title: PropTypes.string.isRequired,
		imageLocalUri: PropTypes.string.isRequired,
		imagePosition: PropTypes.oneOf(['left', 'right']).isRequired,
		backgroundColor: PropTypes.oneOf(['light', 'dark']).isRequired,
		imageWidth: PropTypes.number.isRequired,
		imageHeight: PropTypes.number.isRequired,
	};

	constructor(props) {
		super(props);
	}

	render() {
		const classes = `tc_LargeCard tc_LargeCard_${this.props.backgroundColor}`;
		const imgContainerClasses = `tc_LargeCard_main tc_LargeCard_image_container_${this.props.imagePosition}`;
		const textClasses = `tc_LargeCard_text_${this.props.imagePosition}`;

		return (
			<Container maxWidth="lg" className={classes}>
				<Grid container className={imgContainerClasses}>
					<Grid item md={6} xs={12} className="tc_LargeCard_image">
						<img src={require(`images/${this.props.imageLocalUri}`)}
							alt={this.props.imageLocalUri}
							width={this.props.imageWidth}
							height={this.props.imageHeight}/>
					</Grid>
					<Grid item md={6} xs={12} className={textClasses}>
						<div className="tc_LargeCard_title">{this.props.title}</div>
						<div className="tc_LargeCard_content">{this.props.children}</div>
					</Grid>
				</Grid>
			</Container>
		);
	}
}

export default LargeCard;
