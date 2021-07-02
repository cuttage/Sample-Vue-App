<template>
  <div>
    <div class="bdr-b btn">The switcher was clicked {{ statistics[0].switchCounter }} times.</div>
    <div class="bdr-b btn">Current status is {{ currentStatus }}.</div>
    <div v-if="lastStatus" class="bdr-b btn">Last status was {{ statistics[0].switchLastStatus }}.</div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState({
      statistics: 'statistics'
    }),
    currentStatus() {
      return (this.statistics[0].switchCurrentStatus === false) ? 'light' : 'dark';
    },
    lastStatus() {
      return this.statistics[0].switchLastStatus !== null;
    }
  },
  methods: mapActions(['populateStatistics', 'changeSwitchLastStatus']),
  created() {
    this.populateStatistics()

    this.$watch('currentStatus', function(newValue, oldValue) {
      if (oldValue !== undefined) {
        this.changeSwitchLastStatus(oldValue)
      }
    }, {immediate: true});
  }
}
</script>

<style lang="scss" scoped>
.bdr-b {
  border-bottom: 4px solid pink;
}
</style>
