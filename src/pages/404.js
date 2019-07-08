import React from "react"
import Head from "../components/head"
import "../assets/sass/404.scss";


const Iframe = (props) => ( 
  <div>          
    <iframe src={props.src} height={props.height} width={props.width} frameborder={props.frameborder}/>
  </div>
)

const NotFoundPage = () => (
  <>
    <Head title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <Iframe src="https://giphy.com/embed/GK2zBA4xXqIPS" height="250px" width="250px" frameborder="0"></Iframe>
    <p><a href="https://giphy.com/gifs/loop-space-lost-GK2zBA4xXqIPS">via GIPHY</a></p>
  </>
)

export default NotFoundPage
