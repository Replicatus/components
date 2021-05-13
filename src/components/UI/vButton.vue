<template>
  <router-link :to="to">
    <button
        ref="btn"
        class="v-btn theme--light v-size--default"
        :class="buttonClasses"
        :style="styles"
        :disabled="disabled || loading"
        @click="clickOnBtn()"
    >
    <span
        class="v-btn__content"
        :style="'color: '+ color"
    >
        {{ buttonText }}
    </span>
      <span
          v-if="loading"
          class="v-btn__loader"
          ref="btn_loading"
      >
        <circularLoader
            :color="color"
            :size="calculatedLoaderSize"
        />
    </span>
    </button>
  </router-link>
</template>

<script>
import circularLoader from "@/components/UI/circularLoader";
import createAndClickOnLink from "@/Utils/link"

export default {
  name: "vButton",
  components: {
    circularLoader,
  },
  data() {
    return {
      isActive: false
    }
  },
  props: {
    activeClass: {type: String, default: ''},
    block: Boolean,
    buttonText: {type: String, default: ''},
    loaderSize: [Number, String],
    classes: {type: String, default: ''},
    color: {type: String, default: '#0D72BD'},
    depressed: Boolean,
    disabled: {type: Boolean, default: false},
    height: {type: String, default: ''},
    icon: Boolean,
    link: {type: String, default: ''},
    linkTargetAttribute: {type: String, default: ''},
    loading: {type: Boolean, default: false},
    outlined: Boolean,
    rounded: Boolean,
    styles: {type: String, default: ''},
    text: Boolean,
    theme: {type: String, default: ''},
    tile: Boolean,
    to: {type: String, default: ''},
    width: {type: String, default: ''},

  },
  mounted() {

  },
  watch: {},
  computed: {
    isRound() {
      return Boolean(
          this.icon
      )
    },
    calculatedLoaderSize() {
      return this.loaderSize ?? 23
    },
    isFlat() {
      return Boolean(
          this.icon ||
          this.text ||
          this.outlined
      )
    },
    propsClasses() {
      return {[this.classes]: true}
    },
    themeClasses() {
      if (!this.theme) return {
        ['primary']: true
      }
      return {
        [this.theme]: true
      }
    },
    groupClasses() {
      if (!this.activeClass) return {}
      return {
        [this.activeClass]: this.isActive,
      }
    },
    buttonClasses() {
      return {
        // 'v-btn': true,
        // ...Routable.options.computed.classes.call(this),
        'v-btn--absolute': this.absolute,
        'v-btn--block': this.block,
        'v-btn--bottom': this.bottom,
        'v-btn--depressed': (this.depressed) || this.outlined,
        'v-btn--disabled': this.disabled,
        // 'v-btn--fab': this.fab,
        'v-btn--fixed': this.fixed,
        'v-btn--flat': this.isFlat,
        'v-btn--icon': this.icon,
        'v-btn--left': this.left,
        'v-btn--loading': this.loading,
        'v-btn--outlined': this.outlined,
        'v-btn--right': this.right,
        'v-btn--round': this.isRound,
        'v-btn--rounded': this.rounded,
        'v-btn--router': this.to,
        'v-btn--text': this.text,
        'v-btn--tile': this.tile,
        'v-btn--top': this.top,
        ...this.groupClasses,
        ...this.propsClasses,
        ...this.themeClasses
      }
    }
  },
  methods: {
    clickOnBtn() {
      if (this.link) {
        createAndClickOnLink(this.link, this.linkTargetAttribute)
      } else
        this.$emit('click')
    },
  },
}
</script>
<style lang="sass" scoped>
//$colorVar: #0D72BD
//button
//  color: $colorVar
//@import "./src/assets/styles/components/VBtn/vbtn"
a
  text-decoration: none
</style>