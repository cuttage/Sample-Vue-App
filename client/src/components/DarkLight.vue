<template>
  <div class="wrapper" :class="isDarkW" ref="wrap">
    <div role="button" ref="btn" class="item item-font btn pdng" :class="isDarkB" @click="changeSwitchCurrentStatus(), changeSwitchCounter()">Switch to {{ changeTo }} mode</div>
    <Statistics class="item item-font stats" />
  </div>
</template>

<script>
import Statistics from './Statistics.vue'
import { mapState, mapActions } from 'vuex'
import  { TweenMax, Back } from 'gsap'
export default {
  data() {
    return {
      wrapperDark: 'wrapper-dark',
      btnDark: 'btn-dark',
      btnLight: 'btn-light',
      cached: ''
    }
  },
  components: {
    Statistics
  },
  computed: {
    ...mapState({
      statistics: 'statistics'
    }),
    darkCondition() {
      return this.statistics.length > 0 && this.statistics[0].switchCurrentStatus === true;
    },
    changeTo() {
      return (this.statistics.length > 0 && this.statistics[0].switchCurrentStatus === false) ? 'dark' : 'light';
    },
    isDarkW() {
      return (this.darkCondition) ? this.wrapperDark : '';
    },
    isDarkB() {
      return (this.darkCondition) ? this.btnDark : this.btnLight;
    }
  },
  methods: mapActions(['changeSwitchCurrentStatus', 'changeSwitchCounter']),
  mounted() {
    this.$watch('changeTo', function(newValue, oldValue) {
      if (newValue === 'light' && oldValue !== undefined) {
        this.$nextTick(() => {
          TweenMax.fromTo(this.$refs.btn, 2.2, {
            borderRadius: "2%"
          },
          {
            borderRadius: "+=120px / +=30px",
            force3D: true,
            transformOrigin:"center center",
            ease: Back.easeOut,
            repeat: 1,
            yoyo: true
          })
          TweenMax.fromTo(this.$refs.wrap, 0.6, {
            backgroundColor: "white"
          },
          {
            backgroundColor: "black",
            force3D: true,
            ease: Back.easeOut
          })
        })
      }
      if (newValue === 'dark' && oldValue !== undefined) {
        this.$nextTick(() => {
          TweenMax.fromTo(this.$refs.btn, 2.2, {
            borderRadius: "2%"
          },
          {
            borderRadius: "+=30px / +=120px",
            force3D: true,
            transformOrigin:"center center",
            ease: Back.easeOut,
            repeat: 1,
            yoyo: true
          })
          TweenMax.fromTo(this.$refs.wrap, 0.6, {
            backgroundColor: "black"
          },
          {
            backgroundColor: "white",
            force3D: true,
            ease: Back.easeOut
          })
        })
      }
    }, {immediate: true});
  }
}
</script>

<style lang="scss" scoped>
.pdng {
  padding-right: 2.5vw;
  padding-left: 2.5vw;
}
</style>
