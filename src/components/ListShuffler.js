import { Flipper, Flipped } from 'react-flip-toolkit'
import {shuffle} from "lodash";
import React from "react";
import Project from './Project.js';
import config from '../config.js';

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
                <Project toggle={this.toggle} projectData={config.projects[d-1]}/>
              </li>
            </Flipped>
          ))}
        </ul>
      </Flipper>
    )
  }
};

export default ListShuffler