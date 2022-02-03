import React from 'react';
import { NavLink } from 'react-router-dom';

// Routes
import { routeMain as routeMainPage } from 'pages/MainPage';
import { routeMain as routeContacts } from 'pages/Contacts';
import { routeMain as routeNewsList } from 'pages/NewsListPage';
import { routeMain as routeInfo } from 'pages/Info';

// Styles
import './styles.scss';

const Header = () => {
    return (
        <header className="main-header">
            <div className="title">Newster</div>
            <nav>
                <NavLink to={routeMainPage} activeClassName={'link-active'}>
                    Main
                </NavLink>
                <NavLink to={routeNewsList} activeClassName={'link-active'}>
                    News
                </NavLink>
                <NavLink to={routeContacts} activeClassName={'link-active'}>
                    Contacts
                </NavLink>
                <NavLink to={routeInfo} activeClassName={'link-active'}>
                    Info
                </NavLink>
            </nav>
        </header>
    );
};

export default Header;