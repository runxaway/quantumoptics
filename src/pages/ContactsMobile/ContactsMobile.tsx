import React from "react";
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

import photo from '../../images/photo.jpg';

import styles from './ContactsMobile.module.scss'

const ContactsMobile = (): JSX.Element => {
    window.scrollTo(0, 0);

    const defaultState = {
        center: [59.98701999279996, 30.317567368884085],
        zoom: 14,
    };

    return (
        <>
            <div className={styles.СontactsBody}>
                <div className={styles.ProdLabel}>
                    <div className={styles.Name}>Контакты</div>
                </div>
                <div className={styles.Block}>
                    <div className={styles.TopBlockWrapper}>
                        <div className={styles.AboutUsBlock}>
                            <div className={styles.TextWrapper}>
                                <div className={styles.TextLabel}>Директор:</div>
                                <div className={styles.TextAbout}>Никитичев Алексей Алексеевич, кандидат ф.-м. наук</div>
                            </div>
                            <div className={styles.TextWrapper}>
                                <div className={styles.TextLabel}>E-mail:</div>
                                <div className={styles.TextAbout}>info@quantumoptics.ru</div>
                            </div>
                            <div className={styles.TextWrapper}>
                                <div className={styles.TextLabel}>Телефон:</div>
                                <div className={styles.TextAbout}>+7 (812) 660-56-26</div>
                            </div>
                            <div className={styles.TextWrapper} style={{marginBottom: '-10px'}}>
                                <div className={styles.TextLabel}>Почтовый адрес:</div>
                                <div className={styles.TextAbout}>197342, Санкт-Петербург, Белоостровская, 22, офис 415</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.MapBlock}>
                            <div className={styles.MapBorder}>
                                <YMaps>
                                    <Map defaultState={defaultState} className={styles.Map}>
                                        <Placemark geometry={[59.98701999279996, 30.317567368884085]}/>
                                    </Map>
                                </YMaps>
                            </div>
                        </div>
                    <div className={styles.BottomBlock}>
                        <div className={styles.ContactImageBorder}>
                            <img
                                className={styles.ContactImage}
                                src={photo}
                            />
                        </div>
                        <div className={styles.ContactText}>
                            <p>Компания «Квантовая оптика» создана в 2011 году с целью выполнения наукоемких проектов по разработке, производству и внедрению лазерных приборов и систем.
                            Приоритетным направлением деятельности компании являются научные исследования и разработки, направленные на создание твердотельных лазеров нового поколения с диодной накачкой и современных оптико-электронных систем для жестких условий эксплуатации.</p>
                            <br/>
                            <p>Высокая квалификация сотрудников компании позволяет в сжатые сроки выполнять полный цикл работ от НИР и ОКР до производства и адаптации оборудования у конкретного потребителя, сократить стоимость создания нового продукта.
                            Компания использует современную элементную базу, новые материалы и технологии.</p>
                            <br/>
                            <p>Постоянно ведется поиск новых принципов построения лазерных систем, совершенствуются конструкторские решения, внедряются новые технологические процессы.
                            Заказчику предлагается техническое сопровождение на этапе освоения новой лазерной техники и сервисное обслуживание действующего оборудования.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.Copy}>ООО «Квантовая оптика» Copyright © 2023</div>
        </>
    );
}

export default ContactsMobile;