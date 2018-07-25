import { TMDB_IMAGE_BASE_URL } from '@app/config/constants';

export const getImage = (imageUrl: (string | undefined), size: string) => {
    return `${TMDB_IMAGE_BASE_URL}/${size}${imageUrl}`;
};