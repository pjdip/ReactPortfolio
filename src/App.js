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
        <Router basename={process.env.PUBLIC_URL}>
            <div>
                <Navbr />
                <Container>
                    <Route exact path="/" component={About} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/gallery" component={Gallery} />
                    <Route exact path="/projects" component={Projects} />
                    <Route exact path="/contact" component={Contact} />
                </Container>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
