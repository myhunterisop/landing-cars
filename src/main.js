import { createApp} from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'

//components
import UiButton from './components/UiButton'
import { UiSlider, UiSlide } from './components/UiSlider'
import UiIcon from './components/UiIcon'

import './assets/main.scss'
// import 'swiper/css';


const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)

//components
app.component('UiButton', UiButton)
app.component('UiSlider', UiSlider)
app.component('UiSlide', UiSlide)
app.component('UiIcon', UiIcon)

app.mount('#app')
