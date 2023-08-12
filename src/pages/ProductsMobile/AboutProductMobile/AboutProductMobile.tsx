import React from "react";
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';

import styles from './AboutProductMobile.module.scss';

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

import data from '../../../products.json';

const AboutProductMobile = (): JSX.Element => {
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
                                src={subProductId === '00' ? s00 :
                                        subProductId === '01' ? s01 :
                                            subProductId === '02' ? s02 :
                                                subProductId === '03' ? s03 :
                                                    subProductId === '10' ? s10 :
                                                        subProductId === '11' ? s11 :
                                                            subProductId === '12' ? s12 :
                                                                subProductId === '20' ? s20 :
                                                                    subProductId === '21' ? s21 :
                                                                        subProductId === '30' ? s30 : ''}
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
                <div className={styles.Copy}>ООО «Квантовая оптика» Copyright © 2023</div>
            </div>
        </>
    );
}

export default AboutProductMobile;