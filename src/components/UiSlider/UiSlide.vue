<template>
    <div class="swiper-slide slide">
        <div class="swiper-slide__content">
            <div class="swiper-slide__wrapper">
                <picture>
                    <source
                        v-if="webpExists"
                        :srcset="webpExists ? webpImagePath : false"
                        type="image/webp"
                    />
                    <img :src="img" :alt="alt"/>
                </picture>
                <div class="slide__content-wrapper" v-if="content">
                    <div class="slide__content" v-html="content" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, defineProps, onMounted } from 'vue'

const props = defineProps({
    content: {
        type: String,
        default: ''
    },
    img: {
        type: String
    },
    alt: {
        type: String,
        default: 'image'
    }
})

const webpExists = ref(false);
const webpImagePath = computed(() => getWebpImagePath(props.img));

const getWebpImagePath = (jpgImagePath) => {
    const webpImagePath = jpgImagePath.replace(/\.jpg$/, ".webp");
    return webpImagePath;
};

onMounted(() => {
    const webpPath = getWebpImagePath(props.img);

    fetch(webpPath)
        .then(response => {
            if (response.ok) {
                webpExists.value = true;
            }
        })
        .catch(error => {
            console.error('An error occurred:', error);
        });
});
</script>

<style lang="scss">
.swiper-slide__wrapper {
    position: relative;

    img {
        display: block;
        width: 100%;
    }
}

.slide {
    &__content-wrapper {
        padding: 0 65px;
        position: relative;

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

    &__content {
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
}
</style>
