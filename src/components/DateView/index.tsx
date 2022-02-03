import React from 'react';

import datePrepare from 'utils/datePrepare';

import './styles.scss';

interface IDateViewParams {
    date: string
}

const DateView: React.FC<IDateViewParams> = ({ date }) => {
    const { day, month } = datePrepare(date)

    return (
        <p className="date-view">
            <span className="day">{day}</span> / {" "}
            <span className="month">{month}</span>
        </p>
    );
};

export default DateView;