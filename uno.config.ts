import { defineConfig, presetIcons, presetWebFonts, presetUno, ConfigBase } from "unocss"

export default defineConfig({
    presets: [
        presetUno(),
        presetIcons({
            cdn: 'https://esm.sh/'
        }),
        presetWebFonts({
            provider: "google",
            fonts: {
                sans: "Plus Jakarta Sans"
            }
        })
    ],

    extendTheme: (theme) => {
        const newTheme = {
            ...theme,
            colors: {
                transparent: "transparent",
                light: "hsl(0, 0%, 97%)",
                dark: {
                    100: "rgb(232, 233, 233)",
                    200: "rgb(205, 206, 207)",
                    300: "rgb(155, 156, 158)",
                    400: "rgb(104, 107, 110)",
                    500: "rgb(54, 58, 61)",
                    600: "hsl(214, 12%, 12%)",
                    700: "rgb(19, 22, 25)",
                    800: "rgb(13, 15, 16)",
                    900: "rgb(6, 7, 8)"
                },

                blue: {
                    100: "rgb(235, 237, 252)",
                    200: "rgb(210, 216, 249)",
                    300: "hsl(232, 75%, 80%)",
                    400: "rgb(121, 137, 236)",
                    500: "rgb(77, 98, 229)",
                    600: "rgb(48, 69, 201)",
                    700: "rgb(36, 52, 151)",
                    800: "rgb(24, 35, 100)",
                    900: "rgb(12, 17, 50)"
                },

                purple: {
                    100: "hsl(263, 84%, 95%)",
                    200: "hsl(263, 85%, 89%)",
                    300: "hsl(262, 87%, 79%)",
                    400: "hsl(263, 87%, 68%)",
                    500: "hsl(263, 87%, 58%)",
                    600: "hsl(263, 80%, 46%)",
                    700: "hsl(263, 80%, 35%)",
                    800: "hsl(263, 80%, 23%)",
                    900: "hsl(263, 80%, 12%)"
                },

                yellow: {
                    100: "hsl(46, 100%, 96%)",
                    200: "hsl(44, 100%, 91%)",
                    300: "hsl(45, 100%, 82%)",
                    400: "hsl(45, 100%, 73%)",
                    500: "hsl(45, 100%, 64%)",
                    600: "hsl(45, 76%, 53%)",
                    700: "hsl(45, 68%, 40%)",
                    800: "hsl(45, 69%, 26%)",
                    900: "hsl(44, 68%, 13%)"
                },

                green: {
                    100: "hsl(100, 69%, 97%)",
                    200: "hsl(100, 72%, 94%)",
                    300: "hsl(100, 72%, 89%)",
                    400: "hsl(101, 74%, 83%)",
                    500: "hsl(101, 74%, 78%)",
                    600: "hsl(200, 10%, 6%)",
                    700: "hsl(101, 25%, 50%)",
                    800: "hsl(100, 25%, 33%)",
                    900: "hsl(103, 25%, 17%)"
                },

                teal: {
                    100: "hsl(194, 87%, 97%)",
                    200: "hsl(194, 88%, 94%)",
                    300: "hsl(194, 88%, 87%)",
                    400: "hsl(194, 88%, 80%)",
                    500: "hsl(194, 88%, 74%)",
                    600: "hsl(194, 61%, 63%)",
                    700: "hsl(194, 37%, 47%)",
                    800: "hsl(194, 36%, 31%)",
                    900: "hsl(194, 38%, 16%)"
                },

                warning: {
                    100: "hsl(25, 100%, 96%)",
                    500: "hsl(24, 77%, 51%)",
                    900: "hsl(24, 75%, 13%)"
                },

                success: {
                    100: "hsl(150, 50%, 97%)",
                    500: "hsl(145, 54%, 54%)",
                    900: "hsl(146, 41%, 12%)"
                },

                error: {
                    100: "hsl(0, 65%, 95%)",
                    500: "hsl(0, 63%, 50%)",
                    900: "hsl(2, 54%, 12%)"
                }
            }
        }
        return newTheme
    },
    shortcuts: [
        ["text-h-xl", "text-9 leading-11"],
        ["text-h-lg", "text-8 leading-10"],
        ["text-h-md", "text-7 leading-9"],
        ["text-h-sm", "text-6 leading-8"],
        ["text-h-xs", "text-5 leading-7"],

        ["text-b-base", "tracking-0.04"],
        ["text-b-xl", "text-4.5 leading-7 text-b-base"],
        ["text-b-lg", "text-4 leading-6 text-b-base"],
        ["text-b-md", "text-3.5 leading-5 text-b-base"],
        ["text-b-sm", "text-3 leading-4.5 text-b-base"],


        ["i-email", "i-uil-envelope"],
        ["i-lock", "i-uil-lock-alt"],
    ],
    rules: [
        /*
        Example of regex shortcut:
        [/^bg-radial-(\w+)/, ([, w], { rawSelector, currentSelector, theme, variants }) => {
            if (!w) return ""

            return `` +
            `${/\bhover:/.test(rawSelector) ? '.hover\\:' : '.'}` +
            `${currentSelector}${/\bhover:/.test(rawSelector) ? ':hover' : ''}` +
            `{ background: radial-gradient(ellipse at center, rgba(0,0,0,0) 30%, ${theme.colors[w]}10);}`
        }],
        */

        ["g-bl-600", {
            "background-image": "linear-gradient(225deg, #3045C9 0%, #65BEDA 45.31%, #9AD37F 100%)"
        }],
        ["g-tr-600", {
            "background-image": "linear-gradient(45deg, #3045C9 0%, #65BEDA 45.31%, #9AD37F 100%)"
        }],
        ["g-bl-500", {
            "background-image": "linear-gradient(225deg, #4D62E5 0%, #87DDEE 45.31%, #B6F09C 100%)"
        }],
        ["g-tr-500", {
            "background-image": "linear-gradient(45deg, #4D62E5 0%, #87DDEE 45.31%, #B6F09C 100%)"
        }],
        ["g-s-bl-500", {
            "background-image": "linear-gradient(225deg, #82DBF7 0%, #B6F09C 100%)"
        }],
        ["g-s-tr-500", {
            "background-image": "linear-gradient(45deg, #82DBF7 0%, #B6F09C 100%)"
        }],
    ]
})