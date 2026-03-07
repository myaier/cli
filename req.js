import sign from './lib/sign.js'

export default async (url, options) => {
    if (!options) options = {}
    const headers = options.headers || {}
    headers.i = await sign()

    options.headers = headers
    return fetch(url, options)
}
