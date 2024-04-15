import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'
import DarkModeContext from '../../context/DarkModeContext'
import {
  VideoCard,
  VideoThumbnail,
  VideoDetails,
  ChannelLogo,
  VideoName,
  StatContainer,
  VideoStats,
  StatItem,
  ChannelNameLg,
  ChannelNameSm,
  VideoListContainer,
} from './StyledComponents'

const Video = props => {
  const {data} = props
  const {channel, publishedAt, thumbUrl, title, viewCount, id} = data
  const pubTime = formatDistanceToNow(new Date(publishedAt))
  const test = pubTime.split(' ')
  const time = test.slice(1, test.length).join(' ')

  return (
    <DarkModeContext.Consumer>
      {value => {
        const {isDarkMode} = value

        return (
          <VideoListContainer>
            <VideoCard to={`/videos/${id}`}>
              <VideoThumbnail src={thumbUrl} alt="video thumbnail" />
              <VideoDetails>
                <ChannelLogo src={channel.profImgUrl} alt="channel logo" />
                <StatContainer>
                  <VideoName $mode={isDarkMode}>{title}</VideoName>
                  <ChannelNameLg>{channel.name}</ChannelNameLg>
                  <VideoStats>
                    <ChannelNameSm>{channel.name}</ChannelNameSm>
                    <StatItem>
                      {viewCount} views
                      <BsDot />
                    </StatItem>
                    <StatItem>{time} ago</StatItem>
                  </VideoStats>
                </StatContainer>
              </VideoDetails>
            </VideoCard>
          </VideoListContainer>
        )
      }}
    </DarkModeContext.Consumer>
  )
}

export default Video
