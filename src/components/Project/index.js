import React from "react";
import "./style.css";

const Project = (props) => {
    return (
        <section class="row mx-1">
            <div class="col mt-3">
                <div class="row mx-1">
                    <div class="col mt-3">
                        <h2 class="card-title card-header bg-white text-success pl-0 mb-4">
                            <a class="projTitle" target="_blank" href={props.appLink}>{props.title}</a>
                        </h2>
                    </div>
                </div>
        
                <div class="row mx-1">
                    <div class="col-12 mb-4">
                        <p class="projRepo"><a target="_blank" href={props.repoLink}>
                            <i class="fab fa-github">
                            </i>Repository</a></p>
                        <p class="projDescription">{props.description}</p>
                        <div class="row">
                            <div class="mx-auto col-12 col-md-6 mb-4">
                                <a target="_blank" href={props.img1}>
                                    <img class="mw-100" alt={props.img1alt} src={props.img1} />
                                </a>
                            </div>
                            <div class="mx-auto col-12 col-md-6 mb-4">
                                <a target="_blank" href={props.img2}>
                                    <img class="mw-100" alt={props.img2alt} src={props.img2} />
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