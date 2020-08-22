<template>
  <div id="app">
    <Header v-bind:title="title" />
    <StdinOut v-bind:bashName="title" />
  </div>
</template>

<script>
import Header from "./components/Header";
import StdinOut from "./components/Stdin-out";

export default {
  name: "App",
  components: {
    Header,
    StdinOut,
  },
  data: function () {
    return {
      title: "sjd@quantum:~",
    };
  },
};
</script>

<style>
* {
  background: #002b36;
  margin: 0;
  padding: 0;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
}
</style>
