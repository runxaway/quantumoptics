import React from "react";

import styles from './Products.module.scss'
import { ProductCard } from "../../components/ProductCard/ProductCard";

const Products = (): JSX.Element => {
    const products = [
        {
            prodId: 0,
            prodName: 'Лазеры'
        },
        {
            prodId: 1,
            prodName: 'Лазерные модули'
        },
        {
            prodId: 2,
            prodName: 'Модули обработки информации',
        },
        {
            prodId: 3,
            prodName: 'Источники питания и управления',
        },
    ];

    return (
        <div className={styles.ProductsBody}>
            <div className={styles.ProdLabel}>
                <div className={styles.Name}>Продукция</div>
            </div>
            <div className={styles.Block}>
                <div className={styles.ProdContainer}>
                    {products.map((field, index) => {
                        return (
                            <ProductCard
                                key={index}
                                prodId={field.prodId}
                                prodName={field.prodName}
                                prodImage={`../../images/production/prod${field.prodId}.jpg`}
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