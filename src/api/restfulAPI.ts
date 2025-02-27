import { request } from '@playwright/test';
import { APIUtils } from '../../utils/apiUtils';
import apiData from '../../test-data/apiData.json';
import env from '../../test-data/env.json';
import apiHeaders from '../../test-data/apiHeaders.json'

export default class RestfulAPI {
    private apiUtils: APIUtils;

    constructor() {
        this.apiUtils;
    }

    async addNewObject(): Promise<any> {
        const apiContext = await request.newContext({
            baseURL: env.api.apiBaseUrl,
            extraHTTPHeaders: {
                accept: apiHeaders.headers.accept,
                'Content-Type': apiHeaders.headers['Content-Type'],
            },
        });
    
        const apiUtils = new APIUtils(apiContext);
        const requestBody = apiData.createObject;
        const responseBody = await apiUtils.post(env.api.path, requestBody);
        return responseBody;
    }
    

    async getObjectById(id:any): Promise<any> {
        const apiContext = await request.newContext({
            baseURL: env.api.apiBaseUrl,
            extraHTTPHeaders: {
                accept: apiHeaders.headers.accept,
                'Content-Type': apiHeaders.headers['Content-Type'],
            },
        });
    
        const apiUtils = new APIUtils(apiContext);
        const path = `${env.api.path}/${id}`;
        const responseBody = await apiUtils.getById(path);
        return responseBody;
    }

    async getAllObjects(): Promise<any> {
        const apiContext = await request.newContext({
            baseURL: env.api.apiBaseUrl,
            extraHTTPHeaders: {
                accept: apiHeaders.headers.accept,
                'Content-Type': apiHeaders.headers['Content-Type'],
            },
        });
    
        const apiUtils = new APIUtils(apiContext);
        const path = `${env.api.path}`;
        const responseBody = await apiUtils.getAll(path);
        return responseBody;
    }

    async patchExistingObject(id:any,name:any): Promise<any> {
        const apiContext = await request.newContext({
            baseURL: env.api.apiBaseUrl,
            extraHTTPHeaders: {
                accept: apiHeaders.headers.accept,
                'Content-Type': apiHeaders.headers['Content-Type'],
            },
        });
    
        const apiUtils = new APIUtils(apiContext);
        const path = `${env.api.path}/${id}`;
        const requestBody = apiData.createObject;
        requestBody.name= name;
        const responseBody = await apiUtils.put(path, requestBody);
        return responseBody;
    }

    async updateExistingObject(id:any): Promise<any> {
        const apiContext = await request.newContext({
            baseURL: env.api.apiBaseUrl,
            extraHTTPHeaders: {
                accept: apiHeaders.headers.accept,
                'Content-Type': apiHeaders.headers['Content-Type'],
            },
        });
    
        const apiUtils = new APIUtils(apiContext);
        const path = `${env.api.path}/${id}`;
        const requestBody = apiData.updateObject;
        const responseBody = await apiUtils.put(path, requestBody);
        return responseBody;
    }

    async deleteObject(petId:any): Promise<any> {
        const apiContext = await request.newContext({
            baseURL: env.api.apiBaseUrl,
            extraHTTPHeaders: {
                accept: apiHeaders.headers.accept,
                'Content-Type': apiHeaders.headers['Content-Type'],
            },
        });
    
        const apiUtils = new APIUtils(apiContext);
        const path = `${env.api.path}/${petId}`;
        const responseBody = await apiUtils.delete(path);
        return responseBody;
    }
}
