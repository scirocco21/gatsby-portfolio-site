import React from "react"
import "../assets/sass/portfolio.scss";
import Head from '../components/head';
import ListShuffler from '../components/ListShuffler.js'
import config from '../config.js'
import {shuffle} from "lodash";
import Modal from 'react-awesome-modal'
import Image from '../components/image'
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
      }, () => setTimeout(this.shuffleList, 500))
    } else {
      let filteredProjects = config.projects.filter(project => project.tags.includes(filter))
      this.setState({
        projects: filteredProjects,
      }, () =>  {
        if (this.state.projects.length > 2) {
          setTimeout(this.shuffleList, 500)
        }
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
    const filters = config.filters.map((filter, index) => {
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
          <h1 style={{textAlign: 'left'}}>Portfolio</h1>
          <h6>
            <ul style={{textAlign: 'center'}}>
              {filters}
            </ul>
          </h6>
          <ListShuffler 
            projects={this.state.projects} 
            shuffleList={this.shuffleList} 
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
            <ul className="tags">
              {this.state.project.tags.map((tag,index) => {
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
              style={{position:'absolute', backgroundColor: "white", top:'0', right: '5px', textDecoration: 'none', margin: "0", padding: "0", border: "none"}}
            >
              <h1 style={{margin: '0', color: 'black', fontSize: "24px"}}>&times;</h1>
            </button>
          </div>
        </Modal>
      </>
    )
  }
}

export default Portfolio
