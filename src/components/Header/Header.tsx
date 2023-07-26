import React from "react";
import { Link } from 'react-router-dom';

import { ROUTES } from '@constants/Routes';

import styles from './Header.module.scss'
import { MenuButton } from "../MenuButton/MenuButton";

export function Header(): JSX.Element {
    return (
        <div className={styles.HeaderMenu}>
            <div className={styles.Logo}>
                <Link
                    key={'home'}
                    to={{
                        pathname: ROUTES.HOME.END
                    }}
                >
                    Квантовая оптика
                </Link>
            </div>
            <div className={styles.Adress}>
                <ul>
                    <li>
                        +7-999-99-99
                    </li>
                    <li>
                        Адрес: Санкт-Петербург, Белоостровская, 21
                    </li>
                </ul>
            </div>
            <div className={styles.MenuButtonWrapper}>
                <MenuButton
                    label='Продукция'
                    href={'products'}
                />
                <MenuButton
                    label="Публикации"
                />
                <MenuButton
                    label="Контакты"
                />
            </div>
        </div>
    );
}