import React, { useState } from "react";

import styles from './Main.module.scss';

import { Header } from "../../components/Header/Header";
import { SBox } from "../../components/SBox/SBox";
import { FBoxButtons } from "../../components/FBoxButtons/FBoxButtons";

const Main = (): JSX.Element => {
    const [isShow, setIsShow] = useState(false);

    return (
        <div className={styles.BackgroundBlur}>
            <Header/>
            <div className={styles.Body}>
                <div className={styles.FirstBlock}>
                    <SBox>
                        <div className={styles.ButtonsWrapper}>
                            <FBoxButtons
                                name="Лазеры"
                                hover={isShow}
                            />
                            <FBoxButtons
                                name="Лазерные модули"
                                hover={isShow}
                            />
                            <FBoxButtons
                                name="Модули обработки информации"
                                hover={isShow}
                            />
                            <FBoxButtons
                                name="Источники питания и управления"
                                hover={isShow}
                            />
                        </div>
                        <div className={styles.Line}></div>
                        {isShow ? (<div>adjsakdjalkdjlaksdjalksdjalsdlk</div>) : ''}
                    </SBox>
                </div>
            </div>
        </div>
    );
};

export default Main;