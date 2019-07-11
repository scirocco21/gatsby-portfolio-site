import React from "react"
import "../assets/sass/portfolio.scss";
import Head from '../components/head';
import ListShuffler from '../components/ListShuffler.js'

class NewPortfolio extends React.Component {
  render() { 
    return(
      <>
        <Head title="Portfolio" />
        <section style={{padding: '0 40px 40px 40px'}}>
          <h1 style={{textAlign: 'left'}}>Portfolio</h1>
          <ListShuffler />
        </section>
      </>
    )
  }
}

export default NewPortfolio
