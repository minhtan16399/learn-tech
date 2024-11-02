import store from "./core/stores/store.ts";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import AppRoute from "./core/components/AppRoutes.tsx";
import routes from './core/constant/routers/routers-config.tsx';

const queryClient = new QueryClient();

function App() {
    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                   <AppRoute routes={routes}/>
                </BrowserRouter>
            </QueryClientProvider>
        </Provider>
    );
}

export default App;