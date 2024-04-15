import styled from 'styled-components'

export const MainHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-width: 90vw;
  min-height: 90vh;
  font-family: 'Roboto';
  background-color: ${props => (props.$mode ? '#181818' : '#f1f1f1')};
  @media screen and (min-width: 767px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    min-width: 90vw;
    height: 80vh;
  }
`

export const VideoContainers = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  list-style-type: none;
  background-color: ${props => (props.$mode === true ? 'black' : '#f1f1f1')};
  margin: 0px;
  padding-left: 0px;

  @media screen and (min-width: 576px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
  }
`

export const PremiumContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 30vh;

  @media screen and (min-width: 767px) {
    width: 100%;
  }
`

export const PremiumItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 40%;
`

export const LogoImage = styled.img`
  width: 130px;
  height: 30px;
`

export const PremiumText = styled.p`
  font-size: 14px;
`

export const GetITButton = styled.button`
  background-color: transparent;
  border: 2px solid black;
  padding: 5px 10px 5px 10px;
  font-weight: 500;
  font-size: 14px;
`
export const CloseButton = styled.button`
  outline: none;
  background-color: transparent;
  cursor: pointer;
  border: 0px;
  align-self: flex-start;
`

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
  margin: 10px;
  background-color: ${props => (props.$mode ? 'black' : '#f1f1f1')};
  @media screen and (min-width: 567px) {
    width: 50%;
    align-self: flex-start;
    margin-left: 15px;
  }
`

export const SearchBar = styled.input`
  padding: 5px;
  width: 90%;
  border: solid 1px #94a3b8;
  color: ${props => (props.$mode ? 'white' : 'black')};
  background-color: ${props => (props.$mode ? 'black' : 'white')};
  @media and (min-width: 567px) {
    width: 70%;
  }
`

export const Search = styled.button`
  background-color: ${props => (props.$mode ? 'black' : 'white')};
  padding: 4px;
  border: solid 1px #94a3b8;
  width: 10%;
`

export const FetchErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 80vw;
  min-height: 83.5vh;
  padding: 10px;
  background-color: ${props => (props.$mode ? 'black' : 'white')};
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

export const NoResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 80vw;
  min-height: 83.5vh;
  padding: 10px;
  background-color: ${props => (props.$mode ? 'black' : 'white')};
`

export const NoResultImage = styled.img`
  width: 300px;
  height: 250px;
`

export const NoResultHead = styled.h1`
  font-weight: bold;
  font-size: 18px;
  color: ${props => (props.$mode ? 'white' : 'black')};
`

export const NoResultPara = styled.p`
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

export const SearchVideoContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 10vh;
  overflow: auto;
  background-color: ${props => (props.$mode === true ? 'black' : '#f1f1f1')};
  @media screen and (min-width: 767px) {
    width: 80vw;
    margin-left: 20vw;
  }

  @media screen and (min-width: 1200px) {
    width: 85vw;
    margin-left: 15vw;
  }
`
export const BaseContainer = styled.div`
  margin: 0px;
  padding: 0px;
  background-color: ${props => (props.$mode ? '#181818' : '#f9f9f9')};
`
