import React from "react";
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';

import styles from './SubProducts.module.scss'

import { SubProductCard } from "../../../components/SubProductCard/SubProductCard";

import data from '../../../products.json'

const SubProducts = (): JSX.Element => {
    window.scrollTo(0, 0);
    const navigate = useNavigate();

    const { productId } = useParams() as { productId: string };
    productId !== undefined ? productId : '';

    return (
        <>
            <div className={styles.ProductsBody}>
                <div className={styles.SubProdLabelContainer}>
                    <div className={styles.ProdLabel}>
                        <div className={styles.Name}>{data.Products[parseInt(productId)].productName}</div>
                    </div>
                    <div className={styles.ButtonBack} onClick={() => navigate(-1)}>
                        <div className={styles.ButtonName}>
                            Вернуться назад
                        </div>
                    </div>
                </div>
                <div className={styles.Block}>
                    <div className={styles.ProdContainer}>
                        {data.Products[parseInt(productId)].subProducts.map((field, index) => {
                            console.log(field.subProductId)
                            return (
                                <SubProductCard
                                    key={index}
                                    prodId={productId}
                                    subprodId={field.subProductId}
                                    subprodName={field.subProductName}
                                    subprodImage={`../../images/subproducts/${field.subProductId}.png`}
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