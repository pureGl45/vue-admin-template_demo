<template>
  <div>
    <!--<svalidate #default="{ validate}" :rules="rules" :value="value">
        <el-input v-model="value" @blur="validate"></el-input>-->
    <div class="row">
      <svalidate #default="{ validate}" :rules="textRules" :value="value1">
        <span>活动名称</span>
        <el-input v-model="value1" @blur="validate" size="small" style="width:180px" > </el-input>
      </svalidate>
    </div>
    <div class="row">
      <svalidate #default="{ validate}" :rules="textRules" :value="value2">
        <span>活动区域</span>
        <el-select v-model="value2" @blur="validate" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </svalidate>
    </div>
    <div class="row">
      <svalidate #default="{ validate }" :rules="selectRules" :value="value3">
        <div class="block">
          <span >活动时间</span>
          <el-date-picker v-model="value3" @blur="validate" type="datetime" placeholder="选择日期时间"></el-date-picker>
        </div>
      </svalidate>
    </div>
    <div class="row">
      <svalidate #default="{ validate}" :rules="textRules" :value="value4">
       <span> 即时配送</span>
        <el-switch
          v-model="value4"
          @blur="validate"
          active-color="#13ce66"
          inactive-color="#ff4949"
        ></el-switch>
      </svalidate>
    </div>
    <div class="row">
      <svalidate #default="{ validate }" :value="checkValue" :rules="textRules">
       <span> 活动性质</span>
        <el-checkbox-group v-model="checkValue" @change="validate">
          <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
        </el-checkbox-group>
      </svalidate>
    </div>
    <div class="row">
      <svalidate #default="{ validate }" :value="radio" :rules="textRules">
        <span>特殊资源</span>
        <el-radio v-model="radio" label="1">线上品牌赞助</el-radio>
        <el-radio v-model="radio" label="2">线下场地免费</el-radio>
      </svalidate>
    </div>
    <div class="row">
      <svalidate #default="{ validate }" :rules="textRules" :value="value7">
        <span>活动形式</span>
        <el-input v-model="value7" @blur="validate" size="small" style="width:180px"></el-input>
      </svalidate>
    </div>
    <div class="row">
      <el-button type="primary">提交</el-button>
    </div>
  </div>
</template>

<script>
import svalidate from "./svalidate.vue";

export default {
  components: {
    svalidate,
  },
  data() {
    return {
      value1: "",
      value2: "",
      value3: "",
      value4: "",
      radio: null,
      value7: "",
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      rules: [
        {
          test: function(value) {
            return /\d+/.test(value);
          },
          message: "请输入数字"
        }
      ],
      textRules: [
        {
          test: function(value) {
            return value;
          },
          message: "请输入一个非空的值"
        }
      ],
      selectRules: [
        {
          test: function(value) {
            return value;
          },
          message: "请选择时间"
        }
      ],
      checkValue: [],
      cities: [
          "美食/餐厅线上活动",
          "地推活动",
          "线下主题活动",
          "单纯品牌曝光"
        ],
    };
  }
};
</script>

<style lang="scss" scoped>
.row {
  padding-left: 30px;
  span{
    display: inline-block;
    margin: 20px;
    font-size: 12px;
  }
 
}
</style>