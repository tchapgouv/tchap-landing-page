import { Container } from "@mui/material";
import { Component } from "react";
import BottomBar from "../../components/bars/BottomBar";
import TopBar from "../../components/bars/TopBar";

class About extends Component {
	render() {
		return (
			<div className="tc_Tac">
				<TopBar borderBottom={true} />
				<Container maxWidth="lg">
					<h1 id="Tchap--la-messagerie-instantanée-développée-par-et-pour-les-agents-publics">Tchap : la messagerie instantanée développée par et pour les agents publics</h1>
					
					<div className="tc_paragraph">
						<h3 id="Que-est-tchap">Qu’est-ce que Tchap ?</h3>
						<div className="tc_subparagraph">Tchap est une messagerie instantanée spécialement conçue pour les agents du secteur public. Cet outil sécurisé, souverain est opéré par l’État (DINUM) et garantit la confidentialité totale des échanges professionnels. Il est hébergé dans le cloud du ministère de l’Intérieur, offrant ainsi une sécurité optimale, et une maitrise publique de son opération.</div>
						<div className="tc_subparagraph">Tchap est basé sur un protocole open-source (Matrix), également utilisé par plusieurs pays européens et administrations françaises. Ce protocole inclut un chiffrement de bout en bout évalué et validé par des audits indépendants.</div>
						<div className="tc_subparagraph">Tchap a reçu une homologation de sécurité après avoir été soumis à une consultation approfondie de tous les ministères et de l’ANSSI. Cette dernière accompagne l’équipe Tchap à travers des échanges réguliers, bi-mensuels. L’utilisation de Tchap est recommandée par l’ANSSI dans une note (n°2987/ANSSI/DIR/NP) pour les échanges professionnels de l’ensemble des agents publics, ainsi que pour les personnalités exposées.</div>
						<div className="tc_subparagraph">En 2023, Tchap compte plus de 190 000 utilisateurs actifs mensuels issus de diverses entités publiques, dont l’administration centrale, l’Assemblée nationale, le Sénat et les services déconcentrés de l’État. Chaque mois, près de 3 millions de messages sont échangés via cette plateforme sécurisée. Tchap est également adopté par de nombreuses collectivités territoriales et leurs élus, notamment à Strasbourg, Lyon, Le Havre, en Normandie, en Occitanie et dans le Var. Cette messagerie facilite la collaboration entre les agents, en favorisant une approche décloisonnée.</div>
						<div className="tc_subparagraph">De plus en plus intégré au sein de l’administration, Tchap est désormais un outil essentiel pour de nombreux services, tels que l’ANSSI, le CNAM, la DGFIP, l’INSEE, les Sapeurs Pompiers de Paris et la Gendarmerie nationale.  Son utilité ne cesse de croître, offrant une solution fiable et adaptée aux besoins des différentes entités de l’administration.</div>
					
					</div>
					<div className="tc_paragraph">
						<h3 id="Les-fonctions-clés-de-Tchap">Les fonctions clés de Tchap</h3>
						<h4 id="1-Accès-à-un-annuaire-et-ajout-par-email-internes-et-externes">1. Accès à un annuaire et ajout par email (internes et externes)</h4>

						<div className="tc_subparagraph">L’ajout d’un contact sur Tchap se fait grâce au nom et prénom de l’utilisateur (quand l’utilisateur a créé son compte Tchap) ou par son email (pour de nouveaux utilisateurs au sein ou en dehors de l’administration).</div>

						<div className="tc_subparagraph">Tous les agents publics peuvent s’inscrire, si leur domaine de messagerie est autorisé. Les externes à la fonction publique peuvent être invités et ont des droits limités (pas d’accès à l’annuaire intégré et aux forums publics, impossibilité de créer des salons).</div>
						<br/>
						<h4 id="2-Séparation-internes-vs-externes-et-contrôles-réguliers-des-interlocuteurs">2. Séparation internes vs externes et contrôles réguliers des interlocuteurs</h4>

						<div className="tc_subparagraph">Sur Tchap, il est facile de voir qui est interne à la fonction publique et qui est externe. Pour inviter un externe sur un salon ou dans une discussion privée, il suffit de l’inviter via son adresse email. Cela ne lui donne pas accès aux autres salons de Tchap.</div>
						<div className="tc_subparagraph">Une vérification faite tous les 3 mois sur l’adresse email des utilisateurs permet de vérifier qu’ils sont toujours en poste et, dans le cas contraire, de suspendre leur compte Tchap (cette fonctionnalité sera remise en place en 2024).</div>

						<div className="tc_subparagraph">Sur d’autres messageries grand public (Whatsapp, Signal, Telegram), il est possible de s’emparer d’un numéro de téléphone existant et d’usurper une identité. Il est aussi possible de se tromper de destinataire : il n’y a pas  de garantie de l’interlocuteur.  Une erreur peut aussi amener à contacter la mauvaise personne qui pourrait profiter de l’erreur pour exposer les informations qu’elle reçoit.</div>
						<br/>
						<h4 id="3-Facile-à-utiliser-sur-plusieurs-appareils">3. Facile à utiliser sur plusieurs appareils</h4>

						<div className="tc_subparagraph">Tchap se base sur l’adresse email des utilisateurs : l’application peut être installée sur autant de téléphones que l’on souhaite (pro et perso) et toutes les sessions partagent en temps réel les échanges. De plus, Tchap est également accessible depuis un navigateur web, sur ordinateur.</div>
						<br/>
						<h4 id="4-Offre-de-support-personnalisé-par-l’équipe-Tchap">4. Offre de support personnalisée par l’équipe Tchap</h4>

						<div className="tc_subparagraph">L’équipe DINUM peut proposer une assistance personnalisée aux équipes supports et une aide au déploiement de la solution. Elle organise régulièrement des webinaires.</div>
						<br/>
						<h4 id="5-Collaboration-avec-l’ANS-l’OSIIC-et-l’Allemagne">5. Collaboration avec l’ANS, l’OSIIC, et l’Allemagne</h4>
						<div className="tc_subparagraph">L’équipe est en lien rapproché avec l’Agence du Numérique en Santé et Opérateur des Systèmes d’Information Interministériels Classifiés pour partager les connaissances et mettre en commun les compétences techniques. Elle échange ainsi de manière régulière avec l’ANSSI qui accompagne le développement de Tchap.</div>
						<div className="tc_subparagraph">Tchap travaille avec l’Agence du Numérique en Santé pour développer une messagerie interopérable pour sécuriser les échanges entre les professionels de santé.</div>
						<div className="tc_subparagraph">L’équipe discute aussi avec le ministère allemand de la défense notamment pour appuyer ensemble les intérêts souverains auprès des logiciels opensource utilisés en commun. Elle a été approchée par la Suède, l’OTAN, Interpol, et par le contrôleur européen de la protection des données (EDPS).</div>
						<div className="tc_subparagraph">Ces collaborations permettent de développer plus rapidement le projet.</div>
						<br/>
						<h4 id="6-Une-solution-gratuite-opérée-et-maitrisée-par-l’Etat">6. Une solution gratuite, opérée et maitrisée par l’Etat</h4>

						<div className="tc_subparagraph">Tchap est proposé gratuitement aux administrations, collectivités et opérateurs de l’Etat. Pour ces derniers, Tchap est proposé dans le cadre d’une expérimentation, renouvelée chaque année depuis 2021. En 2024, une solution permettra de pérenniser cette prise en charge gratuite.</div>
						<div className="tc_subparagraph">Tchap est par ailleurs entièrement maîtrisé par l'Etat : son équipe, rattachée à l’Opérateur de la DINUM, développe, maintient et opère le service, en prennant en compte les besoins et les retours de ses utilisateurs. Elle applique les principes de <a href="https://beta.gouv.fr/" target="_blank" rel="noopener">l’approche Beta</a>, en mettant en avant la relation avec ses usagers, la mesure d’impact, la confiance envers les agents publics.</div>
						<div className="tc_subparagraph">Tchap est hébergé par le Ministère de l’Intérieur, sur le cloud. L’offre de Cloud interne, interministérielle, permet de bénéficier d’un Cloud souverain maîtrisé et opéré par des agents de l’État, hébergé dans les centres de production informatique de l’État et reposant sur les technologies open source OpenStack.</div>
						<div className="tc_subparagraph">En 2023, le budget de Tchap s’élève à 2,2 millions d’euros, soit 1,2 euros par utilisateur actif du service.</div>
					

					</div>
					<div className="tc_paragraph">
						<h3 id="roadmap2024">Feuille de route 2024</h3>
						<div className="tc_subparagraph">Dans sa démarche mettant au centre l’utilisateur, incluant les besoins exprimés par les administrations centrales et s’inscrivant dans la nouvelle Suite Numérique de l’Etat, l’équipe de Tchap travaille en 2024 sur les évolutions suivantes :</div>
						<div className="tc_subparagraph"><strong>Apporter l’audio et la vidéo dans Tchap</strong></div>
						<ul>
							<li>Pouvoir appeler son interlocuteur directement dans Tchap à partir de son téléphone ou son ordinateur (appel 1-à-1).</li>
							<li>Proposer une expérience pour créer des <strong>visio-conférences</strong> de groupe vers les outils dédiés : webinaire et webconf.</li>
						</ul>
						<br/>
						<div className="tc_subparagraph"><strong>Faciliter les échanges en équipe</strong></div>
						<div className="tc_subparagraph">Placer la messagerie collaborative au centre des échanges des services et des équipes.</div><ul>
							<li>Réunir les salons d’une équipe ou d’un service au sein d’un <strong>Espace de travail commun</strong></li>
							<li>Accompagner les administrateurs d’Espace de travail dans la mise en place de leur communauté (bonnes pratiques)</li>
						</ul>
						<br/>
						<div className="tc_subparagraph"><strong>Accueillir les nouveaux agents</strong></div>
						<div className="tc_subparagraph">Permettre aux administrations d’inviter leurs nouveaux collaborateurs sur Tchap via une experience fluide.</div>
						<ul>
							<li>S’intégrer avec les systèmes de connexion simplifiés (sans mot de passe) type SSO (Agent Connect)</li>
							<li>Mettre en place une console d’administration permettant de gérer un annuaire d’utilisateurs inscrits.</li>
							<li>En 2024, Tchap recherchera une solution juridique pérenne permettant d’accueillir gratuitement les collectivités et les opérateurs de l’Etat.</li>
						</ul>
						<br/>
						<div className="tc_subparagraph"><strong>Préparer le passage à l’échelle</strong></div>
						<ul>
							<li>Le succès de Tchap nécessite d’adapter l’architecture actuelle de nos serveurs afin de préparer le million d’utilisateurs actifs.</li>
						</ul>

					</div>
					<div className="tc_paragraph">
						<h3 id="Ressources">Ressources</h3>
						<ul>
							<li>Page de statistiques de Tchap : <a href="https://stats.tchap.incubateur.net/public/dashboard/8c6560e3-c27a-487b-b242-eb1636912f1a" target="_blank" rel="noopener">https://stats.tchap.incubateur.net/public/dashboard/8c6560e3-c27a-487b-b242-eb1636912f1a</a></li>
						</ul>
					</div>

          		</Container>
				<BottomBar/>
			</div>
		);
	}
}

export default About;
