import Image from 'next/image';

const Playlist = ({playlists, handleChooseSong}) => {
    return (
        <>
        <h3>Spotify Playlists</h3>
        <div className='row'>
            {playlists && playlists.length > 0 && playlists.map((song, index) => (
                <div className='col-2' key={index}>
                <div className='card-music' style={{ textAlign: 'center'}} onClick = {() => handleChooseSong(index)}>
                    <Image src={song.image} className='img-singer' alt="hmz" width={150} height={150}/>
                    <h6 className='pt-2'>{song.title}</h6>
                    <p>{song.singer}</p>
                </div>
                </div>
            ) )}
        </div>
    </>
    )
}

export default Playlist;