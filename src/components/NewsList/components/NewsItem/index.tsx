import React from 'react';
import { NavLink } from 'react-router-dom';

//Route to newsDetail
import { routeMain as routeNewsDetail } from 'pages/NewsDetail';

//Components
import DateView from 'components/DateView';

//TYPES
import { INewsDetail } from 'types/INewsDetail';

//Styles
import './styles.scss';

interface INewsItemParams {
    item: INewsDetail;
}

const NewsItem: React.FC<INewsItemParams> = ({ item }) => {
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