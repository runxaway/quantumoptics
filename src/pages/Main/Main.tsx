import React from "react";

import styles from './Main.module.scss';

import { Header } from "../../components/Header/Header";

const Main = (): JSX.Element => {
    return (
        <div className={styles.BackgroundBlur}>
            <Header/>
        </div>
    );
};

export default Main;