import React from "react"
import "../assets/sass/portfolio.scss";
import Head from '../components/head';
import ProjectList from '../components/ProjectList'
import config from '../config.js'
import Modal from 'react-awesome-modal'
import Image from '../components/image'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../assets/sass/filterbutton.scss'

const CloseButton = (props) => (
  <button className={props.className} onClick={()=> props.toggleModal()}>
    {props.children}
  </button>
)

const StyledCloseButton = styled(CloseButton)`
  position: absolute;
  background-color: white;
  top: 0px;
  right: 10px;
  text-decoration: none;
  margin: 0; 
  padding: 0; 
  border: none;
`
const ViewButton = props => (
  <button className={props.className}>
    <a href={props.project.url} target="_blank" rel='noopener noreferrer' style={{textDecoration: 'none', color: 'white'}}>
        {props.children}
    </a>
  </button>
)

const StyledViewButton = styled(ViewButton)`
  background-color: black;
  color: white;
  margin-bottom: 15px;
`

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
          className={this.state.activeFilter === filter ? "filter filter-active" : "filter normal"} 
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
            <StyledViewButton project={this.state.project}>
              <h4 style={{margin: '5px 10px 5px 10px', fontFamily: 'bebas-kai', fontSize: '16px'}}>
                View
              </h4>
            </StyledViewButton>
            <br></br>
            <button style={{borderRadius: "50%", padding: '10px', backgroundColor: "white", boxShadow: "0px 0px 1px 2px rgba(0,0,0,0.75)"}}>
              <a href={this.state.project.github} target="_blank" rel='noopener noreferrer'>
                <FontAwesomeIcon icon={["fab","github"]} size="lg" style={{color: 'black'}}/>
              </a>
            </button>
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
                    className={this.state.activeFilter === tag ? "filter filter-active" : "filter normal"} 
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
            <StyledCloseButton toggleModal={this.toggleModal}>
              <h1 style={{margin: '0', color: 'black', fontSize: "36px"}}>&times;</h1>
            </StyledCloseButton>
          </div>
        </Modal>
      </>
    )
  }
}

export default Portfolio
