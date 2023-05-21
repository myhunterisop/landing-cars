<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        :width="width"
        :height="height"
        :viewBox="currentIcon.viewBox"
        :aria-labelledby="name"
        role="presentation"
        class="ui-icon"
        :class="`ui-icon--${dir}`"
        v-if="currentIcon"
    >
        <slot>
            <g v-html="currentIcon.data"></g>
        </slot>
    </svg>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            default: 'box'
        },
        width: {
            type: [Number, String],
            default: 18
        },
        height: {
            type: [Number, String],
            default: 18
        },
        iconColor: {
            type: String,
            default: 'currentColor'
        },
        dir: {
            type: String,
            default: 'up',
            validator: prop => ['down', 'up', 'right', 'left'].includes(prop)
        }
    },
    data () {
        return {
            icons: {}
        }
    },
    computed: {
        currentIcon () {
            return this.icons[this.name]
        }
    },
    created () {
        const modules = import.meta.glob(`./icons/*.js`)

        for (const path in modules) {
            modules[path]().then((mod) => {
                this.icons[path.replace('./icons/', '').replace('.js', '')] = mod.default
            })
        }
    }
}
</script>

<style lang="scss">
.ui-icon {
    display: inline-block;
    flex-shrink: 0;
    color: inherit;
    vertical-align: middle;
    fill: none;

    &--up {
        /* default */
        transform: rotate(0deg);
    }

    &--right {
        transform: rotate(90deg);
    }

    &--down {
        transform: rotate(180deg);
    }

    &--left {
        transform: rotate(-90deg);
    }
}
</style>