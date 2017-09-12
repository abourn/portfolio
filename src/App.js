import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="about">
        <div>
          <header>
            <h1>Adam Bourn</h1>
            <nav>
              <a>About</a>
              <a href="#projectsSection">Projects</a>
              <a>Resume</a>
            </nav>
          </header>
        </div>
        <div className="aboutTextContainer">
          <p>Senior | Informatics | University of Washington</p>
        </div>
        <div className="arrowContainer">
          <a><i className="fa fa-angle-down fa-3x faa-passing animated"></i></a>
        </div>
        </section>
        <section name="projectsSection" className="projcects">
        </section>
      </div>
    );
  }
}

export default App;
