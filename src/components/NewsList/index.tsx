import React from 'react';
import NewsItem from './components/NewsItem';

//TYPES
import { INewsDetail } from 'types/INewsDetail';

//Styles
import './styles.scss';

interface INewsListsParams {
    list: INewsDetail[];
}

const NewsList: React.FC<INewsListsParams> = ({ list }) => (
    <div className="news-list">
        {list.map((news: INewsDetail) => (
            <NewsItem key={news._id} item={news} />
        ))}
    </div>
);

export default NewsList;