import React from "react";

import styles from './PublicationsMobile.module.scss'

import { PublicationBlockMobile } from "../../components/PublicationBlockMobile/PublicationBlockMobile";

import pub0 from "../../files/pub0.pdf"
import pub1 from "../../files/pub1.pdf"
import pub2 from "../../files/pub2.pdf"
import pub3 from "../../files/pub3.pdf"
import pub4 from "../../files/pub4.pdf"
import pub5 from "../../files/pub5.pdf"

const PublicationsMobile = (): JSX.Element => {
    window.scrollTo(0, 0);

    const publications = [
        {
            pubId: '0',
            pubName: 'Искандаров М.О., Никитичев А.А., Свердлов М.А., Тер-Мартиросян А.Л. Твердотельные лазеры ближнего ИК - диапазона с диодной накачкой. Научное приборостроение, т. 25, № 4 (2015), с. 67 - 70.',
            pubShortName: 'Твердотельные лазеры ближнего ИК',
            pubFile: pub0
        },
        {
            pubId: '1',
            pubName: 'Искандаров М.О., Никитичев А.А., Свердлов М.А., Тер-Мартиросян А.Л. Твердотельный лазер безопасного для глаза спектрального диапазона с диодной накачкой. Научное приборостроение, т. 25, № 3 (2015), с. 124-126.',
            pubShortName: 'Твердотельный лазер безопасного для глаза спектрального диапазона',
            pubFile: pub1
        },
        {
            pubId: '2',
            pubName: 'Бученков В.А., Демидов Д.М., Искандаров М.О., Кацавец Н.И., Леус Р.В., Никитичев А.А., Тер-Мартиросян А.Л. Мощные высокоэффективные квазинепрерывные лазерные линейки для накачки твердотельных лазеров на основе Yb-содержащих активных сред. Письма в "Журнал технической физики", т. 30 (2004), вып. 24, с. 43-48.',
            pubShortName: 'Мощные высокоэффективные квазинепрерывные лазерные линейки',
            pubFile: pub2
        },
        {
            pubId: '3',
            pubName: 'Iskandarov M.O., Nikitichev A.A., Stepanov A.I. Solid-state diode pumped eye-safe lasers in remote sensing and ecological monitoring systems. Proc. SPIE Vol. 4900 (2002), p. 1085 – 1089.',
            pubShortName: 'Solid-state diode pumped eue-safe lasers in remote sensing and ecological monitoring systems - 14.02.17 - 13-39',
            pubFile: pub3
        },
        {
            pubId: '4',
            pubName: 'Искандаров М.О., Никитичев А.А., Степанов А.И. Квазидвухуровневый Er3+:Y3Al5O12 лазер 1.6 мкм диапазона. Оптический журнал, т. 68 (2001), №12, с. 23-27.',
            pubShortName: 'Квазидвухуровневый Er лазер 16 мкм диапазона - 14.02.17 - 13-52',
            pubFile: pub4
        },
        {
            pubId: '5',
            pubName: 'Никитичев А.А., Степанов А.И. Лазеры двухмикронного диапазона для оптического мониторинга. Оптический журнал, т. 66 (1999), вып. 8, с. 57-64.',
            pubShortName: 'Лазеры двухмикронного диапазона для оптического мониторинга - 14.02.17 - 13-44',
            pubFile: pub5
        }
    ];

    return (
        <>
            <div className={styles.PublicationsBody}>
                <div className={styles.ProdLabel}>
                    <div className={styles.Name}>Публикации</div>
                </div>
                <div className={styles.Block}>
                    <div className={styles.PublicationsWrapper}>
                        {publications.map((pub) => {
                            return (
                                <PublicationBlockMobile
                                    key={pub.pubId}
                                    pubId={pub.pubId}
                                    pubName={pub.pubName}
                                    pubShortName={pub.pubShortName}
                                    pubFile={pub.pubFile}
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

export default PublicationsMobile;