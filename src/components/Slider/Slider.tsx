import React, { useRef, useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import { ROUTES } from '@constants/Routes';

import styles from './Slider.module.scss'

import data from '../../products.json';

export function Slider(): JSX.Element {
    const [isShow, setIsShow] = useState(false);
    const [index, setIndex] = useState(0);
    const [delay, setDelay] = useState(2500);

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
                index === data.Products.length - 1 ? 0 : index + 1
            ),
        delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
    <div className={styles.BorderBox}>
        <ul className={styles.ButtonsWrapper}>
            {data.Products.map((obj, i) => {
                return (
                    <Link
                        key={obj.productId}
                        to={{
                            pathname: ROUTES.PRODUCTS.$(obj.productId).END
                        }}
                    >
                        <li
                            key={obj.productId}
                            className={index === i ? styles.BoxActive : styles.Box}
                            onMouseOverCapture={() => {
                                setIndex(i);
                                setIsShow(true);
                                setDelay(7000);
                            }}
                            onMouseLeave={() => {
                                setIsShow(false);
                                setDelay(2500);
                            }}
                        >
                            <div className={styles.ButtonName}>
                                {obj.productName}
                            </div>
                        </li>
                    </Link>
                );
            })}
        </ul>
        <div className={styles.Line}></div>
        <div className={styles.SliderContainer}>
            {data.Products.map((obj, i) => {
                return (
                    <div
                        key={obj.productId}
                            className={index === i ?
                                styles.SlideActive :
                                styles.Slide
                            }
                    >
                        <img
                            className={styles.Image}
                            src={`../../images/homeImages/img${obj.productId}.jpg`}
                        />
                    </div>
                );
            })}
        </div>
        <div className={isShow ? styles.PopUpActive : styles.PopUp}>
            <div className={styles.PopUpName}>
                {data.Products[index].productName}
            </div>
            <div className={styles.PopUpText}>
                {data.Products[index].productText}
            </div>
        </div>
    </div>
    );
}