import React from "react";

import styles from './Header.module.scss'
import { MenuButton } from "../MenuButton/MenuButton";
import { SBox } from "../SBox/SBox";

export function Header(): JSX.Element {
    return (
        <div className={styles.HeaderMenu}>
            <div className={styles.Logo}>Квантовая оптика</div>
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
            <ul className={styles.MenuButtonWrapper}>
                <MenuButton
                    label="Продукция"
                />
                <MenuButton
                    label="Публикации"
                />
                <MenuButton
                    label="Контакты"
                />
            </ul>
            {/* <SBox>DAD</SBox> */}
        </div>
    );
}