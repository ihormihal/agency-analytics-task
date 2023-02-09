import React from 'react';
import ImageInfo from './ImageInfo/ImageInfo';
import { Image } from '../../interfaces/Image.interface';
import HeartButton from '../Buttons/HeartButton/HeartButton';
import Button from '../Buttons/Button/Button';
import { bytesToMegaBytes } from '../../utils/app.utils';
import ImgFrame from '../ImgFrame/ImgFrame';
import Description from '../Description/Description';
import styles from './SelectedImage.module.css';

interface SelectedImageProps {
    image: Image;
    toggleFavorite: (id: string) => void;
    onDelete: (id: string) => void;
}
export default function SelectedImage(props: SelectedImageProps) {
    const { image, toggleFavorite, onDelete } = props;
    return (<div className={styles.wrapper}>
        <figure>
            <ImgFrame
                src={image.url}
                alt={image.filename}
                title={image.description}
            />
            <div className={styles.footer}>
                <figcaption>
                    <div className={styles.filename}>{image.filename}</div>
                    <div className={styles.size}>{bytesToMegaBytes(image.sizeInBytes)}</div>
                </figcaption>
                <HeartButton
                    isActive={image.favorited}
                    onPress={() => toggleFavorite(image.id)} />
            </div>
        </figure>
        <ImageInfo image={image} />
        { image.description && <Description text={image.description} /> }
        <Button className={styles.topMargin} styleDelete onPress={() => onDelete(image.id)}>Delete</Button>
    </div>)
}
