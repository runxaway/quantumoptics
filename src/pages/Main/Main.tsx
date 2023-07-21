import React, { useState, useRef, useEffect } from "react";

import styles from './Main.module.scss';

import { Header } from "../../components/Header/Header";
import { Slider } from "../../components/Slider/Slider";
import { AwardsSlider } from "../../components/AwardsSlider/AwardsSlider";

const Main = (): JSX.Element => {
    const production = [
        {
            id: 0,
            productName: 'Лазеры',
            productText: 'Разработка и изготовление твердотельных лазеров с диодной накачкой, излучающих в широком спектральном диапазоне от УФ (260 нм) до ИК (3 мкм) для лазерных информационных систем, технологических установок и биомедицинской аппаратуры, научных исследований'
        },
        {
            id: 1,
            productName: 'Лазерные модули',
            productText: 'Разработка и изготовление лазерных информационных систем, дальномеров, лидаров, оптико-электронных систем наблюдения, лазерных систем дистанционного зондирования, обнаружения малых концентраций веществ'
        },
        {
            id: 2,
            productName: 'Модули обработки информации',
            productText: 'Разработка и изготовление приемных каналов оптических информационных систем, средств спектральной селекции, фотоприемных устройств, усилителей, устройств и алгоритмов обработки информации'
        },
        {
            id: 3,
            productName: 'Источники питания и управления',
            productText: 'Разработка и изготовление источников питания и управления для твердотельных лазеров с диодной накачкой, термоконтроллеров, драйверов электрооптических и акустооптических модуляторов'
        },
    ];
    
    return (
        <div className={styles.BackgroundBlur}>
            <Header/>
            <div className={styles.Body}>
                <div className={styles.FirstBlock}>
                    <Slider arr={production}/>
                </div>
                <div className={styles.AwardsLabel}>
                    <div className={styles.Label}>Награды</div>
                </div>
                <div className={styles.SecondBlock}>
                    <AwardsSlider arrN={6} />
                </div>
                <div className={styles.Copy}>ООО «Квантовая оптика» Copyright © 2023</div>
            </div>
        </div>
    );
};

export default Main;