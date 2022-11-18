import { useRouter } from "next/router";
import Head from 'next/head'
import MainLayout from "../../components/layout/main";
import { albums } from "../../utils/mock";
import Image from "next/image";

const AlbumDetail = () => {
    const { query } = useRouter();
    const {albumId} = query
    const playListSongs = albums.find((album) => album.id === Number(albumId))
    if(!playListSongs) {
        return <div>Album Not found</div>
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
                    <h3>Album {playListSongs?.title}</h3>
                    <p>{playListSongs?.songs?.map((item, index) => {
                        return (
                            <div className="audio-song d-flex align-items-center py-3" key={index}>
                                <Image src={item.image} className='img-singer' alt="hmz" width={80} height={80}/>
                                <div className="px-3">
                                    <h6>{item.title}</h6>
                                    <p>{item.singer}</p>
                                </div>
                               
                            </div>
                        )
                    })}</p>
                </div>
            </MainLayout>
        </div>
    )
}

export default AlbumDetail;