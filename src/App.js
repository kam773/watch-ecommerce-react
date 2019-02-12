import React from 'react';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header/Header';
import Landing from './components/Landing/Landing';
import MenSection from './components/MenSection/MenSection';
import WomenSection from './components/WomenSection/WomenSection';
import ChildrenSection from './components/ChildrenSection/ChildrenSection';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Details from './components/Details/Details';

class App extends React.Component {
  render() {
    return (
        <React.Fragment>
            <Header/>
            <Switch>
                <Route exact path="/" component={ Landing }/>
                <Route exact path="/men" component={ MenSection }/>
                <Route exact path="/women" component={ WomenSection }/>
                <Route exact path="/kids" component={ ChildrenSection }/>
                <Route exact path="/contact" component={ Contact }/>
                <Route path="/details" component={ Details }/>
            </Switch>
            <Footer/>
        </React.Fragment>
    )
  }
}

export default App;