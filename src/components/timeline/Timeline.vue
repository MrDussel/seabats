<template>
  <div class="timeline-container">
    <timeline-track v-for="track in tracks" :key="track.name" />
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
export default defineComponent({});
</script>

<style></style>
