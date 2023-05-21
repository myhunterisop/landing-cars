<template>
    <div class="swiper" :class="{ 'swiper--nav-bottom': navBottom }">
        <div class="swiper-container" ref="container">
            <div class="swiper-wrapper">
                <slot />
            </div>
        </div>
        <button class="swiper-button-prev">
            <ui-icon name="arrow-triangle" dir="left" />
        </button>
        <button class="swiper-button-next">
            <ui-icon name="arrow-triangle" dir="right" />
        </button>
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
            // when window width is >= 640px
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
    --swiper-navigation-size: 44px;
}


.swiper {
    overflow: visible;

    .swiper-button-prev {
        left: -80px;
    }

    .swiper-button-next {
        right: -80px;
    }

    &--nav-bottom {
        .slider__wrapper {
            align-items: center;
        }


        .slider__nav-btn {

        }

        // .swiper-button-prev {
        //     left: -80px;
        // }

        // .swiper-button-next {
        //     right: -80px;
        // }
    }
}

.swiper-button {
    &-prev,
    &-next {
        border: 3px solid var(--brand-color);
        color: #fff;
        width: var(--swiper-navigation-size);
        height: var(--swiper-navigation-size);
        background: none;

        &:after {
            display: none;
        }
    }

    &-prev {
        .ui-icon {
            margin-right: -7px;
        }
    }

    &-next {
        .ui-icon {
            margin-left: -7px;
        }

        &:after {
            transform: rotate(180deg);
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
