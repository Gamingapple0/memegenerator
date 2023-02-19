import React from 'react';
import './Header.css'

function Header(){
    return(
        <div className="header">
            <div className="logo-and-title">
                <img src="https://github.com/Gamingapple0/memegenerator/blob/gh-pages/favicon.ico?raw=true" className="logo"/>
                <div className="logo-title">Meme Generator</div>
            </div>
            <div className="project-name">
                React Project Meme Generator
            </div>
        </div>
    )
}
export default Header
