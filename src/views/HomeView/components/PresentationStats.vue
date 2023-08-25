<template>
    <div class="presentation-stats">
        <div class="row">
            <div class="col-default-6 js-animation">
                <h2 class="with-decor">Наши достижения от кубка россии до чемпионатов мира</h2>
                <p class="presentation-stats__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant tincidunt aliquam tincidunt pretium sodales. Tristique odio pellentesque et tincidunt posuere arcu purus lobortis risus. Urna, ut amet odio orci magnis praesent ultrices. Praesent malesuada lacus tellus tristique sit at. Sed viverra nulla nam arcu, non iaculis pretium, volutpat. </p>
            </div>
            <div class="col-default-6">
                <div class="achievements">
                    <div class="achievements__item">

                    </div>
                    <div class="achievements__item"></div>
                    <div class="achievements__item"></div>
                    <div class="achievements__item"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { onMounted, nextTick } from 'vue';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
    // eslint-disable-next-line no-unused-vars
    window.addEventListener('scroll', e => {
        document.body.style.cssText += `--scrollTop: ${window.scrollY}px`
    })

    nextTick(() => {
        animationPresentationText()
    })
})

const animationPresentationText = () => {
    const list = gsap.utils.toArray('.js-animation');

    list.forEach((item, index) => {
        gsap.fromTo(item,
            {
                opacity: 0,
                x: index % 2 ? 70 : -70
            },
            {
                opacity: 1,
                x: 0,
                scrollTrigger: {
                    start: 'top bottom-=100',
                    end: 'top center',
                    trigger: item,
                    scrub: true,
                }
            }
        );
    })
}
</script>

<style lang="scss">
.presentation-stats {
    &__description {
        margin-top: 60px;
        font-weight: 500;
        font-size: 24px;
        line-height: 1.2;
    }
}
</style>