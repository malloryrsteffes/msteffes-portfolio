import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'
import Contact from '../components/Contact'

import thumb01 from '../assets/images/thumbs/summero.jpg'
import thumb02 from '../assets/images/thumbs/pathfinder.jpg'
import thumb03 from '../assets/images/thumbs/social-proof.jpg'
import thumb04 from '../assets/images/thumbs/footprint.png'

const DEFAULT_IMAGES = [
  {
    id: '1',
    source: 'https://malloryrsteffes.github.io/summero/',
    thumbnail: thumb01,
    caption: 'Summero',
    description:
      'A full stack React app, built to encourage and increase environmental consciousness.',
  },
  {
    id: '2',
    source: 'https://malloryrsteffes.github.io/loopLab/',
    thumbnail: thumb02,
    caption: 'PathFinder',
    description:
      'A full-stack, light-hearted name generating app. Built with Javascript/jQuery, Node, mySQL.',
  },
  {
    id: '3',
    source: 'https://malloryrsteffes.github.io/social-proof/',
    thumbnail: thumb03,
    caption: 'Social Proof',
    description: 'A sporty take on the class memory game. Built with React.',
  },
  {
    id: '4',
    source: 'https://project-footprint.herokuapp.com/',
    thumbnail: thumb04,
    caption: 'Footprint',
    description:
      'A full stack React app, built to encourage and increase environmental consciousness.',
  },
]

class HomeIndex extends React.Component {
  render() {
    const siteTitle = 'Mallory Steffes'
    const siteDescription = 'Front End Developer Portfolio'

    return (
      <Layout>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
          <link rel="shortcut icon" href="favicon.ico" type="../assets/images/x-icon"/>

        </Helmet>

        <div id="main">
          <section id="one">
            <header className="major">
              <h2>Welcome to my site!</h2>
            </header>
            <p>
              I am a front end developer, curently living in St. Pete Beach,
              Florida. I've served as a project manager on multiple full stack
              applications, and am confident in both my learned skills and my
              Google-fu.
              <br></br>
              <br></br>
              In my spare time, I love weightlifting, losing in my fantasy
              football leagues, and playing board games.
              <br></br>
              <br></br>
              <i>Open to relocation.</i>
            </p>
            <ul className="actions">
              <li>
                <a
                  href="https://www.linkedin.com/in/mallorysteffes/"
                  className="button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Find me on LinkedIn
                </a>
              </li>
            </ul>
          </section>

          <section id="two">
            <h2>Recent Projects</h2>

            <Gallery
              images={DEFAULT_IMAGES.map(
                ({ id, source, thumbnail, caption, description }) => ({
                  source,
                  thumbnail,
                  caption,
                  description,
                })
              )}
            />

            <ul className="actions">
              <li>
                <a
                  href="https://github.com/malloryrsteffes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button"
                >
                  Find me on Github
                </a>
              </li>
            </ul>
          </section>

          <section id="three">
            <Contact />
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
