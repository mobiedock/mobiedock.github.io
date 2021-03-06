import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./components/Home";
import Navbar from './components/CustomNavbar';
import About from './components/About';
import Solution from './components/Solution';
import Features from './components/Features';
import Awards from './components/Awards';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faMoneyCheckAlt, faSolarPanel, faSitemap, faMapMarkedAlt, faBookmark, faChartBar, faPlayCircle} from '@fortawesome/free-solid-svg-icons';

library.add(fab, fas)
library.add(faSolarPanel)
library.add(faSitemap)
library.add(faMoneyCheckAlt)
library.add(faMapMarkedAlt)
library.add(faBookmark)
library.add(faChartBar)
library.add(faPlayCircle)

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <About path="/" component={About} />
          <Solution path="/" component={Solution} />
          <Features path="/" component={Features} />
          <Awards path = "/" component={Awards} />
          <Team path="/" component={Team} />
          <Contact path="/" component={Contact}/>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
