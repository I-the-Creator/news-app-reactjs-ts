import React from 'react';

interface IInputParams {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
}

const index: React.FC<IInputParams> = ({ handleChange, placeholder } ) => (
    <input onChange={handleChange} placeholder={placeholder}/>
)

export default index;