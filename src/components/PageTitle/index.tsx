import React from 'react';

//Styles
import './styles.scss';

interface IPageTitleParams {
    title: JSX.Element
}

const PageTitle: React.FC<IPageTitleParams> = ({ title }) => {
    return (
        <div className="page-title">
            {title}
        </div>
    );
};

export default PageTitle;