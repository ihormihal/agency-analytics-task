import React  from 'react';
import ImageItem from './ImageItem/ImageItem';
import { Image } from '../../interfaces/Image.interface';
import styles from './Images.module.css';

interface ImagesProps {
    images: Image[];
    selectedId: string | undefined;
    onSelect: (id: string) => void;
}
export default function Images(props: ImagesProps) {
    const { images, selectedId, onSelect } = props;

    return (<section className={styles.images}>
        <div className={`${styles.grid} ${selectedId && styles.sidebarOpened}`}>
            {images.map((image, i) => <div key={image.id} className={styles.item}>
                <ImageItem
                    image={image}
                    selected={image.id === selectedId}
                    onSelect={() => onSelect(image.id)}
                />
            </div>)}
        </div>
    </section>)
}
