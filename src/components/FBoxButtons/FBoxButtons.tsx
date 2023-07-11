import React, { useState } from "react";

import styles from './FBoxButtons.module.scss';

type FBoxButtonsProps = {
    name: string;
    href?: string;
    hover: any;
}

export function FBoxButtons(props: FBoxButtonsProps) {
    const [isHover, setIsHover] = useState(false);

    return (
        <div
            className={styles.Box}
            onFocus={
                () => {
                    setIsHover(true)
                    props.hover = isHover
                }
            }
        >
            <div className={styles.ButtonName}>
                {props.name}
            </div>
        </div>
    );
}