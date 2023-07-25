import React from "react";

import styles from './Main.module.scss';

import { Header } from "../../components/Header/Header";
import Home from "../../pages/Home/Home";
import Products from "../Products/Products";

const Main = (): JSX.Element => {
    return (
        <>
            <Header/>
            <div className={styles.BackgroundBlur}>
                {/* <Home /> */}
                <Products />
            </div>
        </>
    );
};

export default Main;