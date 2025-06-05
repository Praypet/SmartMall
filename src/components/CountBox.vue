<template>
  <div class="count-box">
    <button class="minus" @click="$emit('input',value>1?value-1:1)">-</button>
    <input class="inp" type="text" :value="value" @change="handleChange">
    <button class="add" @click="$emit('input',value+1)">+</button>
  </div>
</template>

<script>
export default {
  name: 'CountBox',
  props: {
    value: Number,
    stock: Number
  },
  methods: {
    handleChange (e) {
      const num = +e.target.value
      if (isNaN(num) || num < 1 || num % 1 !== 0) {
        e.target.value = this.value
      } else this.$emit('input', num)
    }
  }
}
</script>

<style lang="less" scoped>
.count-box {
  width: 110px;
  display: flex;
  .add, .minus {
    width: 30px;
    height: 30px;
    outline: none;
    border: none;
    background-color: #efefef;
  }
  .inp {
    width: 40px;
    height: 30px;
    outline: none;
    border: none;
    margin: 0 5px;
    background-color: #efefef;
    text-align: center;
  }
}
</style>
