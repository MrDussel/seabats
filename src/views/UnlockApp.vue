<template>
  <el-form :inline="true" :model="form" @submit.prevent="login">
    <p>Please enter the app password to continue</p>
    <el-form-item>
      <el-input
        v-model="form.password"
        placeholder="Password"
        type="password"
      />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="login">Login</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import {
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElNotification,
} from "element-plus";
import { mapActions } from "vuex";

export default defineComponent({
  components: {
    ElButton,
    ElForm,
    ElFormItem,
    ElInput,
  },
  data() {
    return {
      form: {
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(["unlockApp"]),
    async login() {
      try {
        await this.unlockApp(this.form.password);
      } catch (e) {
        ElNotification({
          type: "error",
          title: "Login Failed",
          message: e,
        });
      } finally {
        this.form.password = "";
      }
    },
  },
});
</script>
