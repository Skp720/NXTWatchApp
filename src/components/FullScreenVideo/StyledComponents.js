import styled from 'styled-components'
import ReactPlayer from 'react-player'

export const MainFullVideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-width: 100vw;
  height: 100vh;
  font-family: 'Roboto';
  @media screen and (min-width: 767px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    min-width: 90vw;
    min-height: 80vh;
  }
`

export const FullVideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 10vh;
  width: 100vw;
  height: 100vh;
  padding: 0px 20px 20px 20px;
  background-color: ${props => (props.$mode === true ? 'black' : '#f1f1f1')};

  @media screen and (min-width: 767px) {
    margin-left: 20vw;
  }
  @media screen and (min-width: 1200px) {
    margin-left: 15vw;
  }
`

export const VideoWrapper = styled.div`
  width: 90vw;
  height: 35vh;
  @media screen and (min-width: 767px) {
    width: 70vw;
    height: 50vh;
  }
  @media screen and (min-width: 1200px) {
    width: 57vw;
    height: 100vh;
  }
`

export const ReactVideoPlayer = styled(ReactPlayer)``

export const VideoTitle = styled.p`
  font-weight: 500;
  font-size: 16px;
  color: #1e293b;
  margin-bottom: 0px;
  color: ${props => (props.$mode === true ? 'white' : 'black')};
`

export const VideoDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`

export const StatContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`

export const StatItem = styled.p`
  color: #94a3b8;
  font-size: 12px;
  margin-right: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const VideoButtons = styled.button`
  font-size: 16px;
  margin-right: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  cursor: pointer;
  border-width: 0px;
  padding-left: 0px;
  font-weight: 500;
  color: ${props => (props.$isSaved ? '#2563eb' : '#64748b')};
`

export const LikeButton = styled(VideoButtons)`
  color: ${props => (props.$isLiked ? '#2563eb' : '#64748b')};
`

export const DislikeButton = styled(VideoButtons)`
  color: ${props => (props.$isDisliked ? '#2563eb' : '#64748b')};
`

export const HorizontalLine = styled.hr`
  width: 100%;
  border: solid 1px #e2e8f0;
`

export const ChannelDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 0px;
`

export const ChannelLogo = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`

export const ChannelStat = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

export const ChannelName = styled.p`
  font-weight: bold;
  font-size: 16px;
  margin-top: 0px;
  margin-bottom: 0px;
  color: ${props => (props.$mode === true ? 'white' : 'black')};
`

export const ChannelSubscribers = styled.p`
  font-size: 14px;
  margin-top: 5px;
  color: #94a3b8;
`

export const VideoDescription = styled.p`
  width: 100%;
  font-size: 14px;
  color: #94a3b8;
  margin-top: 0px;
`
export const FetchErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 10px;
  margin-top: 10vh;
`

export const ErrorImage = styled.img`
  width: 300px;
  height: 250px;
`

export const ErrorHead = styled.h1`
  font-weight: bold;
  font-size: 18px;
`

export const ErrorPara = styled.p`
  font-weight: bold;
  font-size: 18px;
  color: #94a3b8;
  text-align: center;
  margin-top: 0px;
`

export const RetryButton = styled.button`
  color: white;
  font-weight: bold;
  border-radius: 3px;
  border-width: 0px;
  background-color: #4f46e5;
  padding: 5px 15px 5px 15px;
`
