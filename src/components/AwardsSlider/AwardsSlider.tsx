import React from "react";

import styles from './AwardsSlider.module.scss'

type AwardsSliderProps = {
    arrN: number; 
};

export function AwardsSlider(props: AwardsSliderProps): JSX.Element {
    const abox = document.querySelector(`.${styles.AwardsContainer}`);
    console.log(abox);

    return (
        <div className={styles.BorderBox}>
            <div id="left" className={styles.Arrow}>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="24" viewBox="0 0 14 24" fill="none">
                    <path d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97918 12.6066 1.3934C12.0208 0.807612 11.0711 0.807612 10.4853 1.3934L0.93934 10.9393ZM3 10.5H2L2 13.5H3V10.5Z" fill="currentcolor"/>
                </svg>
            </div>
            <ul className={styles.AwardsContainer}>
                {Array(props.arrN).fill(0).map((_,i) => {
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
        </div>
    );
}