import React, { useRef, useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import { ROUTES } from '../../constants/Routes';

import styles from './SliderMobile.module.scss'

import img0 from '../../images/homeImages/img0.png';
import img1 from '../../images/homeImages/img1.png';
import img2 from '../../images/homeImages/img2.png';
import img3 from '../../images/homeImages/img3.png';

import data from '../../products.json';

export function SliderMobile(): JSX.Element {
    const [index, setIndex] = useState(0);

    const timeoutRef = useRef(0);

    const imgs = [img0, img1, img2, img3];

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
        2500
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <>
            <div className={styles.BorderBoxImage}>
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
                                    src={imgs[parseInt(obj.productId)]}
                                />
                            </div>
                        );
                    })}
                </div>
                <div className={styles.PopUpActive}>
                    <div className={styles.PopUpName}>
                        {data.Products[index].productName}
                    </div>
                    <div className={styles.PopUpText}>
                        {data.Products[index].productText}
                    </div>
                </div>
            </div>
            <div className={styles.BorderBoxButtons}>
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
                                >
                                    <div className={styles.ButtonName}>
                                        {obj.productName}
                                    </div>
                                </li>
                            </Link>
                        );
                    })}
                </ul>
            </div>
            {/* <div className={styles.BorderBox}>
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
                <div className={styles.PopUpActive}>
                    <div className={styles.PopUpName}>
                        {data.Products[index].productName}
                    </div>
                    <div className={styles.PopUpText}>
                        {data.Products[index].productText}
                    </div>
                </div>
            </div> */}
        </>
    );
}