import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 100vw;
  font-family: 'Roboto';
  background-color: ${props => (props.$mode ? '#212121' : ' white')};
`

export const AppLogo = styled.img`
  width: 120px;
  height: 25px;
  margin: 15px;

  @media screen and (min-width: 1200px) {
    width: 150px;
    height: 35px;
  }
`

export const LoginCard = styled.form`
  border-radius: 5px;
  box-shadow: ${props => (props.$mode ? 'none' : '1px 1px 10px 1px #94a3b8')};
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  background-color: ${props => (props.$mode ? 'black' : ' white')};

  @media screen and (min-width: 1200px) {
    width: 35%;
    padding: 20px;
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 10px 0px 10px 0px;
  width: 100%;
`

export const InputLabel = styled.label`
  font-size: 14px;
  color: ${props => (props.$mode ? 'white' : '#616e7c')};
  width: 100%;
  font-weight: bold;
  margin-bottom: 5px;
`

export const InputElement = styled.input`
  padding: 10px;
  border-radius: 2px;
  border: 1px solid #616e7c;
  width: 100%;
  color: #616e7c;
  font-size: 16px;
  background-color: transparent;
`
export const ShowPassContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`
export const CheckBox = styled.input`
  height: 16px;
`

export const ShowPassText = styled.label`
  font-size: 16px;
  color: ${props => (props.$mode ? 'white' : '#616e7c')};
`

export const LoginButton = styled.button`
  padding: 10px 5px 10px 5px;
  color: #ffffff;
  font-weight: bold;
  background-color: #3b82f6;
  border-radius: 3px;
  border-width: 0px;
  align-self: center;
  width: 100%;
  font-weight: bold;
  margin: 15px 15px 0px 15px;
  outline: none;
  cursor: pointer;
`

export const ErrorText = styled.p`
  color: red;
  font-size: 12px;
  margin-top: 0px;
  align-self: flex-start;
`
