import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbr from "./components/Navbar";
import Container from "./components/Container";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
    return (
        <Router>
            <div>
                <Navbr />
                <Container>
                    <Route exact path="/" component={About} />
                    <Route exact path="ReactPortfolio/#/about" component={About} />
                    <Route exact path="ReactPortfolio/#/gallery" component={Gallery} />
                    <Route exact path="ReactPortfolio/#/projects" component={Projects} />
                    <Route exact path="ReactPortfolio/#/contact" component={Contact} />
                </Container>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
