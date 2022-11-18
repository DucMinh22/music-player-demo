import Image from 'next/image';
import { HouseDoorFill, Search, ClipboardHeart} from 'react-bootstrap-icons';

const SideBarLeft = () => {
    return (
        <div className='col-2 left-side-bar'>
        <div className='left-menu'>
            <Image src="/images/Spotify_Logo.png" alt="Spotify Logo" unoptimized width={140} height={40}/>
            <ul>
                <li>
                    <div className='d-flex align-items-center active'>
                        <HouseDoorFill size={20}/>
                        <div className='px-2'>Home</div>
                    </div>
                </li>
                <li>
                    <div className='d-flex align-items-center'>
                        <Search size={20}/>
                        <div className='px-2'>Search</div>
                    </div>
                </li>
                <li>
                    <div className='d-flex align-items-center'>
                        <ClipboardHeart size={20}/>
                        <div className='px-2'>Your Library</div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    )
}

export default SideBarLeft;