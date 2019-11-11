import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/footprint.png'
import thumb02 from '../assets/images/thumbs/nameIt.png'
import thumb03 from '../assets/images/thumbs/gridironClicky.png'
import thumb04 from '../assets/images/thumbs/crystaltheme.jpg'

import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'

const DEFAULT_IMAGES = [
  {
    id: '1',
    source: full01,
    thumbnail: thumb01,
    caption: 'Footprint',
    description: 'A full stack React app, built to encourage and increase environmental consciousness.',
  },
  {
    id: '2',
    source: full02,
    thumbnail: thumb02,
    caption: 'Name-It!',
    description: 'A full-stack, light-hearted name generating app. Built with Javascript/jQuery, Node, mySQL.',
  },
  {
    id: '3',
    source: full03,
    thumbnail: thumb03,
    caption: 'The Gridiron Clicky Game',
    description: 'A sporty take on the class memory game. Built with React.',
  },
  {
    id: '4',
    source: full04,
    thumbnail: thumb04,
    caption: 'Crystal Collector',
    description: 'A simple game built primarily with Javascript and jQuery',
  },
]

class HomeIndex extends React.Component {
  render() {
    const siteTitle = 'Mallory Steffes'
    const siteDescription = 'Full Stack Junior Developer Portfolio'

    return (
      <Layout>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        <div id="main">
          <section id="one">
            <header className="major">
              <h2>Welcome to my site!</h2>
            </header>
            <p>
              I am a full stack developer and recent bootcamp graduate, on the
              hunt for my first job in the industry. I'm a hard worker, eager
              learner, and I'm ready to hit the ground running! I've served as a
              project manager on multiple full stack applications, and am
              confident in both my learned skills and my Google-fu.
              <br></br>
              <br></br>
              In my spare time, I love weightlifting, watching football, and
              playing board games.
              <br></br>
              <br></br>
              <i>Open to relocation.</i>
            </p>
            <ul className="actions">
              <li>
                <a
                  href="https://www.linkedin.com/in/mallorysteffes/"
                  className="button"
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
                <a href="https://github.com/malloryrsteffes" className="button">
                  Find me on Github
                </a>
              </li>
            </ul>
          </section>

          <section id="three">
            <h2>Get In Touch</h2>
            <div className="row">
              <div className="8u 12u$(small)">
                <form method="post" action="#">
                  <div className="row uniform 50%">
                    <div className="6u 12u$(xsmall)">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                      />
                    </div>
                    <div className="6u 12u$(xsmall)">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="12u">
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Message"
                        rows="4"
                      ></textarea>
                    </div>
                  </div>
                </form>
                <ul className="actions">
                  <li>
                    <input type="submit" value="Send Message" />
                  </li>
                </ul>
              </div>
              <div className="4u 12u$(small)">
                <ul className="labeled-icons">
                  <li>
                    <h3 className="icon fa-home">
                      <span className="label">Address</span>
                    </h3>
                    Brooklyn, NY 11221
                    <br />
                    United States
                  </li>
                  <li>
                    <h3 className="icon fa-mobile">
                      <span className="label">Phone</span>
                    </h3>
                    813.966.3838
                  </li>
                  <li>
                    <h3 className="icon fa-envelope-o">
                      <span className="label">Email</span>
                    </h3>
                    <a href="#">malrsteffes@gmail.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
