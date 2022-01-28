import React from 'react';
import { NavLink } from 'react-router-dom';

//Route to newsDetail
import { routeMain as routeNewsDetail } from 'pages/NewsDetail';

//Styles
import './styles.scss';

//Components
import DateView from 'components/DateView';

const NewsItem = ({ item }) => {
    return (
        <NavLink className="news-item" to={routeNewsDetail(item._id)}> {/* _id parameter add to URL */}
            <div className="title">
                {item.title}
            </div>
            <div className="bottom-wrapper">
                <p className="source">{item.clean_url}</p>
                <DateView date={item.published_date}/>
            </div>
        </NavLink>
    );
};

export default NewsItem;