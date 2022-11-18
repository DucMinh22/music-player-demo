import Image from 'next/image';
import { useRouter } from 'next/router';

const Album = ({albums}) => {
    const router = useRouter();
    const handleNavigateDetail = (albumId) => {
        router.push(
            {
                pathname: '/albums/[albumId]', 
                query: {
                    albumId: albumId
                }
            }
        )
    }
    return (
        <>
            <h3>Album</h3>
            <div className='row'>
                {albums && albums.length > 0 && albums.map((album, index) => (
                    <div className='col-2' key={index}>
                        <div className='card-music' style={{ textAlign: 'center'}} onClick = {() => handleNavigateDetail(album.id)}>
                            <Image src={album.image} className='img-singer' alt="hmz" width={150} height={150}/>
                            <h6 className='pt-2'>{album.title}</h6>
                            <p>{album.singer}</p>
                        </div>
                    </div>
                    ) )}
            </div>
        </>
    )
}

export default Album; 