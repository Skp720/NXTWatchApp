import styled from 'styled-components'

export const MainNotfoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-width: 100vw;
  min-height: 100vh;
  font-family: 'Roboto';
  background-color: ${props => (props.$mode ? 'black' : 'white')};
  @media screen and (min-width: 767px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    min-width: 90vw;
    height: 80vh;
  }
`

export const NotFoundImgContainer = styled.div`
  min-height: 90vh;
  margin-top: 10vh;
  min-width: 90vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 767px) {
    margin-left: 10vw;
  }
`

export const NotFoundImage = styled.img`
  width: 300px;
  height: 300px;

  @media screen and (min-width: 1200px) {
    width: 450px;
    height: 400px;
  }
`

export const NotFoundHead = styled.h1`
  text-align: center;
  font-size: 22px;
  margin-bottom: 10px;
  color: ${props => (props.$mode ? 'white' : 'black')};
`

export const NotFoundPara = styled.p`
  font-size: 16px;
  color: #475569;
  margin-top: 0px;
  width: 50%;
  text-align: center;
`
