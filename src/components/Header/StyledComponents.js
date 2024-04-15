import styled from 'styled-components'
import {FiLogOut} from 'react-icons/fi'
import {Link} from 'react-router-dom'
import {IoCloseSharp} from 'react-icons/io5'

export const SmallLogOut = styled(FiLogOut)`
  display: flex;
  @media screen and (min-width: 576px) {
    display: none;
  }
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-width: 100vw;
  height: 10vh;
  padding: 10px;
  font-family: 'Roboto';
  position: fixed;
  background-color: ${props => (props.$mode === true ? '#212121' : 'white')};
`

export const LogoImage = styled.img`
  width: 100px;
  height: 25px;
  @media screen and (min-width: 767px) {
    width: 150px;
    height: 35px;
  }
`

export const HeaderButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 40%;
`

export const Button = styled.button`
  background-color: transparent;
  border-width: 0px;
  outline: none;
  outline: none;
  cursor: pointer;
`

export const ModeChangeButton = styled.button`
  display: flex;
  background-color: transparent;
  border-width: 0px;
  outline: none;
  outline: none;
  cursor: pointer;
`

export const PopupButton = styled.button`
  display: flex;
  background-color: transparent;
  border-width: 0px;
  outline: none;
  outline: none;
  cursor: pointer;
  @media screen and (min-width: 767px) {
    display: none;
  }
`

export const LogOutButton = styled.button`
  display: flex;
  background-color: transparent;
  border-width: 0px;
  outline: none;
  outline: none;
  cursor: pointer;
`

export const ProfileButton = styled.button`
  display: none;
  background-color: transparent;
  border-width: 0px;
  outline: none;
  outline: none;
  cursor: pointer;
  @media screen and (min-width: 767px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`

export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
`

export const LogOutLargeScreen = styled.button`
  display: none;
  background-color: transparent;
  border-width: 0px;
  outline: none;
  cursor: pointer;
  @media screen and (min-width: 576px) {
    display: flex;
    border: 2px solid #3b82f6;
    color: #3b82f6;
    border-radius: 5px;
    padding: 5px 15px 5px 15px;
    font-weight: bold;
  }
`

export const HomeScreenButton = styled.button`
  background-color: transparent;
  border-width: 0px;
  outline: none;
  outline: none;
  cursor: pointer;
`

export const LogoutPopupContainer = styled.div`
  text-align: center;
  border-radius: 5px;
  border-width: 0px;
  padding: 10px;
  width: 50vw;
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  border: solid 1px black;
  background-color: ${props => (props.$mode === true ? '#212121' : 'white')};

  @media screen and (min-width: 1200px) {
    width: 25vw;
    height: 30vh;
  }
`

export const LogoutWarning = styled.p`
  font-size: 18px;
  text-align: center;
  font-family: 'Roboto';
  color: ${props => (props.$mode === true ? 'white' : 'black')};
`

export const PopupButtonCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`

export const CloseButton = styled.button`
  border: 2px solid #3b82f6;
  color: #3b82f6;
  border-radius: 5px;
  padding: 5px 15px 5px 15px;
  font-weight: bold;
  background-color: white;
  cursor: pointer;
  outline: none;

  @media screen and (min-width: 1200px) {
    padding: 10px 20px 10px 20px;
  }
`

export const ActualLogoutButton = styled.button`
  border: 2px solid #3b82f6;
  color: white;
  border-radius: 5px;
  padding: 5px 15px 5px 15px;
  font-weight: bold;
  background-color: #3b82f6;
  cursor: pointer;
  outline: none;

  @media screen and (min-width: 1200px) {
    padding: 10px 20px 10px 20px;
  }
`
export const HamMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 100vw;
  background-color: ${props => (props.$mode === true ? '#212121' : 'white')}; ;
`

export const TopContainer = styled.ul`
    width: 100%
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    padding: 0px 10px 0px 0px;
    text-decoration: none;
    list-style-type: none;
`

export const RoutesContainer = styled.li`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 0px;
  background-color: ${props => (props.$mode ? '#212121' : 'white')};
`

export const RoutesLogo = styled.div`
  margin: 20px 20px 10px 20px;
`
export const RoutesText = styled.p`
  font-weight: 400;
  font-size: 16px;
  margin: 10px;
  color: ${props => (props.$mode === true ? 'white' : '#212121')};
`

export const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 0px;
`

export const CancelButton = styled.button`
  border-width: 0px;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  align-self: flex-end;
  margin-right: 10px;
`
export const CloseIcon = styled(IoCloseSharp)`
  color: ${props => (props.$mode ? 'white' : 'black')};
`
