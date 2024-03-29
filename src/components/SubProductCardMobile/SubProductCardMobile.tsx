import React from "react";
import { Link } from 'react-router-dom';

import { ROUTES } from '../../constants/Routes';

import styles from './SubProductCardMobile.module.scss'

type SubProductCardMobileProps = {
    prodId: string,
    subprodId: string,
    subprodName: string,
    subprodImage: string;
};

export function SubProductCardMobile(props: SubProductCardMobileProps): JSX.Element {
    return (
        <Link
            key={props.subprodId}
            to={{
                pathname: ROUTES.PRODUCTS.$(props.prodId).$(props.subprodId).INFO.END
            }}
            className={styles.CardBlock}
        >
            <div className={styles.ProdImageContainer}>
                <img
                    className={styles.ProdImage}
                    src={props.subprodImage}
                />
            </div>
            <div className={styles.ProdTextBox}>
                <div className={styles.ProdText}>{props.subprodName}</div>
            </div>
        </Link>
    );
}