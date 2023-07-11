import React, { useState } from "react";

import styles from './Main.module.scss';

import { Header } from "../../components/Header/Header";
import { SBox } from "../../components/SBox/SBox";
import { FBoxButtons } from "../../components/FBoxButtons/FBoxButtons";

const Main = (): JSX.Element => {
    const [isShow, setIsShow] = useState(false);

    const handleFocus = (isHover: boolean) => {
        isHover ? setIsShow(true) : setIsShow(false);
    };

    return (
        <div className={styles.BackgroundBlur}>
            <Header/>
            <div className={styles.Body}>
                <div className={styles.FirstBlock}>
                    <SBox>
                        <div className={styles.ButtonsWrapper}>
                            <FBoxButtons
                                name="Лазеры"
                                hover={handleFocus}
                            />
                            <FBoxButtons
                                name="Лазерные модули"
                                hover={handleFocus}
                            />
                            <FBoxButtons
                                name="Модули обработки информации"
                                hover={handleFocus}
                            />
                            <FBoxButtons
                                name="Источники питания и управления"
                                hover={handleFocus}
                            />
                        </div>
                        <div className={styles.Line}></div>
                        {isShow ? <div>adjsakdjalkdjlaksdjalksdjalsdlk</div> : ''}
                    </SBox>
                </div>
            </div>
        </div>
    );
};

export default Main;