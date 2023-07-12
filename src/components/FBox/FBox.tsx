import React from "react";

import styles from './FBox.module.scss'

type SBoxProps = {
    children?: React.ReactChild[];
}

export function FBox({children}: SBoxProps): JSX.Element {
    return (
        <div className={styles.BorderBox}>
            {children}
        </div>
    );
}