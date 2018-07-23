import axios, { AxiosInstance } from 'axios';

abstract class BaseService {
    private request: AxiosInstance;
    private baseUrl: string;
    private timeout: number = 10000;

    // tslint:disable-next-line:no-any
    constructor(baseUrl: string, params: any, timeout: number = 10000) {
        this.request = axios.create({
            baseURL: baseUrl,
            timeout: timeout,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            },
            params: params
        });

        this.baseUrl = baseUrl;
        this.timeout = timeout;
    }

    get(urlPath: string) {
        const source = axios.CancelToken.source();

        setTimeout(() => {
          source.cancel();
        },         this.timeout);

        return this.request
                .get(urlPath, { cancelToken: source.token })
                .then(resp => resp)
                .catch(error => {
                    // tslint:disable-next-line:no-console
                    console.log(error);
                });
    }

    getWithParams(urlPath: string, params: Object) {
        return this.request
                .get(urlPath, {
                    params,
                })
                .then(resp => resp)
                .catch(error => {
                    // tslint:disable-next-line:no-console
                    console.log(error);
                 });
    }

    post(data: Object) {
        return this.request
                .post(this.baseUrl, data)
                .then(resp => resp)
                .catch(error => {
                    // tslint:disable-next-line:no-console
                    console.log(error);
                });
    }

}

export default BaseService;