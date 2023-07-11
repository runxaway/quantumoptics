import React from "react";

import styles from './FBoxButtons.module.scss';

type FBoxButtonsProps = {
    name: string;
    href?: string;
}

export function FBoxButtons(props: FBoxButtonsProps) {
    return (
        <div className={styles.Box}>
            <div className={styles.ButtonName}>
                {props.name}
            </div>
        </div>
    );
}