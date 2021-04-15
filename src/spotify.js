import dotenv from 'dotenv'
dotenv.config()
let redirectURI
// import env from "react-dotenv";
// console.log(process.env.REACT_APP_Client_ID)
switch (process.env.NODE_ENV) {
  case 'web':
    redirectURI = process.env.REACT_APP_WEB_REDIRECT_URL
    break
  case 'local':
    redirectURI = redirectURI = 'http://localhost:3000/'
    break
  default:
    redirectURI = 'http://localhost:3000/'
    break
}
export const authEndPoint = 'https://accounts.spotify.com/authorize'
// const redirectURI = 'http://localhost:3000/'
// console.log(process.env.REACT_APP_ClientID)
const ClientID = process.env.REACT_APP_Client_ID
// console.log(ClientID)
const scopes = [
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-read-playback-state',
  'user-top-read',
  'user-modify-playback-state'
]
export const getTokenFromURL = () => {
  return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
      const parts = item.split('=')
      initial[parts[0]] = decodeURIComponent(parts[1])
      // console.log('=====initial====')
      // console.log(initial)
      // console.log('=====initial====')
      return initial
    }, {})
}
export const loginURL = `${authEndPoint}?client_id=${ClientID}&redirect_uri=${redirectURI}&scope=${scopes.join(
  '%20'
)}&response_type=token&show_dialog=true`
// BQCTtDrHmv3CJy0mr5C1po2IvT3mpbE9vm2cmUYtwD3YuWNZ3qLG6uJDGgwNpa8wv-RvWrRLOoq_mF3GyGRQMGaXXKVHM1Q6Z0_wB6rVgrdgvQjc7XoiPMVh19Bwoq2KBTR-dS663eip6VsJcczZZWenPIxA&token_type=Bearer&expires_in=3600
