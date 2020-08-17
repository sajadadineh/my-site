<template>
  <div class="row-container">
    <div class="column-bash-name bash-name">
      <h5>{{ bashName }}$</h5>
    </div>
    <div class="column-commands command">
      <input type="text" id="commands" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Bash",
  props: {
    bashName: String,
  },
};
</script>

<style>
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
