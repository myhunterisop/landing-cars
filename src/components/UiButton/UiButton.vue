<template>
    <button class="button">
        <slot />
    </button>
</template>

<script setup>
</script>

<style lang="scss">
.button {
    padding: 15px 25px;
    border: none;
    outline: 0;
    background: transparent;
    position: relative;
    overflow: hidden;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 24px;
    line-height: 1.4;
    z-index: 1;

    &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        display: block;
        background-color: #DB3138;
        transform: translateX(-35%);
        top: 0;
        left: 0;
        z-index: -1;
        transition: transform ease-in-out .2s;
    }

    &:hover {
        &:after {
            transform: translateX(0%);
        }
    }
}
</style>