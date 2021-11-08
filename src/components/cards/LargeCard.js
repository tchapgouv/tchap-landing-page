import { Component } from 'react';
import PropTypes from "prop-types";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import "styles/components/cards/LargeCard.scss";

class LargeCard extends Component {

	static propTypes = {
		imageLocalUri: PropTypes.string.isRequired,
		imagePosition: PropTypes.oneOf(['left', 'right']).isRequired,
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
						<div className="tc_LargeCard_title">{title}</div>
						<div className="tc_LargeCard_content">{child}</div>
					</Grid>
				</Grid>
			</Container>
		);
	}
}

export default LargeCard;
