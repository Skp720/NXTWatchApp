import React from 'react'

const DarkModeContext = React.createContext({
  isDarkMode: false,
  changeMode: () => {},
  activePage: 'HOME',
  changePage: () => {},
  savedVideos: [],
  saveUnSaveVideo: () => {},
  isSaved: false,
  like: () => {},
  isLiked: false,
  dislike: () => {},
  isDisLiked: false,
  savedListId: {},
  likedVideos: {},
  disLikedVideos: {},
})

export default DarkModeContext
