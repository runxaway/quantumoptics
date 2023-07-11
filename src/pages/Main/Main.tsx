import React, { useState } from "react";

import styles from './Main.module.scss';

import { Header } from "../../components/Header/Header";
import { SBox } from "../../components/SBox/SBox";
import { FBoxButtons } from "../../components/FBoxButtons/FBoxButtons";

const [isShow, setIsShow] = useState(false);

const Main = (): JSX.Element => {
    return (
        <div className={styles.BackgroundBlur}>
            <Header/>
            <div className={styles.Body}>
                <div className={styles.FirstBlock}>
                    <SBox>
                        <div className={styles.ButtonsWrapper}>
                            <FBoxButtons name="Лазеры"/>
                            <FBoxButtons name="Лазерные модули"/>
                            <FBoxButtons name="Модули обработки информации"/>
                            <FBoxButtons name="Источники питания и управления"/>
                        </div>
                        <div className={styles.Line}></div>
                    </SBox>
                </div>
            </div>
        </div>
    );
};

export default Main;