import React from "react";
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';

import styles from './SubProducts.module.scss'

import { SubProductCard } from "../../../components/SubProductCard/SubProductCard";

import s00 from '../../../images/subproducts/00.png';
import s01 from '../../../images/subproducts/01.png';
import s02 from '../../../images/subproducts/02.png';
import s03 from '../../../images/subproducts/03.png';

import s10 from '../../../images/subproducts/10.png';
import s11 from '../../../images/subproducts/11.png';
import s12 from '../../../images/subproducts/12.png';

import s20 from '../../../images/subproducts/20.png';
import s21 from '../../../images/subproducts/21.png';

import s30 from '../../../images/subproducts/30.png';

import data from '../../../products.json'

const SubProducts = (): JSX.Element => {
    window.scrollTo(0, 0);
    const navigate = useNavigate();

    const { productId } = useParams() as { productId: string };
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
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
                            return (
                                <SubProductCard
                                    key={index}
                                    prodId={productId}
                                    subprodId={field.subProductId}
                                    subprodName={field.subProductName}
                                    subprodImage={field.subProductId === '00' ? s00 :
                                                    field.subProductId === '01' ? s01 :
                                                        field.subProductId === '02' ? s02 :
                                                            field.subProductId === '03' ? s03 :
                                                                field.subProductId === '10' ? s10 :
                                                                    field.subProductId === '11' ? s11 :
                                                                        field.subProductId === '12' ? s12 :
                                                                            field.subProductId === '20' ? s20 :
                                                                                field.subProductId === '21' ? s21 :
                                                                                    field.subProductId === '30' ? s30 : ''}
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