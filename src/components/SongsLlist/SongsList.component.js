import { songsList } from '../../constants';

export function SongsList() {
  console.log('songsList = ', songsList)
  return (
    <>
      <h1>Songs List</h1>
      <p>Click to choose a song to play</p>
        {songsList.map(song => (
          <p>{song.author} - {song.title}</p>
        ))}
    </>
  )
} 