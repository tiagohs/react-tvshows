
import { AxiosResponse } from 'axios';

import { ListResult } from '@app/core/models/List';
import { BaseTVShow, TVShow } from '@app/core/models/TVShow';
import { BaseListParams } from '@app/core/models/Params';

import TVShowsService from './service';

class TVShowsController {
    private service: TVShowsService;

    constructor() {
        this.service = new TVShowsService();
    }

    getDetails = (id: number, appendToResponse: string[]) => {
        const params = {
            language: 'pt_BR',
            append_to_reponse: appendToResponse ? appendToResponse.join(',') : '',
        };

        this.service.getDetails(id, params)
                    .then((response: AxiosResponse): TVShow => response.data);
    }

    getPopular = (page: number = 1) => {
        return this.service.getPopular(this.createDefaultListParams(page))
                            .then((response: AxiosResponse): ListResult<BaseTVShow> => response.data);
    }

    getLatest = (page: number = 1) => {
        return this.service.getLatest(this.createDefaultListParams(page))
                            .then((response: AxiosResponse): ListResult<BaseTVShow> => response.data);
    }

    getOnAirOnWeek = (page: number = 1) => {
        return this.service.getOnAirOnWeek(this.createDefaultListParams(page))
                            .then((response: AxiosResponse): ListResult<BaseTVShow> => response.data);
    }

    getOnAirToday = (page: number = 1) => {
        return this.service.getOnAirToday(this.createDefaultListParams(page))
                            .then((response: AxiosResponse): ListResult<BaseTVShow> => response.data);
    }

    // TODO Language Support

    createDefaultListParams = (page: number): BaseListParams => {
        return {
            language: 'pt-BR',
            page
        };
    }

}

export default TVShowsController;