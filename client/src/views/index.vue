<template>
  <div>
    <DarkLight />
  </div>
</template>

<script>
import DarkLight from '../components/DarkLight.vue'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    DarkLight
  },
  computed: mapState(['statistics']),
  methods: mapActions(['populateStatistics']),
  async created() {
    if (this.statistics.length === 0) await this.populateStatistics()
  }
}
</script>

<style lang="css" scoped>
</style>
