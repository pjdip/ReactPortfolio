import React from "react";
import "./style.css";

const Project = (props) => {
    return (
        <section className="row mx-1">
            <div className="col mt-3">
                <div className="row mx-1">
                    <div className="col mt-3">
                        <h2 className="card-title card-header bg-white text-success pl-0 mb-4">
                            <a className="projTitle" target="_blank" rel="noopener noreferrer" href={props.appLink}>{props.title}</a>
                        </h2>
                    </div>
                </div>
        
                <div className="row mx-1">
                    <div className="col-12 mb-4">
                        <p className="projRepo"><a target="_blank" rel="noopener noreferrer" href={props.repoLink}>
                            <i className="fab fa-github">
                            </i>Repository</a></p>
                        <p className="projDescription">{props.description}</p>
                        <div className="row">
                            <div className="mx-auto col-12 col-md-6 mb-4">
                                <a target="_blank" rel="noopener noreferrer" href={props.img1}>
                                    <img className="mw-100" alt={props.img1alt} src={props.img1} />
                                </a>
                            </div>
                            <div className="mx-auto col-12 col-md-6 mb-4">
                                <a target="_blank" rel="noopener noreferrer" href={props.img2}>
                                    <img className="mw-100" alt={props.img2alt} src={props.img2} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Project;