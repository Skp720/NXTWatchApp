import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const SidebarContainer = styled.div`
  display: none;
  background-color: ${props => (props.$mode === true ? '#212121' : 'white')};

  @media screen and (min-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    position: fixed;
    height: 90vh;
    max-width: 20vw;
    margin-top: 10vh;
  }

  @media screen and (min-width: 1200px) {
    max-width: 15vw;
  }
`

export const TopContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  padding: 0px 10px 0px 0px;
  text-decoration: none;
  @media screen and (min-width: 767px) {
    width: 20vw;
  }
  @media screen and (min-width: 1200px) {
    width: 15vw;
  }
`

export const RoutesContainer = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 0px;
  background-color: ${props => (props.$mode ? '#212121' : 'white')};
  @media screen and (min-width: 767px) {
    width: 20vw;
  }
  @media screen and (min-width: 1200px) {
    width: 15vw;
  }
`

export const RoutesLogo = styled.div`
  margin: 10px 20px 10px 20px;
`
export const RoutesText = styled.p`
  font-weight: 400;
  font-size: 16px;
  margin: 10px;
  color: ${props => (props.$mode === true ? 'white' : '#212121')};
  width: 100%;
`
export const BottomContainer = styled.div`
  width: 100%
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px;
    color: ${props => (props.$mode === true ? 'white' : '#1e293b')};
`
export const ContactHead = styled.p`
  font-weight: bold;
  width: 100%;
`

export const ContactLogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

export const LogoImage = styled.img`
  padding-right: 10px;
  height: 30px;
  width: 40px;
`

export const ContactGreet = styled(ContactHead)``

export const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 0px;
  @media screen and (min-width: 767px) {
    width: 20vw;
  }
  @media screen and (min-width: 1200px) {
    width: 15vw;
  }
`
