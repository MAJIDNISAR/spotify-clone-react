import React, { useEffect, useState } from 'react'
import Player from './Player'
import './App.css'
import Login from './Login'
import { useStateValue } from './StateProvider'
import SpotifyWebAPI from 'spotify-web-api-js'
import { getTokenFromURL } from './spotify'
const spotify = new SpotifyWebAPI()
// console.log(spotify)
function App () {
  // const [token, setToken] = useState(null)
  const [{ user, token }, dispatch] = useStateValue()
  useEffect(() => {
    // run code based on a given condition, it always a function
    const hash = getTokenFromURL()
    window.location.hash = ''
    // console.log('I Have a token :', hash)
    const _token = hash.access_token

    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })
      // dispatch({
      //   type: 'SET_SPOTIFY',
      //   spotify: spotify
      // })
      spotify.setAccessToken(_token)
      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user
        })
        // console.log('🙋User=========================================', user)
        // console.log('🎵PlayLists====================================', spotify.playlists())
      })
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists
        })
        // console.log(playlists.items)
      })
    }
    // the function /code to run here
    // if we need it to run only once at the loading use [] for input
  }, []) // use [] to run only once or use multiple variables which will be monitored for change
  /**
   * console.log('=============================token from StateProvider / data layer=============================')
  console.table(token)
  console.log('=============================token from StateProvider / data layer=============================')
  console.log('=============================User from StateProvider / data layer=============================')
  console.table(user)
  console.log('=============================User from StateProvider / data layer=============================')
   */
  // console.log('🎵', spotify) // user data layer/ statemanagement
  return (
    <div className='app'>
      {/* <h1>Hello World! We are building a Spotify Clone !!!🚀 </h1> */}
      {token
        ? (
          <Player />
        ) : (
          <Login />
        )}
    </div>
  )
}

export default App
