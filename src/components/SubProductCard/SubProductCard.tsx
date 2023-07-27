import React from "react";

import styles from './ProductCard.module.scss'

type SubProductCardProps = {
    prodId: string,
    prodName: string,
    prodImage: string;
};

export function SubProductCard(props: SubProductCardProps): JSX.Element {
    return (
        <div className={styles.CardBlock}>
            <div className={styles.ProdImageContainer}>
                <img
                    className={styles.ProdImage}
                    src={props.prodImage}
                />
            </div>
            <div className={styles.ProdTextBox}>
                <div className={styles.ProdText}>{props.prodName}</div>
            </div>
        </div>
    );
}