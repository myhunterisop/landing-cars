<template>
    <div class="presentation-stats">
        <div class="row">
            <div class="col-default-6 js-animation">
                <h2 class="with-decor">Наши достижения от кубка россии до чемпионатов мира</h2>
                <p class="presentation-stats__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant tincidunt aliquam tincidunt pretium sodales. Tristique odio pellentesque et tincidunt posuere arcu purus lobortis risus. Urna, ut amet odio orci magnis praesent ultrices. Praesent malesuada lacus tellus tristique sit at. Sed viverra nulla nam arcu, non iaculis pretium, volutpat. </p>
            </div>
            <div class="col-default-6 js-animation">
                <div class="achievements">
                    <div class="achievements__item achievements-item js-animation">
                        <span class="achievements-item__title">#1</span>
                        <span class="achievements-item__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui </span>
                    </div>
                    <div class="achievements__item achievements-item js-animation">
                        <span class="achievements-item__title">#1</span>
                        <span class="achievements-item__description">Lorem ipsum dolor sit amet.</span>
                    </div>
                    <div class="achievements__item achievements-item js-animation">
                        <span class="achievements-item__title">#1</span>
                        <span class="achievements-item__description">Lorem ipsum dolor sit amet consectetur adipisicing.</span>
                    </div>
                    <div class="achievements__item achievements-item js-animation">
                        <span class="achievements-item__title">#1</span>
                        <span class="achievements-item__description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, quam.</span>
                    </div>
                    <div class="achievements__item achievements-item js-animation">
                        <span class="achievements-item__title">#1</span>
                        <span class="achievements-item__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur dolore, explicabo voluptas illo molestiae minus.</span>
                    </div>
                    <div class="achievements__item achievements-item js-animation">
                        <span class="achievements-item__title">#1</span>
                        <span class="achievements-item__description">Lorem, ipsum dolor.</span>
                    </div>
                    <div class="achievements__item achievements-item js-animation">
                        <span class="achievements-item__title">#1</span>
                        <span class="achievements-item__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui </span>
                    </div>
                    <div class="achievements__item achievements-item js-animation">
                        <span class="achievements-item__title">#1</span>
                        <span class="achievements-item__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { onMounted, nextTick } from 'vue';
import { animatePairedElements } from '@/helpers/animationHelpers';
import { scrollCalculate } from '@/helpers/scrollCalculate';

onMounted(() => {
    nextTick(() => {
        scrollCalculate()
        animatePairedElements('top bottom', 'top center+=250')
    })
})

</script>

<style lang="scss">
.presentation-stats {
    &__description {
        margin-top: 60px;
        font-weight: 500;
        font-size: 24px;
        line-height: 1.2;
    }

    .achievements {
        display: flex;
        flex-wrap: wrap;
    }

    .achievements-item {
        $self: &;

        width: 50%;

        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 25px 25px 40px;
        font-weight: 600;
        border-top: 1px solid var(--border-color);
        border-left: 1px solid var(--border-color);
        line-height: 1.4;
        justify-content: center;
        text-align: center;

        &:first-child {
            position: relative;
            
            &:after {
                content: '';
                position: absolute;
                width: 1px;
                height: 40px;
                background-color: var(--border-color);
                right: -1px;
                top: -1px;
            }
        }

        &:nth-child(2) { //второй
            margin-top: 40px;
        }

        &:nth-child(even) { //каждый четный
            border-right: 1px solid var(--border-color);
        }

        &:nth-child(n+3) { //с 3 и дальше
            margin-top: -40px;
            border-bottom: none;
        }

        &:nth-child(even) {
            border-bottom: 1px solid var(--border-color);

            .achievements-item__description {
                padding-bottom: 0;
            }
        }

        &:nth-child(even):not(:nth-child(2)) { //каждый четный, кроме второго
            margin-top: 0;
            border-top: none;
        }

        &:nth-last-child(2) { // предпоследний
            border-bottom: 1px solid var(--border-color);
            margin-bottom: 40px;
        }

        &:last-child {
            border-bottom: 1px solid var(--border-color);
        }

        &__title {
            font-size: 52px;
            color: var(--brand-color);
        }

        &__description {
            font-size: 16px;
            text-transform: uppercase;
            padding-bottom: 40px //компенсация отступа второй колонки;
        }
    }
}


</style>