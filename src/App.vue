<script setup>
import { RouterView } from 'vue-router'
import LayoutTemplate from '@/components/LayoutTemplate/LayoutTemplate.vue'
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
