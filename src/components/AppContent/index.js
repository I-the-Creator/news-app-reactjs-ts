//Libraries
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

//Pages with routes
import MainPage, { routeMain as routeMainPage } from 'pages/MainPage';
import Contacts, { routeMain as routeContacts } from 'pages/Contacts';
import NewsDetail, { routeMain as routeNewsDetail } from 'pages/NewsDetail';
import NewsListPage, { routeMain as routeNewsList } from 'pages/NewsListPage';
import Info, { routeMain as routeInfo } from 'pages/Info';

// Components
import Footer from 'components/Footer';
import Header from 'components/Header';

//Styles
import './styles.scss';

const AppContent = () => {
    return (
        <div className="main-wrapper">
            <Header />
            <main>
                <Switch>
                    <Route exact path={routeMainPage()} component={MainPage}/>
                    <Route exact path={routeContacts()} component={Contacts}/>
                    <Route exact path={routeNewsDetail()} component={NewsDetail}/>
                    <Route exact path={routeNewsList()} component={NewsListPage}/>
                    <Route exact path={routeInfo()} component={Info}/>
                    <Redirect 
                        to={{
                            pathname: routeMainPage(),
                        }}
                    />
                </Switch>
            </main>
            <Footer />
        </div>
    );
};

export default AppContent;