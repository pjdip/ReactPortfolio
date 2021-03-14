import React from "react";
import Project from "../../components/Project";
import "./style.css";

/*
props.appLink
"https://pjdip.github.io/CryptoPURRency/"

props.title
CryptoPURRency

props.repoLink
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

const Projects = () => {
    return (
        <main class="container bg-white mt-5 mx-auto">
            <div class="row pt-4 text-center text-success">
                <div class="col">
                    <h2>Projects</h2>
                </div>
            </div>
            <Project
                appLink={"https://pjdip.github.io/CryptoPURRency/"}
                title={"CryptoPURRency"}
                repoLink={"https://github.com/pjdip/CryptoPURRency"}
                description={"A mobile-responsive cryptocurrency tracking app including simple portfolio tracking feature using jQuery, Tailwind, Chart.js, and CoinGecko/Giphy APIs"}
                img1={"./assets/images/mainpage.png"}
                img1alt={"app mainpage displaying important data for top 25 cryptocurrencies"}
                img2={"./assets/images/bitcoin.png"}
                img2alt={"example of data displayed for an individual coin"}
            />

        </main>
    );
};

export default Projects;