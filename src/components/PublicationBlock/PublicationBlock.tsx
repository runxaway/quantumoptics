import React from "react";
import { Link } from 'react-router-dom';

import styles from './PublicationBlock.module.scss'

type PublicationBlockProps = {
    pubId: string,
    pubName: string,
    pubShortName: string,
    pubFile: string;
};

export function PublicationBlock(props: PublicationBlockProps): JSX.Element {
    return (
            // <Link
            //     key={props.pubId}
            //     to={props.pubFile}
            //     download={props.pubShortName}
            //     target="_blank"
            //     rel="noopener noreferrer"
            //     className={styles.Blocka}
            // >
            <a href={props.pubFile} target="_blank" rel="noopener noreferrer" download={props.pubShortName}>
                <div className={styles.CardBlock}>
                    <div className={styles.ProdText}>{props.pubName}</div>
                </div>
            </a>
            // </Link>
    );
}