import React from "react";
import { Link } from 'react-router-dom';

import { ROUTES } from '../../constants/Routes';

import styles from './ProductCard.module.scss'

type ProductCardProps = {
    prodId: string,
    prodName: string,
    prodImage: string;
};

export function ProductCard(props: ProductCardProps): JSX.Element {
    return (
        <Link
            key={props.prodId}
            to={{
                pathname: ROUTES.PRODUCTS.$(props.prodId).END
            }}
            className={styles.CardBlock}
        >
        {/* <div className={styles.CardBlock}> */}
            <div className={styles.ProdImageContainer}>
                <img
                    className={styles.ProdImage}
                    src={props.prodImage}
                />
            </div>
            <div className={styles.ProdTextBox}>
                <div className={styles.ProdText}>{props.prodName}</div>
            </div>
        {/* </div> */}
        </Link>
    );
}