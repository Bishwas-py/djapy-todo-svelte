import {SECRET_BASE_API} from '$env/static/private';
import type {Handle, HandleFetch} from '@sveltejs/kit';

export const handleFetch: HandleFetch = async ({request, fetch}) => {
    if (request.url.includes('$api/')) {
        let requestUrl = request.url.split('$api/')[1];
        requestUrl = `${SECRET_BASE_API}/${requestUrl}`;

        let options: any = {
            method: request.method,
            headers: request.headers,
            cache: request.cache,
            credentials: request.credentials,
            mode: request.mode,
            referrer: request.referrer,
            referrerPolicy: request.referrerPolicy,
            integrity: request.integrity,
            keepalive: request.keepalive,
            signal: request.signal,
            redirect: request.redirect
        };

        if (request.method === 'POST' || request.method === 'PUT') {
            options = {
                ...options,
                body: await request.text()
            };
        }
        return fetch(requestUrl, options);
    }
    return fetch(request);
};

export const handle = (async ({event, resolve}) => {
    return resolve(event);
}) satisfies Handle;

