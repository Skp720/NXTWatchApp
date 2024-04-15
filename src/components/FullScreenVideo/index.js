import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import Cookies from 'js-cookie'
import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'
import {BsDot} from 'react-icons/bs'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import Sidebar from '../Sidebar'
import DarkModeContext from '../../context/DarkModeContext'

import {
  MainFullVideoContainer,
  FullVideoContainer,
  ReactVideoPlayer,
  VideoWrapper,
  VideoTitle,
  VideoDetails,
  StatItem,
  StatContainer,
  VideoButtons,
  HorizontalLine,
  ChannelDetails,
  ChannelName,
  ChannelLogo,
  ChannelStat,
  ChannelSubscribers,
  VideoDescription,
  LikeButton,
  DislikeButton,
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

class FullScreenVideo extends Component {
  state = {
    urlStatus: urlStatusConstants.initial,
    data: [],
    channelData: [],
  }

  componentDidMount() {
    this.videoDetailsApiUrl()
  }

  videoDetailsApiUrl = async () => {
    this.setState({urlStatus: urlStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')

    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)
    if (response.status === 200) {
      const tempData = await response.json()
      const tempData2 = tempData.video_details
      const pubTime = formatDistanceToNow(new Date(tempData2.published_at))
      const test = pubTime.split(' ')
      const time = test.slice(1, test.length).join(' ')
      const channelData = {
        name: tempData2.channel.name,
        profImgUrl: tempData2.channel.profile_image_url,
        subscriberCount: tempData2.channel.subscriber_count,
      }
      const data = {
        description: tempData2.description,
        id: tempData2.id,
        publishedAt: time,
        thumbUrl: tempData2.thumbnail_url,
        title: tempData2.title,
        videoUrl: tempData2.video_url,
        viewCount: tempData2.view_count,
      }

      this.setState({channelData, data, urlStatus: urlStatusConstants.success})
    } else {
      this.setState({urlStatus: urlStatusConstants.failure})
    }
  }

  renderFailureView = () => (
    <FetchErrorContainer>
      <ErrorImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <ErrorHead>Oops! Something Went Wrong</ErrorHead>
      <ErrorPara>
        we are having some trouble to complete your request. Please try again.
      </ErrorPara>
      <RetryButton onClick={this.videoDetailsApiUrl}>Retry</RetryButton>
    </FetchErrorContainer>
  )

  renderInprogressView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderSuccessView = () => {
    const {data, channelData} = this.state
    const {
      videoUrl,
      description,
      publishedAt,
      thumbUrl,
      title,
      viewCount,
      id,
    } = data
    const {name, profImgUrl, subscriberCount} = channelData

    return (
      <DarkModeContext.Consumer>
        {value => {
          const {
            isDarkMode,
            saveUnSaveVideo,
            like,
            dislike,
            savedListId,
            likedVideos,
            disLikedVideos,
          } = value

          const checkSaved = savedListId.includes(id)

          const liked = likedVideos.includes(id)

          const disliked = disLikedVideos.includes(id)

          const onLike = () => {
            like(id)
          }

          const onDisLike = () => {
            dislike(id)
          }

          const saveVideo = () => {
            saveUnSaveVideo({data, channelData})
          }

          return (
            <FullVideoContainer $mode={isDarkMode}>
              <VideoWrapper>
                <ReactVideoPlayer
                  url={videoUrl}
                  light={thumbUrl}
                  controls
                  width="100%"
                  height="100%"
                />
              </VideoWrapper>
              <VideoTitle $mode={isDarkMode}>{title}</VideoTitle>
              <VideoDetails>
                <StatContainer>
                  <StatItem>{viewCount} views</StatItem>
                  <StatItem>
                    <BsDot size={30} />
                  </StatItem>
                  <StatItem>{publishedAt} ago</StatItem>
                </StatContainer>
                <StatContainer>
                  <LikeButton onClick={onLike} $isLiked={liked}>
                    <BiLike size={20} /> Like
                  </LikeButton>
                  <DislikeButton onClick={onDisLike} $isDisliked={disliked}>
                    <BiDislike size={20} /> Dislike
                  </DislikeButton>
                  <VideoButtons onClick={saveVideo} $isSaved={checkSaved}>
                    <MdPlaylistAdd size={20} /> {checkSaved ? 'Saved' : 'Save'}
                  </VideoButtons>
                </StatContainer>
              </VideoDetails>
              <HorizontalLine />
              <ChannelDetails>
                <ChannelLogo src={profImgUrl} alt="channel logo" />
                <ChannelStat>
                  <ChannelName $mode={isDarkMode}>{name}</ChannelName>
                  <ChannelSubscribers>
                    {subscriberCount} Subscribers
                  </ChannelSubscribers>
                </ChannelStat>
              </ChannelDetails>
              <VideoDescription>{description}</VideoDescription>
            </FullVideoContainer>
          )
        }}
      </DarkModeContext.Consumer>
    )
  }

  renderView = () => {
    const {urlStatus} = this.state
    switch (urlStatus) {
      case urlStatusConstants.success:
        return this.renderSuccessView()
      case urlStatusConstants.inProgress:
        return this.renderInprogressView()
      case urlStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <MainFullVideoContainer>
        <Header />
        <Sidebar />
        {this.renderView()}
      </MainFullVideoContainer>
    )
  }
}

export default FullScreenVideo
