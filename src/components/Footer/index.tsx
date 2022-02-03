import React from 'react';

// Styles
import './styles.scss';

const Footer = () => {
    return (
        <footer className="main-footer">
            <div>
                Newster
            <div className="small-text">Single Page Application</div>
            </div>
            <div className='small-text'>The API generated news</div>
            <div>
                <div className="small-text">Made by</div>
                Andrew Burlutski
            </div>
        </footer>
    );
};

export default Footer;