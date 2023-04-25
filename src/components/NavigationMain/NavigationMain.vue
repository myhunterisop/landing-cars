<template>
    <nav class="navigation-main">
        <RouterLink to="/" class="navigation-main__link">Главная</RouterLink>
        <RouterLink to="/wrapping" class="navigation-main__link">Оклейка автомобилей</RouterLink>
    </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style lang="scss">
.navigation-main {
    &__link {
        font-weight: 500;
        font-size: 24px;
        line-height: 120%;
        color: #fff;
    }
}
</style>