import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
    return (
        <Router>
            <div>
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Footer />
            </div>
        </Router>
    );
}

export default App;
