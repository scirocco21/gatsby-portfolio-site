import React from 'react';
import Fade from 'react-reveal/Fade';
import Img from 'gatsby-image';
import {Link} from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class BlogList extends React.Component {
  render() {
    return (
      <ul style={{listStyle: 'none', padding: '0',margin: '0'}}>
      {this.props.posts.map((edge, index) => {
        return (
          <Fade bottom key={index}>
            <li 
              style={{marginBottom: '15px'}} 
              className="card-container"
              key={index}
            >
              <Link to={`/blog/${edge.node.slug}`}>
                <div className="blog-card" style={{display: 'flex', alignContent: 'center', alignItems: 'center', border: '1px solid #D3D3D3', borderRadius: '5px', boxShadow: '0px 0px 1px 1px #D3D3D3	'}}>
                  <div className="image-container">
                    <Img fluid={edge.node.heroImage.fluid} style={{alignSelf: 'flex-start'}}/>
                  </div>
                  <div style={{ flex: '1 1 auto', paddingLeft: '10px', paddingRight: '10px'}}>
                    <h3>{edge.node.title}</h3>
                      <div style={{textAlign: 'left'}}>
                        <p style={{marginBottom: "5px", marginTop: '5px'}}>
                          <span style={{marginRight: "10px"}}><FontAwesomeIcon icon="calendar-alt" size="xs"/></span>
                          {edge.node.publishedDate}
                        </p>
                        <p style={{marginTop: "5px", marginBottom: "5px"}}>
                          <span style={{marginRight: "10px"}}><FontAwesomeIcon icon="tags" size="xs"/></span>
                          {edge.node.tag.map((tag, index) => {
                            return <button key={index} className={this.props.activeFilter === tag ? "filter filter-active" : "filter normal"} value={tag}
                            onClick={event => {
                              event.preventDefault();this.props.handleClick(event.currentTarget.value)
                            }}>{tag}</button>
                          })} 
                        </p>
                      </div>
                  </div>
                </div>
              </Link>
            </li>
          </Fade>
        )
      })}
    </ul>
    )
  }
}