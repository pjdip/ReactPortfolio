import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <Footer />
    </Router>
  );
}

export default App;
