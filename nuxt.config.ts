// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
import {resolve} from "path";
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    alias: {
    },
    app: {
        head: {
            title: "Nuxt - Tailwind Tutorial",
            meta: [
                {charset: 'utf-8'},
                {name: 'viewport', content: 'width=device-width,initial-scale=1'},
                {name: 'description', content: 'Nuxt - Tailwind Tutorial'},
            ],
            link: [
                {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'},
            ]
        }
    },
    runtimeConfig: {
        currencyKey: process.env.CURRENCY_API_KEY
    },
    css: [
        '~/assets/css/main.scss'
    ]
})
