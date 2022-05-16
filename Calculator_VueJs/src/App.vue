<template>
   <h1 class="text-center">{{ tittle }}</h1>
   <Calculator />
</template>

<script>
import Calculator from "./components/Calculator.vue";

export default {
   name: "App",
   components: {
      Calculator,
   },
   data() {
      return {
         tittle: "Calculator1 js",
      };
   },
};
</script>

<style>
body {
   background-color: #f1ef64;
}
</style>
