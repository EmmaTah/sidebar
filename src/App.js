import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import mesTrocs from './pages/mesTrocs';
import mesMessages from './pages/mesMessages';
import mesFavoris from './pages/mesFavoris';
import Calendrier from './pages/Calendrier';






export default class App extends Component {
  state={};
  render () {
    return (
    <Router>
    <Navbar />
    <Switch>
      <Route path='/' exact component={Dashboard} />
      <Route path='/mestrocs' component={mesTrocs} />
      <Route path='/mesmessages' component={mesMessages} />
      <Route path='/mesfavoris' component={mesFavoris} />
      <Route path='/calendrier' component={Calendrier} />
    

     

      

    </Switch>
  </Router>
    );
  }
  
  
  
}


