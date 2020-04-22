import React  from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import project from './project';
import Navbar from './Navbar';
import Contact from './Contact';

function App() {
  return(
    <Router>
    <div className="main">
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/project" component={project} />
    </Switch>
        
    </div>
    </Router>
  );
}

export default App;
