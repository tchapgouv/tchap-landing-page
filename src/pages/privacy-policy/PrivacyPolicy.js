import { Container } from "@mui/material";
import { Component } from "react";
import BottomBar from "../../components/bars/BottomBar";
import TopBar from "../../components/bars/TopBar";

class PrivacyPolicy extends Component {

	render() {
		return (
			<div className="tc_Tac">
				<TopBar borderBottom={true} />
				<Container maxWidth="lg">

					<h1>Politique de confidentialité</h1>

					<div className="tc_paragraph">
						<div className="tc_subparagraph">
							<div>
								La DINUM est responsable des traitements de données à caractère personnel réalisés dans l’Application.
								Elle s’engage à assurer un traitement de ces données conforme au Règlement (UE) 2016/679 relatif à la protection des données à caractère personnel et à la libre circulation de ces données et à la loi n° 78-17 du 6 janvier 1978 relative à l’informatique aux fichiers et aux libertés.
							</div>
						</div>
					</div>

					<div className="tc_paragraph">
						<h2>1. Données à caractère personnel traitées</h2>
						<div className="tc_subparagraph">
							<div>
								Ne sont traitées que les données strictement nécessaires au fonctionnement de l’Application. Ces données ne pourront en aucun cas servir au contrôle et à la surveillance de l’activité des Utilisateurs et Utilisatrices.
							</div>
							<br/>
							<div>
								Les données à caractère personnel concernées sont les suivantes :
							</div>
							<br/>
							<div>
								<ul>
									<li><span className="tc_text_b">Données relatives au profil :</span> prénom, nom, organisation et adresse mail professionnelle (obligatoire), une photographie d’identité (optionnel) ;</li>
									<li><span className="tc_text_b">Données de contenus du service de messagerie instantanée :</span> message, fichiers, métadonnées ;</li>
									<li><span className="tc_text_b">Données de contact du répertoire mobile :</span> prénom, nom, email (optionnel et les données ne sont pas importées) ;</li>
									<li><span className="tc_text_b">Données de connexion.</span></li>
								</ul>
							</div>
						</div>
					</div>
					<div className="tc_paragraph">
						<h2>2. Finalités</h2>
						<div className="tc_subparagraph">
							<div>Les traitements ont pour finalités la gestion des comptes, la gestion des services transverses d’échange de messages et l’exploitation de l’Application.</div>
						</div>
					</div>
					<div className="tc_paragraph">
						<h2>3.Base légale</h2>
						<div className="tc_subparagraph">
							<h3>3.1 Données relatives au profil</h3>
							<div>Le traitement est nécessaire à l’exécution d’une mission d’intérêt public ou relevant de l’exercice de l’autorité publique dont est investi le responsable de traitement au sens de l’article 6-e du règlement (UE) 2016/679 du Parlement européen et du Conseil du 27 avril 2016 relatif à la protection des personnes physiques à l’égard du traitement des données à caractère personnel et à la libre circulation de ces données.</div>
							<br/>
							<div>La mission d’intérêt public constitue la mise à disposition et le développement d’outils collaboratifs par la DINUM en vue de leur intégration dans les ministères
								<a href="https://www.legifrance.gouv.fr/loda/id/JORFTEXT000039281619/2019-10-28#_blank"
									target="_blank"
									rel="noreferrer noopener nofollow"
								>
									(article 6 du décret n°2019-1088 du 25 octobre 2019 relatif au système d’information et de communication de l’Etat et à la direction interministérielle du numérique).
								</a>
							</div>
							<br/>
							<div>Les données de profil permettent également de réaliser des statistiques anonymisées sur l’usage de la plateforme.</div>
						</div>
						<div className="tc_subparagraph">
							<h3>3.2 Données de contenus du service de messagerie instantanée</h3>
							<div>Le traitement est nécessaire à l’exécution d’une mission d’intérêt public ou relevant de l’exercice de l’autorité publique dont est investi le responsable de traitement au sens de l’article 6-e du règlement (UE) 2016/679 du Parlement européen et du Conseil du 27 avril 2016 relatif à la protection des personnes physiques à l’égard du traitement des données à caractère personnel et à la libre circulation de ces données.</div>
							<br/>
							<div>La mission d’intérêt public constitue la mise à disposition et le développement d’outils collaboratifs par la DINUM en vue de leur intégration dans les ministères
								<a href="https://www.legifrance.gouv.fr/loda/id/JORFTEXT000039281619/2019-10-28#_blank"
									target="_blank"
									rel="noreferrer noopener nofollow"
								>
									(article 6 du décret n°2019-1088 du 25 octobre 2019 relatif au système d’information et de communication de l’Etat et à la direction interministérielle du numérique).
								</a>
							</div>
						</div>
						<div className="tc_subparagraph">
							<h3>3.3 Données de connexion </h3>
							<div>Ce traitement est nécessaire au respect d'une obligation légale à laquelle le responsable de traitement est soumis au sens de l'article 6-c du Règlement (UE) 2016/679 du Parlement européen et du Conseil du 27 avril 2016 relatif à la protection des personnes physiques à l'égard du traitement des données à caractère personnel et à la libre circulation de ces données.</div>
							<br/>
							<div>L'obligation légale est posée par la loi LCEN n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique et par l’article 5 du décret n° 2021-1362 du 20 octobre 2021.</div>
						</div>
					</div>
					<div className="tc_paragraph">
						<h2>4. Durée de conservation</h2>
						<table class="full-width">
							<tbody>
								<tr>
									<th>Type de donnée</th>
									<th>Durée de conservation</th>
								</tr>
								<tr>
									<th>Données relatives au profil
									</th>
									<td>
										Les données de profil sont conservées 36 mois après la désactivation d’un compte.<br/>
										L’utilisateur ou l’utilisatrice peut à tout moment demander la désactivation de son compte.<br/>
										Un compte inactif pendant une période de 6 mois est automatiquement désactivé.<br/>
									</td>
								</tr>
								<tr>
									<th>Données de contenus du service de messagerie instantanée
									</th>
									<td>Les contenus du service de messagerie sont conservés 36 mois après la date d’envoi du message.
									</td>
								</tr>
								<tr>
									<th>Données de contact téléphoniques
									</th>
									<td>L’application a accès aux contacts du téléphone de l’utilisateur ou de l’utilisatrice en lecture seule. Les contacts du téléphone ne sont pas importés sur les serveurs, et ne sont donc pas stockés.
									</td>
								</tr>
								<tr>
									<th>Données de connexion
									</th>
									<td>Les données de connexion sont conservées 1 an, conformément au décret n° 2021-1362 du 20 octobre 2021.
									</td>
								</tr>
								<tr>
									<th>Cookies
									</th>
									<td>Les cookies sont conservés jusqu’au retrait du consentement, si applicable, ou dans un délai de 13 mois, conformément aux recommandations de la CNIL.
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<br/>
					<div className="tc_paragraph">
						<h2>5. Destinataires</h2>
						<div className="tc_subparagraph">
							<div>Le responsable de traitement s’engage à ce que les données à caractère personnel soient traitées par les seules personnes autorisées à en connaitre.</div>
							<div>Les informations de profil sont visibles par :</div>
								<ul>
									<li>Les Utilisateurs et Utilisatrices de l’Application lorsqu’ils ou elles utilisent la fonction de recherche annuaire, sauf si l’Utilisateur ou l’Utilisatrice paramètre son compte en l’inscrivant sur « liste rouge ». Dans ce cas, les autres Utilisateurs et Utilisatrices ne pourront pas voir son compte lors de leurs recherches ;</li>
									<li>Les participants des salons que l’Utilisateur ou l’Utilisatrice a rejoints.</li>
								</ul>
							<div>Dans les conversations et les salons privés, les contenus du service de messagerie instantanée sont chiffrés. Ils ne sont visibles que par les Utilisateurs et Utilisatrices participants à la conversation ou au salon.</div>
							<div>Dans les salons publics, les contenus ne sont pas chiffrés. L’équipe Tchap et les participants au salon ont accès aux contenus du service de messagerie instantanée.</div>
						</div>
					</div>
					<div className="tc_paragraph">
						<h2>6. Sous-traitants</h2>
						<div className="tc_subparagraph">
							<div>Certaines données sont envoyées à des sous-traitants. Le responsable de traitement s’est assuré de la mise en œuvre par ses sous-traitants de garanties adéquates et du respect de conditions strictes de confidentialité, d’usage et de protection des données.</div>
							<br/>
							<table class="full-width">
								<tbody>
									<tr>
										<th>Partenaire</th>
										<th>Traitement réalisé</th>
										<th>Pays destinataire</th>
										<th>Garanties</th>
									</tr>
									<tr>
										<th>Cloud du Ministère de l’Intérieur</th>
										<td>Hébergement et envoi d’emails</td>
										<td>France</td>
										<td>https://www.numerique.gouv.fr/services/cloud/cloud-interne/</td>
									</tr>
									<tr>
										<th>Crisp</th>
										<td>Support utilisateurs par email</td>
										<td>Pays Bas et Allemagne</td>
										<td>https://crisp.chat/fr/</td>
									</tr>
									<tr>
										<th>Dolist</th>
										<td>Service d’envoi d’emails d’informations</td>
										<td>France et Suisse</td>
										<td>https://www.dolist.com/societe/politique-rgpd/</td>
									</tr>
									<tr>
										<th>Sendinblue</th>
										<td>Service d’envoi d’emails d’informations de secours</td>
										<td>UE et hors UE </td>
										<td>https://fr.sendinblue.com/rgpd/</td>
									</tr>
									<tr>
										<th>Scalingo</th>
										<td>Hébergement de la présente page d’accueil</td>
										<td>France</td>
										<td>https://scalingo.com/fr/privacy-policy</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div className="tc_paragraph">
						<h2>7. Accès à la liste des contacts locaux du téléphone</h2>
						<div className="tc_subparagraph">
							<div>Lors de son utilisation sur un téléphone, Tchap vous demande l’autorisation d’accéder à la liste de vos contacts locaux. Il n’y a pas d’obligation à autoriser cet accès, l’Application fonctionne sans cette autorisation.</div>
							<br/>
							<div>Lorsque vous autorisez cet accès, Tchap l’utilise de deux manières :</div>
							<br/>
							<ul>
								<li>Tchap parcourt les adresses emails de vos contacts pour découvrir d’autres Utilisateurs et Utilisatrices inscrits sur Tchap. Ces Utilisateurs et Utilisatrices sont listés dans la section ‘Contacts’ de l’Application. Ils vous sont proposés également lorsque vous souhaitez inviter des nouveaux membres à un salon. Aucune adresse email n’est stockée sur les serveurs ;</li>
								<li>Lorsque vous souhaitez inviter des nouvelles personnes à rejoindre Tchap, les coordonnées de vos contacts locaux vous sont proposées.</li>
							</ul>
						</div>
					</div>
					<div className="tc_paragraph">
						<h2>8. Cookies</h2>
						<div className="tc_subparagraph">
							<div>Le site dépose des cookies de mesure d’audience (nombre de visites, pages consultées), respectant les conditions d’exemption du consentement de l’internaute définies par la recommandation « Cookies » de la Commission nationale informatique et libertés (CNIL). Cela signifie, notamment, que ces cookies ne servent qu’à la production de statistiques anonymes et ne permettent pas de suivre la navigation de l’internaute sur d’autres sites.</div>
							<br/>
							<div>Nous utilisons pour cela Matomo, un outil de mesure d’audience web libre, paramétré pour être en conformité avec la recommandation « Cookies » de la CNIL. Cela signifie que votre adresse IP, par exemple, est anonymisée avant d’être enregistrée. Il est donc impossible d’associer vos visites sur ce site à votre personne.</div>
							<br/>
							<div>Il convient d’indiquer que :</div>
							<ul>
								<li>Les données collectées ne sont pas recoupées avec d’autres traitements.</li>
								<li>Les cookies ne permettent pas de suivre la navigation de l’internaute sur d’autres sites.</li>
							</ul>
						</div>
						<div className="tc_subparagraph">
						<a class="fr-btn"
  							href="gestion-des-cookies"
								data-probe-name="cookies">
								Modifier les réglages
						</a>
						<br/>
						<br/>
						<div>Pour aller plus loin, vous pouvez consulter les fiches proposées par la Commission Nationale de l'Informatique et des Libertés (CNIL) :</div>
							<ul>
								<li>
									<a href="https://www.cnil.fr/fr/cookies-traceurs-que-dit-la-loi"
										target="_blank"
										rel="noreferrer noopener nofollow"
									>
										Cookies & traceurs : que dit la loi ?
									</a>
								</li>
								<li>
									<a href="https://www.cnil.fr/fr/cookies-les-outils-pour-les-maitriser"
										target="_blank"
										rel="noreferrer noopener nofollow"
									>
										Cookies : les outils pour les maîtriser
									</a>
								</li>
							</ul>
							<div>Tchap utilise également des cookies strictement nécessaires au bon fonctionnement de l’Application sans lesquels l’accès à la plateforme ne peut être pleinement garanti.</div>
						</div>
					</div>
					<div className="tc_paragraph">
						<h2>9. Sécurité</h2>
						<div className="tc_subparagraph">
							<div>Pour des raisons de sécurité, les contenus privés sont chiffrés et inaccessibles à un quelconque tiers. Toutes les interactions réalisées sur l’Application sont protégées. Ainsi, aucun travail de modération par la DINUM n’est possible et la DINUM ne traitera aucune demande de suppression de contenu.</div>
							<br/>
							<div>Le chiffrement de bout en bout consiste à chiffrer et déchiffrer les messages sur les appareils des Utilisateurs et Utilisatrices. Lorsque vous envoyez un message à quelqu'un, il est chiffré avant de sortir de votre appareil. Par ailleurs vos traces d’activité (« métadonnées ») sur des réseaux non sécurisés sont protégées par un chiffrement du canal de transmission entre l’application et le serveur Tchap (TLS 1.2).</div>
							<br/>
							<div>Un contrôle des documents échangés est effectué avant leur remise aux destinataires et le document n’est pas remis tant que le contenu n’est pas vérifié. Il donne lieu à un déchiffrement du document dans une zone technique isolée, une vérification du type de fichier et des signatures virales, immédiatement suivie d’une destruction sécurisée de sa copie. Il ne constitue pas un engagement de la DINUM sur son innocuité.</div>
						</div>
					</div>
					<div className="tc_paragraph">
						<h2>10. Exercice des droits à la protection des données à caractère personnel </h2>
						<div className="tc_subparagraph">
							<div>Vous disposez d’un droit d’accès et de modification des données à caractère personnel qui vous concernent. Vous pouvez également vous opposer aux traitements réalisés par l’Application. Ces droits s’exercent auprès de la DINUM à l’adresse tchap@beta.gouv.fr</div><br/>
							<div>Pour exercer vos droits, vous pouvez également contacter le délégué à la protection des données (DPD) des services du Premier Ministre :</div>
							<ul>
								<li>par mail à dpd@pm.gouv.fr</li>
								<li>
									ou par courrier à l’adresse suivante :<br/>
									<br/>
									<div>
										<div>Services du Premier Ministre</div>
										<div>À l’attention du délégué à la protection des données (DPD)</div>
										<div>56 rue de Varenne</div>
										<div>75007 Paris</div>
									</div>
								</li>
							</ul>
							<div>Conformément au règlement général sur la protection des données, vous disposez du droit d’introduire une réclamation auprès de la CNIL (3 place de Fontenoy – TSA 80715 – 75334 PARIS CEDEX 07). Les modalités de réclamation sont précisées sur le site de la CNIL :
								<a href="https://www.cnil.fr/"
									target="_blank"
									rel="noreferrer noopener nofollow"
								>
									www.cnil.fr
								</a>
							</div>
							<div>Tchap utilise les adresses mails professionnelles issues des domaines autorisés et les noms, prénoms, qui en découlent. Toute demande relative à une modification d’adresse mail professionnelle ou relative aux noms et prénoms, devra être adressée à l’administration concernée.</div>
						</div>
					</div>
					<div className="tc_paragraph">
						<h2>11. Contact</h2>
						<div className="tc_subparagraph">
							<div>L’adresse mail de contact est la suivante : tchap@beta.gouv.fr</div>
						</div>
					</div>
          </Container>
				<BottomBar/>
			</div>
		);
	}
}

export default PrivacyPolicy;
