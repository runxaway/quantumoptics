import React from "react";
import { useParams } from 'react-router';

import styles from './SubProducts.module.scss'

import { SubProductCard } from "../../../components/SubProductCard/SubProductCard";

import data from '../../../products.json'

const SubProducts = (): JSX.Element => {
    window.scrollTo(0, 0);
    const { productId } = useParams() as { productId: string };
    productId !== undefined ? productId : '';
    console.log(productId);

    return (
        <>
        <div className={styles.ProductsBody}>
            <div className={styles.ProdLabel}>
                <div className={styles.Name}>{data.Products[parseInt(productId)].productName}</div>
            </div>
            <div className={styles.Block}>
                <div className={styles.ProdContainer}>
                    {data.Products[parseInt(productId)].subProducts.map((field, index) => {
                        return (
                            <SubProductCard
                                key={index}
                                prodId={field.subProductId}
                                prodName={field.subProductName}
                                prodImage={`../../images/production/prod${field.subProductId}.jpg`}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
        <div className={styles.Copy}>ООО «Квантовая оптика» Copyright © 2023</div>
        </>
    );
}

export default SubProducts;