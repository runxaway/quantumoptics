import React, { useRef, useState, useEffect } from "react";

import styles from './Slider.module.scss'

type SliderProps = {
    arr: 
        {
        id: number,
        productName: string,
        productText: string,
        }[]
    ;
}

export function Slider(props: SliderProps): JSX.Element {
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
                index === props.arr.length - 1 ? 0 : index + 1
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
            {props.arr.map((obj, i) => {
                return (
                    <li
                        id='btn'
                        key={obj.id}
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
                );
            })}
        </ul>
        <div className={styles.Line}></div>
        <div className={styles.SliderContainer}>
            {props.arr.map((obj, i) => {
                return (
                    <div
                        key={obj.id}
                            className={index === i ?
                                styles.SlideActive :
                                styles.Slide
                            }
                    >
                        <img
                            className={styles.Image}
                            src={`../../images/production/prod${i}.jpg`}
                        />
                    </div>
                );
            })}
        </div>
        <div className={isShow ? styles.PopUpActive : styles.PopUp}>
            <div className={styles.PopUpName}>
                {props.arr[index].productName}
            </div>
            <div className={styles.PopUpText}>
                {props.arr[index].productText}
            </div>
        </div>
    </div>
    );
}