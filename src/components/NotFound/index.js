import {
  MainNotfoundContainer,
  NotFoundImage,
  NotFoundImgContainer,
  NotFoundHead,
  NotFoundPara,
} from './StyledComponents'
import Header from '../Header'
import Sidebar from '../Sidebar'
import DarkModeContext from '../../context/DarkModeContext'

const NotFound = () => (
  <DarkModeContext.Consumer>
    {value => {
      const {isDarkMode} = value
      return (
        <>
          <Header />
          <MainNotfoundContainer $mode={isDarkMode}>
            <Sidebar />
            <NotFoundImgContainer>
              <NotFoundImage
                src={
                  isDarkMode
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                }
                alt="not found"
              />
              <NotFoundHead $mode={isDarkMode}>Page Not Found</NotFoundHead>
              <NotFoundPara>
                We are sorry, the page you requested could not be found.
              </NotFoundPara>
            </NotFoundImgContainer>
          </MainNotfoundContainer>
        </>
      )
    }}
  </DarkModeContext.Consumer>
)
export default NotFound
