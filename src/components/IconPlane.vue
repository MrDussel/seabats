<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    aria-labelledby="icon-plane"
    role="presentation"
    viewBox="0 0 186 186"
  >
    <title id="icon-plane" lang="en">icon-plane</title>
    <g :fill="color">
      <!-- Source: https://www.svgrepo.com/svg/151715/normal-plane -->
      <!-- License: CC0 1.0 -->
      <path
        d="M167.222,96.598l-55.955-43.406c0.827-14.797,1.293-24.805,1.302-25.001l0.003-0.115C112.571,18.214,104.926,0,94.032,0 h-0.493C82.646,0,75,18.214,75,28.076l0.003,0.115c0.009,0.194,0.465,10.007,1.278,24.571L19.283,96.594 C17.9,97.661,16.5,99.79,16.5,101.795v4.913c0,2.287,1.857,4.079,4.229,4.079c0.356,0,0.713-0.043,1.059-0.128l56.788-13.944 c0.153-0.038,0.298-0.101,0.446-0.154c0.22,3.128,0.447,6.272,0.682,9.414c1.198,16.027,2.411,29.736,3.622,40.977l-23.025,18.772 c-0.897,0.733-1.802,2.121-1.802,3.569v7.933c0,1.834,1.46,3.271,3.322,3.271h0.001c0.306,0,0.61-0.041,0.907-0.122l24.341-6.626 C89.304,184.879,91.296,186,93.539,186h0.493c2.234,0,4.218-1.108,6.438-12.105l23.799,6.479c0.297,0.081,0.602,0.122,0.907,0.122 c1.863,0,3.323-1.437,3.323-3.271v-7.933c0-1.448-0.904-2.835-1.804-3.571l-22.498-18.342c1.227-11.32,2.456-25.173,3.669-41.405 c0.229-3.061,0.45-6.124,0.665-9.172l56.179,13.856c0.347,0.085,0.693,0.128,1.031,0.128c2.178,0,3.758-1.715,3.758-4.079v-4.913 C169.5,100.208,168.902,97.894,167.222,96.598z"
      />
    </g>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  props: {
    width: {
      type: String,
      default: "18",
    },
    height: {
      type: String,
      default: "18",
    },
    color: {
      type: String,
      default: "currentColor",
    },
  },
});
</script>
