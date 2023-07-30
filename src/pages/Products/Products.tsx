import React from "react";

import styles from './Products.module.scss'

import { ProductCard } from "../../components/ProductCard/ProductCard";

import data from '../../products.json'

const Products = (): JSX.Element => {
    window.scrollTo(0, 0);

    return (
        <div className={styles.ProductsBody}>
            <div className={styles.ProdLabel}>
                <div className={styles.Name}>Продукция</div>
            </div>
            <div className={styles.Block}>
                <div className={styles.ProdContainer}>
                    {data.Products.map((field, index) => {
                        return (
                            <ProductCard
                                key={index}
                                prodId={field.productId}
                                prodPathName={field.pathName}
                                prodName={field.productName}
                                prodImage={`../../images/products/prod${field.productId}.png`}
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