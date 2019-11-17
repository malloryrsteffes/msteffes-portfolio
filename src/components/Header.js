import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/headshotsmall.png'

const listSyle = {
  listStyleType: 'none',
}
class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="inner">
          <a href="/" className="image avatar">
            <img src={avatar} alt="" />
          </a>
          <h1>
            <strong>Hi there! I'm Mallory.</strong>
          </h1>
          <br></br>
          <h3>Skills</h3>
          <ul style={listSyle} className="header-list">
            <li>HTML/CSS</li>
            <li>Javascript</li>
            <li>jQuery</li>
            <li>React</li>
            <li>Node.js</li>
            <li>mySQL/MongoDB</li>
          </ul>
        </div>
        <Footer />
      </header>
    )
  }
}

export default Header
