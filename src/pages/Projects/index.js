import React from "react";
import Project from "../../components/Project";
import "./style.css";

const Projects = () => {
    return (
        <div className="container bg-white mt-5 mx-auto">
            <div className="row pt-4 text-center text-primary">
                <div className="col">
                    <h2>Projects</h2>
                </div>
            </div>
            <Project
                appLink={"https://pjdip.github.io/CryptoPURRency/"}
                title={"CryptoPURRency"}
                repoLink={"https://github.com/pjdip/CryptoPURRency"}
                description={"A mobile-responsive cryptocurrency tracking app including simple portfolio tracking feature using jQuery, Tailwind, Chart.js, and CoinGecko/Giphy APIs"}
                img1={process.env.PUBLIC_URL + "/assets/images/mainpage.png"}
                img1alt={"app mainpage displaying important data for top 25 cryptocurrencies"}
                img2={process.env.PUBLIC_URL + "/assets/images/bitcoin.png"}
                img2alt={"example of data displayed for an individual coin"}
            />
            <Project
                appLink={"https://campingplanner.herokuapp.com/"}
                title={"Camping Planner"}
                repoLink={"https://github.com/pjdip/Camping-Planner"}
                description={"A mobile-responsive app for planning camping experiences using express, handlebars, mysql, passport, sequelize, and more"}
                img1={process.env.PUBLIC_URL + "/assets/images/campingLogin.png"}
                img1alt={"app login page displaying login form and welcome"}
                img2={process.env.PUBLIC_URL + "/assets/images/natlPark.png"}
                img2alt={"example of data displayed for a national park"}
            />
            <Project
                appLink={"https://floating-everglades-59782.herokuapp.com/"}
                title={"First MVC Configuration"}
                repoLink={"https://github.com/pjdip/Philip-DiPaula-OSU-bootcamp-hwk13-burger"}
                description={"A simple app using express, handlebars, mysql, and node in order to build an MVC style production model"}
                img1={process.env.PUBLIC_URL + "/assets/images/burgerMain.png"}
                img1alt={"app mainpage"}
            />
            <Project
                appLink={"https://pjdip.github.io/Philip-DiPaula-OSU-bootcamp-hwk6/"}
                title={"Weather Dashboard"}
                repoLink={"https://github.com/pjdip/Philip-DiPaula-OSU-bootcamp-hwk6"}
                description={"A weather app with 5 day forecast and saved history using jQuery, Bootstrap, Openweathermaps API and Moment.js"}
                img1={process.env.PUBLIC_URL + "/assets/images/weatherDashboardScreenshot.png"}
                img1alt={"current weather and 5 day forecast for Columbus, OH"}
            />
            <Project
                appLink={"https://pjdip.github.io/Philip-DiPaula-OSU-bootcamp-hwk3/"}
                title={"Random Password Generator"}
                repoLink={"https://github.com/pjdip/Philip-DiPaula-OSU-bootcamp-hwk3"}
                description={"A simple random password generator app using javascript and html"}
                img1={process.env.PUBLIC_URL + "/assets/images/normal.png"}
                img1alt={"password generator interface"}
                img2={process.env.PUBLIC_URL + "/assets/images/password_prompt.png"}
                img2alt={"example prompt for determining password parameters"}
            />
            <Project
                appLink={"https://pjdip.github.io/Philip-DiPaula-OSU-bootcamp-hwk19-React-Employee-Directory/"}
                title={"Employee Manager"}
                repoLink={"https://github.com/pjdip/Philip-DiPaula-OSU-bootcamp-hwk19-React-Employee-Directory"}
                description={"A simple app in react for filtering and sorting an employee directory"}
                img1={process.env.PUBLIC_URL + "/assets/images/Filter.png"}
                img1alt={"filter functionality"}
                img2={process.env.PUBLIC_URL + "/assets/images/sort.png"}
                img2alt={"sort functionality"}
            />
        </div>
    );
};

export default Projects;