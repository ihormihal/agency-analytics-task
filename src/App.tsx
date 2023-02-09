import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setImages, deleteImage, selectImageId, toggleFavorite } from './store/images';
import { StoreState } from './store/store';
import Images from './components/Images/Images';
import SelectedImage from './components/SelectedImage/SelectedImage';
import Tabs, { TAB } from './components/Tabs/Tabs';
import { HOME_TABS } from './constants/app.constants';
import CloseButton from './components/Buttons/CloseButton/CloseButton';
import styles from './App.module.css'

function App() {
    const dispatch = useDispatch();
    const [currentTabId, setCurrentTabId] = useState<TAB>(TAB.RECENT);
    const { images, selectedId } = useSelector((state: StoreState) => state.images);
    const selectedImage = selectedId ? images.find((image) => image.id === selectedId) : undefined;

    useEffect(() => {
        fetch('https://agencyanalytics-api.vercel.app/images.json')
            .then((res) => res.json())
            .then((images) => dispatch(setImages(images)))
    }, []);

    const checkSelectedImage = (tabId: TAB, isFavorite: boolean = false) => {
        console.log('checkSelectedImage', tabId, isFavorite)
        if (tabId === TAB.FAVORITE && !isFavorite) {
            dispatch(selectImageId(undefined));
        }
    };

    const handleChangeTab = (tab: TAB) => {
        checkSelectedImage(tab, selectedImage?.favorited);
        setCurrentTabId(tab);
    }

    const handleSelect = (id: string) => {
        dispatch(selectImageId(id));
    }

    const handleUnselect = () => {
        dispatch(selectImageId(undefined));
    }

    const handleDelete = (id: string) => {
        dispatch(deleteImage(id));
    }

    const handleToggleFavorite = (id: string) => {
        checkSelectedImage(currentTabId, !selectedImage?.favorited);
        dispatch(toggleFavorite(id));
    }

    return (
        <div className={styles.page}>
            <main className={`${styles.main} ${selectedImage && styles.sidebarOpened}`}>
                <header className={styles.header}>
                    <h1>Photos</h1>
                    <Tabs
                        tabs={HOME_TABS}
                        currentId={currentTabId}
                        onChange={handleChangeTab} />
                </header>
                <Images
                    images={currentTabId === TAB.FAVORITE ? images.filter((image) => image.favorited) : images }
                    selectedId={selectedId}
                    onSelect={handleSelect}
                />
            </main>
            { selectedImage && <aside className={styles.aside}>
                <div className={styles.asideHeader}>
                    <CloseButton onPress={handleUnselect} />
                </div>
                <SelectedImage
                    image={selectedImage}
                    toggleFavorite={handleToggleFavorite}
                    onDelete={handleDelete}
                />
            </aside> }
        </div>
      );
}

export default App;
