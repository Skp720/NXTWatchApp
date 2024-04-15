import styled from 'styled-components'
import {SiYoutubegaming} from 'react-icons/si'

export const MainGamingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-width: 100vw;
  min-height: 90vh;
  font-family: 'Roboto';
  background-color: ${props => (props.$mode ? '#0f0f0f' : '#f4f4f4')};

  @media screen and (min-width: 767px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    min-width: 90vw;
    height: 80vh;
  }
`

export const GamingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 10vh;
  width: 100%;
  @media screen and (min-width: 767px) {
    margin-left: 20vw;
  }
  @media screen and (min-width: 1200px) {
    margin-left: 15vw;
  }
`

export const GamingBanner = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  background-color: ${props => (props.$mode ? '#181818' : '#f4f4f4')};
`

export const GamingLogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 50%;
  background-color: ${props => (props.$mode ? 'Black' : '#e2e8f0')};
`

export const GameLogo = styled(SiYoutubegaming)`
  color: red;
  font-size: 50px;
`

export const GameHead = styled.h1`
  padding-left: 20px;
  font-size: 24px;
  color: ${props => (props.$mode ? 'white' : 'black')};
`

export const GameTabContainer = styled.ul`
  list-style-type: none;
  padding-left: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  background-color: ${props => (props.$mode ? 'black' : '#f1f1f1')};
  margin-top: 0px;
`
export const FetchErrorContainer = styled.div`
  align-self: center;
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding: 10px;
  background-color: ${props => (props.$mode ? 'black' : '#f1f1f1')};
  @media screen and (min-width: 767px) {
    width: 80vw;
    margin-left: 20vw;
  }

  @media screen and (min-width: 1200px) {
    width: 85vw;
    margin-left: 15vw;
  }
`

export const ErrorImage = styled.img`
  width: 300px;
  height: 250px;
`

export const ErrorHead = styled.h1`
  font-weight: bold;
  font-size: 18px;
  color: ${props => (props.$mode ? 'white' : 'black')};
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
