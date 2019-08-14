import React from "react"
import "../assets/sass/portfolio.scss";
import Head from '../components/head';
import ProjectList from '../components/ProjectList'
import config from '../config.js'
import Modal from 'react-awesome-modal'
import Image from '../components/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../assets/sass/filterbutton.scss'

class Portfolio extends React.Component {
  state = {
    projects: config.projects,
    activeFilter: "All",
    showModal: false,
    project: config.projects[0]
  }

  handleSelection = (filter) => {
    if (filter === "All") {
        this.setState({
          projects: config.projects,
      })
    } else {
      let filteredProjects = config.projects.filter(project => project.tags.includes(filter))
      this.setState({
        projects: filteredProjects,
      })
    }
  }

  setFilter = (filter) => {
    this.setState({
      activeFilter: filter
    })
  }

  setClassName = (filter) => {
    if (this.state.filter === filter) {
      return "filter-active"
    }
    else {
      return "normal"
    }
  }

  handleClick = async filter => {
    await this.setFilter(filter);
    await this.handleSelection(filter);
  }

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    })
  }

  updateProject = project => {
    this.setState({
      project: project
    })
  }
 
  render() {
    const filters = config.projectFilters.map((filter, index) => {
      return <li key={index} style={{display: 'inline-block', marginRight:'20px'}}>
        <button 
          className={this.state.activeFilter === filter ? "filter-active" : "normal"} 
          value={filter} 
          onClick={event => this.handleClick(event.currentTarget.value)}
        >
          {filter}
        </button>
      </li>
    })
    return(
      <>
        <Head title="Portfolio" />
        <section style={{padding: '0 40px 40px 40px'}}>
          <h1>Portfolio</h1>
          <h6>
            <ul style={{textAlign: 'center'}}>
              {filters}
            </ul>
          </h6>
          <ProjectList 
            projects={this.state.projects} 
            toggleModal={this.toggleModal} 
            updateProject={this.updateProject}
          />
          
        </section>
        <Modal 
          visible={this.state.showModal}
          width="400"
          effect="fadeInDown"
          onClickAway={() => this.toggleModal()}
        >                 
          <div>
            <h1 style={{fontSize: '33px'}}>{this.state.project.name}</h1>
            <Image imgName={this.state.project.imgName} />
            <p style={{fontSize: '20px'}}>{this.state.project.desc}</p>
            <button style={{backgroundColor: 'black', color: 'white', marginBottom: '15px', padding: '0 5px 0 5px'}}><h4 style={{margin: '5px 10px 5px 10px', fontFamily: 'bebas-kai', fontSize: '18px'}}><a href={this.state.project.url} target="_blank" rel='noopener noreferrer' style={{textDecoration: 'none', color: 'white'}}>View</a></h4></button>
            <ul style={{display: "flex", justifyContent: "center", flexWrap: "wrap", padding: "0"}}>
              {this.state.project.tags.map((tag,index) => {
                return <li 
                  key={index} 
                  style={{margin: '5px', display: "inline-block"}}
                >
                  <button 
                    onClick={() => {
                      this.handleClick(tag);
                      this.toggleModal();
                    }}
                    className={this.state.activeFilter === tag ? "filter-active" : "normal"} 
                  >
                    <span style={{marginRight: "5px"}}>
                      <FontAwesomeIcon icon="tag"/>
                    </span>
                    {tag}
                  </button>
                </li>
                })
              }
            </ul> 
            <button
              onClick={() => this.toggleModal()} 
              style={{position:'absolute', backgroundColor: "white", top:'0px', right: '10px', textDecoration: 'none', margin: "0", padding: "0", border: "none"}}
            >
              <h1 style={{margin: '0', color: 'black', fontSize: "36px"}}>&times;</h1>
            </button>
          </div>
        </Modal>
      </>
    )
  }
}

export default Portfolio
