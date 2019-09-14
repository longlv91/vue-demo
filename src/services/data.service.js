import {
    requestOptions,
    requestAPI
} from '../helpers';

export const dataService = {
    getMenus
};

function getMenus() {
    return requestAPI.request(requestOptions.get("/api/menus"));
}