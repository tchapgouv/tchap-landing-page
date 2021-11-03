import React, { Component } from "react";
import {t} from "react-i18nify";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TopBar from "components/bars/TopBar";
import BottomBar from "components/bars/BottomBar";
import GenericAccordion from "components/accordion/GenericAccordion";
import GenericLink from "components/GenericLink";

import "styles/pages/faq/FaqComponent.scss";

class FaqComponent2 extends Component {

	static propTypes = {
		match: PropTypes.object.isRequired,
		location: PropTypes.object.isRequired,
		history: PropTypes.object.isRequired
	};

	constructor(props) {
		super(props);
		const anchor = location.hash.split("#")[2];
		const expanded = {"tcq01_001": false, "tcq01_002": false};
		anchor ? expanded[anchor] = true : null;
		this.state = {
			expanded,
		};
		this._expandWithId = this._expandWithId.bind(this);
		//this.openById = this.openById.bind(this);
	}

	componentWillMount() {
		this.unlisten = this.props.history.listen((location, action) => {
			if (location.hash) {
				const id = location.hash.split("#")[1];
				this._expandWithId(id, true)
			}
		});
	}
	componentWillUnmount() {
		this.unlisten();
	}

	componentDidMount() {
		console.error("componentDidMount")
		const exp = this.state.expanded;
		const anchor = location.hash.split("#")[2];
		if (anchor) {
			this.setState({
				expanded: exp
			});
			const elem = document.getElementById(anchor);
			if (elem) {
				window.scrollTo({
					behavior: "smooth",
					top: elem.offsetTop
				});
			}
		}
	}

	_expandWithId(id, expanded) {
		console.log("_expandWithId : " + id)
		const exp = this.state.expanded;
		if (expanded) {
			exp[id]	= true;
		} else {
			exp[id] = !exp[id];
		}
		this.setState({
			expanded: exp,
		});
	}

	_generateElem(id) {
		const exp = this.state.expanded;
		return {
			id: id,
			expanded: exp[id],
			onFinish: () => this._expandWithId(id),
		};
	}

	/*openById(id) {
		const exp = this.state.expanded;
		if (!exp[id]) {
			exp[id] = !exp[id]
			this.setState({
				expanded: exp
			});
		}
	}*/

	render() {
		return (
			<div>
				<TopBar borderBottom={true} />
					<Container maxWidth="lg">
						<Grid container className="tc_FaqComponent">
							<Grid item xs={12}>

								<div id="tcq01_000" className="tc_FaqComponent_section">A propos</div>
								<GenericAccordion {...this._generateElem("tcq01_001")}>
									<title>Pourquoi Tchap ?</title>
									La messagerie instantanée Tchap a été créée pour les agents publics comme l'alternative française et sécurisée aux messageries instantanées grand public.
								</GenericAccordion>
								<GenericAccordion {...this._generateElem("tcq01_002")}>
									<title>Qui peut utiliser Tchap ?</title>
									<div className="tc_FaqComponent_subtitle">Les agents publics</div>
									<div>Tchap s'adresse à tous les agents publics, peu importe leur contrat de travail.</div>
									<div>Pour utiliser Tchap, il faut un <span className="tc_text_b">e-mail professionnel d'une administration reconnue</span> comme :</div>
									<ul>
										<li>L’ensemble de l’administration et de la fonction publique (d’Etat, hospitalière et territoriale)</li>
										<li>L’ensemble des établissements publics comme les Etablissements Publics Administratifs (EPA) et Etablissements Publics Industriels et Commerciaux (EPIC)</li>
										<li>Les Autorités Administratives Indépendantes (AAI)</li>
									</ul>
									<div className="tc_FaqComponent_seemore">
										<GenericLink to="#tcq01_001" className="tc_FaqComponent_link">Comment inviter un partenaire externe à rejoindre Tchap ?</GenericLink>
									</div>
								</GenericAccordion>
							</Grid>
						</Grid>
					</Container>
				<BottomBar />
			</div>
		);
	}
}

export default withRouter(FaqComponent2);
