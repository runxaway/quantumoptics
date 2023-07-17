import React, { useState, useRef, useEffect } from "react";

import styles from './Main.module.scss';

import { Header } from "../../components/Header/Header";
import { FBox } from "../../components/FBox/FBox";
import { SBox } from "../../components/SBox/SBox";

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
    const awards = Array(6).fill(0);
    const arrows = document.querySelector(`.${styles.Arrow}`) as any as Array<HTMLElement>;
    const awardsBox = document.querySelector(`.${styles.AwardsContainer}`);

    if (arrows !== null) {
        arrows.forEach(icon => {
            icon.addEventListener('click', () => {
                console.log(icon.id);
                // awardsBox!.scrollLeft += icon.id === 'left' ? -350 : 350;
            })
        });
    }

    // console.log(arrows);
    
    // const dragging = (e: any) => {
    //     console.log('dragging');
    //     awardsBox!.scrollLeft -= e.movementX;
    // }

    // awardsBox?.addEventListener("mousemove", dragging);

    const [isShow, setIsShow] = useState(false);
    const [index, setIndex] = useState(0);

    let delay = isShow ? 7000 : 2500;
    const timeoutRef = useRef(0);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = window.setTimeout(
        () =>
            setIndex(
                index === production.length - 1 ? 0 : index + 1
            ),
        delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className={styles.BackgroundBlur}>
            <Header/>
            <div className={styles.Body}>
                <div className={styles.FirstBlock}>
                    <FBox>
                        <ul className={styles.ButtonsWrapper}>
                            {production.map((obj, i) => {
                                return (
                                    <li
                                        id='btn'
                                        key={obj.id}
                                        className={index === i ? styles.BoxActive : styles.Box}
                                        onMouseOverCapture={() => {
                                            setIndex(i);
                                            setIsShow(true);
                                        }}
                                        onMouseLeave={() => setIsShow(false)}
                                    >
                                        <div className={styles.ButtonName}>
                                            {obj.productName}
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                        <div className={styles.Line}></div>
                        <div className={styles.SliderContainer}>
                            {production.map((obj, i) => {
                                return (
                                    <div
                                        key={obj.id}
                                        className={index === i ?
                                            styles.SlideActive :
                                            styles.Slide
                                        }
                                    >
                                        <img
                                            src={`../../images/production/prod${i}.jpg`}
                                        />
                                    </div>
                                );
                            })}

                        </div>
                        <div className={isShow ? styles.PopUpActive : styles.PopUp}>
                                <div className={styles.PopUpName}>
                                    {production[index].productName}
                                </div>
                                <div className={styles.PopUpText}>
                                    {production[index].productText}
                                </div>
                            </div>
                    </FBox>
                </div>
                <div className={styles.AwardsLabel}>
                    <div className={styles.Label}>Награды</div>
                </div>
                <div className={styles.SecondBlock}>
                    <SBox>
                        <div id="left" className={styles.Arrow}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="24" viewBox="0 0 14 24" fill="none">
                                <path d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97918 12.6066 1.3934C12.0208 0.807612 11.0711 0.807612 10.4853 1.3934L0.93934 10.9393ZM3 10.5H2L2 13.5H3V10.5Z" fill="currentcolor"/>
                            </svg>
                        </div>
                        <ul className={styles.AwardsContainer}>
                            {awards.map((_,i) => {
                                return (
                                    <li
                                        key={i}
                                        className={styles.Award}
                                    >
                                        <img
                                            src={`../../images/awards/award${i + 1}.jpg`}
                                        />
                                    </li>
                                );
                            })}
                        </ul>
                        <div id="right" className={styles.Arrow}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                                <path d="M24.0607 19.0607C24.6464 18.4749 24.6464 17.5251 24.0607 16.9393L14.5147 7.3934C13.9289 6.80761 12.9792 6.80761 12.3934 7.3934C11.8076 7.97918 11.8076 8.92893 12.3934 9.51472L20.8787 18L12.3934 26.4853C11.8076 27.0711 11.8076 28.0208 12.3934 28.6066C12.9792 29.1924 13.9289 29.1924 14.5147 28.6066L24.0607 19.0607ZM22 19.5L23 19.5L23 16.5L22 16.5L22 19.5Z" fill="currentcolor"/>
                            </svg>
                        </div>
                    </SBox>
                </div>
            </div>
        </div>
    );
};

export default Main;