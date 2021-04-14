import React from 'react'
import { useStateValue } from './StateProvider'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import { Avatar } from '@material-ui/core'
function Header () {
  const [{user},dispatch] = useStateValue()
  // console.log('users displayname', user)
  return (
    <div className='header'>
      <div className='header_left'>
        <SearchIcon />
        <input type='text' placeholder='Search for Artists, Songs,' />
      </div>
      <div className='header_right'>
        <Avatar src={user?.images[0]?.url } alt='MN' />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  )
}
export default Header
