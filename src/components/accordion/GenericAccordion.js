import { Component } from 'react';
import PropTypes from "prop-types";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import "styles/components/accordion/GenericAccordion.scss";

class GenericAccordion extends Component {
	static propTypes = {
		hoverColor: PropTypes.bool,
		borderTop: PropTypes.bool,
		rounded: PropTypes.bool,
		id: PropTypes.string.isRequired,
		expanded: PropTypes.bool.isRequired,
	};

	constructor(props) {
		super(props);
		this.state = {
			isExpanded: this.props.expanded,
		}
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevProps.expanded !== this.props.expanded) {
			this.setState({
				isExpanded: this.props.expanded,
			});
		}
	}

	render() {
		const { hoverColor, borderTop, rounded, children, ...newProps } = this.props;
		let classes = "tc_GenericAccordion";
		let title = null;
		const titleObj = children.find(e => e.type && e.type === "title");
		if (titleObj && titleObj.props && titleObj.props.children) {
			title = titleObj.props.children;
		}
		const child = children.filter(e => !e.type || e.type !== "title");
		const icon = this.state.isExpanded ? <RemoveIcon /> : <AddIcon />;
		if (hoverColor === true) {
			classes += " tc_GenericAccordion_hover";
		}
		if (borderTop === true) {
			classes += " tc_GenericAccordion_bordered";
		}

		return (
			<Accordion className={classes} square={rounded} id={this.props.id} expanded={this.state.isExpanded} {...newProps}>
				<AccordionSummary expandIcon={icon}>
					<span className="tc_GenericAccordion_title">{title}</span>
				</AccordionSummary>
				<AccordionDetails className="tc_GenericAccordion_content">
					{child}
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
