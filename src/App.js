import React from 'react';
import Sidebar from './components/sidebar';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import About from './components/about';
import Resume from './components/resume';
import Projects from './components/projects';
import Switch from 'react-bootstrap/esm/Switch';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <div className="row h-86vh">
            <div className="col-lg-3 col-md-4">
              <div className="app-sidebar h-100 bg-white">
                <Sidebar/>
              </div>
            </div>
            <div className="col-lg-9 col-md-8">
              <div className="app-main-content h-100 bg-white">
                <Navbar />
                <Switch>
                  <Route exact path="/">
                    <About />
                  </Route>
                  <Route path="/resume">
                    <Resume />
                  </Route>
                  <Route path="/projects">
                    <Projects />
                  </Route>
                  <Route>
                    <Redirect to="/" />
                  </Route>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;