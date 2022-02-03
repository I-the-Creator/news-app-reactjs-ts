import React from 'react';

interface IButtonParams {
     handleClick: () => void;
     title: string;
}

const index: React.FC<IButtonParams> = ({ handleClick, title } ) => (
    <button onClick={handleClick}>{title}</button>
)

export default index;