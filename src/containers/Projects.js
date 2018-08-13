import React, { Component } from 'react';
import {SectionsContainer, Section} from 'react-fullpage';

import projects from '../projects'
import Spreadsheet from './Spreadsheet';

class Projects extends Component {
  constructor () {
    super();

    this.state = {
      projects,
    }
  }

  render() {
    const { projects } = this.state; 
    let options = {
      sectionClassName:     'section',
      anchors:              ['spreadsheet', 'thrice', 'gamesstacked', 'thelius'],
      scrollBar:            false,
      navigation:           true,
      verticalAlign:        false,
      arrowNavigation:      true,
    };

    return (
      <SectionsContainer className="projects" {...options}>
        {
          projects.map(project => {
            return (
              <Section className="content project" key={project.id}>
                <div className="left">
                  <div className="project-name">
                    <span className="hello">{project.name} - </span>
                  </div>
                  <div className="project-description">
                    <h1>{project.description}</h1>
                  </div>
                  <div className="project-stack">
                    <p className="stack muted">{project.stack}</p>
                  </div>
                  {
                    project.deployed ? 
                      <a className="website-link" href={project.link} target="_blank">View Website</a> : 
                      null
                  }
                  <a className="github-link" href={project.github} target="_blank">View Github</a>
                </div>
                <div className="right">
                  <div style={{background: `url(${project.img})`, backgroundSize: 'cover', height: '100%', backgroundPosition: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    {
                      project.id === 1 ? 
                      <Spreadsheet /> :
                      null
                    }
                  </div>
                </div>
              </Section>
            )
          })
        }
      </SectionsContainer>
    );
  }
}

export default Projects;
