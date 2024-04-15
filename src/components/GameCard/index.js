import DarkModeContext from '../../context/DarkModeContext'
import {
  CardContainer,
  CardThumb,
  CardTitle,
  ViewersCount,
  CardLink,
} from './StyledComponents'

const GameCard = props => {
  const {data} = props
  const {id, thumbUrl, title, viewCount} = data

  return (
    <DarkModeContext.Consumer>
      {value => {
        const {isDarkMode} = value
        return (
          <CardContainer to={`/videos/${id}`}>
            <CardLink to={`/videos/${id}`}>
              <CardThumb src={thumbUrl} alt="video thumbnail" />
              <CardTitle $mode={isDarkMode}>{title}</CardTitle>
              <ViewersCount>{viewCount} Watching Worldwide</ViewersCount>
            </CardLink>
          </CardContainer>
        )
      }}
    </DarkModeContext.Consumer>
  )
}

export default GameCard
