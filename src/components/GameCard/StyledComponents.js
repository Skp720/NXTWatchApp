import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const CardContainer = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 10px;
  cursor: pointer;
`
export const CardThumb = styled.img`
  width: 200px;
  height: 250px;

  @media screen and (min-width: 767px) {
    height: 300px;
    width: 250px;
  }
`

export const CardTitle = styled.p`
  font-weight: bold;
  font-size: 14px;
  margin-top: 5px;
  margin-bottom: 5px;
  text-decoration: none;
  color: ${props => (props.$mode ? 'White' : 'Black')};
`

export const ViewersCount = styled.p`
  font-size: 14px;
  margin-top: 0px;
  color: #94a3b8;
  font-weight: 400;
  text-decoration: none;
`

export const CardLink = styled(Link)`
  text-decoration: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 10px;
  cursor: pointer;
`
