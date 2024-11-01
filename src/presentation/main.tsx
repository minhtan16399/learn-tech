import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '../core/style/index.css';
import store from '../core/stores/store.ts';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DetailPage from "./pages/detail";
import {HomeLayout} from "./layout/home";
import {HomePage} from "./pages/home";
import {CategoryProduct} from "./components/home/category-product";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<HomeLayout/>}>
                            <Route index={true} element={<HomePage/>}></Route>
                            <Route path={'/category'}>
                                <Route path={':id'} element={<CategoryProduct/>}/>
                            </Route>
                        </Route>
                        <Route path={'/detail'}>
                            <Route path={':id'} element={<DetailPage/>}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </QueryClientProvider>
        </Provider>
    </React.StrictMode>,
);
