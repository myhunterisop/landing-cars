<template>
    <header class="header">
        <div class="container">
            <navigation-main />
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
    position: absolute;
    z-index: 3;
    top: 0;
    left: 0;
}
</style>