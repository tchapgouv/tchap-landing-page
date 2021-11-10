import React from 'react';
import { useLocation, useNavigate } from "react-router-dom";

export const routerHOC = (Component) => {
	return (props) => {
		const location = useLocation();
		const navigation = useNavigate();
		return <Component {...props} routerLocation={location} routerNavigation={navigation} />
	}
}
