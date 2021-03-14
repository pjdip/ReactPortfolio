import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbr from "./components/Navbar";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
    return (
        <Router>
            <div>
                <Navbr />
                <Route exact path="/about" component={About} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/contact" component={Contact} />
                <Footer />
            </div>
        </Router>
    );
}

export default App;
