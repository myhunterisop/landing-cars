<template>
    <div class="swiper-slide">
        <div class="swiper-slide__content">
            <div class="swiper-slide__wrapper">
                <slot></slot>
                <div class="slide__content-wrapper" v-if="content">
                    <div class="slide__content">
                        {{ content }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    content: {
        type: String,
        default: ''
    }
})
</script>

<style lang="scss">

.swiper-slide__wrapper {
    position: relative;
}

.slide__content-wrapper {
    padding: 0 65px;

    &:before {
        content: '';
        background-color: var(--brand-color);
        max-width: calc(100% - 50px);
        width: 100%;
        padding-bottom: 70px;
        position: absolute;
        z-index: 0;
        left: 50%;
        transform: translateX(-50%);
    }
}

.slide__content {
    position: relative;
    font-weight: 600;
    font-size: 18px;
    line-height: 1.4;
    text-align: center;
    margin-top: -35px;
    padding-top: 30px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
}

.swiper-slide img {
    display: block;
    width: 100%;
}
</style>
