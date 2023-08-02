import React from "react";
import { Route, Routes } from 'react-router';

import { ROUTES } from '@constants/Routes';

import styles from './Main.module.scss';

import { Header } from "@components/Header/Header";

import Home from "@pages/Home/Home";
import Products from "@pages/Products/Products";
import SubProducts from "@pages/Products/SubProducts/SubProducts";
import AboutProduct from "@pages/Products/AboutProduct/AboutProduct";
import Publications from "@pages/Publications/Publications";

const Main = (): JSX.Element => {
    return (
        <>
            <Header />
            <div className={styles.BackgroundBlur}>
            <Routes>
                <Route path={ROUTES.HOME.END} element={<Home />} />

                <Route path={ROUTES.PRODUCTS.END} element={<Products />} />
                <Route path={ROUTES.PRODUCTS.$(':productId').END} element={<SubProducts />} />
                <Route path={ROUTES.PRODUCTS.$(':productId').$(':subProductId').INFO.END} element={<AboutProduct />} />
                
                <Route path={ROUTES.PUBLICATIONS.END} element={<Publications />} />
            </Routes>
            </div>
        </>
    );
};

export default Main;