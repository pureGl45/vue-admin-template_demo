<template>
  <div>
    <slot :validate="validate" />
    {{errMsg}}
  </div>
</template>

<script>
export default {
  props: ["rules", "value"],
  data() {
    return {
      errMsg: ""
    };
  },
  methods: {
    validate() {
      const validateStatus = this.rules.reduce((pre, cur) =>  {
        const self = this;
        const check = cur && cur.test && cur.test(this.value);
        self.errMsg = check ? "" : cur.message;
        return pre && check;
      }, true);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>