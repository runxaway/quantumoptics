import React, { useEffect, useRef, useState } from "react";

import styles from './AwardsSlider.module.scss'

import award0 from '../../images/awards/award0.jpg';
import award1 from '../../images/awards/award1.jpg';
import award2 from '../../images/awards/award2.jpg';
import award3 from '../../images/awards/award3.jpg';
import award4 from '../../images/awards/award4.jpg';
import award5 from '../../images/awards/award5.jpg';
import award6 from '../../images/awards/award6.jpg';
import award7 from '../../images/awards/award7.jpg';
import award8 from '../../images/awards/award8.jpg';
import award9 from '../../images/awards/award9.jpg';

type AwardsSliderProps = {
    arrN: number; 
};

export function AwardsSlider(props: AwardsSliderProps): JSX.Element {
    const awards = [award0, award1, award2, award3, award4, award5, award6, award7, award8, award9];

    const onWheel = (e: any) => {
        const container = document.querySelector(`.${styles.AwardsContainer}`);
        container?.scrollBy({
            left: e.deltaY < 0 ? -30 : 30,
        });
    };

    return (
        <div className={styles.BorderBox}>
            <ul className={styles.AwardsContainer} onWheel={onWheel}>
                {Array.from(Array(props.arrN).keys()).map((i) => {
                    return (
                        <li
                            key={i}
                            className={styles.Award}
                        >
                            <img
                                className={styles.AwardImage}
                                src={awards[i]}
                            />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}