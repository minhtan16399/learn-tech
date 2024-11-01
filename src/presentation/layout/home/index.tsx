import InlineMenu from "../../components/home/menu";
import {Outlet} from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import {LoadingPage} from "../../pages/loading";
import {NotFoundPage} from "../../pages/404";

export const HomeLayout = () => {
    const {data, loading, error} = useAxios('https://dummyjson.com/products','GET');
    if (loading) {
        return <LoadingPage/>
    }
    if (error) {
        return <NotFoundPage/>
    }

    return (
        <div className={'container mx-auto py-8 p-2 lg:flex gap-5'}>
            {data ? <div className={''}>
                <InlineMenu />
            </div> : null}
            <div className={''}>
                <Outlet context={{data}}/>
            </div>
        </div>
    )
}