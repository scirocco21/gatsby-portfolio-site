import React from "react"
import Head from "../components/head"
import "../assets/sass/404.scss";


const Iframe = (props) => ( 
  <div>          
    <iframe 
      src={props.src} 
      height={props.height} 
      width={props.width} 
      frameborder={props.frameborder}
      title="Astronaut floating through space"
    />
  </div>
)

const NotFoundPage = () => (
  <>
    <Head title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <iframe src="https://giphy.com/embed/3o7btZ3T6y3JTmjg4w" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
    <p>
      <a href="https://giphy.com/gifs/epitaphrecords-music-video-3o7btZ3T6y3JTmjg4w">via GIPHY</a>
    </p>
  </>
)

export default NotFoundPage
