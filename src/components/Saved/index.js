import {Component} from 'react'

import Loader from 'react-loader-spinner'
import Header from '../Header'
import Sidebar from '../Sidebar'
import DarkModeContext from '../../context/DarkModeContext'
import SavedVideo from '../SavedVideo'
import {
  MainSavedContainer,
  SavedVideoContainer,
  SavedBanner,
  SavedLogoContainer,
  SavedLogo,
  SavedHead,
  FetchErrorContainer,
  ErrorImage,
  ErrorHead,
  ErrorPara,
  VideoContainers,
} from './StyledComponents'

const urlStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  failure: 'FAILURE',
  success: 'SUCCESS',
}

class Saved extends Component {
  state = {urlStatus: urlStatusConstants.initial}

  renderInprogressView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderNoVideoView = () => (
    <DarkModeContext.Consumer>
      {value => {
        const {isDarkMode} = value
        return (
          <FetchErrorContainer $mode={isDarkMode}>
            <ErrorImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png "
              alt="no saved videos"
            />
            <ErrorHead $mode={isDarkMode}>No saved videos found</ErrorHead>
            <ErrorPara>You can save your videos while watching them</ErrorPara>
          </FetchErrorContainer>
        )
      }}
    </DarkModeContext.Consumer>
  )

  renderSuccessView = () => (
    <DarkModeContext.Consumer>
      {value => {
        const {isDarkMode, savedVideo} = value
        return (
          <VideoContainers $mode={isDarkMode}>
            {savedVideo.length !== 0 ? (
              <>
                <SavedBanner $mode={isDarkMode} data-testid="banner">
                  <SavedLogoContainer $mode={isDarkMode}>
                    <SavedLogo $mode={isDarkMode} />
                  </SavedLogoContainer>
                  <SavedHead $mode={isDarkMode}>Saved Videos</SavedHead>
                </SavedBanner>
                {savedVideo.map(eachData => (
                  <SavedVideo fullData={eachData} key={eachData.data.id} />
                ))}
              </>
            ) : (
              this.renderNoVideoView()
            )}
          </VideoContainers>
        )
      }}
    </DarkModeContext.Consumer>
  )

  renderView = () => {
    const {urlStatus} = this.state
    switch (urlStatus) {
      case urlStatusConstants.inProgress:
        return this.renderInprogressView()
      case urlStatusConstants.failure:
        return this.renderNoVideoView()
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
            <MainSavedContainer data-testid="gaming" $mode={isDarkMode}>
              <Header />
              <Sidebar />
              <SavedVideoContainer>
                {this.renderSuccessView()}
              </SavedVideoContainer>
            </MainSavedContainer>
          )
        }}
      </DarkModeContext.Consumer>
    )
  }
}

export default Saved
