import {HomePage} from "../../../presentation/pages/home/HomePage.tsx";
import DetailPage from "../../../presentation/pages/detail/DetailPage.tsx";
import {CategoryProduct} from "../../../presentation/pages/home/widgets/CategoryProduct.tsx";
import {HomeLayout} from "../../../presentation/layout/HomeLayout.tsx";
import {ROUTERS} from "./router.config.ts";

const routes = [
    {
        path: ROUTERS.HOME,
        element: <HomeLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: `${(ROUTERS.CATEGORY)}/:id`,
                element: <CategoryProduct/>
            },
        ]
    },
    {
        path: `${ROUTERS.PRODUCT_DETAIL}/:id`,
        element: <DetailPage />,
    }
];

export default routes;