<template>
  <div class="timeline-container">
    <timeline-track v-for="track in tracks" :key="track.name" />
  </div>
  <div class="timestamp-container">
    <div v-for="i in resolution" class="marker-container" :key="i">
      <div class="marker"></div>
      <div class="mark-label">
        <span class="markstuff">{{ toMonth(i) }}</span>
      </div>
    </div>
    <div style="heigt: 2px; background-color: lightgrey"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/runtime-core";
import { ITrack } from "./types";
import dayjs from "dayjs";
export default defineComponent({
  props: {
    min: {
      type: Date,
      default: dayjs().subtract(6, "month").toDate(),
    },
    max: {
      type: Date,
      default: dayjs().toDate(),
    },
    tracks: {
      type: Array as PropType<ITrack[]>,
    },
  },
  computed: {
    resolution(): number {
      const diffInMonths = dayjs(this.max).diff(dayjs(this.min), "month");
      console.log(diffInMonths);
      return diffInMonths;
    },
  },
  methods: {
    toMonth(i: number): string {
      return dayjs()
        .month(i % 12)
        .format("MMM");
    },
  },
});
</script>

<style>
.timestamp-container {
  display: flex;
  justify-content: space-around;
}
.marker-container {
  display: flex;
  height: 60px;
  justify-content: center;
  align-content: center;
  width: 100%;
  flex-direction: column;
}
.marker {
  width: 1px;
  background: gray;
  height: 10px;
}
</style>
