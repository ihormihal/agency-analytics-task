import React from 'react';
import styles from './Tabs.module.css';

export enum TAB {
    RECENT = 'RECENT',
    FAVORITE = 'FAVORITE'
}

export interface Tab {
    id: TAB;
    label: string;
}

interface TabsProps {
    tabs: Tab[];
    currentId: TAB;
    onChange?: (id: TAB) => void;
}

export default function Tabs({ tabs, currentId, onChange }: TabsProps) {
    return (<nav className={styles.tabs} role="tablist">
        {tabs.map((t) => (
            <div className={`${styles.tab} ${currentId === t.id && styles.active}`}
                 key={t.id}
                 role="tab"
                 onClick={() => onChange && onChange(t.id)}
            >{t.label}</div>))}
    </nav>)
}
