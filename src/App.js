import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as ProjectsConst from './projects.js';
import * as SkillsConst from './skills.js';
var classNames = require('classnames');

class App extends Component {

  render() {
    var projectsArray = ProjectsConst.projects.map(function(project, i) {
      return <Project key={i} title={project.title} description={project.description} imageUrl={project.imageUrl} githubLink={project.githubLink} otherLink={project.otherLink}/>
    });
    var skillsArray = SkillsConst.skills.map(function(skill, i) {
      return  <Skill key={i} className={skill.className} label={skill.label} />
    });

    return (
      <div className="App">
        <section id="about">
          <div>
            <header>
              <h1>Adam Bourn</h1>
              <nav>
                <a href="#projects">Projects</a>
                <a href="#skills">Skills</a>
                <a href="https://drive.google.com/file/d/0B8Mc9nigpockVUR1QkE3UVcyX00/view?usp=sharing" target="_blank">Resume</a>
              </nav>
            </header>
          </div>
          <div className="aboutTextContainer">
            <p>Senior | Informatics | University of Washington</p>
          </div>
          <div className="arrowContainer">
            <a href="#projects"><i className="fa fa-angle-down fa-3x faa-passing animated"></i></a>
          </div>
        </section>
        <section id="projects">
          <h2>Projects</h2>
          <div className="flex-container container">
            {projectsArray}
          </div>
        </section>
        <section id="skills">
          <h2>Skills</h2>
          {skillsArray}
        </section>
        <footer>
        </footer>
      </div>
    );
  }
}

class Skill extends Component {
  render() {
    return (
      <div>
        <i className={this.props.className}></i>
        <p>{this.props.label}</p>
      </div>
    );
  }
}

class Project extends Component {

  render() {
    var imgStyle = {
      backgroundImage: "url(" + this.props.imageUrl + ")"
    }

    var content = <div></div>
    if (this.props.githubLink) {
      content = <a href={this.props.githubLink} target="_blank"><i className="fa fa-github fa-2x linkStyle"></i></a>
    } else if (this.props.otherLink) {
      content = <a href={this.props.otherLink} target="_blank"><i className="fa fa-external-link fa-2x linkStyle"></i></a>
    }
    return (
      <div className="flex-column">
        <div className="content">
          <div className="image" style={imgStyle}></div>
          <div className="textContent">
            <h3>{this.props.title}</h3>
            {content}
            <hr></hr>
            <p>{this.props.description} </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
