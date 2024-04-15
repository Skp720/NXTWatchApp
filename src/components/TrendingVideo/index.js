import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'
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
  VideoContainer,
} from './StyledComponents'
import DarkModeContext from '../../context/DarkModeContext'

const Video = props => {
  const {data} = props
  const {channel, publishedAt, thumbUrl, title, viewCount, id} = data
  const {name, profImgUrl} = channel
  const pubTime = formatDistanceToNow(new Date(publishedAt))
  const test = pubTime.split(' ')
  const time = test.slice(1, test.length).join(' ')

  return (
    <DarkModeContext.Consumer>
      {value => {
        const {isDarkMode} = value

        return (
          <VideoContainer>
            <VideoCard to={`/videos/${id}`}>
              <VideoThumbnail src={thumbUrl} alt="video thumbnail" />
              <VideoDetails>
                <ChannelLogo src={profImgUrl} alt={name} />
                <StatContainer>
                  <VideoName $mode={isDarkMode}>{title}</VideoName>
                  <ChannelNameLg>{name}</ChannelNameLg>
                  <VideoStats>
                    <ChannelNameSm>
                      {name} <BsDot />
                    </ChannelNameSm>
                    <StatItem>
                      {viewCount} views
                      <BsDot />
                    </StatItem>
                    <StatItem>{time} ago</StatItem>
                  </VideoStats>
                </StatContainer>
              </VideoDetails>
            </VideoCard>
          </VideoContainer>
        )
      }}
    </DarkModeContext.Consumer>
  )
}

export default Video
