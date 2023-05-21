import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//components
import UiButton from './components/UiButton'
import { UiSlider, UiSlide } from './components/UiSlider'
import UiIcon from './components/UiIcon'

import './assets/main.scss'
// import 'swiper/css';

const app = createApp(App)

app.use(router)

//components
app.component('UiButton', UiButton)
app.component('UiSlider', UiSlider)
app.component('UiSlide', UiSlide)
app.component('UiIcon', UiIcon)

app.mount('#app')
