import React from "react";
import "./style.css";

const Contact = () => {
    return (
        <div className="contact mt-5 mx-auto">
            <div class="row">
                <div class="col">
                    <h2 class="card-title card-header bg-white text-primary pl-0">Contact Info</h2>
                </div>
            </div>
            <div className="row mt-3">
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
            </div>
        </div>
    );
};

export default Contact;