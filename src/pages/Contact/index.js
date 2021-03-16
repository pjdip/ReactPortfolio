import React from "react";
import "./style.css";

const Contact = () => {
    return (
        <main className="contact row mt-3">
            <div className="col">
                <ul>
                    <li>
                        <p>Email: pjdip1@gmail.com</p>
                    </li>
                    <li>
                        <p>Phone: 443-812-4170</p>
                    </li>
                    <li>
                        <p>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/pjdip">
                                <i className="fab fa-github">
                                </i>
                                Github
                            </a>
                        </p>
                    </li>
                    <li>
                        <p>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/philip-pj-dipaula/">
                                <i className="fab fa-linkedin">
                                </i>
                                LinkedIn
                            </a>
                        </p>
                    </li>
                    <li>
                        <p>
                            <a target="_blank" href="./assets/Resume_Philip_DiPaula.pdf">Resume.pdf</a>
                        </p>
                    </li>
                </ul>
            </div>
        </main>
    );
};

export default Contact;