import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {FaMoon} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import {IoSunny} from 'react-icons/io5'
import DarkModeContext from '../../context/DarkModeContext'
import {
  HeaderContainer,
  LogoImage,
  HeaderButtons,
  ModeChangeButton,
  PopupButton,
  ProfileButton,
  ProfileImage,
  LogOutLargeScreen,
  HomeScreenButton,
  LogoutPopupContainer,
  LogoutWarning,
  ActualLogoutButton,
  PopupButtonCont,
  CloseButton,
  HamMenuContainer,
  TopContainer,
  NavLink,
  RoutesContainer,
  RoutesLogo,
  RoutesText,
  SmallLogOut,
  CancelButton,
  CloseIcon,
} from './StyledComponents'

const Header = props => (
  <DarkModeContext.Consumer>
    {value => {
      const {isDarkMode, changeMode, changePage, activePage} = value

      const onClickChangeMode = () => {
        changeMode()
      }

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

      const logout = () => {
        Cookies.remove('jwt_token')
        const {history} = props
        history.replace('/login')
      }

      const logoutPopup = () => (
        <Popup
          trigger={
            <SmallLogOut size={25} color={isDarkMode ? 'white' : 'black'} />
          }
          modal
          nested
          position="center"
        >
          {close => (
            <LogoutPopupContainer $mode={isDarkMode}>
              <LogoutWarning $mode={isDarkMode}>
                Are you sure, you want to logout
              </LogoutWarning>
              <PopupButtonCont>
                <CloseButton
                  onClick={() => {
                    close()
                  }}
                >
                  Cancel
                </CloseButton>
                <ActualLogoutButton onClick={logout}>
                  Confirm
                </ActualLogoutButton>
              </PopupButtonCont>
            </LogoutPopupContainer>
          )}
        </Popup>
      )

      const logoutPopup2 = () => (
        <Popup
          trigger={<LogOutLargeScreen>Logout</LogOutLargeScreen>}
          modal
          position="center"
        >
          {close => (
            <LogoutPopupContainer $mode={isDarkMode}>
              <LogoutWarning $mode={isDarkMode}>
                Are you sure, you want to logout
              </LogoutWarning>
              <PopupButtonCont>
                <CloseButton
                  onClick={() => {
                    console.log('modal closed ')
                    close()
                  }}
                >
                  Cancel
                </CloseButton>
                <ActualLogoutButton onClick={logout}>
                  Confirm
                </ActualLogoutButton>
              </PopupButtonCont>
            </LogoutPopupContainer>
          )}
        </Popup>
      )

      const menuPopup = () => (
        <Popup
          trigger={
            <PopupButton>
              <GiHamburgerMenu
                size={25}
                color={isDarkMode ? 'white' : 'black'}
              />
            </PopupButton>
          }
          modal
          nested
          position="center"
        >
          {close => (
            <HamMenuContainer $mode={isDarkMode}>
              <CancelButton
                onClick={() => {
                  close()
                }}
                type="button"
              >
                <CloseIcon $mode={isDarkMode} size={30} />
              </CancelButton>
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
                <RoutesContainer $active={homeActive} $mode={isDarkMode}>
                  <NavLink
                    to="/trending"
                    onClick={() => onClickChangePage('TRENDING')}
                    data-testid="trending"
                    $active={trendActive}
                  >
                    <RoutesLogo>
                      <HiFire
                        size={18}
                        color={trendActive ? 'red' : '#475569'}
                      />
                    </RoutesLogo>
                    <RoutesText $mode={isDarkMode}>Trending</RoutesText>
                  </NavLink>
                </RoutesContainer>
                <RoutesContainer $active={homeActive} $mode={isDarkMode}>
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
                <RoutesContainer $active={homeActive} $mode={isDarkMode}>
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
                    <RoutesText $mode={isDarkMode}>Saved</RoutesText>
                  </NavLink>
                </RoutesContainer>
              </TopContainer>
            </HamMenuContainer>
          )}
        </Popup>
      )

      return (
        <HeaderContainer $mode={isDarkMode}>
          <HomeScreenButton>
            <Link to="/">
              <LogoImage
                src={
                  isDarkMode
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                }
                alt="website logo"
              />
            </Link>
          </HomeScreenButton>
          <HeaderButtons>
            <ModeChangeButton onClick={onClickChangeMode} data-testid="theme">
              {isDarkMode ? (
                <IoSunny color="white" size={25} />
              ) : (
                <FaMoon size={25} />
              )}
            </ModeChangeButton>
            {menuPopup()}
            <ProfileButton>
              <ProfileImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
            </ProfileButton>
            {logoutPopup()} {logoutPopup2()}
          </HeaderButtons>
        </HeaderContainer>
      )
    }}
  </DarkModeContext.Consumer>
)

export default withRouter(Header)
