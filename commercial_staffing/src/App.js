import Container from "react-bootstrap/Container";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css';

function App(){
  return (
    <Container fluid className='p-0'>
      <Router basename='/'>
        <Header />
        <Routes>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
        </Routes>
        <Footer />
      </Router>
    </Container>
  );
}


export default App;
