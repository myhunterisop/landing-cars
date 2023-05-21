<template>
    <nav class="navigation-mobile">
        <RouterLink to="/" class="navigation-mobile__link">Главная</RouterLink>
        <RouterLink to="/wrapping" class="navigation-mobile__link">Оклейка автомобилей</RouterLink>
    </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style lang="scss">
.navigation-mobile {
    &__link {
        font-size: 24px;
        line-height: 120%;
        color: #fff;
    }
}
</style>