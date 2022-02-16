import React, { useState, useEffect } from "react";

//Services
// import getNewsEn from "services/getNewsEn";
// import getNewsRu from "services/getNewsRu";

// import route to page
import routeMain from "./routes";
import PageTitle from "components/PageTitle";
import NewsList from "components/NewsList";
// import newsListMocks from "fixtures/newsListMocks";

//Redux
import { useDispatch, useSelector } from "react-redux"
import { loadNews } from "store/news/actions";
import { selectList } from "store/news/selectors"

//TYPES
// import { INewsDetail } from 'types/INewsDetail';

//Styles
import './styles.sass';

const MainPage = () => {
    // const [newsList, setNewsList] = useState<INewsDetail[]>([]);
    const [language, setLanguage] = useState('ru');

    const dispatch = useDispatch();
    const newsList = useSelector(selectList)

    useEffect(() => {
        dispatch(loadNews());
    }, [dispatch])

    /* useEffect(() => {
        getNewsRu(language).then(response => {
            setNewsList(response.data.articles)
        })
    }, [language]) */

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