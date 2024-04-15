import {Component} from 'react'

import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import TrendingVideo from '../TrendingVideo'
import Header from '../Header'
import Sidebar from '../Sidebar'
import DarkModeContext from '../../context/DarkModeContext'
import {
  MainTrendingContainer,
  TrendingVideoContainer,
  TrendingBanner,
  TrendingLogoContainer,
  TrendLogo,
  TrendHead,
  FetchErrorContainer,
  ErrorImage,
  ErrorHead,
  ErrorPara,
  RetryButton,
  VideoContainers,
} from './StyledComponents'

const urlStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  failure: 'FAILURE',
  success: 'SUCCESS',
}

class Trending extends Component {
  state = {urlStatus: urlStatusConstants.initial, videoData: []}

  componentDidMount() {
    this.trendingVideosApiUrl()
  }

  trendingVideosApiUrl = async () => {
    this.setState({urlStatus: urlStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
    const options = {
      method: 'GET',
      headers: {Authorization: `Bearer ${jwtToken}`},
    }
    const response = await fetch(url, options)
    if (response.status === 200) {
      const data = await response.json()
      const tempData = data.videos
      const videoData = tempData.map(eachData => ({
        channel: {
          name: eachData.channel.name,
          profImgUrl: eachData.channel.profile_image_url,
        },
        id: eachData.id,
        publishedAt: eachData.published_at,
        thumbUrl: eachData.thumbnail_url,
        title: eachData.title,
        viewCount: eachData.view_count,
      }))
      this.setState({urlStatus: urlStatusConstants.success, videoData})
    } else {
      this.setState({urlStatus: urlStatusConstants.failure})
    }
  }

  renderInprogressView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

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
            <RetryButton onClick={this.trendingVideosApiUrl}>Retry</RetryButton>
          </FetchErrorContainer>
        )
      }}
    </DarkModeContext.Consumer>
  )

  renderSuccessView = () => {
    const {videoData} = this.state
    return (
      <DarkModeContext.Consumer>
        {value => {
          const {isDarkMode} = value
          return (
            <>
              <TrendingBanner $mode={isDarkMode} data-testid="banner">
                <TrendingLogoContainer $mode={isDarkMode}>
                  <TrendLogo $mode={isDarkMode} />
                </TrendingLogoContainer>
                <TrendHead $mode={isDarkMode}>Trending</TrendHead>
              </TrendingBanner>
              <VideoContainers $mode={isDarkMode}>
                {videoData.map(eachData => (
                  <TrendingVideo data={eachData} key={eachData.id} />
                ))}
              </VideoContainers>
            </>
          )
        }}
      </DarkModeContext.Consumer>
    )
  }

  renderView = () => {
    const {urlStatus} = this.state
    switch (urlStatus) {
      case urlStatusConstants.inProgress:
        return this.renderInprogressView()
      case urlStatusConstants.failure:
        return this.renderFailureView()
      case urlStatusConstants.success:
        return this.renderSuccessView()
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
            <MainTrendingContainer data-testid="trending" $mode={isDarkMode}>
              <Header />
              <Sidebar />
              <TrendingVideoContainer>
                {this.renderView()}
              </TrendingVideoContainer>
            </MainTrendingContainer>
          )
        }}
      </DarkModeContext.Consumer>
    )
  }
}

export default Trending
