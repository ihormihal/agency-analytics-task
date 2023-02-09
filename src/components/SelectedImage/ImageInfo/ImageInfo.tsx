import React from 'react';
import moment from 'moment';
import {Image} from '../../../interfaces/Image.interface';
import InfoRow from '../../InfoRow/InfoRow';
import styles from './ImageInfo.module.css';

interface ImageInformationProps {
    image: Image
}
export default function ImageInfo(props: ImageInformationProps) {
    const { image } = props;

    return (<section className={styles.wrapper}>
        <h2>Information</h2>
        <InfoRow label={'Updated by'} value={image.uploadedBy} first />
        <InfoRow label={'Created'} value={moment(image.createdAt).format('LL')} />
        <InfoRow label={'Last modified'} value={moment(image.updatedAt).format('LL')} />
        <InfoRow label={'Dimensions'} value={`${image.dimensions.width} x ${image.dimensions.height}`} />
        <InfoRow label={'Resolution'} value={`${image.resolution.width} x ${image.resolution.height}`} />
    </section>)
}
