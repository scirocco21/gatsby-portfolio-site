import React from 'react';
import Image from './image.js'
import Modal from 'react-awesome-modal';
import '../assets/sass/project.scss'

export default class Project extends React.Component {
  state = {
    visible: false
  }

  toggleModal = () => {
    this.setState({
        visible : !this.state.visible
    });
  }

  render() {
    return (    
      <div className="square" onClick={this.toggleModal}>
        <Image imgName={this.props.projectData.imgName} />
        <div id="overlay" style={{color: 'white'}}>
          <div>
            <h3 style={{fontFamily: 'bebas-kai', padding: '5px'}}>{this.props.projectData.name}</h3>
            {/* <button style={{backgroundColor: 'white', color: 'black'}}>Details</button> */}
          </div>
        </div>
        <Modal 
          visible={this.state.visible}
          width="400"
          effect="fadeInDown"
          onClickAway={() => this.toggleModal()}
        >
          <div>
            <h1 style={{fontSize: '33px'}}>{this.props.projectData.name}</h1>
            <Image imgName={this.props.projectData.imgName} />
            <p style={{fontSize: '20px'}}>{this.props.projectData.desc}</p>
            <button style={{backgroundColor: 'black', color: 'white', marginBottom: '15px', padding: '0 5px 0 5px'}}><h4 style={{margin: '5px 10px 5px 10px', fontFamily: 'bebas-kai', fontSize: '18px'}}><a href={this.props.projectData.url} target="_blank" rel='noopener noreferrer' style={{textDecoration: 'none', color: 'white'}}>View</a></h4></button>
            <ul className="tags ">
              {this.props.projectData.tags.map((tag,index) => {
                return <li 
                  key={index} 
                  style={{marginBottom: '5px'}}
                >
                  <span className="tag">{tag}</span>
                </li>
                })
              }
            </ul>
            <button
              onClick={() => this.toggleModal()} 
              style={{position:'absolute', top:'0', right: '5px', textDecoration: 'none', margin: "0", padding: "0", border: "none"}}
            >
              <h1 style={{margin: '0', color: 'black', fontSize: "24px"}}>&times;</h1>
            </button>
          </div>
        </Modal>
      </div>
    )
  }
}