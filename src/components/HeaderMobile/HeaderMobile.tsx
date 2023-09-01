import React, { useState } from "react";
import { Link } from 'react-router-dom';

import { ROUTES } from '../../constants/Routes';

import styles from './HeaderMobile.module.scss'

import { MenuButtonMobile } from "../MenuButtonMobile/MenuButtonMobile";

import lines from '../../images/LinesBurger.svg';
import close from '../../images/close.svg';

export function HeaderMobile(): JSX.Element {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
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
                            Санкт-Петербург, Белоостровская, 22
                        </li>
                    </ul>
                </div>
                <div
                    className={isOpen ? styles.BurgerMenuActive : styles.BurgerMenu}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <img
                        className={styles.Lines}
                        src={isOpen ? close : lines}
                    />
                </div>
            </div>
            <div
                className={isOpen ? styles.MenuBlockActive : styles.MenuBlock}
            >
                <div className={styles.MenuButtonWrapper} onClick={() => setIsOpen(!isOpen)}>
                    <MenuButtonMobile
                        label='Продукция'
                        href={'products'}
                    />
                    <MenuButtonMobile
                        label="Публикации"
                        href={'publications'}
                    />
                    <MenuButtonMobile
                        label="Контакты"
                        href={'contacts'}
                    />
                </div>
            </div>
        </>
    );
}