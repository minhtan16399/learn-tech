import { Route, Routes } from 'react-router-dom';

interface AppRouteProps {
    routes: {
        path: string;
        element?: JSX.Element;
        children?: {
            path: string;
            element: JSX.Element;
        }[]
    }[];
}

export default function AppRoute(props: AppRouteProps) {
    return (
        <Routes>
            {props.routes.map((route) => (
                !route.children ?
                    <Route
                        path={route.path}
                        key={route.path}
                        element={route.element}/> :
                    <Route
                        path={route.path}
                        key={route.path}
                        element={route.element}>
                        {route.children ? route.children.map((routeChildren)=>(
                            <Route
                                path={routeChildren.path}
                                key={routeChildren.path}
                                element={routeChildren.element}/>
                        )) : null}
                    </Route>
                )
            )}
        </Routes>
    );
}
