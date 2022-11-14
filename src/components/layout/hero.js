import React from "react";
import NetflixBackgroundImage from '../../images/netflix-background.png';
import NarcosLogo from '../../images/narcos.logo.png';

export const Hero = () => {

    return (
        <div id="hero" className="hero">
            <div className="content">
                <img className="logo" src={NarcosLogo} alt="narcos"/>
                <h2>Season season now</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, itaque?
                </p>
            </div>
            <div className="button-wrapper">
                <a href="#" className="button-el">Watch now</a>
                <a href="#" className="button-el">My list</a>
            </div>
            <div className="overlay" style={{background: `url(${NetflixBackgroundImage})`}}/>
        </div>
    )
}