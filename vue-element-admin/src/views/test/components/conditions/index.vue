<template>
  <div class="conditions-wrapper">
    <div class="conditions-wrapper-items">
      <span>昵称 </span>
      <el-input placeholder="昵称"  size='small'></el-input>
    </div>
    <div class="conditions-wrapper-items">
      <span>所属学科</span>
      <el-select size='small' placeholder="请选择">
        <el-option value='语文' label="语文"></el-option>
        <el-option value='数学' label="数学"></el-option>
        <el-option value='英语' label="英语"></el-option>
      
      </el-select>
    </div>
    <div class="conditions-wrapper-items">
      <span>职位 </span>
      <el-input size='small' placeholder="职位"></el-input>
    </div>
    <div class="conditions-wrapper-items">
      <span>工作年限 </span>
      <el-input size='small' ></el-input>
    </div>
    <div class="conditions-wrapper-items">
      <span>手机号 </span>
      <el-input size='small' placeholder="手机号"></el-input>
    </div>
    <div class="conditions-wrapper-items">
      <el-button size='small' type="primary" icon="el-icon-search">搜索</el-button>
      <el-button size='small'>重置</el-button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.conditions-wrapper {
  display: flex;
  align-items: center;
  width: 100%;
  .conditions-wrapper-items {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 10px;
    span {
      display: inline-block;
    //   border: 1px solid rgb(235, 234, 234);
      width: 120px;
    //   margin-left: 10px;
      color: rgb(153, 152, 152);
      font-size: 14px;
      text-align: right;
      margin-right: 10px;
    }
  }
}
</style>