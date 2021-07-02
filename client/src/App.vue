<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

html, body {
  font-family: 'Roboto', sans-serif;
}

body {
  height: 100vh;
  margin: 0;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.wrapper {
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  color: black;
  background-color: white;
}

.wrapper-dark {
  color: white;
  background-color: black;
}

.item {
  width: 40%;
  margin: 2vw;
  color: inherit;
}

.item-font {
  font-size: calc(16px + 2vw);
  line-height: 1.5;
}

.btn {
  padding: 2vw 0 2vw 0;
}

.btn-light {
  border: 1vw solid black;
  border-radius: 150px/30px;
}

.btn-dark {
  border: 1vw solid white;
}

.stats {
  text-align: left;
  text-indent: -0.5vw;
  padding-left: 0.5vw;
}
</style>
