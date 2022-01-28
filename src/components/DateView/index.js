import React from 'react';
import './styles.scss';

import datePrepare from 'utils/datePrepare';

const DateView = ({ date }) => {
    const { day, month } = datePrepare(date)

    return (
        <p className="date-view">
            <span className="day">{day}</span> / {" "}
            <span className="month">{month}</span>
        </p>
    );
};

export default DateView;