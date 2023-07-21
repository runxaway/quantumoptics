import React, { useEffect, useRef, useState } from "react";

import styles from './AwardsSlider.module.scss'

type AwardsSliderProps = {
    arrN: number; 
};

export function AwardsSlider(props: AwardsSliderProps): JSX.Element {
    return (
        <div className={styles.BorderBox}>
            {/* <div className={styles.LayerLeft}></div>
            <div className={styles.LayerRight}></div> */}
            <ul className={styles.AwardsContainer}>
                {Array.from(Array(props.arrN).keys()).map((i) => {
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
        </div>
    );
}