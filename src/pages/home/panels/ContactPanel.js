import { Component } from 'react';
import Container from "@mui/material/Container";
import { t } from "react-i18nify";

class ContactPanel extends Component {
	render() {
		return (
			<Container maxWidth={false} disableGutters={true}>
				<div className="tc_ContactPanel" id="contact">
					<Container maxWidth="lg">
						<div class="fr-callout fr-mb-4w">
							<p class="fr-callout__title">Contactez-nous</p>
							<p class="fr-callout__text">
								<div>
									Tchap ne fonctionne pas normalement ?
								</div>
								<div>
									Vous avez besoin d'aide pour vous en servir ?
								</div>
								<div>
									Le support est joignable à l'adresse <b>{t('links.support')}</b>.
								</div>
							  <div>
									Pour toute sollicitation plus générale, vous pouvez contacter l'équipe à <b>{t('links.contact')}</b>.
								</div>
							</p>
							<a class="fr-btn"
							   href={'mailto:' + t('links.contact')}
								 target="_blank"
								 rel="noreferer noopener"
								 data-probe-name="contact">
								Ecrivez-nous
							</a>
						</div>
					</Container>
				</div>
			</Container>
		);
	}
}

export default ContactPanel;
