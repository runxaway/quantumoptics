import React, { BaseSyntheticEvent, useState } from "react";

import styles from './FBoxButtons.module.scss';

type FBoxButtonsProps = {
    name: string;
    href?: string;
    hover: any;
    sendName: any;
}

export function FBoxButtons(props: FBoxButtonsProps) {
    const [isHover, setIsHover] = useState(false);

    const checkFocus = () => {
        // !isHover ? setIsHover(true) : setIsHover(false);
        // props.hover(isHover);
        props.sendName(props.name);
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