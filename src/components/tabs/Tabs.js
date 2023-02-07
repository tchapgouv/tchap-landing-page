import React from 'react';
import PropTypes from 'prop-types';
import Grid from "@mui/material/Grid";

const TabsComponent = ({
    id,
    initialTabToDisplay,
    tabs,
    tabPanels
}) => {
    return (
        <div className="fr-tabs tc_FaqComponent_tabs">
            <ul className="fr-tabs__list" role="tablist">
                {tabs.map((tab, index) => {
                    const tabId = `${tab.id}${id}`;

                    return (
                        <li key={tabId} role="presentation">
                            <button
                                aria-controls={`${tabId}-panel`}
                                aria-selected={initialTabToDisplay === tab.id || (!initialTabToDisplay && index === 0) ? "true" : "false"}
                                className="fr-tabs__tab fr-icon-checkbox-line fr-tabs__tab--icon-left"
                                id={tabId}
                                role="tab"
                                tabIndex={initialTabToDisplay === tab.id || (!initialTabToDisplay && index === 0) ? "0" : index === 0 ? "0" : "-1"}
                            >
                                {tab.label}
                            </button>
                        </li>
                    )
                })}
            </ul>

            {tabs.map((tab, index) => {
                const tabId = `${tab.id}${id}`;

                return (
                    <div
                        aria-labelledby={tabId}
                        className={`fr-tabs__panel ${initialTabToDisplay === tab.id || (!initialTabToDisplay && index === 0) ? 'fr-tabs__panel--selected' : ''}`}
                        id={`${tabId}-panel`}
                        key={tabId}
                        role="tabpanel"
                        tabIndex="0"
                    >
                        <Grid item>
                            {tabPanels[tab.id]}
                        </Grid>
                    </div>
                )
            })}
        </div>
    )
}

TabsComponent.propTypes = {
    id: PropTypes.string.isRequired,
    tabs: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
    }).isRequired).isRequired,
    tabPanels: PropTypes.object.isRequired,
}

export const Tabs = TabsComponent;