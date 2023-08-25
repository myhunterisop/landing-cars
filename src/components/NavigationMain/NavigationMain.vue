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
        font-size: 38px;
        line-height: 1.2;
        color: #fff;
        padding: 0 10px;
        margin-right: 30px;
        text-decoration: none;
        transition: color var(--transition);

        &:last-child {
            margin-right: 0;
        }

        &:hover {
            color: var(--brand-color);
        }
    }
}
</style>