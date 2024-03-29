import { Container } from "@mui/material";
import { Component } from "react";
import BottomBar from "../../components/bars/BottomBar";
import TopBar from "../../components/bars/TopBar";

import "styles/pages/tac/Tac.scss";

class Tac extends Component {

	render() {
		return (
			<div className="tc_Tac">
				<TopBar borderBottom={true} />
				<Container maxWidth="lg">

					<h1>Conditions générales d'utilisation en date du 1er décembre 2023</h1>

					<div className="tc_paragraph">
						<h2>1. Champ d'application</h2>
						<div className="tc_subparagraph">
							<div>Le présent document définit les conditions générales d'utilisation (CGU) de Tchap (ci-après, Tchap ou l'Application), messagerie instantanée de l'administration française, par ses utilisateurs et utilisatrices (ci-après les Utilisateurs et Utilisatrices).</div>
							<div>L'Application permet d'échanger des messages textes et multimédia, avec un ou plusieurs autres Utilisateurs et Utilisatrices.</div>
							<div>Tchap est développée et opérée par la direction interministérielle du numérique de l'Etat (DINUM) des services du Premier ministre. Toute utilisation de Tchap doit respecter les présentes conditions générales d'utilisation.</div>
							<div>L'utilisation de l'Application est libre et gratuite.</div>
						</div>
					</div>
					<div className="tc_paragraph">
						<h2>2.Modalités d'utilisation</h2>
						<div className="tc_subparagraph">
							<h3>2.1 L'accès à l'application Tchap</h3>
							<div>Tchap est mise à disposition des agents publics et est utilisable par leurs correspondants externes sur invitation.</div>
						</div>
						<div className="tc_subparagraph">
							<h3>2.2 L'inscription</h3>
							<div>L'Utilisateur ou Utilisatrice veille à choisir un mot de passe qui ne peut pas être deviné ou retrouvé par quelqu'un d'autre. Il est déconseillé d'utiliser un mot de passe déjà utilisé sur une autre application.</div>
							<div>L'Utilisateur ou Utilisatrice s'inscrit sur l'Application en créant un profil. Cette inscription est personnelle.</div>
							<div>Un compte Tchap est associé à une adresse de messagerie électronique que l'Utilisateur ou Utilisatrice doit périodiquement valider. En l'absence de validation, le compte est désactivé. Après 6 mois de désactivation, le compte est révoqué.</div>
							<div>Les domaines des adresses électroniques de l'administration centrale sont automatiquement autorisés sur l'Application. Les autres domaines éligibles sont autorisés après validation de leur demande d'inscription par la DINUM (contact : tchap@beta.gouv.fr).</div>
							<div>La création de compte avec une adresse électronique appartenant à un domaine autorisé permet la création d'un profil « Agent ». Toute personne ayant une adresse de domaine autorisé peut s'inscrire. Dès validation de son inscription, les différentes fonctionnalités sont disponibles.</div>
							<div>La création de compte avec une adresse électronique n'appartenant pas à un domaine autorisé dans Tchap s'effectue uniquement à la suite d'une invitation électronique. Elle est associée à un profil « Externe » permettant uniquement de participer à des échanges privés auxquels l'Utilisateur ou Utilisatrice est convié. En effet certaines restrictions sont appliquées aux utilisateurs et utilisatrices avec un profil « Externe » :</div>
							<div>
								<ul>
									<li>Les profils « Externes » ne peuvent pas accéder à la liste des salons publics, rejoindre ou être invités dans un salon public.</li>
									<li>Ils ne peuvent pas créer de salons publics ou privés, ni engager de conversations.</li>
									<li>Ils ne peuvent pas consulter l'annuaire des utilisateurs et utilisatrices.</li>
								</ul>
							</div>
							<div>Si le domaine de l'adresse de l'Utilisateur ou Utilisatrice « Externe » devient autorisé, l'Utilisateur ou Utilisatrice doit fermer son compte « Externe » pour créer un compte « Agent » afin de bénéficier des fonctionnalités complètes de Tchap.</div>
						</div>
					</div>
					<div className="tc_paragraph">
						<h2>3. Engagements et responsabilités des Utilisateurs et Utilisatrices</h2>
						<div className="tc_subparagraph">
							<h3>3.1 Usages conformes</h3>
							<div>L'Application est mise à disposition pour faciliter les échanges professionnels entre les agents publics et entre ces derniers et leurs collaborateurs extérieurs à l'administration.</div>
							<div>L'Utilisateur ou l'Utilisatrice est responsable des données ou contenus qu'il ou elle échange sur l'Application. Il ou elle veille à ne proposer que des contenus multimédias appropriés dans le cadre de relations professionnelles et à respecter les principes de la netiquette.</div>
							<div>L'Utilisateur ou l'Utilisatrice assure la confidentialité de ses identifiants et veille à éviter toute imprudence pouvant favoriser un usage frauduleux de l'Application.</div>
							<div>L'Utilisateur ou l'Utilisatrice utilise l'Application dans le respect du secret professionnel et doit faire preuve de discrétion professionnelle pour tous les faits, informations ou documents dont il ou elle a connaissance dans l'exercice ou à l'occasion de ses fonctions.</div>
							<div>Si l'Utilisateur ou l'Utilisatrice estime que son mot de passe est compromis, il ou elle doit le modifier sans délai.</div>
							<div>En cas de compromission de son compte, l'Utilisateur ou l'Utilisatrice doit contacter l'équipe Tchap à l'adresse : tchap@beta.gouv.fr.</div>
						</div>
						<div className="tc_subparagraph">
							<h3>3.2 Usages interdits </h3>
							<div>L'Utilisateur ou l'Utilisatrice s'engage à ne pas mettre en ligne et communiquer de contenus ou informations contraires aux dispositions légales et réglementaires en vigueur. Il ou elle veille notamment à ne jamais tenir de propos ou échanger de contenus insultants, diffamatoires ou indécents.</div>
							<div>L'Utilisateur ou l'Utilisatrice n'envoie pas de pièces jointes qui contiennent des virus, des fichiers corrompus ou tout autre logiciel ou programme similaire susceptible d'endommager le fonctionnement d'un autre ordinateur et de mettre en péril la sécurité informatique de l'Application ou aux fins de commettre des infractions.</div>
						</div>
						<div className="tc_subparagraph">
							<h3>3.3 Limites d'utilisation du Service</h3>
							<div>L'Application ne sécurise pas le téléphone, celui-ci reste exposé aux menaces informatiques.</div>
							<div>Les données de travail sans sensibilité particulière peuvent être traitées sur cette Application.</div>
							<div>L'échange d'informations et de documents sensibles ne doit pas être effectué sur l'Application, même dans une conversation à deux.</div>
							<div>Pour l'échange d'informations et de documents classifiés, il revient à l'Utilisateur ou l'Utilisatrice d'utiliser les moyens qualifiés par son autorité de sécurité des systèmes d'information.</div>
							<div>Il y a obligation de prévoir les moyens de protection conformes à la réglementation, tels que ceux définis par l'article 14 de l'instruction interministérielle n °901, pour les données portant une mention de protection « Diffusion restreinte ».</div>
							<div>Le caractère « sensible » des informations stockées ou traitées sur l'Application est soumis à l'appréciation de l'Utilisateur ou l'Utilisatrice.</div>
							<div>La conservation des échanges sur Tchap est limitée dans le temps. Tchap n'est pas destiné à conserver les informations échangées sur la messagerie à des fins d'archivage.</div>
						</div>
						<div className="tc_subparagraph">
							<h3>3.4 Modération des salons</h3>
							<div>Les salons peuvent être publics ou privés. Un salon public, aussi appelé forum, peut être trouvé par tout utilisateur depuis un moteur de recherche et peut être rejoint sans invitation. Il peut cependant être limité à un domaine de rattachement (ex. : développement-durable, social, culture, etc.). Un salon privé est visible uniquement de ses participants. Par mesure de confidentialité, le nouveau membre d'un salon privé n'accède pas aux messages antérieurs à son arrivée.</div>
							<div>L'Utilisateur ou l'Utilisatrice, qui crée un salon public ou privé, est chargé de la modération de son contenu. Il ou elle est ainsi responsable de l'animation et de la suppression des contenus contraires aux présentes modalités d'utilisation. Le créateur ou la créatrice du salon peut donner des droits d'administrateur aux autres participants, ainsi que les exclure ou les bannir. Il est préférable de prévoir au moins deux administrateurs. Plus d'informations sur les salons sont disponibles dans la <a href="https://tchap.beta.gouv.fr/faq">FAQ</a>.</div>
							<div>Tout utilisateur ou utilisatrice qui constate la présence de contenus illicites, inappropriés ou contraires aux présentes conditions d'utilisation sur un salon privé ou un forum peut le signaler à la DINUM à l'adresse : support@tchap.beta.gouv.fr.</div>
						</div>
					</div>
					<div className="tc_paragraph">
						<h2>4. Engagements et responsabilités de la DINUM</h2>
						<div className="tc_subparagraph">
							<div>La DINUM s'efforce d'assurer la disponibilité de l'Application.</div>
							<div>La DINUM s'engage à prendre toutes précautions utiles pour préserver l'intégrité des informations échangées.</div>
							<div>La DINUM se réserve le droit de suspendre ou supprimer un compte Utilisateur ou Utilisatrice qui aurait méconnu les présentes modalités d'utilisation, sans préjudice des éventuelles actions en responsabilité pénale et civile qui pourraient être engagées à l'encontre de l'Utilisateur ou l'Utilisatrice.</div>
							<div>La DINUM peut également fermer un salon public ou privé en cas de comportements contraires aux présentes modalités d'utilisation.</div>
						</div>
					</div>
					<div className="tc_paragraph">
						<h2>5. Sécurité</h2>
						<div className="tc_subparagraph">
							<div>Les messages privés sont chiffrés de bout en bout et inaccessibles à un quelconque tiers.</div>
							<div>Le chiffrement de bout en bout consiste à chiffrer et déchiffrer les messages sur les appareils des Utilisateurs et Utilisatrices. Lorsqu'un message est envoyé, il est chiffré avant de sortir de l'appareil de l'Utilisateur ou l'Utilisatrice.</div>
							<div>Les traces d'activité (« métadonnées ») sur des réseaux non sécurisés sont protégées par un chiffrement du canal de transmission entre l'application et le serveur Tchap.</div>
							<div>Un contrôle des fichiers échangés est effectué avant leur remise aux destinataires, et le fichier n'est pas remis tant que le contenu n'est pas vérifié. Il donne lieu à un déchiffrement du document dans une zone technique isolée, une vérification du type de fichier et des signatures virales, immédiatement suivie d'une destruction sécurisée de sa copie. Il ne constitue pas un engagement de la DINUM sur son innocuité.</div>
						</div>
					</div>
					<div className="tc_paragraph">
						<h2>6. Evolution des conditions d'utilisation</h2>
						<div className="tc_subparagraph">
							<div>La DINUM se réserve le droit de faire évoluer, de modifier ou de suspendre, sans préavis, l'Application pour des raisons de maintenance ou pour tout autre motif jugé nécessaire.</div>
							<div>Les termes des présentes conditions d'utilisation peuvent être modifiés ou complétés à tout moment, sans préavis, en fonction des modifications apportées à l'Application, de l'évolution de la législation ou pour tout autre motif jugé nécessaire. Ces modifications et mises à jour s'imposent à l'Utilisateur ou l'Utilisatrice qui doit, en conséquence, se référer régulièrement à cette rubrique pour vérifier les conditions générales en vigueur.</div>
						</div>
					</div>
					<div className="tc_paragraph">
						<h2>7. Accessibilité</h2>
						<div className="tc_subparagraph">
							<div>Si vous constatez un défaut d'accessibilité vous empêchant d'accéder à un contenu ou une fonctionnalité du site, que vous nous le signalez et que vous ne parvenez pas à obtenir une réponse rapide de notre part, vous êtes en droit de faire parvenir vos doléances ou demande de saisine au défenseur des droits par courrier gratuit, sans affranchissement à l'adresse :</div>
							<div>Défenseur des droits</div>
							<div>Libre réponse 71120</div>
							<div>75342 Paris CEDEX 07,</div>
							<div>par Téléphone : 09 69 39 00 00 ou via le formulaire en ligne.</div>
						</div>
					</div>
					<div className="tc_paragraph">
						<h2>8. Mentions légales</h2>
						<div className="tc_subparagraph">
							<div><u>Sites</u> : <a href="https://www.tchap.gouv.fr">www.tchap.gouv.fr</a> et <a href="https://tchap.beta.gouv.fr">tchap.beta.gouv.fr</a></div>
							<div><u>Editeur</u> : Direction interministérielle du numérique de l'Etat (DINUM). 20 avenue de Ségur 75007 Paris - Tel. Accueil : 01.71.21.01.70 SIRET : 12000101100010 (secrétariat général du gouvernement) SIREN : 120 001 011</div>
							<div><u>Directeur de la publication</u> : Madame Stéphanie Schaer, Directrice interministérielle du numérique.</div>
							<div><u>Conception et gestion</u> : Le suivi éditorial et graphique est assuré par la DINUM.</div>
							<div><u>Code source</u> : Tout site public ou privé est autorisé à établir, sans autorisation préalable, un lien (y compris profond) vers les informations diffusées sur le site.</div>
							<div><u>Hébergement de la messagerie Tchap (tchap.gouv.fr)</u> : Ministère de l'Intérieur, Place Beauvau, 75800 Paris CEDEX 08</div>
							<div><u>Prestataire d'hébergement du site vitrine (tchap.beta.gouv.fr)</u> : Scalingo SAS, 15 avenue du Rhin, 67100 Strasbourg, France.</div>
						</div>
					</div>
					<div className="tc_paragraph">
						<h2>9. Contact</h2>
						<div className="tc_subparagraph">
							<div>L'adresse mail de contact est la suivante : tchap@beta.gouv.fr</div>
						</div>
					</div>
				</Container>
				<BottomBar />
			</div>
		);
	}
}

export default Tac;
