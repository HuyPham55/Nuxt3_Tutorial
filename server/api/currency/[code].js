export default defineEventHandler(async (request) => {
    const {code} = request.context.params;

    //nuxt.config.ts, .env
    const {currencyKey: key} = useRuntimeConfig()

    //api call with private key

    const {data} = await $fetch(`https://api.currencyapi.com/v3/latest?currencies=${code}&apikey=${key}`)
    return data;
})