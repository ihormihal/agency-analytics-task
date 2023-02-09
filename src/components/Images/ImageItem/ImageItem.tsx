import React from 'react';
import { Image } from '../../../interfaces/Image.interface';
import { bytesToMegaBytes } from '../../../utils/app.utils';
import ImgFrame from '../../ImgFrame/ImgFrame';
import styles from './ImageItem.module.css';

interface ImageItemProps {
    image: Image;
    selected?: boolean;
    onSelect: () => void;
}
export default function ImageItem(props: ImageItemProps) {
    const { image, selected, onSelect } = props;
    return (<div className={styles.wrapper} onClick={onSelect}>
        <figure>
            <ImgFrame
                src={image.url}
                alt={image.filename}
                title={image.description}
                selected={selected}
            />
            <figcaption>
                <div className={styles.filename}>{image.filename}</div>
                <div className={styles.size}>{bytesToMegaBytes(image.sizeInBytes)}</div>
            </figcaption>
        </figure>
    </div>)
}
