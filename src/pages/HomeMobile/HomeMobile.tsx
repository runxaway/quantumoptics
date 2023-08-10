import React from "react";

import styles from './HomeMobile.module.scss';

import { SliderMobile } from "../../components/SliderMobile/SliderMobile";
import { AwardsSlider } from "../../components/AwardsSlider/AwardsSlider";

const HomeMobile = (): JSX.Element => {
    window.scrollTo(0, 0);
    
    return (
        <div className={styles.HomeBody}>
            <div className={styles.FirstBlock}>
                <SliderMobile />
            </div>
            <div className={styles.AwardsLabel}>
                <div className={styles.Label}>Награды</div>
            </div>
            <div className={styles.SecondBlock}>
                <AwardsSlider arrN={10} />
            </div>
            <div className={styles.Copy}>ООО «Квантовая оптика» Copyright © 2023</div>
        </div>
    );
};

export default HomeMobile;