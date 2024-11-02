import {HomePage} from "../../../presentation/pages/home/Page.tsx";
import DetailPage from "../../../presentation/pages/detail";
import {CategoryProduct} from "../../../presentation/components/home/category-product";
import {HomeLayout} from "../../../presentation/layout/home";

const routes = [
    {
        path: '/',
        element: <HomeLayout />,
        children: [
            {
                path: '/',
                element: <HomePage />,
            },
            {
                path: '/category/:id',
                element: <CategoryProduct/>
            },
        ]
    },
    {
        path: '/detail/:id',
        element: <DetailPage />,
    }
];

export default routes;