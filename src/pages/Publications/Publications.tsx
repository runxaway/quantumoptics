import React from "react";

import styles from './Publications.module.scss'


const Publications = (): JSX.Element => {
    window.scrollTo(0, 0);

    return (
        <>
            <div className={styles.PublicationsBody}>
                <div className={styles.ProdLabel}>
                    <div className={styles.Name}>Публикации</div>
                </div>
                <div className={styles.Block}>
                </div>
            </div>
            <div className={styles.Copy}>ООО «Квантовая оптика» Copyright © 2023</div>
        </>
    );
}

export default Publications;