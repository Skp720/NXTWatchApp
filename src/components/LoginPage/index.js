import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import cookies from 'js-cookie'
import DarkModeContext from '../../context/DarkModeContext'
import {
  LoginContainer,
  LoginCard,
  AppLogo,
  InputLabel,
  InputElement,
  InputContainer,
  ShowPassContainer,
  CheckBox,
  ShowPassText,
  LoginButton,
  ErrorText,
} from './StyledComponent'

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
    isPasswordVisible: false,
    errorMsg: '',
    isErrorOccurred: false,
  }

  onSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  login = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userCred = {username, password}

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userCred),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.status === 200) {
      const jwtToken = data.jwt_token
      cookies.set('jwt_token', jwtToken, {expires: 30})
      this.onSuccess()
    } else {
      this.setState({isErrorOccurred: true, errorMsg: data.error_msg})
    }
  }

  getUsername = event => {
    this.setState({username: event.target.value, isErrorOccurred: false})
  }

  getPassword = event => {
    this.setState({password: event.target.value, isErrorOccurred: false})
  }

  showPassword = () => {
    this.setState(prevVal => ({isPasswordVisible: !prevVal.isPasswordVisible}))
  }

  renderUserName = () => {
    const {username} = this.state
    return (
      <DarkModeContext.Consumer>
        {value => {
          const {isDarkMode} = value
          return (
            <InputContainer>
              <InputLabel htmlFor="username" $mode={isDarkMode}>
                USERNAME
              </InputLabel>
              <InputElement
                type="text"
                placeholder="Username"
                value={username}
                onChange={this.getUsername}
                id="username"
              />
            </InputContainer>
          )
        }}
      </DarkModeContext.Consumer>
    )
  }

  renderPassword = () => {
    const {password, isPasswordVisible} = this.state
    return (
      <DarkModeContext.Consumer>
        {value => {
          const {isDarkMode} = value
          return (
            <InputContainer>
              <InputLabel htmlFor="password" $mode={isDarkMode}>
                PASSWORD
              </InputLabel>
              <InputElement
                type={isPasswordVisible ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={this.getPassword}
                id="password"
              />
            </InputContainer>
          )
        }}
      </DarkModeContext.Consumer>
    )
  }

  render() {
    const {isPasswordVisible, errorMsg, isErrorOccurred} = this.state
    const jwtToken = cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <DarkModeContext.Consumer>
        {value => {
          const {isDarkMode} = value
          return (
            <LoginContainer $mode={isDarkMode}>
              <LoginCard onSubmit={this.login} $mode={isDarkMode}>
                <AppLogo
                  src={
                    isDarkMode
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
                {this.renderUserName()}
                {this.renderPassword()}
                <ShowPassContainer>
                  <CheckBox
                    type="checkbox"
                    value={isPasswordVisible}
                    onClick={this.showPassword}
                    id="checkbox"
                  />
                  <ShowPassText $mode={isDarkMode} htmlFor="checkbox">
                    Show Password
                  </ShowPassText>
                </ShowPassContainer>
                <LoginButton>Login</LoginButton>
                {isErrorOccurred && <ErrorText>* {errorMsg}</ErrorText>}
              </LoginCard>
            </LoginContainer>
          )
        }}
      </DarkModeContext.Consumer>
    )
  }
}

export default LoginPage
