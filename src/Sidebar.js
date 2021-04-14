import React from 'react'
import { useStateValue } from './StateProvider'
import './Sidebar.css'
import SidebarOption from './SidebarOption'
import SearchIcon from '@material-ui/icons/Search'
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic'
import HomeIcon from '@material-ui/icons/Home'
function Sidebar () {
  const [{user, token, playlists }, dispatch] = useStateValue()
  console.log('from state 🎵',playlists)
  return (
    <div className='sidebar'>
      <img
        className='sidebar_logo'
        src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg' alt='Logo'
      />
      <SidebarOption
        Icon={HomeIcon}
        title='Home'
      />
      <SidebarOption
        Icon={SearchIcon}
        title='Search'
      />
      <SidebarOption
        Icon={LibraryMusicIcon}
        title='Your Library'
      />
      <br />
      <strong className='sidebar_title'> PLAYLISTS</strong>
      <hr />
      {
        token&&user&&playlists?.items?.map(playlist=>(
           <SidebarOption
           key={playlist.id}
        title={playlist.name}
      />
        ))
      }
      {/* <SidebarOption
        title='Hip Hop'
      />
      <SidebarOption
        title='Bollywood Dance Mix'
      /> */}
    </div>
  )
}
export default Sidebar
