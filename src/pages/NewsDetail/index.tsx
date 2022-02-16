import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

//Services
// import getNewsEn from "services/getNewsEn";
// import getNewsRu from "services/getNewsRu";

//Components
import NotFound from "components/NewsList/NotFound/NotFound";
import DateView from "components/DateView";

// Import route to page
import routeMain from "./routes";

//Types
import { ID } from 'types/ID'
import { INewsDetail } from 'types/INewsDetail';

//Redux
import { useDispatch, useSelector } from "react-redux"
import { loadNews } from "store/news/actions";
import { selectList } from "store/news/selectors"

//Styles
import './styles.scss';

const NewsDetail = () => {

    // get the id parameter from URL
    const { id } = useParams<ID>(); 

    const [news, setNews] = useState<INewsDetail | undefined>(undefined);
    const [language, setLanguage] = useState('ru');
    const [loading, setLoading] = useState(true);

    const dispatch = useDispatch();
    const newsList = useSelector(selectList)

    // with Redux; detailed news download by direct link
    useEffect(() => {
        dispatch(loadNews());
        const currentNews = newsList?.find((item: INewsDetail) => item._id === id)
            setNews(currentNews);
            // setNews(response.data.articles.filter(item => item._id === id)[0]);
            setLoading(false);
    }, [id, dispatch, newsList])

/* 
    // with Redux but detailed info is got from the store - so direct link to news detail by ip isn't work
    useEffect(() => {
        const currentNews = newsList?.find((item: INewsDetail) => item._id === id)
            setNews(currentNews);
            // setNews(response.data.articles.filter(item => item._id === id)[0]);
            setLoading(false);
    }, [id, newsList])  */

    /* // without REdux
    useEffect(() => {
        getNewsRu(language).then(response => {
            const currentNews = response.data.articles?.find((item: INewsDetail) => item._id === id)
            setNews(currentNews);
            // setNews(response.data.articles.filter(item => item._id === id)[0]);
            setLoading(false);
        })
    }, [id, language]) */

    return (
        <section className="news-detail-page">
            {loading ? <p className="loader">Loading... </p> : 
                news ? (
                    <div className="news-detail-wrapper">
                        <div className="left-part">
                        <h2 className="title">{news.title}</h2>
                            <p className="source">{news.clean_url}</p>
                            <DateView date={news.published_date}/>
                        </div>
                        <div className="right-part">
                            <img src={news.media} alt={news.media}/>
                            <p className="summary">{news.summary}</p>
                        </div>
                    </div>
                ) : <NotFound />}
        </section>
    )
}

export { routeMain };

export default NewsDetail;