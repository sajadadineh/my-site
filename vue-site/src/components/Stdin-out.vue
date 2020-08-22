<template>
  <div class="row-container">
    <div class="column-bash-name bash-name">
      <h5>{{ bashName }}$</h5>
    </div>
    <div class="column-commands command">
      <input v-model="message" type="text" />
    </div>
  </div>
  <div>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: "Stdin-out",
  props: {
    bashName: String,
  },
};
</script>

<style>
p {
  color: #65888c;
  font-size: 20px;
}

.command input {
  color: #65888c;
  border-width: 0px;
  border: none;
  background: transparent;
  width: 100%;
  outline-width: 0;
  font-size: 20px;
}
.bash-name {
  color: #71ad38;
  margin-top: 4px;
}
.row-container {
  width: 100%;
  display: flex;
}
.column-bash-name {
  position: relative;
  margin-right: 10px;
}
.column-commands {
  position: relative;
  width: 100%;
}
</style>
