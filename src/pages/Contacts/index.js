import React from "react";

//Styles
import './styles.scss';

// import route to page
import routeMain from "./routes";

//Images
import AndrewImg from 'assets/img/Front-End-Developer.jpg'

const Contacts = () => (
    <section className="contacts-page">
        <div className="info">
            <div className="phone">
                <a href="tel:+48800500500">+48 800 500 500</a>
            </div>
            <div className="name">
                Andrew <br/> Burlutski
            </div>
            <div className="email">
                <a href="mailto:andrewlogia@gmail.com">andrewlogia@gmail.com</a>
            </div>
            <div className="position">
                Frontend Developer
            </div>
            <div className="technologies">
                HTML CSS JS REACT.JS NODE.JS
            </div>
        </div>
        <div className="image">
                <img src={AndrewImg} alt={AndrewImg}/>
            </div>
    </section>
)
export { routeMain };

export default Contacts;