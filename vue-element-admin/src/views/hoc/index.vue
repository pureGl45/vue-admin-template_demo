<template>
  <div>
    <HocCustonCom :value="value" :rules="rules" />
  </div>
</template>

<script>
import HocFunc from "./component/custoninput/hoc";
import CustonInput from "./component/custoninput/index";

const HocCustonCom = HocFunc(CustonInput);

export default {
  components: {
    HocCustonCom,
  },
  data() {
    return {
      value: "",
      rules: [
        {
          test: function(value) {
            return /\d+/.test(value);
          },
          message: "请输入数字"
        }
      ]
    };
  }
};
</script>

<style>
</style>