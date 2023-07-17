import React from "react";

import styles from './SBox.module.scss'

type SBoxProps = {
    children?: JSX.Element[];
};

export function SBox({children}: SBoxProps): JSX.Element {
    return (
        <div className={styles.BorderBox}>
            {children}
        </div>
    );
}