export default defineEventHandler((request) => {
    const {page} = getQuery(request)
    return {
        title: '/server/api/index.js',
        message: 'Hello from /server/api/index.js'
    }
})