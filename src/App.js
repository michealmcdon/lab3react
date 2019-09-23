import React from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Content from './components/content';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class App extends React.Component {

  render()  {
    return  (
      <Router>
      <div className="App">
        <Navbar bg="primary" variant="dark">
    <Nav className="mr-auto">
      <Nav.Link href="/read">Read</Nav.Link>
      <Nav.Link href="/create">Create</Nav.Link>
      <Nav.Link href="/">Pricing</Nav.Link>
    </Nav>
  </Navbar>

  <Switch>
    <Route exact path="/" component={Content}/>
    <Route path="/read" component={Header} />
    <Route path="/Create" component={Footer} />
  </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
