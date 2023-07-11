import React, { useState, useRef, useEffect } from "react";

import styles from './Main.module.scss';

import { Header } from "../../components/Header/Header";
import { SBox } from "../../components/SBox/SBox";
import { FBoxButtons } from "../../components/FBoxButtons/FBoxButtons";

const Main = (): JSX.Element => {
    const production = [
        'Лазеры',
        'Лазерные модули',
        'Модули обработки информации',
        'Источники питания и управления'
    ];

    const [isShow, setIsShow] = useState(false);
    const [name, setName] = useState('Лазеры');

    const handleFocus = (isHover: boolean) => {
        !isHover ? setIsShow(true) : setIsShow(false);
        // console.log(isHover);
    };

    const handleName = (isName: string) => {
        setName(isName);
        console.log(isName);
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
                                sendName={handleName}
                            />
                            <FBoxButtons
                                name="Лазерные модули"
                                hover={handleFocus}
                                sendName={handleName}
                            />
                            <FBoxButtons
                                name="Модули обработки информации"
                                hover={handleFocus}
                                sendName={handleName}
                            />
                            <FBoxButtons
                                name="Источники питания и управления"
                                hover={handleFocus}
                                sendName={handleName}
                            />
                        </div>
                        <div className={styles.Line}></div>
                        {name === production[0] ? <div>Лазеры</div> : ''}
                        {name === production[1] ? <div>Лазерные модули</div> : ''}
                        {name === production[2] ? <div>Модули обработки информации</div> : ''}
                        {name === production[3] ? <div>Источники питания и управления</div> : ''}
                    </SBox>
                </div>
            </div>
        </div>
    );
};

export default Main;