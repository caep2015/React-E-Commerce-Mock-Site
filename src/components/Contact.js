import React, { Component } from 'react'

export default class Contact extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      phone: '',
      message: '',
      successMessage: ''
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePhoneChange = this.handlePhoneChange.bind(this)
    this.handleMessageChange = this.handleMessageChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleNameChange (event) {
    this.setState({name: event.target.value})
  }
  handleEmailChange (event) {
    this.setState({email: event.target.value})
  }
  handlePhoneChange (event) {
    this.setState({phone: event.target.value})
  }
  handleMessageChange (event) {
    this.setState({message: event.target.value})
  }
  handleSubmit (event) {
    event.preventDefault()
    this.setState({
      name: '',
      email: '',
      phone: '',
      message: '',
      successMessage: 'We will get back to you as soon as possible.'
    })
  }

  render () {
    return (
      <div className='contact'>
        <div>
          <img src={require('../images/contact.jpg')} alt="Contact Header" style={{width: "100%"}} />
        </div>
        <div className='contact-form-flex'>
          <div className='form-headline success-message contact-form'>
            <h4>We are happy to hear from you!</h4>
            <h4>{this.state.successMessage}</h4>
            <form onSubmit={this.handleSubmit} >
              <div>
                <label>Name:</label>
              </div>
              <div>
                <input type='text' onChange={this.handleNameChange} value={this.state.name} placeholder='Your Name' />
              </div>
              <div>
                <label>Email:</label>
              </div>
              <div>
                <input type='text' onChange={this.handleEmailChange} value={this.state.email} placeholder='Your Email' />
              </div>
              <div>
                <label>Phone:</label>
              </div>
              <div>
                <input type='phone' onChange={this.handlePhoneChange} value={this.state.phone} placeholder='Your Phone Number' />
              </div>
              <div>
                <label>Message:</label>
              </div>
              <div>
                <textarea rows='5' onChange={this.handleMessageChange} value={this.state.message} placeholder="Your Message:" />
              </div>
              <div>
                <input type='submit' value='Submit' id='submit' />
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
