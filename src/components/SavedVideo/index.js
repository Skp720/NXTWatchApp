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
} from './StyledComponents'

const SavedVideo = props => {
  const {fullData} = props
  const {data, channelData} = fullData
  const {publishedAt, thumbUrl, title, viewCount, id} = data
  const {name, profImgUrl} = channelData

  return (
    <DarkModeContext.Consumer>
      {value => {
        const {isDarkMode} = value

        return (
          <VideoCard to={`/videos/${id}`}>
            <VideoThumbnail src={thumbUrl} alt="video thumbnail" />
            <VideoDetails>
              <ChannelLogo src={profImgUrl} alt={name} />
              <StatContainer>
                <VideoName $mode={isDarkMode}>{title}</VideoName>
                <ChannelNameLg>{name}</ChannelNameLg>
                <VideoStats>
                  <ChannelNameSm>{name}</ChannelNameSm>
                  <StatItem>
                    {viewCount} views
                    <BsDot />
                  </StatItem>
                  <StatItem>{publishedAt} ago</StatItem>
                </VideoStats>
              </StatContainer>
            </VideoDetails>
          </VideoCard>
        )
      }}
    </DarkModeContext.Consumer>
  )
}

export default SavedVideo
