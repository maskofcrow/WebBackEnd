<template>
  <body class="align">
    <div class="grid">
      <router-view />
    </div>
  </body>
</template>

<script>
export default {
  name: "AuthLayout",
  data() {
    return {
      show: false,
    };
  }
};
</script>

