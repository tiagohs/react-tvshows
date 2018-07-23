import BaseService from '@app/core//shared/BaseService';
import { TMDB_BASE_URL, TMDB_API_KEY } from '@app/config/constants';

class BaseTmdbService extends BaseService {

    constructor() {
        super(TMDB_BASE_URL, {
            api_key: TMDB_API_KEY
        });
    }
 
}

export default BaseTmdbService;