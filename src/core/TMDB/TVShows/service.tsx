import BaseTMDBService from '../BaseTMDBService';
import { BaseListParams, BaseDetailsParams } from '@app/core/models/Params';

class TVShowsService extends BaseTMDBService {

    getPopular = (params: BaseListParams) => {
        return this.getWithParams('/tv/popular', params);
    }

    getLatest = (params: BaseListParams) => {
        return this.getWithParams('/tv/latest', params);
    }

    getOnAirOnWeek = (params: BaseListParams) => {
        return this.getWithParams('/tv/on_the_air', params);
    }

    getOnAirToday = (params: BaseListParams) => {
        return this.getWithParams('/tv/airing_today', params);
    }

    getDetails = (id: number, params: BaseDetailsParams) => {
        return this.getWithParams(`/tv/${id}`, params);
    }

}

export default TVShowsService;