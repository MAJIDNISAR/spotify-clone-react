import React from 'react'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious'
import SkipNextIcon from '@material-ui/icons/SkipNext'
import ShuffleIcon from '@material-ui/icons/Shuffle'
import RepeatIcon from '@material-ui/icons/Repeat'
// import { Grid, Slider } from 'material-ui-/core'
import { Grid, Slider } from '@material-ui/core'
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay'
import VolumeDownIcon from '@material-ui/icons/VolumeDown'
import './Footer.css'
function Footer () {
  return (
    <div className='footer'>
      <div className='footer_left'>
        <img classname='footer_albumLogo' src='https://i.scdn.co/image/ab67616d00004851003a373709f4dd026c4b0918' alt='' />
        <div className='footer_songInfo'>
          <h4 className='nowplaying_track_link'> Where are you!
          </h4>
          <p className='nowplaying_artist'>Otnicka</p>
        </div>
      </div>
      <div className='footer_center'>
        <ShuffleIcon className='footer_green' />
        <SkipPreviousIcon className='footer_icon' />
        <PlayCircleOutlineIcon className='footer_icon' />
        <SkipNextIcon className='footer_icon' />
        <RepeatIcon className='footer_green' />
      </div>
      <div className='footer_right'>
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby='continuous-slider' />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Footer
