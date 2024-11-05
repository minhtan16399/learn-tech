import InlineMenu from "../pages/home/widgets/Menu.tsx";
import {Outlet} from "react-router-dom";

export const HomeLayout = () => {

    return (
        <div className='container mx-auto py-8 p-2 lg:flex gap-5'>
            <div>
                <InlineMenu />
            </div>
            <div className='w-full'>
                <Outlet />
            </div>
        </div>
    )
}