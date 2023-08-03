import React from "react";

import styles from './PublicationBlock.module.scss'

type PublicationBlockProps = {
    pubId: string,
    pubName: string,
    pubShortName: string,
    pubFile: string;
};

export function PublicationBlock(props: PublicationBlockProps): JSX.Element {
    return (
        <a href={props.pubFile} target="_blank" rel="noopener noreferrer" download={`${props.pubShortName}.pdf`}>
            <div className={styles.CardBlock}>
                <div className={styles.ProdText}>{props.pubName}</div>
            </div>
        </a>
    );
}