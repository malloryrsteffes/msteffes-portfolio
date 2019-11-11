import React, { Component } from 'react'

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
    // const data = new FormData(form)
    // const xhr = new XMLHttpRequest()
    // xhr.open(form.method, form.action)
    // xhr.setRequestHeader('Accept', 'application/json')
    // xhr.onreadystatechange = () => {
    //   if (xhr.readyState !== XMLHttpRequest.DONE) return
    //   if (xhr.status === 200) {
    //     form.reset()
    //     this.setState({ status: 'SUCCESS' })
    //   } else {
    //     this.setState({ status: 'ERROR' })
    //   }
    // }
    // xhr.send(data)
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
                  />
                </div>
                <div className="6u 12u$(xsmall)">
                  <input
                    type="email"
                    name="_replyto"
                    id="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="12u">
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Message"
                    rows="4"
                    required
                  ></textarea>
                </div>
              </div>
              <ul className="actions">
                <li>
                  <input type="submit" value="Send" />
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
      </div>
    )
  }
}

export default ContactForm
