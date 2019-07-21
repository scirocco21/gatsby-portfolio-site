import React from "react";
import Project from './Project.js';
import Fade from 'react-reveal/Fade';

 class ProjectList extends React.Component {
  render() {
    return (      
        <ul className="portfolio-list">
          {this.props.projects.map((project, index) => (
            <Fade bottom key={index}>
              <li key={index}>
                <Project 
                  projectData={project} 
                  toggleModal={this.props.toggleModal}
                  updateProject={this.props.updateProject}
                />
              </li>
            </Fade>
          ))}
        </ul>
    )
  }
};

export default ProjectList