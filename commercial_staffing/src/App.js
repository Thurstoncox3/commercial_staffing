// import Container from "react-bootstrap/Container";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import React from "react";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import './App.css';

// function App(){
//   return (
//     <Container fluid className='p-0'>
//       <Router basename='/'>
//         <Header />
//         <Routes>
//           <Route path='/' exact component={Home} />
//           <Route path='/About' exact component={About} />
//           <Route path='/Contact' exact component={Contact} />
//         </Routes>
//         <Footer />
//       </Router>
//     </Container>
//   );
// }


// export default App;

import Container from "react-bootstrap/Container";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Container fluid className="p-0">
      <Router basename='/'>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </Container>
  );
}
export default App;