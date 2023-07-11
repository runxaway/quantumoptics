import React, { BaseSyntheticEvent, useState } from "react";

import styles from './FBoxButtons.module.scss';

type FBoxButtonsProps = {
    name: string;
    href?: string;
    hover: any;
}

export function FBoxButtons(props: FBoxButtonsProps) {
    const [isHover, setIsHover] = useState(false);

    const checkFocus = (focus: any) => {
        focus ? setIsHover(true) : setIsHover(false);
        props.hover(focus);
        console.log(focus, isHover)
    }

    return (
        <div
            className={styles.Box}
            onClick={checkFocus}
        >
            <div className={styles.ButtonName}>
                {props.name}
            </div>
        </div>
    );
}