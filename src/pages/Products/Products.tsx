import React from "react";

import styles from './Products.module.scss'

import { ProductCard } from "../../components/ProductCard/ProductCard";

import prod0 from '../../images/products/prod0.png';
import prod1 from '../../images/products/prod1.png';
import prod2 from '../../images/products/prod2.png';
import prod3 from '../../images/products/prod3.png';

import data from '../../products.json'

const Products = (): JSX.Element => {
    window.scrollTo(0, 0);

    const prods = [prod0, prod1, prod2, prod3];

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
                                prodName={field.productName}
                                prodImage={prods[parseInt(field.productId)]}
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