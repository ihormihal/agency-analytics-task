import React from 'react';
import styles from './HeartButton.module.css';

interface HeartButtonProps {
    isActive?: boolean;
    onPress?: () => void;
}
export default function HeartButton({isActive, onPress}: HeartButtonProps) {
    return (<button
        className={`${styles.button} ${isActive && styles.active}`}
        onClick={onPress}
    />);
}
