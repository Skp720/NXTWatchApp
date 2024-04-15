import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoCard = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 15px;
  text-decoration: none;
  @media screen and (min-width: 576px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
`

export const VideoThumbnail = styled.img`
  width: 100%;
  @media screen and (min-width: 576px) {
    width: 50%;
  }
`

export const VideoDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding: 10px 0px 5px 0px;
  @media screen and (min-width: 576px) {
    padding-left: 20px;
    align-self: flex-start;
  }
`

export const ChannelLogo = styled.img`
  height: 30px;
  width: 30px;
  margin: 0px 5px 0px 5px;
  @media screen and (min-width: 576px) {
    display: none;
  }
`

export const StatContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`

export const VideoName = styled.p`
  display: flex;
  font-weight: 500;
  font-size: 14px;
  margin: 0px 0px 5px 0px;
  color: ${props => (props.$mode === true ? 'white' : '#383838')};
  @media screen and (min-width: 576px) {
    font-size: 20px;
    padding-top: 0px;
  }
`

export const VideoStats = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 0px;
`

export const ChannelNameLg = styled.p`
  display: none;
  @media screen and (min-width: 576px) {
    display: flex;
    font-size: 14px;
    margin: 0px 5px 0px 0px;
    color: #616e7c;
    font-weight: 500;
    margin-bottom: 5px;
  }
`

export const StatItem = styled.p`
  font-size: 14px;
  margin: 0px 5px 0px 0px;
  color: #616e7c;
  font-weight: 500;
  font-weight: 14px;
`

export const ChannelNameSm = styled(StatItem)`
  display: flex;
  @media screen and (min-width: 576px) {
    display: none;
  }
`

export const VideoContainer = styled.li`
  list-style-type: none;
`
