import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import {withRouter} from 'react-router-dom'

import DarkModeContext from '../../context/DarkModeContext'
import {
  SidebarContainer,
  TopContainer,
  BottomContainer,
  RoutesContainer,
  RoutesLogo,
  RoutesText,
  ContactHead,
  ContactLogoContainer,
  LogoImage,
  ContactGreet,
  NavLink,
} from './StyledComponents'

const Sidebar = () => (
  <DarkModeContext.Consumer>
    {value => {
      const {isDarkMode, changePage, activePage} = value

      const onClickChangePage = page => {
        changePage(page)
      }
      let homeActive
      let trendActive
      let gameActive
      let savedActive

      switch (activePage) {
        case 'HOME': {
          homeActive = true
          trendActive = false
          gameActive = false
          savedActive = false
          break
        }
        case 'TRENDING': {
          trendActive = true
          homeActive = false
          gameActive = false
          savedActive = false
          break
        }
        case 'GAMING': {
          gameActive = true
          trendActive = false
          homeActive = false
          savedActive = false
          break
        }
        case 'SAVED': {
          savedActive = true
          gameActive = false
          trendActive = false
          homeActive = false
          break
        }
        default: {
          savedActive = false
          gameActive = false
          trendActive = false
          homeActive = false
          break
        }
      }

      return (
        <SidebarContainer $mode={isDarkMode}>
          <TopContainer>
            <RoutesContainer $active={homeActive} $mode={isDarkMode}>
              <NavLink
                to="/"
                onClick={() => onClickChangePage('HOME')}
                data-testid="home"
                $active={homeActive}
              >
                <RoutesLogo>
                  <AiFillHome
                    size={18}
                    color={homeActive ? 'red' : '#475569'}
                  />
                </RoutesLogo>
                <RoutesText $mode={isDarkMode}>Home</RoutesText>
              </NavLink>
            </RoutesContainer>
            <RoutesContainer $active={trendActive} $mode={isDarkMode}>
              <NavLink
                to="/trending"
                onClick={() => onClickChangePage('TRENDING')}
                data-testid="trending"
                $active={trendActive}
              >
                <RoutesLogo>
                  <HiFire size={18} color={trendActive ? 'red' : '#475569'} />
                </RoutesLogo>
                <RoutesText $mode={isDarkMode}>Trending</RoutesText>
              </NavLink>
            </RoutesContainer>
            <RoutesContainer $active={gameActive} $mode={isDarkMode}>
              <NavLink
                to="/gaming"
                onClick={() => onClickChangePage('GAMING')}
                data-testid="gaming"
                $active={gameActive}
              >
                <RoutesLogo>
                  <SiYoutubegaming
                    size={18}
                    color={gameActive ? 'red' : '#475569'}
                  />
                </RoutesLogo>
                <RoutesText $mode={isDarkMode}>Gaming</RoutesText>
              </NavLink>
            </RoutesContainer>
            <RoutesContainer $active={savedActive} $mode={isDarkMode}>
              <NavLink
                to="/saved-videos"
                onClick={() => onClickChangePage('SAVED')}
                data-testid="saved"
                $active={savedActive}
              >
                <RoutesLogo>
                  <MdPlaylistAdd
                    size={18}
                    color={savedActive ? 'red' : '#475569'}
                  />
                </RoutesLogo>
                <RoutesText $mode={isDarkMode}>Saved videos</RoutesText>
              </NavLink>
            </RoutesContainer>
          </TopContainer>
          <BottomContainer $mode={isDarkMode}>
            <ContactHead>CONTACT US</ContactHead>
            <ContactLogoContainer>
              <LogoImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <LogoImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <LogoImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </ContactLogoContainer>
            <ContactGreet>
              Enjoy! Now to see your channels and recommendations!
            </ContactGreet>
          </BottomContainer>
        </SidebarContainer>
      )
    }}
  </DarkModeContext.Consumer>
)

export default withRouter(Sidebar)
