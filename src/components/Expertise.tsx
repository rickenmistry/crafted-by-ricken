import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faPython } from '@fortawesome/free-brands-svg-icons';
import { faCode, faDatabase} from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "Figma",
    "Adobe XD",
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "PHP",
    "Python",
    "NodeJs",
    "Express Js",
    "JavaScript",
    "JQuery",
    "C",
    ".NET Framework",
    "Wordpress",
    "C++",
];

const labelsThird = [
    "SQL",
    "MySql",
    "Ms Access",
    "MongoDB",
    "Google SEO",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Frontend</h3>
                    <p>I create intuitive and responsive user interfaces using modern frameworks like React and Next.js, focusing on performance, accessibility, and user experience.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faCode} size="3x"/>
                    <h3>Backend</h3>
                    <p>I build scalable and secure backend systems using Node.js, Express, and Flask, integrating APIs, authentication.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDatabase} size="3x"/>
                    <h3>Database Management</h3>
                    <p>I design and manage robust databases with MySQL, MongoDB, ensuring data integrity, scalability, and efficient query performance.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;