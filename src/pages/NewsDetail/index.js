import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

//Services
import getNewsEn from "services/getNewsEn";
import getNewsRu from "services/getNewsRu";

//Components
import NotFound from "components/NewsList/NotFound/NotFound";
import DateView from "components/DateView";

//Styles
import './styles.scss';

// Import route to page
import routeMain from "./routes";

const NewsDetail = () => {

    // get the id parameter from URL
    const { id } = useParams(); 

    const [news, setNews] = useState(null);
    const [language, setLanguage] = useState('ru');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getNewsRu(language).then(response => {
            setNews(response.data.articles.find(item => item._id === id));
            // setNews(response.data.articles.filter(item => item._id === id)[0]);
            setLoading(false);
        })
    }, [id])

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