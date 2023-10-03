<template>
    <header class="header">
        <div class="container">
            <navigation-main class="header__navigation"/>
        </div>
        <!-- <navigation-mobile /> -->
    </header>
</template>
<script setup>
import NavigationMain from '@/components/NavigationMain/NavigationMain.vue'
// import NavigationMobile from '@/components/NavigationMobile/NavigationMobile.vue'

</script>
<style lang="scss">
.header {
    width: 100%;
    position: absolute;
    z-index: 3;
    top: 0;
    left: 0;

    &__navigation {
        margin-top: 40px;
    }
}
</style>