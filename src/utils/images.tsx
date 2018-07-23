import { TMDB_IMAGE_BASE_URL } from '@app/config/constants';

export const getImage = (imageUrl: string, size: string) => {
    return `${TMDB_IMAGE_BASE_URL}/${size}${imageUrl}`;
};