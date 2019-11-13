import React from 'react';
import {getWords, getReadTime} from '../utils/readTime';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CountUp from 'react-countup';

const InfoBar = (props) => {
  return(
    <p>
      <FontAwesomeIcon icon="calendar" style={{marginRight: "10px"}}/>{props.date}
      <span style={{marginRight: "15px", marginLeft: "15px"}}>/</span>
      <FontAwesomeIcon icon="calculator" style={{marginRight: "10px"}}/>
      <CountUp 
        end={getWords(props.content).length}
        delay={0.3}
        duration={1.75}
        suffix={" words"}
      />
      <span style={{marginRight: "15px", marginLeft: "15px"}}>/</span>
      <FontAwesomeIcon icon="clock" style={{marginRight: "10px"}}/>
      {getReadTime(getWords(props.content))}
    </p>
  )
}
export default InfoBar;