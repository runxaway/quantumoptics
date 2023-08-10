import React, { useState } from "react";
import { Route, Routes } from 'react-router';

import { ROUTES } from '../../constants/Routes';

import styles from './Main.module.scss';

import { Header } from '../../components/Header/Header';
import { HeaderMobile } from "../../components/HeaderMobile/HeaderMobile";

import Home from '../Home/Home';
import Products from '../Products/Products';
import SubProducts from '../Products/SubProducts/SubProducts';
import AboutProduct from '../Products/AboutProduct/AboutProduct';
import Publications from '../Publications/Publications';
import Contacts from '../Contacts/Contacts';

import HomeMobile from "../HomeMobile/HomeMobile";

const Main = (): JSX.Element => {

    return (
        <>
            {window.outerWidth < 420 ?
                <>
                    <HeaderMobile />
                    <div className={styles.BackgroundBlurMobile}>
                        <Routes>
                            <Route path={ROUTES.HOME.END} element={<HomeMobile />} />
            
                            <Route path={ROUTES.PRODUCTS.END} element={<Products />} />
                            <Route path={ROUTES.PRODUCTS.$(':productId').END} element={<SubProducts />} />
                            <Route path={ROUTES.PRODUCTS.$(':productId').$(':subProductId').INFO.END} element={<AboutProduct />} />
                            
                            <Route path={ROUTES.PUBLICATIONS.END} element={<Publications />} />
                            <Route path={ROUTES.CONTACTS.END} element={<Contacts />} />
                        </Routes>
                    </div>
                </> :
                <>
                    <Header />
                    <div className={styles.BackgroundBlur}>
                        <Routes>
                            <Route path={ROUTES.HOME.END} element={<Home />} />
            
                            <Route path={ROUTES.PRODUCTS.END} element={<Products />} />
                            <Route path={ROUTES.PRODUCTS.$(':productId').END} element={<SubProducts />} />
                            <Route path={ROUTES.PRODUCTS.$(':productId').$(':subProductId').INFO.END} element={<AboutProduct />} />
                            
                            <Route path={ROUTES.PUBLICATIONS.END} element={<Publications />} />
                            <Route path={ROUTES.CONTACTS.END} element={<Contacts />} />
                        </Routes>
                    </div>
                </>
            }
        </>
    );
};

export default Main;