import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import Sidebar from '../Sidebar'
import GameCard from '../GameCard'
import DarkModeContext from '../../context/DarkModeContext'
import {
  MainGamingContainer,
  GamingBanner,
  GamingLogoContainer,
  GameLogo,
  GameHead,
  GamingContainer,
  GameTabContainer,
  FetchErrorContainer,
  ErrorImage,
  ErrorHead,
  ErrorPara,
  RetryButton,
} from './StyledComponents'

const urlStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  failure: 'FAILURE',
  success: 'SUCCESS',
}

class Gaming extends Component {
  state = {urlStatus: urlStatusConstants.initial, gameData: []}

  componentDidMount() {
    this.gamingVideosApiUrl()
  }

  gamingVideosApiUrl = async () => {
    this.setState({urlStatus: urlStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {Authorization: `Bearer ${jwtToken}`},
    }

    const response = await fetch(url, options)
    if (response.status === 200) {
      const data = await response.json()
      const gameData = data.videos.map(eachItem => ({
        id: eachItem.id,
        thumbUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))
      this.setState({urlStatus: urlStatusConstants.success, gameData})
    } else {
      this.setState({urlStatus: urlStatusConstants.failure})
    }
  }

  renderInprogressView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderSuccessView = () => {
    const {gameData} = this.state

    return (
      <DarkModeContext.Consumer>
        {value => {
          const {isDarkMode} = value
          return (
            <GamingContainer>
              <GamingBanner $mode={isDarkMode} data-testid="banner">
                <GamingLogoContainer $mode={isDarkMode}>
                  <GameLogo $mode={isDarkMode} />
                </GamingLogoContainer>
                <GameHead $mode={isDarkMode}>Gaming</GameHead>
              </GamingBanner>
              <GameTabContainer $mode={isDarkMode}>
                {gameData.map(eachData => (
                  <GameCard data={eachData} key={eachData.id} />
                ))}
              </GameTabContainer>
            </GamingContainer>
          )
        }}
      </DarkModeContext.Consumer>
    )
  }

  renderFailureView = () => (
    <DarkModeContext.Consumer>
      {value => {
        const {isDarkMode} = value
        return (
          <FetchErrorContainer $mode={isDarkMode}>
            <ErrorImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
              alt="failure view"
            />
            <ErrorHead $mode={isDarkMode}>Oops! Something Went Wrong</ErrorHead>
            <ErrorPara>
              we are having some trouble to complete your request. Please try
              again.
            </ErrorPara>
            <RetryButton onClick={this.gamingVideosApiUrl}>Retry</RetryButton>
          </FetchErrorContainer>
        )
      }}
    </DarkModeContext.Consumer>
  )

  renderView = () => {
    const {urlStatus} = this.state
    switch (urlStatus) {
      case urlStatusConstants.inProgress:
        return this.renderInprogressView()
      case urlStatusConstants.success:
        return this.renderSuccessView()
      case urlStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <DarkModeContext.Consumer>
        {value => {
          const {isDarkMode} = value
          return (
            <MainGamingContainer data-testid="gaming" $mode={isDarkMode}>
              <Header />
              <Sidebar />
              {this.renderView()}
            </MainGamingContainer>
          )
        }}
      </DarkModeContext.Consumer>
    )
  }
}

export default Gaming
