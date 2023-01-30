import React from 'react';
import PropTypes from 'prop-types';
import Grid from "@mui/material/Grid";

const TabsComponent = ({
    tabs,
    tabPanels
}) => {
    return (
        <div className="fr-tabs tc_FaqComponent_tabs">
            <ul className="fr-tabs__list" role="tablist">
                {tabs.map((tab, index) => (
                    <li key={tab.id} role="presentation">
                        <button
                            aria-controls={`${tab.id}-panel`}
                            aria-selected={index === 0 ? "true" : "false"}
                            className="fr-tabs__tab fr-icon-checkbox-line fr-tabs__tab--icon-left"
                            id={tab.id}
                            role="tab"
                            tabIndex={index === 0 ? "0" : "-1"}
                        >
                            {tab.label}
                        </button>
                    </li>
                ))}
            </ul>

            {tabs.map(tab => (
                <div
                    aria-labelledby={tab.id}
                    className="fr-tabs__panel fr-tabs__panel--selected"
                    id={`${tab.id}-panel`}
                    key={tab.id}
                    role="tabpanel"
                    tabIndex="0"
                >
                    <Grid item xl={6}>
                        {tabPanels[tab.id]}
                    </Grid>
                </div>
            ))}
        </div>
    )
}

TabsComponent.propTypes = {
    tabs: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
    }).isRequired).isRequired,
    tabPanels: PropTypes.object.isRequired,
}

export const Tabs = TabsComponent;