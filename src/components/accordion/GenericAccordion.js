import React, { Component } from 'react';
import PropTypes from "prop-types";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import "styles/components/accordion/GenericAccordion.scss";

class GenericAccordion extends Component {
	static propTypes = {
		title: PropTypes.string,
		hoverColor: PropTypes.bool,
		borderTop: PropTypes.bool,
		rounded: PropTypes.bool,
		id: PropTypes.string,
		expanded: PropTypes.bool,
		onFinish: PropTypes.func,
	};

	constructor(props) {
		super(props);
		this.state = {
			isExpanded: this.props.expanded,
		}
		this._handleAccordionChange = this._handleAccordionChange.bind(this);
	}

	componentWillReceiveProps(nextProps, nextContext) {
		console.log(nextProps)
		this.setState({
			isExpanded: nextProps.expanded,
		});
	}

	_handleAccordionChange() {
		this.setState({
			isExpanded: !this.state.isExpanded,
		});
		this.props.onFinish();
	}

	render() {
		let classes = "tc_GenericAccordion";
		let title = null;
		const titleObj = this.props.children.find(e => e.type && e.type === "title");
		if (titleObj && titleObj.props && titleObj.props.children) {
			title = titleObj.props.children;
		}
		const children = this.props.children.filter(e => !e.type || e.type !== "title");
		const icon = !this.state.isExpanded ? <AddIcon /> : <RemoveIcon />;
		const rounded = this.props.rounded;
		if (this.props.hoverColor === true) {
			classes += " tc_GenericAccordion_hover";
		}
		if (this.props.borderTop === true) {
			classes += " tc_GenericAccordion_bordered";
		}
		return (
			<Accordion className={classes} square={rounded} onChange={() => this._handleAccordionChange()} id={this.props.id} expanded={this.state.isExpanded}>
				<AccordionSummary expandIcon={icon}>
					<span className="tc_GenericAccordion_title">{title}</span>
				</AccordionSummary>
				<AccordionDetails className="tc_GenericAccordion_content">
					{children}
				</AccordionDetails>
			</Accordion>
		);
	}
}

GenericAccordion.defaultProps = {
	borderTop: true,
	rounded: false,
	hoverColor: false,
	expanded: false,
}

export default GenericAccordion;
