import React from "react";
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';

import styles from './AboutProduct.module.scss'

import data from '../../../products.json'

const AboutProduct = (): JSX.Element => {
    window.scrollTo(0, 0);
    const navigate = useNavigate();

    const { productId } = useParams() as { productId: string };
    const { subProductId } = useParams() as { subProductId: string };
    let subProductCount = data.Products[parseInt(productId)].subProducts[parseInt(subProductId.slice(1))].subProductCount;

    return (
        <>
            <div className={styles.AboutBody}>
                <div className={styles.ButtonBack} onClick={() => navigate(-1)}>
                    <div className={styles.ButtonName}>
                        Вернуться назад
                    </div>
                </div>
                <div className={styles.Block}>
                    <div className={styles.TopBlockWrapper}>
                        <div className={styles.AboutImageContainer}>
                            <img
                                className={styles.AboutImage}
                                src={`../../../images/subproducts/${subProductId}.png`}
                            />
                        </div>
                        <div className={styles.TextBlock}>
                            <div className={styles.TextLabel}>{data.Products[parseInt(productId)].subProducts[parseInt(subProductId.slice(1))].subProductName}</div>
                            <div className={styles.Line}></div>
                            <div className={styles.Usage}>Области применения</div>
                            <div className={styles.TextAbout}>{data.Products[parseInt(productId)].subProducts[parseInt(subProductId.slice(1))].subProductUse}</div>
                        </div>
                    </div>
                    <table className={styles.TableContainer}>
                        <tbody className={styles.AboutTable}>
                            {data.Products[parseInt(productId)].subProducts[parseInt(subProductId.slice(1))].subProductTable?.map((el, idx) => {
                                return (
                                    <tr key={idx}>
                                        {idx === 0 ?
                                            <td className={styles.TableNameWrap} rowSpan={2}>
                                                {el.elemName}
                                            </td>
                                        : idx === 1 ? '' :
                                            <td className={styles.TableName}>
                                                {el.elemName}
                                            </td>
                                        }
                                        {el.elemValue.map((e, i) => {
                                            return (
                                                <td key={i} className={styles.TableElem} colSpan={idx === 0 && subProductCount ? subProductCount : el.elemValue.length == 1 && subProductCount ? subProductCount : 1}>
                                                    {e}
                                                </td>
                                            );
                                        })}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className={styles.Copy}>ООО «Квантовая оптика» Copyright © 2023</div>
        </>
    );
}

export default AboutProduct;