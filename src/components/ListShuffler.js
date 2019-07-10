import { Flipper, Flipped } from 'react-flip-toolkit'
import {shuffle} from "lodash";
import React, {useState} from "react";
import museums from '../images/museums-explorer.jpg'
import myReads from '../images/myReads.jpg';
import coinopoly from '../images/coinopoly.jpg';
import voynich from '../images/voynich.jpg';
import biblio from '../images/biblio.jpg';
import Project from './Project.js';
import config from '../config.js';

const mockups = [museums, coinopoly, biblio, myReads, voynich]

 class ListShuffler extends React.Component {

  state = {
    data: [1, 2, 3, 4, 5],
  }


  shuffleList = () => {this.setState({
    data: shuffle(this.state.data)
  })}

  

  componentDidMount() {
    setTimeout(this.shuffleList, 500);
  }

  render() {
  return (
    <Flipper flipKey={this.state.data.join("")}>
      <ul className="portfolio-list">
        {this.state.data.map(d => (
          <Flipped key={d} flipId={d.toString()}>
            <li key={d}>
             <Project toggle={this.toggle} projectData={config.projects[d-1]} imageData={mockups[d-1]}/>
            </li>
          </Flipped>
        ))}
      </ul>
    </Flipper>
  );
  }
};

export default ListShuffler