import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <Route exact path="/contact" component={Contact} />
      <Footer />
    </Router>
  );
}

export default App;
