import React from "react";
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';

import styles from './AboutProduct.module.scss'

import data from '../../../products.json'

const AboutProduct = (): JSX.Element => {
    window.scrollTo(0, 0);
    const navigate = useNavigate();

    const { subProductId } = useParams() as { subProductId: string };

    return (
        <>
            <div className={styles.AboutBody}>
                <div className={styles.ButtonBack} onClick={() => navigate(-1)}>
                    <div className={styles.ButtonName}>
                        Вернуться назад
                    </div>
                </div>
                <div className={styles.Block}>
                    <div className={styles.AboutImageContainer}>
                        <img
                            className={styles.AboutImage}
                            src={`../../../images/subproducts/${subProductId}.png`}
                        />
                    </div>
                </div>
            </div>
            <div className={styles.Copy}>ООО «Квантовая оптика» Copyright © 2023</div>
        </>
    );
}

export default AboutProduct;