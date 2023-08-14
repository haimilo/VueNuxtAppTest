<template>
  <div id="error">
    <AppLogo />
    <p id="errorStatus">
      {{ error.StatusCode }}
    </p>
    <p class="errorMsg">
      {{ error.message }}
    </p>
  </div>
</template>

<script>
import AppLogo from "@/components/AppLogo.vue";
export default {
  layout: "error_layout",
  components: { AppLogo },
  props: ['error'],
};
</script>

<style>
#error {
  margin: 20px;
  text-align: center;
  margin-top: 50%;
}

#errorStatus {
  font-family: monospace;
  font-size: 42px;
  background-color: red;
  color: white;
  line-height: 60px;
  margin: 10px 15%;
}

#errorMsg {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 24px;
  line-height: 36px;
}
</style>