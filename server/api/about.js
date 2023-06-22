export default defineEventHandler(async (request) => {
    let content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore'

    const {message} = await readBody(request);

    return {
        content: content,
        title: 'This is about page',
        clientMessage: message,
    }
})