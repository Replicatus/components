<template>
  <div id="app">
    <input v-model="color">
      <v-button
        button-text="heyвыафываыфваыф"
        :loading="loading"
        :color="color"
        theme=""
        @click="clickBtn()"
      />
  </div>
</template>

<script>
import VButton from "@/components/UI/vButton";
export default {
  name: 'App',
  components: {
    VButton
  },
  data() {
    return {
      loading: false,
      color: '#d61313'
    }
  },
  methods: {
    clickBtn() {
      this.loading = true
      // setTimeout(() => { this.loading = false}, 100000)
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
