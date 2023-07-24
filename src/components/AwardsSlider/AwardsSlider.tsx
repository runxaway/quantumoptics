import React, { useEffect, useRef, useState } from "react";

import styles from './AwardsSlider.module.scss'

type AwardsSliderProps = {
    arrN: number; 
};

export function AwardsSlider(props: AwardsSliderProps): JSX.Element {
    return (
        <div className={styles.BorderBox}>
            <ul className={styles.AwardsContainer}>
                {Array.from(Array(props.arrN).keys()).map((i) => {
                    return (
                        <li
                            key={i}
                            className={styles.Award}
                        >
                            <img
                                className={styles.AwardImage}
                                src={`../../images/awards/award${i + 1}.jpg`}
                            />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}