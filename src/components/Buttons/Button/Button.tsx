import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
    children: string | JSX.Element | JSX.Element[];
    onPress?: () => void;
    className?: string;
    styleDelete?: boolean;
}
export default function Button({children, onPress, className, styleDelete}: ButtonProps) {
    return (<button
        className={`${styles.button} ${styleDelete && styles.delete} ${className}`}
        onClick={onPress}>{children}</button>);
}
