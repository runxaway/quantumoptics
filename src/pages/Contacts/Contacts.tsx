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
                </div>
            </div>
            <div className={styles.Copy}>ООО «Квантовая оптика» Copyright © 2023</div>
        </>
    );
}

export default Contacts;