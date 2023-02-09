import React from 'react';
import styles from './InfoRow.module.css';

interface InfoRowProps {
    label: string;
    value: string;
    first?: boolean;
}
export default function InfoRow(props: InfoRowProps) {
    const { label, value, first } = props;
    return (<dl className={`${styles.row} ${first && styles.first}`}>
        <dt className={styles.label}>{label}</dt>
        <dd className={styles.value}>{value}</dd>
    </dl>)
}
