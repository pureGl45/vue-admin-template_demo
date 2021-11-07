<template>
  <div class="list-layout-wrapper">
    <div class="conditions">
      <slot name="header"></slot>
    </div>
    <div class="list-box">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.list-layout-wrapper {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  .conditions {
    width: 100%;
    margin-bottom: 20px;
  }
  .list-box {
    width: 100%;
  }
}
</style>