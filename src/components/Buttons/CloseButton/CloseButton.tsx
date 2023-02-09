import React from 'react';
import styles from './CloseButton.module.css';

interface CloseButtonProps {
    onPress?: () => void;
}
export default function CloseButton({onPress}: CloseButtonProps) {
    return (<button
        className={styles.button}
        onClick={onPress}
    />);
}
