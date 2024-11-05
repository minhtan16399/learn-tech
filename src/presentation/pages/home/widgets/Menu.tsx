import {NavLink} from "react-router-dom";
import queryString from "query-string";
import {ROUTERS} from "../../../../core/constant/routers/router.config.ts";

const InlineMenu = () => {
    const list = [
        {
            id: 0,
            name: 'all products'
        },
        {
            id: 1,
            name: 'beauty'
        },
        {
            id: 2,
            name: 'fragrances'
        },
        {
            id: 3,
            name: 'groceries'
        },
        {
            id: 4,
            name: 'furniture'
        },
        {
            id: 5,
            name: 'womens-watches'
        },
        {
            id: 6,
            name: 'womens-dresses'
        },
        {
            id: 7,
            name: 'womens-bags'
        },
        {
            id: 8,
            name: 'vehicle'
        },
        {
            id: 9,
            name: 'tops'
        },
        {
            id: 10,
            name: 'tablets'
        },
        {
            id: 11,
            name: 'sunglasses'
        },
        {
            id: 12,
            name: 'sports-accessories'
        },
        {
            id: 13,
            name: 'smartphones'
        },
        {
            id: 14,
            name: 'skin-care'
        },
        {
            id: 15,
            name: 'motorcycle'
        },
        {
            id: 16,
            name: 'mobile-accessories'
        }
    ];

    return (
        <div className='lg:border-r flex flex-wrap lg:flex-col gap-1'>
            {list.map((item, index)=>{
                const queryParams = queryString.stringify({category: item.name});
                return <NavLink className='category-item uppercase ' key={index} to={item.name === 'all products' ? `${ROUTERS.HOME}` : `${ROUTERS.CATEGORY}/${queryParams}`}>
                    {item.name}
                </NavLink>
            })}
        </div>
    );
};

export default InlineMenu;