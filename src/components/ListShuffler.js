import React from "react";
import Project from './Project.js';
import Fade from 'react-reveal/Fade';

 class ListShuffler extends React.Component {
  render() {
    return (      
      <Fade bottom>
        <ul className="portfolio-list">
          {this.props.projects.map((project, index) => (
              <li key={index}>
                <Project 
                  projectData={project} 
                  toggleModal={this.props.toggleModal}
                  updateProject={this.props.updateProject}
                />
              </li>
          ))}
        </ul>
      </Fade>
    )
  }
};

export default ListShuffler