import React, { BaseSyntheticEvent, useState } from "react";

import styles from './FBoxButtons.module.scss';

type FBoxButtonsProps = {
    id: number;
    name: string;
    href?: string;
    hover: any;
}

export function FBoxButtons(props: FBoxButtonsProps) {

    const checkFocus = () => {
        props.hover(true, props.id);
    }

    return (
        <div
            className={styles.Box}
            onMouseEnter={checkFocus}
        >
            <div className={styles.ButtonName}>
                {props.name}
            </div>
        </div>
    );
}