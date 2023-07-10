import React from "react";

import styles from './MenuButton.module.scss'

type ButtonProps = {
    label: string;
    href?: string;
};

export function MenuButton(props: ButtonProps) : JSX.Element {
    return (
        <div className={styles.MenuButton}>
            <div className={styles.ButtonLabel}>{props.label}</div>
        </div>  
    );
}