import React, { useState, useEffect } from "react";
import './styles.sass';

// import route to page
import routeMain from "./routes";
import PageTitle from "components/PageTitle";
import NewsList from "components/NewsList";
import getNewsRu from "services/getNewsRu";
// import newsListMocks from "fixtures/newsListMocks";

const MainPage = () => {
    const [newsList, setNewsList] = useState([]);
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
                    <h2>Always <br/> breaking <span>news</span></h2>
                }
            />
            {newsList.length > 0 && <NewsList list={newsList.slice(0, 6)}/>}
        </section>
    )
}

export { routeMain };  // export route

export default MainPage;