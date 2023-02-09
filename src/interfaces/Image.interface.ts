export interface Image {
    id: string;
    url: string;
    filename: string;
    description?: string;
    uploadedBy: string;
    createdAt: string;
    updatedAt: string;
    dimensions: ImageDimensions,
    resolution: ImageDimensions,
    sizeInBytes: number;
    sharedWith: ShareUser[];
    favorited: boolean;
}

export interface ImageDimensions {
    height: number;
    width: number;
}

export interface ShareUser {
    id: string;
    name: string;
    avatar: string;
}
