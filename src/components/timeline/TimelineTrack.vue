<template>
  <track-event
    class="track-container"
    v-for="event in events"
    :key="event.date"
  />
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
export default defineComponent({});
</script>

<style></style>
