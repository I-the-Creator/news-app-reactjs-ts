import React, { useState, useEffect } from "react";

// import route to page
import routeMain from "./routes";

//Components
import NewsList from "components/NewsList";
import PageTitle from "components/PageTitle";

//Services
import getNewsEn from "services/getNewsEn";
import getNewsRu from "services/getNewsRu";
// import newsListMocks from "fixtures/newsListMocks";

//TYPES
import { INewsDetail } from 'types/INewsDetail';

//Styles
import './styles.sass';


const NewsListPage = () => {
    const [newsList, setNewsList] = useState<INewsDetail[]>([]);
    const [language, setLanguage] = useState('ru');

    useEffect(() => {
        getNewsRu(language).then(response => {
            setNewsList(response.data.articles)
        })
    }, [])

    return (
        <section className="main-page">
            <PageTitle
                title={
                    <h2>Stay <br/> up to <span>date</span></h2>
                }
            />
            {newsList.length > 0 && <NewsList list={newsList}/>}
        </section>
    )
}

export { routeMain };

export default NewsListPage;