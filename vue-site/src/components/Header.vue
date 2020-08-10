<template>
  <div>
    <p class="background text-white text-center p-2 font-weight-bold">
      {{ title }}
    </p>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: String,
  },
};
</script>

<style scoped>
.background {
  background: #23262c;
  border: 1px solid #191a1b;
}
</style>
