import { test, expect } from '@playwright/test';
import RestfulAPI from '../src/api/restfulAPI';


test.describe.serial('Rest API Test Suite', () => {
    let objectId: any;


    test('create Object', async () => {
        const restfulAPI = new RestfulAPI();
        const responseBody = await restfulAPI.addNewObject();
        objectId = responseBody.id;
        expect(responseBody.name).toBe('Apple MacBook Pro 16');
        expect(responseBody.data.year).toBe(2019);
        expect(responseBody.data.price).toBe(1849.99);
        console.log(responseBody);
    });

    test('get Object By  Id', async () => {
        const restfulAPI = new RestfulAPI();
        const responseBody = await restfulAPI.getObjectById(objectId);
        expect(responseBody.name).toBe('Apple MacBook Pro 16');
        expect(responseBody.data.year).toBe(2019);
        expect(responseBody.data.price).toBe(1849.99);
        console.log(responseBody);
    });

    test('get All Objects', async () => {
        const restfulAPI = new RestfulAPI();
        const responseBody = await restfulAPI.getAllObjects();
        expect(responseBody.length).toBe(13);
        console.log(responseBody);
    });
    
    test('patch Object', async () => {
        const restfulAPI = new RestfulAPI();
        const responseBody = await restfulAPI.patchExistingObject(objectId,'Apple MacBook Pro M2');
        expect(responseBody.id).toBe(objectId);
        expect(responseBody.name).toBe('Apple MacBook Pro M2');
        console.log(responseBody);
    });

    test('update Object', async () => {
        const restfulAPI = new RestfulAPI();
        const responseBody = await restfulAPI.updateExistingObject(objectId);
        expect(responseBody.id).toBe(objectId);
        expect(responseBody.name).toBe('Apple MacBook Pro M3');
        expect(responseBody.data.year).toBe(2024);
        expect(responseBody.data.price).toBe(2849.99);
        console.log(responseBody);
    });

    test('delete Object', async () => {
        const restfulAPI = new RestfulAPI();
        const responseBody = await restfulAPI.deleteObject(objectId);
        expect(responseBody.id).not.toBe(objectId);
        console.log(responseBody);
    });
})