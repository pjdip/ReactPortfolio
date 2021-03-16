import React from "react";
import "./style.css";

const About = () => {
    return (
        <div className="container bg-white mt-5 mx-auto">

            <div className="row mx-1">

                <div className="col mt-3">
                    <h2 className="card-title card-header bg-white text-primary pl-0 mb-4">About Me</h2>
                </div>
            </div>

            <section className="row mx-1">
                <div className="col-12 mb-4">

                    <a target="_blank" rel="noopener noreferrer" href="https://pjdip.github.io/Philip-DiPaula-OSU-bootcamp-hwk2/assets/images/prof-pic.jpg">
                        <img className="img img-thumbnail float-left mr-3" alt="selfie in a hot tub on a cruise ship" src="./assets/images/prof-pic.jpg" />
                    </a>
                    <p>
                        Hello, my name is Philip DiPaula.
                        I believe LOVE is the only way forward to ensure the maximum number of people acheive a state of well-being.
                        I believe humanity should focus it's energies on climate, energy, space, healthcare, education, and making the financial system more inclusive (wealth-gap = bad).
                        I was born, raised, and currently reside in Columbia, Maryland, but I am looking forward to moving to Seattle next summer.
                        I am an Eagle Scout with a BS in mathematics and a BS in chemistry from UMBC.
                        I worked as a pharmacy technician for a number of years before deciding to pursue computer programming.
                        I chose to pursue a career in computer programming because I want more freedom.
                        I want financial freedom and the ability to work remotely for the purposes of travelling and setting my own schedule.
                        We only get one life and there are too many things to do to waste away behind a desk from 9 to 5 every weekday.
                        I have no single dream job. I am interested in many, many aspects of existence. I believe I will likely have multiple careers.
                        The first order of business is securing financial independence before moving on to less lucrative endeavors.
                    </p>
                </div>
                <div className="col-12 mb-4">
                    <p>
                        I love nature, animals, and hiking in the mountains. I am a beginner rock climber with only gym experience so far.
                        I walk 3 miles with my dog and do calisthenics at the local park every morning.
                        I love to travel, experience different cultures, and meet new people.
                        I am interested in blockchain as a disruptive technology.
                        I hope decentralized finance will force what I perceive to be a corrupt global financial system to change or become obsolete.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default About;