import { Component } from 'react';
import PropTypes from "prop-types";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import "styles/components/cards/HalfCard.scss";

class HalfCard extends Component {

	static propTypes = {
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
		const children = this.props.children;
		let title = null;
		const titleObj = children.find(e => e.type && e.type === "title");
		if (titleObj && titleObj.props && titleObj.props.children) {
			title = titleObj.props.children;
		}
		const child = children.filter(e => !e.type || e.type !== "title");
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
						{title}
					</div>
					<div className="tc_HalfCard_content">
						{child}
					</div>
				</Grid>
			</Container>
		);
	}
}

export default HalfCard;
