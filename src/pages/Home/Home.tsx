import React from "react";

import styles from './Home.module.scss';

import { Slider } from "../../components/Slider/Slider";
import { AwardsSlider } from "../../components/AwardsSlider/AwardsSlider";

const Home = (): JSX.Element => {
    window.scrollTo(0, 0);
    
    return (
        <div className={styles.HomeBody}>
            <div className={styles.FirstBlock}>
                <Slider />
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

export default Home;