import React from 'react';
import Image from './image.js'
import '../assets/sass/project.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Project extends React.Component {
  handleClick = (project) => {
    this.props.toggleModal();
    this.props.updateProject(project);
  }

  render() {
    const project = this.props.projectData
    return (    
      <div className="square" onClick={() => this.handleClick(project)}>
        <Image imgName={project.imgName} />
        <div id="overlay" style={{color: 'white'}}>
          <div>
            <h2 style={{fontFamily: 'bebas-kai', padding: '5px'}}>{project.name}</h2>
            <FontAwesomeIcon icon="plus"/>
          </div>
        </div>
      </div>
    )
  }
}