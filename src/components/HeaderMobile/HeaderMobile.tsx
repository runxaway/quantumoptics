import React from "react";
import { Link } from 'react-router-dom';

import { ROUTES } from '../../constants/Routes';

import styles from './HeaderMobile.module.scss'
import { MenuButton } from "../MenuButton/MenuButton";

export function HeaderMobile(): JSX.Element {
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
                        +7-921-888-88-55
                    </li>
                    <li>
                        Адрес: Санкт-Петербург, Белоостровская, 22
                    </li>
                </ul>
            </div>
            {/* <div className={styles.MenuButtonWrapper}>
                <MenuButton
                    label='Продукция'
                    href={'products'}
                />
                <MenuButton
                    label="Публикации"
                    href={'publications'}
                />
                <MenuButton
                    label="Контакты"
                    href={'contacts'}
                />
            </div> */}
        </div>
    );
}