<template>
    <div class="home-page">
        <section class="home-page__about">
            <audio autoplay loop ref="audioElement">
                <source src="/sound.mp3" type="audio/mpeg">
            </audio>
            <button @click="handleSoundToggle">{{ isPlaying ? 'Выключить звук' : 'Включить звук' }}</button>
            <video autoplay muted loop src="/mainpage-bg.mp4"></video>
            <div class="container">
                <h1 class="home-page__about-title with-decor">Car Musc</h1>
                <p class="home-page__about-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae orci urna amet penatibus.</p>
                <ui-button class="home-page__about-button">Наши услуги</ui-button>
            </div>
            <div class="home-page__contacts contacts">
                <div class="home-page__contacts-item contacts__item">
                    <div class="contacts__title">Адрес:</div>
                    <div class="contacts__text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, vitae eum dolorum qui harum placeat minus veritatis nobis dignissimos officia.</div>
                </div>
                <div class="home-page__contacts-item contacts__item">
                    <div class="contacts__title">Телефон:</div>
                    <div class="contacts__text">
                        <a class="contacts__text-item" href="tel:+78005553535">8 (800) 555-35-35</a>
                    </div>
                </div>
                <div class="home-page__contacts-item contacts__item">
                    <div class="contacts__title">Режим работы:</div>
                    <div class="contacts__text">
                        <span class="contacts__text-item">пн-пт: 10:00 - 20:00</span>
                        <span class="contacts__text-item">сб-вск: 12:00 - 20:00</span>
                    </div>
                </div>
            </div>
        </section>
        <section class="home-page__presentation presetation">
            <div class="container">
                <presentation-stats class="presetation__stats" />
                <presentation-slider class="presentation__slider" />
            </div>
            <!-- <div class="row">
                <div class="col-default-5">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas fugit unde assumenda explicabo officia ducimus ab earum doloribus quisquam aliquid.
                </div>
            </div> -->
        </section>
    </div>
</template>

<script setup>
import { useStore } from '@/store'

import PresentationStats from './components/PresentationStats.vue'
import PresentationSlider from './components/PresentationSlider.vue'
import { toggleSound } from '@/helpers/toggleSound';

import { ref, onMounted } from 'vue';

const audioElement = ref(null);
const isPlaying = ref(true);

// const device = computed(() => {
//     return useStore()?.device
// })


const handleSoundToggle = () => {
    toggleSound(audioElement.value); // Вызов метода для управления звуком
    isPlaying.value = !isPlaying.value
};


onMounted(() => {
    if (audioElement.value) {
        audioElement.value.volume = 0.5; // Устанавливаем громкость по умолчанию
    }
});

</script>

<style lang="scss">
.home-page {
    &__about {
        position: relative;
        padding-top: 237px;
        height: 100%;
        overflow: hidden;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;

        &:after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(180deg, rgba(20, 20, 20, 0.8) 60%, rgba(20, 20, 20, 0.95) 80%, #000 100%);
            z-index: -1;
        }

        video {
            position: absolute;
            bottom: 0;
            left: 0;
            object-fit: cover;
            min-width: 100%;
            min-height: 100%;
            z-index: -1;
        }
    }

    &__about-title {
        font-weight: 700;
        font-size: 150px;
        line-height: 1.25;
        color: var(--brand-color);
        text-transform: uppercase;
        text-align: center;

        &:after {
            // @extend %decor;
        }
    }

    &__about-description {
        color: #fff;
        font-size: 40px;
        line-height: 1.2;
        max-width: 440px;
        margin: 40px auto 0;
        text-align: center;
    }

    &__about-button {
        margin-top: 40px;
        left: 50%;
        transform: translateX(-50%);
    }

    &__contacts {
        padding-top: 40px;
        margin-top: auto;
        flex-direction: row;
        display: flex;
        width: 100%;

        @include breakpoint (v-tablet) {
            flex-direction: column;
            margin-top: 48px;
        }
    }

    &__contacts-item {
        padding: 50px;
        width: 33.3333%;
        border-top: 1px solid var(--border-color);
        border-bottom: 1px solid var(--border-color);
        display: flex;
        justify-content: center;

        & + & {
            border-left: 1px solid var(--border-color);
        }

        @include breakpoint(v-tablet) {
            width: 100%;
            padding: 24px;

            & + & {
                border-left: none;
            }
        }
    }

    &__presentation {
        margin-top: 180px;
        margin-bottom: 180px;
    }

    .contacts {
        &__item {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
        }

        &__title {
            font-weight: 600;
            font-size: 18px;
            line-height: 1.4;
        }

        &__text {
            margin-top: 20px;
            font-size: 24px;
            font-weight: 600;
            color: var(--brand-color);
        }

        &__text-item {
            color: var(--brand-color);
            text-decoration: none;
            display: block;

            + .contacts__text-item {
                margin-top: 15px;
            }
        }
    }
}

.home-page {
    .presentation__slider {
        margin-top: 180px;
    }
}
</style>
