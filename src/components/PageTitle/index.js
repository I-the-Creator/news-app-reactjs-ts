import React from 'react';
import './styles.scss';

const PageTitle = ({ title }) => {
    return (
        <div className="page-title">
            {title}
        </div>
    );
};

export default PageTitle;