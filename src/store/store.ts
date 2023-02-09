import { configureStore } from '@reduxjs/toolkit';
import images, { ImagesStore } from './images';

export interface StoreState {
    images: ImagesStore
}
export default configureStore({
    reducer: {
        images
    },
});
