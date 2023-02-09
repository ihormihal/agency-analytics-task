import React from 'react';
import styles from './Description.module.css';

interface DescriptionProps {
    text: string
}
export default function Description({ text }: DescriptionProps) {
    return (<section className={styles.wrapper}>
        <h2>Description</h2>
        <p className={styles.text}>{text}</p>
    </section>)
}
