import React from "react";

import styles from './Products.module.scss'

import { SubProductCard } from "../../../components/SubProductCard/SubProductCard";

import data from '../../../products.json'

const Products = (): JSX.Element => {
    return (
        <div className={styles.ProductsBody}>
            <div className={styles.ProdLabel}>
                <div className={styles.Name}>Продукция</div>
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

export default Products;