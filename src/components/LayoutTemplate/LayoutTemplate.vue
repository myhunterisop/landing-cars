<template>
    <div class="layout">
        <header-layout class="layout__header" />
        <main class="main layout__container">
            <div class="container">
                <slot name="content" />
            </div>
        </main>
        <footer-layout class="layout__footer" />
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import HeaderLayout from './components/HeaderLayout.vue'
import FooterLayout from './components/FooterLayout.vue'


// defineProps({
//     type: {
//         type: String,
//         default: 'one-column'
//     }
// })

onMounted(() => {
    console.log('layout ok');
})
</script>

<style lang="scss">
.layout {
    flex: 1 1 100%;
    position: relative;
    display: flex;
    flex-direction: column;

    &__container {
        flex-grow: 1;
        overflow: hidden;
    }
}
</style>