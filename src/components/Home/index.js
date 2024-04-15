import {Component} from 'react'
import cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {IoMdClose, IoMdSearch} from 'react-icons/io'
import Header from '../Header'
import Video from '../Video'
import Sidebar from '../Sidebar'
import DarkModeContext from '../../context/DarkModeContext'
import {
  BaseContainer,
  MainHomeContainer,
  VideoContainers,
  PremiumContainer,
  FetchErrorContainer,
  PremiumItems,
  LogoImage,
  PremiumText,
  GetITButton,
  CloseButton,
  SearchBar,
  SearchContainer,
  Search,
  ErrorImage,
  ErrorHead,
  ErrorPara,
  RetryButton,
  SearchVideoContent,
  NoResultContainer,
  NoResultHead,
  NoResultImage,
  NoResultPara,
} from './StyledComponents'

const urlStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  failure: 'FAILURE',
  success: 'SUCCESS',
}

class Home extends Component {
  state = {
    search: '',
    urlStatus: urlStatusConstants.initial,
    noVideos: false,
    showPremiumBanner: true,
    videoData: [],
  }

  componentDidMount() {
    this.homeVideosApiUrl()
  }

  homeVideosApiUrl = async () => {
    this.setState({urlStatus: urlStatusConstants.inProgress})
    const {search} = this.state
    const jwtToken = cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${search}`
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
      this.setState({
        videoData,
        urlStatus: urlStatusConstants.success,
        noVideos: false,
      })
      if (videoData.length === 0) {
        this.setState({noVideos: true})
      }
    } else {
      this.setState({urlStatus: urlStatusConstants.failure})
    }
  }

  getSearchQuery = event => {
    this.setState({search: event.target.value})
  }

  searchQuery = () => {
    this.homeVideosApiUrl()
  }

  closePremBanner = () => {
    this.setState({showPremiumBanner: false})
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
            <RetryButton onClick={this.homeVideosApiUrl}>Retry</RetryButton>
          </FetchErrorContainer>
        )
      }}
    </DarkModeContext.Consumer>
  )

  renderNoSearchResult = () => (
    <DarkModeContext.Consumer>
      {value => {
        const {isDarkMode} = value
        return (
          <NoResultContainer $mode={isDarkMode}>
            <NoResultImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoResultHead $mode={isDarkMode}>
              No Search results found
            </NoResultHead>
            <NoResultPara $mode={isDarkMode}>
              Try different key words or remove search filter
            </NoResultPara>
            <RetryButton onClick={this.homeVideosApiUrl}>Retry</RetryButton>
          </NoResultContainer>
        )
      }}
    </DarkModeContext.Consumer>
  )

  renderSuccessView = () => {
    const {videoData, noVideos} = this.state
    return (
      <DarkModeContext.Consumer>
        {value => {
          const {isDarkMode} = value
          return noVideos ? (
            this.renderNoSearchResult()
          ) : (
            <VideoContainers $mode={isDarkMode}>
              {videoData.map(eachData => (
                <Video data={eachData} key={eachData.id} />
              ))}
            </VideoContainers>
          )
        }}
      </DarkModeContext.Consumer>
    )
  }

  renderInprogressView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderView = () => {
    const {urlStatus} = this.state
    switch (urlStatus) {
      case urlStatusConstants.failure:
        return this.renderFailureView()
      case urlStatusConstants.success:
        return this.renderSuccessView()
      case urlStatusConstants.inProgress:
        return this.renderInprogressView()
      default:
        return null
    }
  }

  render() {
    const {showPremiumBanner} = this.state

    return (
      <DarkModeContext.Consumer>
        {value => {
          const {isDarkMode} = value

          return (
            <BaseContainer data-testid="home" $mode={isDarkMode}>
              <Header />
              <MainHomeContainer>
                <Sidebar />
                <SearchVideoContent $mode={isDarkMode}>
                  {showPremiumBanner && (
                    <PremiumContainer data-testid="banner">
                      <PremiumItems>
                        <LogoImage
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt watch logo"
                        />
                        <PremiumText>
                          Buy Nxt Watch Premium prepaid plans with UPI
                        </PremiumText>
                        <GetITButton>GET IT NOW</GetITButton>
                      </PremiumItems>
                      <CloseButton
                        data-testid="close"
                        onClick={this.closePremBanner}
                      >
                        <IoMdClose size={25} />
                      </CloseButton>
                    </PremiumContainer>
                  )}
                  <SearchContainer>
                    <SearchBar
                      type="search"
                      onChange={this.getSearchQuery}
                      $mode={isDarkMode}
                      placeholder="Search"
                    />
                    <Search
                      data-testid="searchButton"
                      onClick={this.searchQuery}
                    >
                      <IoMdSearch />
                    </Search>
                  </SearchContainer>
                  {this.renderView()}
                </SearchVideoContent>
              </MainHomeContainer>
            </BaseContainer>
          )
        }}
      </DarkModeContext.Consumer>
    )
  }
}

export default Home
