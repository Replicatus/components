<template>
  <!-- :width="width"
       :height="height"-->
  <svg xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg"
       xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0"
       :width="styles.width"
       :height="styles.height"
       :fill="colorAfterCheck"
       :viewBox="0 + ' ' +  0  + ' ' + 5.5 * viewBoxSize+ ' ' + 5.5 * viewBoxSize"
       xml:space="preserve">
    <path  d="M64.4 16a49 49 0 0 0-50 48 51 51 0 0 0 50 52.2 53 53 0 0 0 54-52c-.7-48-45-55.7-45-55.7s45.3 3.8 49 55.6c.8 32-24.8 59.5-58 60.2-33 .8-61.4-25.7-62-60C1.3 29.8 28.8.6 64.3 0c0 0 8.5 0 8.7 8.4 0 8-8.6 7.6-8.6 7.6z">
      <animateTransform attributeName="transform" type="rotate" from="0 64 64" to="360 64 64" dur="1000ms" repeatCount="indefinite"></animateTransform></path>
  </svg>
</template>

<script>
import {convertToUnit} from "@/Utils/helpers"
export default {
  name: "circularLoader",
  props: {
    height: {
      type: [Number,String],
      default: 16
    },
    color: {
      type: [String],
      default: '#0D72BD'
    },
    size: {
      type: [Number, String],
      default: 32,
    },
    width: {
      type: [Number, String],
      default: 4,
    },
    value: {
      type: [Number, String],
      default: 0,
    },
  },
  data: () => ({
    radius: 20,
  }),
  computed: {
    colorAfterCheck() {
      return this.color && this.color !== ''? this.color : '#0D72BD';
    },
    calculatedSize () {
      return Number(this.size) + 8
    },
    circumference () {
      return 2 * Math.PI * this.radius
    },
    normalizedValue () {
      if (this.value < 0) {
        return 0
      }

      if (this.value > 100) {
        return 100
      }

      return parseFloat(this.value)
    },
    strokeDashArray ()  {
      return Math.round(this.circumference * 1000) / 1000
    },

    strokeDashOffset ()  {
      return ((100 - this.normalizedValue) / 100) * this.circumference + 'px'
    },

    strokeWidth ()  {
      return Number(this.width) / +this.size * this.viewBoxSize * 2
    },
    viewBoxSize () {
      return this.radius / (1 - Number(this.width) / +this.size)
    },
    styles () {
      return {
        height: convertToUnit(this.calculatedSize),
        width: convertToUnit(this.calculatedSize),
      }
    },
  },

}
</script>

<style scoped>

</style>