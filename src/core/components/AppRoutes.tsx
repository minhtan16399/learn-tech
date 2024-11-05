import { Route, Routes } from 'react-router-dom';

interface AppRouteProps {
    routes: {
        path?: string;
        element?: JSX.Element;
        index?: boolean;
        children?: {
            path?: string;
            index?: boolean;
            element: JSX.Element;
        }[]
    }[];
}

export default function AppRoute(props: AppRouteProps) {
    return (
        <Routes>
            {props.routes.map((route, index) => (
                !route.children ?
                    <Route
                        path={route.path}
                        key={index}
                        index={!!route.index}
                        element={route.element}/> :
                    <Route
                        path={route.path}
                        key={index}
                        element={route.element}>
                        {route.children ? route.children.map((routeChildren, index)=>(
                            <Route
                                path={routeChildren.path}
                                key={index}
                                index={!!routeChildren.index}
                                element={routeChildren.element}/>
                        )) : null}
                    </Route>
                )
            )}
        </Routes>
    );
}
