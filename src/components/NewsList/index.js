import React from 'react';
import NewsItem from './components/NewsItem';
import './styles.scss';

const NewsList = ({ list }) => (
    <div className="news-list">
        {list.map((news) => (
            <NewsItem key={news._id} item={news} />
        ))}
    </div>
);

export default NewsList;