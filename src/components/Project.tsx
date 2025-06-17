import React from "react";
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://itsoulinfotech.com/" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://itsoulinfotech.com/" target="_blank" rel="noreferrer"><h2>ItSoulInfoTech</h2></a>
                <p>Developed a company informative website using Wordpress, Elementor, ACF </p>
            </div>
            {/* <div className="project">
            <a href="#" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
            <a href="#" target="_blank" rel="noreferrer"><h2>STYLCLO</h2></a>
                <p>Designed, developed, and launched for a online shopping & E-Commerce website based on WooCommerce & WordPress</p>
            </div> */}
            <div className="project">
                <a href="#" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="#" target="_blank" rel="noreferrer"><h2>Interview Tracking System</h2></a>
                <p>Developed and released for HR & company employees can track application of applicant its make a easy</p>
            </div>
            <div className="project">
                <a href="#" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="#" target="_blank" rel="noreferrer"><h2>WavePay Retail</h2></a>
                <p>This project is build for self checkout system using hand gesture & voice recognisation, where the people can checkout on ratail shop without any physical interaction</p>
            </div>
        </div>
    </div>
    );
}

export default Project;