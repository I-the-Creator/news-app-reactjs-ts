import { useState } from 'react';

//Components
// import Button from 'components/Button';
// import Input from 'components/Input';

// import route to page
import routeMain from "./routes";

//Styles
import './styles.scss';


const Info = () => {

    const [input, setInput] = useState<string>('');

    /* const handleClick = () => {
        console.log('Button clicked');
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value)
    } */

    return (
        <section className="contacts-page">
            <h1>INFO</h1>
            {/* <Button 
                handleClick={handleClick}
                title="Push Me"
            />
            <Input 
                handleChange={handleChange}
                placeholder="Input"
            /> */}
            <span>{input}</span>
        </section>
    )
}
export { routeMain };

export default Info;