import React from "react";
import { useParams } from 'react-router';

import styles from './AboutProduct.module.scss'

import data from '../../../products.json'

const AboutProduct = (): JSX.Element => {
    window.scrollTo(0, 0);

    const { subProductId } = useParams() as { subProductId: string };

    return (
        <div className={styles.AboutBody}>
            {subProductId}
        </div>
    );
}

export default AboutProduct;