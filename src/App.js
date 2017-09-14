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
                <a href="https://drive.google.com/file/d/0B8Mc9nigpockVUR1QkE3UVcyX00/view?usp=sharing" target="_blank">Resume</a>
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
        <section name="projectsSection" className="projects">
          <h2>Projects</h2>
          <Project />
        </section>
      </div>
    );
  }
}

class Project extends Component {
  render() {
    return (
      <div className="flex-container container">
        <div className="flex-column">
          <div className="content">
            <div className="image"></div>
            <div className="textContent">
              <h3>Note Taking</h3>
              <p>Having trouble remembering those little details? Take a Pencil with you and jot them down wherever you go.  IF you make a mistake, erase it and start over.</p>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
