import { APIRequestContext, APIResponse } from '@playwright/test';
import apiHeaders from '../test-data/apiHeaders.json'
import env from '../test-data/env.json';

export class APIUtils {
  private apiContext: APIRequestContext;

  constructor(apiContext: APIRequestContext) {
    this.apiContext = apiContext;
  }

  async getById(path: string): Promise<any> {
    const baseURL = env.api.apiBaseUrl;
    const headers = {
        accept: apiHeaders.headers.accept,
        'Content-Type': apiHeaders.headers['Content-Type'],
    };

    console.log(`Request URL: ${baseURL}${path}`);
    console.log(`Path:`, path);
    console.log(`Headers:`, headers);
    
    const response = await this.apiContext.get(baseURL + path, {headers});

    console.log(`Response Status: ${response.status()}`);
    if (!response.ok()) {
        console.log(`Response Body: ${await response.text()}`);
        throw new Error(`Request failed with status ${response.status()}: ${await response.text()}`);
    }

    return this.handleResponse(response);
  }

  async getAll(path: string): Promise<any> {
    const baseURL = env.api.apiBaseUrl;
    const headers = {
        accept: apiHeaders.headers.accept,
        'Content-Type': apiHeaders.headers['Content-Type'],
    };

    console.log(`Request URL: ${baseURL}${path}`);
    console.log(`Path:`, path);
    console.log(`Headers:`, headers);
    
    const response = await this.apiContext.get(baseURL + path, {headers});

    console.log(`Response Status: ${response.status()}`);
    if (!response.ok()) {
        console.log(`Response Body: ${await response.text()}`);
        throw new Error(`Request failed with status ${response.status()}: ${await response.text()}`);
    }

    return this.handleResponse(response);
  }

  async post(path: string, body: any): Promise<any> {
    const baseURL = env.api.apiBaseUrl;
    const headers = {
        accept: apiHeaders.headers.accept,
        'Content-Type': apiHeaders.headers['Content-Type'],
    };

    console.log(`Request URL: ${baseURL}${path}`);
    console.log(`Request Body:`, JSON.stringify(body, null, 2));
    console.log(`Headers:`, headers);

    const response = await this.apiContext.post(baseURL + path, {data: body,headers});

    console.log(`Response Status: ${response.status()}`);
    if (!response.ok()) {
        console.log(`Response Body: ${await response.text()}`);
        throw new Error(`Request failed with status ${response.status()}: ${await response.text()}`);
    }

    return response.json();
  }

  async put(path: string, body: any): Promise<any> {
    const baseURL = env.api.apiBaseUrl;
    const headers = {
        accept: apiHeaders.headers.accept,
        'Content-Type': apiHeaders.headers['Content-Type'],
    };

    console.log(`Request URL: ${baseURL}${path}`);
    console.log(`Request Body:`, JSON.stringify(body, null, 2));
    console.log(`Headers:`, headers);

    const response = await this.apiContext.put(baseURL + path, {data: body,headers});

    console.log(`Response Status: ${response.status()}`);
    if (!response.ok()) {
        console.log(`Response Body: ${await response.text()}`);
        throw new Error(`Request failed with status ${response.status()}: ${await response.text()}`);
    }

    return response.json();
  }


  async delete(path: string): Promise<any> {
    const baseURL = env.api.apiBaseUrl;
    const headers = {
        accept: apiHeaders.headers.accept,
        'Content-Type': apiHeaders.headers['Content-Type'],
    };

    console.log(`Request URL: ${baseURL}${path}`);
    console.log(`Path:`, path);
    console.log(`Headers:`, headers);
    
    const response = await this.apiContext.delete(baseURL + path, {headers});

    console.log(`Response Status: ${response.status()}`);
    if (!response.ok()) {
        console.log(`Response Body: ${await response.text()}`);
        throw new Error(`Request failed with status ${response.status()}: ${await response.text()}`);
    }

    return this.handleResponse(response);
  }


  private async handleResponse(response: APIResponse): Promise<any> {
    if (!response.ok()) {
      const error = await response.text();
      console.error(`Request failed: ${response.status()} - ${error}`);
      console.error(`Request failed: ${response.body()} - ${error}`);
      throw new Error(`Request failed with status ${response.status()}: ${error}`);
    }
    return response.json();
  }
}
