<template>
  <div class="wrapper">
    <el-input v-model="value"  @blur="onBlur"></el-input>
  </div>
</template>

<script>
export default {
  props: {
    initValue: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      value: this.initValue,
    };
  },
  methods: {
    onBlur() {
      this.$emit("blur", this.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper{
    width: 50%;
    margin: 20px;
}
</style>