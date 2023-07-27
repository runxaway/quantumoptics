import React from "react";
import { useParams } from 'react-router';

import styles from './SubProduct.module.scss'

import { SubProductCard } from "../../../components/SubProductCard/SubProductCard";

import data from '../../../products.json'

const SubProduct = (): JSX.Element => {
    window.scrollTo(0, 0);
    const { subProductId } = useParams<{ subProductId: string }>();

    return (
        <div className={styles.ProductsBody}>
            <div className={styles.ProdLabel}>
                {/* <div className={styles.Name}>{data.Products[subProductId].productName}</div> */}
            </div>
            <div className={styles.Block}>
                <div className={styles.ProdContainer}>
                    {data.Products.map((field, index) => {
                        return (
                            <SubProductCard
                                key={index}
                                prodId={field.productId}
                                prodName={field.productName}
                                prodImage={`../../images/production/prod${field.productId}.jpg`}
                            />
                        );
                    })}
                </div>
            </div>
            <div className={styles.Copy}>ООО «Квантовая оптика» Copyright © 2023</div>
        </div>
    );
}

export default SubProduct;