import React from "react";
import { Route, Routes } from 'react-router';

import { ROUTES } from '@constants/Routes';

import styles from './Main.module.scss';

import { Header } from "@components/Header/Header";
import Home from "@pages/Home/Home";
import Products from "@pages/Products/Products";

const Main = (): JSX.Element => {
    return (
        <>
            <Header />
            <div className={styles.BackgroundBlur}>
            <Routes>
                <Route path={ROUTES.HOME.END} element={<Home />} />
                <Route path={ROUTES.PRODUCTS.END} element={<Products />} />
            </Routes>
            </div>
        </>
    );
};

export default Main;