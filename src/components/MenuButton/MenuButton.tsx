import React from "react";
import { Link } from 'react-router-dom';

import { ROUTES } from '@constants/Routes';

import styles from './MenuButton.module.scss'

type ButtonProps = {
    label: string;
    href: string;
};

export function MenuButton(props: ButtonProps): JSX.Element {
    return (
        <div className={styles.MenuButtonContainer}>
            <Link
                key={props.href}
                to={{
                    pathname: ROUTES.$(props.href).END
                }}
            >
                <div className={styles.MenuButton}>
                    <div className={styles.ButtonLabel}>{props.label}</div>
                </div>
            </Link>
        </div>
    );
}