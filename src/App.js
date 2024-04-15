import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import LoginPage from './components/LoginPage'
import Home from './components/Home'
import ProtectedRoutes from './components/ProtectedRoutes'
import Trending from './components/Trending'
import NotFound from './components/NotFound'
import Gaming from './components/Gaming'
import Saved from './components/Saved'
import FullScreenVideo from './components/FullScreenVideo'
import DarkModeContext from './context/DarkModeContext'
import './App.css'

class App extends Component {
  state = {
    isDarkMode: false,
    activePage: 'HOME',
    savedVideo: [],
    isSaved: false,
    isLiked: false,
    isDisLiked: false,
    savedListId: [],
    likedVideos: [],
    disLikedVideos: [],
  }

  like = id => {
    const {likedVideos, disLikedVideos} = this.state
    const tempLiked = likedVideos
    const tempDisliked = disLikedVideos
    let tempIndex

    if (disLikedVideos.includes(id)) {
      let test
      disLikedVideos.forEach((index, value) => {
        if (value === id) {
          test = index
        }
      })
      tempDisliked.splice(test, 1)
      this.setState({disLikedVideos: tempDisliked})
    }

    if (disLikedVideos.includes(id)) {
      disLikedVideos.forEach((index, value) => {
        if (value === id) {
          tempDisliked.splice(index, 1)
        }
      })
      this.setState({disLikedVideos: tempDisliked})
    }

    if (tempLiked.includes(id) === false) {
      tempLiked.push(id)
      this.setState(prevVal => ({
        isLiked: !prevVal.isLiked,
        isDisLiked: false,
        likedVideos: tempLiked,
      }))
    } else {
      tempLiked.forEach((index, value) => {
        if (value === id) {
          tempIndex = index
        }
        tempLiked.splice(tempIndex, 1)
        this.setState(prevVal => ({
          isLiked: !prevVal.isLiked,
          isDisLiked: false,
          likedVideos: tempLiked,
        }))
      })
    }
    console.log(tempLiked)
  }

  dislike = id => {
    this.setState(prevVal => ({
      isDisLiked: !prevVal.isDisLiked,
      isLiked: false,
    }))
    let tempIndex

    const {disLikedVideos, likedVideos} = this.state
    const tempDisLiked = disLikedVideos
    const tempLiked = likedVideos

    if (likedVideos.includes(id)) {
      let test
      likedVideos.forEach((index, value) => {
        if (value === id) {
          test = index
        }
      })
      tempLiked.splice(test, 1)
      this.setState({likedVideos: tempLiked})
    }

    console.log(tempLiked)

    if (tempDisLiked.includes(id) === false) {
      tempDisLiked.push(id)
      this.setState(prevVal => ({
        isDisLiked: !prevVal.isDisLiked,
        isLiked: false,
        disLikedVideos: tempDisLiked,
      }))
    } else {
      tempDisLiked.forEach((index, value) => {
        if (value === id) {
          tempIndex = index
        }
        tempDisLiked.splice(tempIndex, 1)
        this.setState(prevVal => ({
          isLiked: !prevVal.isLiked,
          isDisLiked: false,
          disLikedVideos: tempDisLiked,
        }))
      })
    }
  }

  changeMode = () => {
    this.setState(prevVal => ({
      isDarkMode: !prevVal.isDarkMode,
    }))
  }

  changePage = pageName => {
    this.setState({activePage: pageName})
  }

  saveUnSaveVideo = videoData => {
    const {savedVideo, savedListId} = this.state
    const tempData = savedVideo
    const tempSavedList = savedListId
    let count = 0
    let deleteIndex
    let deleteIndex2

    savedVideo.forEach((item, index) => {
      if (item.data.id === videoData.data.id) {
        count += 1
        deleteIndex = index
      }
    })

    savedListId.forEach((item, index) => {
      if (item === videoData.data.id) {
        deleteIndex2 = index
      }
    })

    if (savedVideo.length === 0) {
      tempData.push(videoData)
      tempSavedList.push(videoData.data.id)
      this.setState({savedVideo: tempData, savedListId: tempSavedList})
    } else if (count > 0) {
      tempData.splice(deleteIndex, 1)
      tempSavedList.splice(deleteIndex2, 1)
      this.setState({savedVideo: tempData, savedListId: tempSavedList})
    } else {
      tempData.push(videoData)
      tempSavedList.push(videoData.data.id)
      this.setState({savedVideo: tempData, savedListId: tempSavedList})
    }

    this.setState(prevVal => ({isSaved: !prevVal.isSaved}))
  }

  render() {
    const {
      isDarkMode,
      activePage,
      savedVideo,
      isSaved,
      isLiked,
      isDisLiked,
      savedListId,
      likedVideos,
      disLikedVideos,
    } = this.state

    return (
      <DarkModeContext.Provider
        value={{
          isDarkMode,
          changeMode: this.changeMode,
          activePage,
          changePage: this.changePage,
          savedVideo,
          saveUnSaveVideo: this.saveUnSaveVideo,
          isSaved,
          like: this.like,
          isLiked,
          dislike: this.dislike,
          isDisLiked,
          savedListId,
          likedVideos,
          disLikedVideos,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <ProtectedRoutes exact path="/" component={Home} />
          <ProtectedRoutes exact path="/trending" component={Trending} />
          <ProtectedRoutes exact path="/gaming" component={Gaming} />
          <ProtectedRoutes path="/videos/:id" component={FullScreenVideo} />
          <ProtectedRoutes path="/saved-videos" component={Saved} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </DarkModeContext.Provider>
    )
  }
}

export default App
