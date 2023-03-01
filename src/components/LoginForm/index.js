import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {
    password: '',
    username: '',
    errorMsg: '',
  }

  onSubmitResponse = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitClick = async event => {
    event.preventDefault()
    const {password, username} = this.state
    const userDetails = {password, username}
    const option = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const url = 'https://apis.ccbp.in/login'
    const response = await fetch(url, option)
    // const data = await response.json()
    console.log(response.status)
    if (response.status === 200) {
      this.onSubmitResponse()
    } else {
      this.setState({errorMsg: "*Username and Password didn't match"})
    }
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  renderPassword = () => {
    const {password} = this.state

    return (
      <>
        <label htmlFor="password" className="input-label">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input"
          value={password}
          placeholder="Password"
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  renderFirstUserName = () => {
    const {username} = this.state
    return (
      <>
        <label htmlFor="username" className="input-label">
          Username
        </label>
        <input
          type="text"
          className="user-name"
          id="username"
          value={username}
          placeholder="Username"
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  render() {
    const {errorMsg} = this.state
    return (
      <div className="bg-container">
        <div className="bg-login-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="website-login"
          />
          <form className="form-container" onSubmit={this.onSubmitClick}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="website-logo"
            />
            <div className="container-input">{this.renderFirstUserName()}</div>
            <div className="container-input">{this.renderPassword()}</div>
            <button type="submit" className="login-button">
              Login
            </button>
            <p className="error-msg">{errorMsg}</p>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
