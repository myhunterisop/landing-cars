<script setup>
import { onMounted } from 'vue';
import { RouterView } from 'vue-router'
import LayoutTemplate from '@/components/LayoutTemplate/LayoutTemplate.vue'

onMounted(async () => {
    const mixins = await import('@/utils/mixin')
    mixins.AppDeviceEnquire()
})
</script>

<template>
  <layout-template>
    <template v-slot:content>
      <RouterView />
    </template>
  </layout-template>
</template>

<style>


</style>
