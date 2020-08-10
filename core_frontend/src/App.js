import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import About from './components/about';
import Car from './components/car';
import Contact from './components/contact';
import Search from './components/search';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './image-gallery.css';

function App() {
  return (
  <Router>
      <Switch>
             <Route exact path="/">
                {create_page(<Home />)}
             </Route>

             <Route path="/home">
                {create_page(<Home />)}
             </Route>

             <Route path="/about">
                {create_page(<About />)}
              </Route>

              <Route path="/home">
                {create_page(<Home />)}
              </Route>

              <Route path="/car">
                {create_page(<Car />)}
              </Route>

              <Route path="/home">
                {create_page(<Home />)}
              </Route>

              <Route path="/contact">
                {create_page(<Contact />)}
              </Route>

              <Route path="/home">
                {create_page(<Home />)}
                </Route>

              <Route path="/search">
                {create_page(<Search />)}
              </Route>
       </Switch>
  </Router>




  );
}

function create_page(page) {
    return (
    <div className="App">
         <Header />
      <div class = "page">
        {page}
      </div>
      <footer>
        <Footer />
      </footer>
    </div>)
  }

export default App;
