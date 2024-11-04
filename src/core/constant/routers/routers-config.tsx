import {HomePage} from "../../../presentation/pages/home/Page.tsx";
import DetailPage from "../../../presentation/pages/detail/Page.tsx";
import {CategoryProduct} from "../../../presentation/pages/home/widgets/category-product";
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