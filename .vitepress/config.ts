import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    srcDir: "docs",
    title: "Prclin Blog",
    description: "Personal Blog",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Home', link: '/'}
        ],

        sidebar: [],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/prclin'}
        ]
    }
})
