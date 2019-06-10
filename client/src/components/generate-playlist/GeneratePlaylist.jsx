import React, { useState } from 'react'
import PlaylistForm from './PlaylistForm'
import SeedGenres from './SeedGenres'
import SeedArtistForm from './SeedArtistForm'
import SelectedSeeds from './SelectedSeeds'
import Card from '../common/Card'
import './styles.css'
import '../common/responsive.css'

const renderPlaylist = (playlist) => {
  if(playlist && playlist.length > 0) {
    return playlist.map(track => {
      return <div key={track.name+track.artists[0].name}>{track.name} - {track.artists[0].name}</div>
    })
  }
}

export default () => {
  const [state, setState] = useState({
    playlistType: 'genre',
    seeds: [],
    playlist: [],
  })

  return (
    <div className='row'>
      <div className='col-12 col-s-12'>
        <PlaylistForm state={state} setState={setState} />
      </div>
      <div className='col-4 col-s-6'>
        {
          state.playlistType === 'artist'
          ? <SeedArtistForm state={state} setState={setState} />
          : <SeedGenres state={state} setState={setState} />
        }
      </div>
      <div className='col-4 col-s-6'>
        <SelectedSeeds state={state} setState={setState} />
      </div>
      <div className='col-4 col-s-12'>
        <Card title='Playlist' content={renderPlaylist(state.playlist)} />
      </div>
    </div>
  )
}
