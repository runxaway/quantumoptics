import React, { useState, useRef, useEffect } from "react";

import styles from './Main.module.scss';

import { Header } from "../../components/Header/Header";
import { FBox } from "../../components/FBox/FBox";

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

    const [isShow, setIsShow] = useState(false);
    // const [id, setId] = useState(-1);

    let delay = 2000;

    // const handleFocus = (isHover: boolean, isId: number) => {
    //     setIsShow(isHover);
    //     setId(isId);
    //     setIndex(isId);
    // };

    const [index, setIndex] = useState(0);
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
                        <div className={styles.ButtonsWrapper}>
                            {production.map((obj, i) => {
                                return (
                                    <div
                                        key={obj.id}
                                        className={index === i ? styles.BoxActive : styles.Box}
                                        onMouseEnter={() => {
                                            setIndex(i);
                                            setIsShow(true);
                                        }}
                                        onMouseLeave={() => setIsShow(false)}
                                    >
                                        <div className={styles.ButtonName}>
                                            {obj.productName}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
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
                        {/* <div className={styles.SliderContainer}>
                            <div
                                className={styles.Slider}
                                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                            >
                                {productionNames.map((backgroundColor, index) => (
                                    <div
                                    className={styles.Slide}
                                    key={index}
                                    style={{ backgroundColor }}
                                  ></div>
                                ))}
                            </div>
                            <div className={styles.SlideshowDots}>
                                {productionNames.map((_, idx) => (
                                <div
                                    key={idx}
                                    className={`${styles.SlideshowDot} ${index === idx ? 'Active' : ''}`}
                                    onClick={() => {
                                        setIndex(idx);
                                    }}
                                ></div>
                                ))}
                            </div>
                        </div> */}
                        {
                            index === production[index].id
                            ? <div className={isShow ? styles.PopUpActive : styles.PopUp}>
                                <div className={styles.PopUpName}>
                                    {production[index].productName}
                                </div>
                                <div className={styles.PopUpText}>
                                    {production[index].productText}
                                </div>
                            </div> : ''
                        }
                    </FBox>
                </div>
            </div>
        </div>
    );
};

export default Main;