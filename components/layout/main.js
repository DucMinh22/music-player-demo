import SideBarLeft from "../common/SideBarLeft";
import SideBarRight from "../common/SideBarRight";

const MainLayout = ({children}) => {
    return (
         <div className='wrapper'>
            <div className='row'>
                <SideBarLeft/>
                <div className='col-10 px-0'>
                    <SideBarRight/>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default MainLayout;
