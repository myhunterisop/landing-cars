<template>
    <div class="swiper" :class="{ 'swiper--nav-bottom': navBottom }">
        <div class="swiper-container" ref="container">
            <div class="swiper-wrapper">
                <slot />
            </div>
        </div>
        <div class="swiper-navigation">
            <button class="swiper-button-prev">
                <ui-icon name="arrow-triangle" dir="left" />
            </button>
            <button class="swiper-button-next">
                <ui-icon name="arrow-triangle" dir="right" />
            </button>
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-scrollbar"></div>
    </div>
</template>

<script setup>
import { onMounted, ref, nextTick } from 'vue'

import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const container = ref(false)

const props = defineProps({
    slidesPerView: {
        type: Number,
        default: 1
    },
    slidesPerGroup: {
        type: Number,
        default: 1
    },
    navBottom: {
        type: Boolean,
        default: false
    },
    paginationShown: {
        type: Boolean,
        default: false
    }
})

const init = () => {
    // eslint-disable-next-line no-unused-vars
    const swiper = new Swiper(container.value, {
        modules: [Navigation, Pagination],
        loop: true,
        pagination: props.paginationShown,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        slidesPerView: props.slidesPerView,
        slidesPerGroup: props.slidesPerGroup,
        spaceBetween: 24,
        breakpoints: {
            640: {
                slidesPerView: 3,
                spaceBetween: 24
            }
        }
    })
}

onMounted(() => {
    nextTick(() => {
        init()
    })
})

</script>

<style lang="scss">

:root {
    --swiper-navigation-size: 50px;
}

.swiper {
    overflow: visible;

    .swiper-button-prev,
    .swiper-button-next {
        border: 3px solid var(--brand-color);
        color: #fff;
        width: var(--swiper-navigation-size);
        height: var(--swiper-navigation-size);
        background: none;
        transform: rotate(45deg);
        transition: background-color 0.7s;
        top: calc(50% - var(--swiper-navigation-size) / 2);

        path {
            transition: fill 0.7s;
        }

        &:after {
            display: none;
        }

        &:hover {
            background-color: #d1d1d1;

            path {
                fill: var(--brand-color);
            }
        }
    }

    .swiper-button-prev {
        left: -80px;

        .ui-icon {
            margin-top: -5px;
            transform: rotate(225deg);
        }
    }

    .swiper-button-next {
        right: -80px;

        .ui-icon {
            margin-left: -7px;
            margin-bottom: -5px;
            transform: rotate(45deg);
        }
    }

    &--nav-bottom {
        .slider__wrapper {
            align-items: center;
        }
    }

    &-navigation {
        @media screen and (max-width: 1480px) {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            min-height: calc(var(--swiper-navigation-size) + 20px);
            margin-top: var(--swiper-navigation-size);

            .swiper-button-next,
            .swiper-button-prev {
                position: relative;
                left: 0;
                margin: 0 20px;
            }
        }
    }
}

.swiper-slide {
    height: auto;
    border-radius: 5px;

    &__content,
    &__wrapper {
        height: 100%;
    }
}

.swiper-container {
    width: 100%;
    overflow: hidden;
}

</style>