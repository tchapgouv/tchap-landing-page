import React from 'react';
import { useMatomo } from '@datapunt/matomo-tracker-react';

export const matomoHOC = (Component) => {
	return (props) => {
		const matomo = useMatomo();
		return <Component {...props} hooks={matomo} />
	}
}
