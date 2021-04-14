export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  spotify: null,
  // token: null // for debuging purpose we are using the bllow line to avoid login every time
  token: 'BQCmCbCSsBfc3UBTpkRHIB9xIBSQlFHdFrf1iwP8xRyQh2C2Zop8sqrRFHarsVmh1YBTvSYzLL0b0rR0VbTbFtaDTgiFNo3Gd9JGLFoAEexHa76KFhO4NU-tUOYFd1nanBuQ4R0_UCcn9eqLF0AGJsitBRKM'
}
const reducer = (state, action) => {
  // console.log('===============state Listening reducer===============')
  // console.table(state, action)
  // console.log('===============state reducer ===============')
  // console.log(action)
  // Action -> type ,[payload]
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user
      }
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token
      }
    case 'SET_SPOTIFY':
      return {
        ...state,
        spotify: action.spotify
      }
    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists
      }
    default:
      return state
  }
}
export default reducer
