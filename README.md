# Quarter Plugin

Many projects need to initialize the selection of quarter value many times, this is a helpful way to simplify this repetive work.

This is a vue plugin for generating quarter data based on customized start year or end year.

With the help of *vue-quarter-plugin*, you can get the array of years from the start year to the end year(if you set) or current year, current year value and current quarter ('Q1'/'Q2'/'Q3'/'Q4').

These three values are stored on three attributes on Vue's prototype: *$quarterYears*, *$currentYear*, and *$currentQuarter*

## Details:

*$quarterYears*: An array which contains the years from 'start' year to 'end' year. e.g: [2019, 2020, 2021]

*$currentYear*: Value of current year e.g: 2021

*$currentQuarter*: String of current quarter e.g: 'Q1' (The **ONLY** possible value of $currentQuarter are 'Q1', 'Q2', 'Q3' and 'Q4')

## How to use:

npm i vue-quarter-plugin

```
// main.js:
import quarterPlugin from 'vue-quarter-plugin'

Vue.use(quarterPlugin)
const quarter = new quarterPlugin({start: 2019}) // set start year
// const quarter = new quarterPlugin({start: 2018, end: 2020}) // you can also set start and end year

new Vue({
  render: h => h(App),
  quarter
}).$mount('#app') // pass quarter
```

vue-quarter-plugin with elementUI:
```
<template>
<div>
  <el-select v-model="year">
    <el-option
      v-for="year in $quarterYears" :key="year" :value="year" :label="year">
    </el-option>
  </el-select>
  -
  <el-select v-model="quarter">
    <el-option
      v-for="quarter in quarters" :key="quarter.key" :value="quarter.key" :label="quarter.value">
    </el-option>
  </el-select>
</div>
</template>

<script>
export default {
  name: 'TestComponent',
  data() {
    return {
      year: this.$currentYear, // init year value
      quarter: this.$currentQuarter, // init quarter value
      quarters: [
        { key: 'Q1', value: '第一季度'}, // set customized label based on your own language, here is Chinese
        { key: 'Q2', value: '第二季度'},
        { key: 'Q3', value: '第三季度'},
        { key: 'Q4', value: '第四季度'},
      ]
    }
  }
}
</script>
```

Result:

![1](https://user-images.githubusercontent.com/56863139/117523177-e63e1080-afe9-11eb-91ff-eae928be9311.png)


