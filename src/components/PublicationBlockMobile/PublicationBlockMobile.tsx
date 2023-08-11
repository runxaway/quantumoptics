import React from "react";

import styles from './PublicationBlockMobile.module.scss'

type PublicationBlockMobileProps = {
    pubId: string,
    pubName: string,
    pubShortName: string,
    pubFile: string;
};

export function PublicationBlockMobile(props: PublicationBlockMobileProps): JSX.Element {
    return (
        <a href={props.pubFile} target="_blank" rel="noopener noreferrer" download={`${props.pubShortName}.pdf`}>
            <div className={styles.CardBlock}>
                <div className={styles.ProdText}>{props.pubName}</div>
            </div>
        </a>
    );
}