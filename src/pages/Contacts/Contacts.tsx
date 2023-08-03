import React from "react";

import styles from './Contacts.module.scss'

const Contacts = (): JSX.Element => {
    window.scrollTo(0, 0);

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
                            <div className={styles.TextWrapper}>
                                <div className={styles.TextLabel}>Почтовый адрес:</div>
                                <div className={styles.TextAbout}>199178, г. Санкт-Петербург, 15 линия ВО, д.12, к. А</div>
                            </div>
                        </div>
                        <div className={styles.MapBlock}>
                            <div className={styles.MapBorder}></div>
                        </div>
                    </div>
                    <div className={styles.BottomBlock}></div>
                </div>
            </div>
            <div className={styles.Copy}>ООО «Квантовая оптика» Copyright © 2023</div>
        </>
    );
}

export default Contacts;