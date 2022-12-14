import Head from 'next/head'
import { useEffect, useState } from 'react';
import Playlist from '../components/common/Playlist';
import PlayerMusic from '../components/common/PlayerMusic';
import MainLayout from '../components/layout/main';
import Album from '../components/common/Album';
import { albums, playlists } from '../utils/mock';

export default function Home() {
    const [index, setIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [audio, setAudio] = useState(null);
    const [currentSong] = useState(playlists[index].src);
    const [mute, setMute] = useState(false);
    const [volume, setVolume] = useState(30);
    const [elapsed, setElapsed] = useState(0);
    const [duration, setDuration] = useState(0);

     const togglePlay = () => {
         setIsPlaying(!isPlaying);
     }

     useEffect(() => {
		setAudio(new Audio(currentSong));
	  }, []);
	
	  useEffect(() => {
		if(isPlaying) {
            audio?.play()
        }else {
            audio?.pause()
        }
	  }, [isPlaying]);

      useEffect(() => {
        if(audio){
            audio.volume = volume / 100;
        }

        if(isPlaying){
            setInterval(() => {
                const _duration = Math.floor(audio.duration);
                const _elapsed = Math.floor(audio.currentTime);

                setDuration(_duration);
                setElapsed(_elapsed);
            }, 100);
        }
    }, [
        volume, isPlaying
    ]);

    function formatTime(time) {
        if(time && !isNaN(time)){
            const minutes = Math.floor(time / 60) < 10 ? `0${Math.floor(time / 60)}` : Math.floor(time / 60);
            const seconds = Math.floor(time % 60) < 10 ? `0${Math.floor(time % 60)}` : Math.floor(time % 60);

            return `${minutes}:${seconds}`;
        }
        return '00:00';
    }

    const toggleSkipForward = () => {
        if(index >= playlists.length - 1) {
            setIndex(0);
            audio.src = playlists[0].src;
            audio.play();
        } else {
            setIndex(prev => prev + 1);
            audio.src = playlists[index + 1].src;
            audio.play();
        }
    }

    const toggleSkipBackward = () => {
        if(index > 0) {
            setIndex(prev => prev - 1);
            audio.src = playlists[index - 1].src;
            audio.play();
        }
    }

    const toggleForward = () => {
        audio.currentTime += 10;
    }

    const toggleBackward = () => {
        audio.currentTime -= 10;
    }

    const handleChooseSong = (index) => {
        setIndex(index);
        setIsPlaying(true);
        audio.src = playlists[index].src;
        audio.play();
    }

  return (
    <div>
        <Head>
            <title>Music Player App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <MainLayout>
            <div className='main-layout'>
                <Playlist 
                    playlists={playlists}
                    handleChooseSong={handleChooseSong}
                />
               <Album albums={albums}/>
            </div>
        </MainLayout>

        <PlayerMusic
                audio ={audio}
                mute={mute} 
                playlists={playlists} 
                toggleBackward={toggleBackward} 
                toggleSkipBackward={toggleSkipBackward} 
                togglePlay={togglePlay} 
                toggleForward={toggleForward} 
                toggleSkipForward={toggleSkipForward} 
                elapsed={elapsed} 
                duration={duration} 
                formatTime={formatTime}
                index={index}
                isPlaying={isPlaying}
        />
    </div>
  )
}
