import { PauseFill, PlayFill, SkipBackwardFill,SkipForwardFill, SkipEndFill, SkipStartFill  } from 'react-bootstrap-icons';
const PlayerMusic = ({audio, mute, playlists, index, toggleBackward, toggleSkipBackward, togglePlay, isPlaying, toggleForward, toggleSkipForward, elapsed, duration, formatTime}) => {
    return (
        <div className='player'>
        <audio src={audio}  muted={mute} />
        <div className='row align-content-center' style={{height: '100%'}}>
            <div className='col-2 px-4'>
                <h6>{playlists[index].title}</h6>
                <p>{playlists[index].singer}</p>
            </div>
            <div className='col-9'>
                <div className='d-flex justify-content-center align-content-center'>
                    <div className='px-2'> 
                        <SkipStartFill size={25} style={{ cursor: 'pointer'}}  onClick={toggleSkipBackward}/>
                    </div>
                    <div className='px-2'> 
                        <SkipBackwardFill size={25} style={{ cursor: 'pointer'}} onClick={toggleBackward}/>
                    </div>
                    <div className='px-2' style={{ cursor: 'pointer'}}>{!isPlaying ?  <PlayFill size={25} onClick={togglePlay}/> :  <PauseFill size={25} onClick={togglePlay}/>}</div>
                    <div className='px-2'> <SkipForwardFill size={25} style={{ cursor: 'pointer'}} onClick={toggleForward}/></div>
                    <div className='px-2'> <SkipEndFill size={25} style={{ cursor: 'pointer'}} onClick={toggleSkipForward}/></div>
                </div>
                <div>
                <input type="range" value={elapsed} max={duration} className='audio' id="volume" name="volume" min="0" />
                <div className='d-flex align-content-center justify-content-between'>
                    <div>{formatTime(elapsed)}</div>
                    <div>{formatTime(duration - elapsed)}</div>
                </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default PlayerMusic;