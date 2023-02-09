import React from 'react';
import styles from './ImgFrame.module.css';

interface ImageProps {
    src: string;
    alt?: string;
    title?: string;
    selected?: boolean;
}
export default function ImgFrame({ src, alt, title, selected }: ImageProps) {
    return <div className={`${styles.frame} ${selected && styles.selected}`}>
        <div className={styles.crop}>
            <img
                src={src}
                alt={alt}
                title={title}
                loading="lazy"
            />
        </div>
    </div>
}
