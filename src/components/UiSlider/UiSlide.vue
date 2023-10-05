<template>
    <div class="swiper-slide slide">
        <div class="swiper-slide__content">
            <div class="swiper-slide__wrapper">
                <picture>
                    <source
                        v-if="webpExists"
                        :srcset="webpImagePath"
                        type="image/webp"
                    />
                    <img :src="imgSrc" :alt="alt" />
                </picture>
                <div class="slide__content-wrapper" v-if="content">
                    <div class="slide__content" v-html="content" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, defineProps, onMounted } from 'vue';

const props = defineProps({
    content: {
        type: String,
        default: '',
    },
    img: {
        type: String,
    },
    alt: {
        type: String,
        default: 'image',
    },
});

const webpExists = ref(false);
const webpImagePath = ref('');
const imgSrc = ref('');

const checkWebpExists = async (webpPath) => {
    try {
        const response = await fetch(webpPath);
        if (response.ok) {
            webpExists.value = true;
            webpImagePath.value = webpPath;
        }
    } catch (error) {
        console.warn('An error occurred:', error);
    }
};


onMounted(async () => {
    const webpPath = props.img + '.webp';
    await checkWebpExists(webpPath);
    imgSrc.value = webpExists.value ? webpPath : props.img + '.jpg';
    // console.clear();
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
  