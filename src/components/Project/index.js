import React from "react";
import "./style.css";

/*
props.appLink
"https://pjdip.github.io/CryptoPURRency/"

props.title
CryptoPURRency

props.github
"https://github.com/pjdip/CryptoPURRency"

props.description
A mobile-responsive cryptocurrency tracking app including simple portfolio tracking feature using jQuery, Tailwind, Chart.js, and CoinGecko/Giphy APIs

props.img1
"./assets/images/mainpage.png"
props.img1alt
"app mainpage displaying important data for top 25 cryptocurrencies"

props.img2
"./assets/images/bitcoin.png"
props.img2alt
"example of data displayed for an individual coin"

 */

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
                        <p class="projRepo"><a target="_blank" href={props.github}>
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