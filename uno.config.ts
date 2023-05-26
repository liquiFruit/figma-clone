import { defineConfig, presetIcons, presetWebFonts, presetUno } from "unocss"

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
})