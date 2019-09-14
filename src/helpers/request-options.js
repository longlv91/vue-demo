export const requestOptions = {
    get(url) {
        return {
            method: 'GET',
            url: url
        };
    },
    post(url, body) {
        return {
            method: 'POST',
            url: url,
            data: body
        };
    },
    patch(url, body) {
        return {
            method: 'PATCH',
            url: url,
            data: body
        };
    },
    put(url, body) {
        return {
            method: 'PUT',
            url: url,
            data: body
        };
    },
    delete(url) {
        return {
            method: 'DELETE',
            url: url
        };
    }
}
