import { defineStore } from 'pinia'

export const useStore = defineStore({
    id: 'store',
    state: () => {
        return {
            lang: 'ru',
            device: 'desktop',
        }
    },
    actions: {
        setDevice (device) {
            this.device = device
        },
        setLang (lang) {
            this.lang = lang
        }
    }
})
