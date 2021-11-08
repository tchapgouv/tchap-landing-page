import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import "styles/components/BackToTop.scss";

class BackToTop extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isVisible: false,
		};
		this._handleScroll = this._handleScroll.bind(this);
		this._scrollToTop = this._scrollToTop.bind(this);
	}

	componentDidMount() {
		document.addEventListener("scroll", this._handleScroll);
	}

	componentWillUnmount() {
		document.removeEventListener("scroll", this._handleScroll);
	}

	_handleScroll() {
		if (window.pageYOffset > (window.innerHeight / 2)) {
			this.setState({
				isVisible: true,
			});
		} else {
			this.setState({
				isVisible: false,
			});
		}
	}

	_scrollToTop() {
		if (location.hash.split("#").length -1 > 1) {
			this.props.history.push();
		}
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

export default withRouter(BackToTop);
