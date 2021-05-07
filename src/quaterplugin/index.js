let _Vue = null

class QuarterPlugin {
  constructor(options) {
    this.options = options
    this.startYear = this.options.start
    this.endYear = this.options.end
    if (!options || !this.startYear) {
      console.error('Please set start year')
    }
    if (this.endYear && this.endYear < this.startYear) {
      console.error('Quater end-year is smaller than start-year')
      
    }
  }

  static install (Vue) {
    _Vue = Vue

    _Vue.mixin({
      beforeCreate () {
        if (this.$options.quarter) {
          const quarterOption = this.$options.quarter
          let year = ''
          if(quarterOption.endYear) {
            year = quarterOption.endYear
          } else {
            year = String(new Date().getFullYear())
          }
          const month = String(new Date().getMonth() + 1)
          let years = []
          let currentSeason = ''
          for (let j=0;j < year - quarterOption.startYear + 1; j++)  {
            years.push(year - j)
          }
          currentSeason = 'Q' + Math.floor((month % 3 === 0 ? (month / 3) : (month / 3 + 1)))
          _Vue.prototype.$quarterYears = years
          _Vue.prototype.$currentYear = String(new Date().getFullYear())
          _Vue.prototype.$currentQuarter = currentSeason
        }
      }
    })
  }
}

export default QuarterPlugin