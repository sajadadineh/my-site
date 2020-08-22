<template>
  <div>
    <p>{{ commands }}</p>
  </div>
</template>

<script>
export default {
  name: "Stdout",
  props: {
    commands: String,
  },
};
</script>

<style scoped>
p {
  color: #ffffff;
}
</style>
