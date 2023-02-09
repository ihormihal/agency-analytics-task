import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Image } from '../interfaces/Image.interface';

export interface ImagesStore {
    images: Image[];
    selectedId: string | undefined;
}

export const images = createSlice({
    name: 'images',
    initialState: {
        images: [],
        selectedId: undefined
    } as ImagesStore,
    reducers: {
        setImages: (state, action: PayloadAction<Image[]>) => {
            state.images = [...action.payload].sort((a, b) => {
                if ( a.createdAt < b.createdAt ) return 1;
                if ( a.createdAt > b.createdAt ) return -1;
                return 0;
            });
        },
        selectImageId: (state, action: PayloadAction<string | undefined>) => {
            state.selectedId = action.payload;
        },
        deleteImage: (state, action: PayloadAction<string>) => {
            state.images = state.images.filter((image) => image.id !== action.payload);
            state.selectedId = undefined;
        },
        toggleFavorite: (state, action: PayloadAction<string>) => {
            state.images = state.images.map((image) => ({
                ...image,
                favorited: action.payload === image.id ? !image.favorited : image.favorited
            }))
        }
    },
});

export const { setImages, selectImageId, deleteImage, toggleFavorite } = images.actions;
export default images.reducer;
