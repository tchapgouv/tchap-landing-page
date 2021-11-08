import React, { Component } from 'react';
import IconButton from "@mui/material/IconButton";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import "styles/components/BackToTop.scss";

class BackToTop extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isVisible: false,
		};
	}

	componentDidMount() {
		const that = this;
		document.addEventListener("scroll", function(e) {
			if (window.pageYOffset > (window.innerHeight / 2)) {
				that.setState({
					isVisible: true,
				});
			} else {
				that.setState({
					isVisible: false,
				});
			}
		});
	}

	_scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	}

	render() {
		const isVisible = this.state.isVisible;
		let classes = "tc_BTT";
		if (isVisible) {
			classes += " tc_BTT_visible"
		} else {
			classes += " tc_BTT_invisible"
		}
		return (
			<React.Fragment>
					<div className={classes}>
						<IconButton aria-label="back-to-top" onClick={this._scrollToTop} size="large">
							<KeyboardArrowUpIcon fontSize="inherit" className="tc_BTT_icon" />
						</IconButton>
					</div>
			</React.Fragment>
		);
	}
}

export default BackToTop;
