import { ChevronRight, ChevronLeft} from 'react-bootstrap-icons';
const SideBarRight = () => {
    return (
<       div className='d-flex right-side-bar justify-content-between align-items-center'>
            <div className='px-4'>
                <ChevronLeft size={25}/>
                <ChevronRight size={25}/>
            </div>
            <div className='d-flex sign-in align-items-center'>
                <div className='px-5'> Sign Up </div>
                <div className='btn-sign-in'> Sign In </div>
            </div>
        </div>
    )
}

export default SideBarRight;