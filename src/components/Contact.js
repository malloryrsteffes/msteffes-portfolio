import React from 'react'

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.state = {
      status: '',
    }
  }

  submitForm(ev) {
    console.log('Form submitted!')
    const form = ev.target
    console.log(form)
  }

  render() {
    return (
      <div>
        <h2>Get In Touch</h2>
        <div className="row">
          <div className="8u 12u$(small)">
            <form
              className="contact-form"
              onClick={this.submitForm}
              method="POST"
              action="https://formspree.io/mpzzdydq"
            >
              <div className="row uniform 50%">
                <div className="6u 12u$(xsmall)">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    required
                    label="name"
                  />
                </div>
                <div className="6u 12u$(xsmall)">
                  <input
                    type="email"
                    name="_replyto"
                    id="email"
                    placeholder="Email"
                    required
                    label="email"
                  />
                </div>
                <div className="12u">
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Message"
                    rows="4"
                    required
                    label="message"
                  ></textarea>
                </div>
              </div>
              <ul className="actions">
                <li>
                  <input type="submit" value="Send" label="send" />
                </li>
              </ul>
            </form>
          </div>
          <div className="4u 12u$(small)">
            <ul className="labeled-icons">
              <li>
                <h3 className="icon fa-home">
                  <span className="label">Address</span>
                </h3>
                Brooklyn, NY 11221 St. Petersburg, FL 33707
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
                <a href="mailto:@malrsteffes@gmail.com">
                  malrsteffes@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default ContactForm
