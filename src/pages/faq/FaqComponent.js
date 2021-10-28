import { Component } from "react";
import {t} from "react-i18nify";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TopBar from "components/bars/TopBar";
import BottomBar from "components/bars/BottomBar";
import GenericAccordion from "components/accordion/GenericAccordion";
import GenericLink from "components/GenericLink";

import "styles/pages/faq/FaqComponent.scss";

class FaqComponent extends Component {

	constructor(props) {
		super(props);
		this.state = {
			hashId: null,
		};
	}

	render() {
		let hashId = "";
		const anchor = location.hash.split("#")[2];
		if (anchor) {
			hashId = anchor;
			const elem = document.getElementById(anchor);
			if (elem) {
				window.scrollTo({
					behavior: "smooth",
					top: elem.offsetTop
				});
			}
		}
		return (
			<div>
				<TopBar borderBottom={true} />
					<Container maxWidth="lg">
						<Grid container className="tc_FaqComponent">
							<Grid item xs={12}>

								<div className="tc_FaqComponent_section">A propos</div>
								<GenericAccordion title="Pourquoi Tchap ?" id="tcq01_001" defaultExpanded={hashId === "tcq01_001"}>
									La messagerie instantanée Tchap a été créée pour les agents publics comme l'alternative française et sécurisée aux messageries instantanées grand public.
								</GenericAccordion>
								<GenericAccordion title="Qui peut utiliser Tchap ?">
									<div className="tc_FaqComponent_subtitle">Les agents publics</div>
									<div>Tchap s'adresse à tous les agents publics, peu importe leur contrat de travail.</div>
									<div>Pour utiliser Tchap, il faut un <span className="tc_text_b">e-mail professionnel d'une administration reconnue</span> comme :</div>
									<ul>
										<li>L’ensemble de l’administration et de la fonction publique (d’Etat, hospitalière et territoriale)</li>
										<li>L’ensemble des établissements publics comme les Etablissements Publics Administratifs (EPA) et Etablissements Publics Industriels et Commerciaux (EPIC)</li>
										<li>Les Autorités Administratives Indépendantes (AAI)</li>
										<li>Les universités</li>
										<li>Les collectivités</li>
										<li>Autres personnes morales de droit public comme les Groupements d'Intérêt Public (GIP)</li>
									</ul>
									<div>Vous pouvez vérifier si votre e-mail professionnel est bien reconnu par Tchap <GenericLink to={"/#joinUs"}>ici</GenericLink>.</div>
									<div className="tc_text_nl">Si votre e-mail professionnel n'est pas reconnu par Tchap, vous pouvez en faire la demande en envoyant <GenericLink to={t("links.convention")}>cette convention</GenericLink> signée par votre direction à l'adresse <GenericLink to={t("links.contact")}>{t("generic.contact")}</GenericLink></div>
									<div className="tc_FaqComponent_subtitle">Les partenaires externes</div>
									<div>Les partenaires externes sont les personnes avec lesquelles vous travaillez qui ne sont pas agents publics.</div>
									<div>Ils peuvent utiliser Tchap, mais n'ont pas les mêmes droits que les agents publics :</div>
									<ul>
										<li>Ils doivent être invités par un agent public pour pouvoir créer un compte.</li>
										<li>Ils ne peuvent participer qu'aux échanges auxquels ils ont été invités.</li>
										<li>Ils ne peuvent pas créer d'échanges en dehors de ceux auxquels ils ont été invités.</li>
										<li>Ils n'ont pas accès à l'annuaire des utilisateurs de Tchap, ni aux salons forums.</li>
									</ul>
									<div className="tc_FaqComponent_seemore">Voir aussi : Comment inviter un partenaire externe à rejoindre Tchap ?</div>
								</GenericAccordion>

								<div className="tc_FaqComponent_section">Gestion du compte</div>
								<GenericAccordion title="Comment s'inscrire ?">
									<div>Pour vous inscrire sur Tchap :</div>
									<ul className="tc_FaqComponent_List_decimal">
										<li>
											Allez sur Tchap <GenericLink to={t("links.web")}>web</GenericLink>, <GenericLink to={t("links.android")}>Android</GenericLink> ou <GenericLink to={t("links.ios")}>iOS</GenericLink>.
											<br />
											Vous pourrez utiliser Tchap sur tous vos appareils. Choisissez-en un pour vous inscrire.
										</li>
										<li>Utilisez votre e-mail professionnel comme identifiant.</li>
										<li>
											Confirmez la création de votre compte en cliquant sur le lien dans l'e-mail que vous aurez reçu.
											<br />
											<span className="tc_text_i">Attention : ce lien expire au bout de 3 jours. Après ce délai, il faudra effectuer l'inscription à nouveau.</span>
										</li>
										<li>Vous pouvez commencer à utiliser Tchap tout de suite.</li>
									</ul>
									<div className="tc_FaqComponent_seemore">Voir aussi : Qui peut utiliser Tchap ?</div>
									<div className="tc_FaqComponent_seemore">Voir aussi : Guide de prise en main pour faciliter vos débuts sur Tchap.</div>
								</GenericAccordion>
								<GenericAccordion title="Pourquoi dois-je renouveler mon compte tous les 2 mois ?"  id="renouvellement" defaultExpanded={hashId === "renouvellement"}>
									<div className="tc_text_nl">Vous ne pouvez utiliser Tchap qu'avec un e-mail professionnel valide. Tchap doit vérifier que votre e-mail est toujours valide pour <span className="tc_text_b">garder votre compte actif.</span></div>
									<div className="tc_text_nl">C'est pourquoi vous recevez toutes les 8 semaines un e-mail de Tchap avec un lien sur lequel cliquer pour garder votre compte actif.</div>
									<div className="tc_text_nl">Vous avez 7 jours pour cliquer sur le lien dans l'e-mail. </div>
									<div className="tc_text_nl">Si vous dépassez les 7 jours, vous pouvez réactiver votre compte depuis l'application mobile de Tchap en demandant l'envoi d'un nouvel e-mail de réactivation.</div>
									<div className="tc_text_nl">Attention : Veillez à bien utiliser le dernier e-mail de réactivation reçu. Toute nouvelle demande d'e-mail de réactivation annule et remplace le précédent e-mail.</div>
									<div className="tc_FaqComponent_seemore">Voir aussi : Mon compte a expiré : que faire ?</div>
								</GenericAccordion>
								<GenericAccordion title="Un compte peut-il être supprimé ? ">
									<div className="tc_text_nl">Vous pouvez désactiver votre compte depuis les <span className="tc_text_b">paramètres généraux</span> de Tchap.</div>
									<div className="tc_text_nl">En désactivant votre compte, <span className="tc_text_b">vous ne pourrez plus accéder à vos messages</span>, même si vous recréez un compte avec le même e-mail.</div>
								</GenericAccordion>
								<GenericAccordion title="Que deviendra mon compte si je change de poste ou d'affectation ? ">
									<div className="tc_text_nl">Votre compte Tchap dépend de votre e-mail profsessionnel. Si vous changez d'adresse e-mail, vous devez donc créer un nouveau compte Tchap avec votre e-mail. Le compte précédent sera désactivé. </div>
									<div className="tc_text_nl">Si votre nouvelle administration n'est pas encore présente sur Tchap, vous pouvez formuler une demande d'ouverture auprès de votre direction informatique. Vous pouvez vérifier la présence de votre administration sur Tchap <GenericLink to={"/#joinUs"}>ici</GenericLink>.</div>
								</GenericAccordion>

								<div className="tc_FaqComponent_section">Echanger sur Tchap</div>
								<GenericAccordion title="Que deviendra mon compte si je change de poste ou d'affectation ? ">
									<div className="tc_FaqComponent_seemore">Voir aussi : Comment démarrer une nouvelle conversation ?</div>
									<div className="tc_FaqComponent_seemore">Voir aussi : Comment rejoindre un salon ?</div>
								</GenericAccordion>

							</Grid>
						</Grid>
					</Container>
				<BottomBar />
			</div>
		);
	}
}

export default FaqComponent;
