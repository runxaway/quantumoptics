import React from "react";
import { Link } from 'react-router-dom';

import { ROUTES } from '@constants/Routes';

import styles from './Products.module.scss'

import { ProductCard } from "../../components/ProductCard/ProductCard";

import data from '../../products.json'

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
                            <Link
                                key={index}
                                to={{
                                    pathname: ROUTES.PRODUCTS.$(field.productId).END
                                }}
                            >
                                <ProductCard
                                    key={index}
                                    prodId={field.productId}
                                    prodName={field.productName}
                                    prodImage={`../../images/production/prod${field.productId}.jpg`}
                                />
                            </Link>
                        );
                    })}
                </div>
            </div>
            <div className={styles.Copy}>ООО «Квантовая оптика» Copyright © 2023</div>
        </div>
    );
}

export default Products;