import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as ProjectsConst from './projects.js';

class App extends Component {


  render() {
    var projectsArray = ProjectsConst.projects.map(function(project, i) {
      return <Project key={i} title={project.title} description={project.description} imageUrl={project.imageUrl} />
    });

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
          {projectsArray}
        </section>
      </div>
    );
  }
}

class Project extends Component {
  render() {
    var imgStyle = {
      backgroundImage: "url(" + this.props.imageUrl + ")"
    }
    return (
      <div className="flex-container container">
        <div className="flex-column">
          <div className="content">
            <div className="image" style={imgStyle}></div>
            <div className="textContent">
              <h3>{this.props.title}</h3>
              <p>{this.props.description}</p>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
