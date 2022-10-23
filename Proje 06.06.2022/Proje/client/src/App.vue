<template>
  <div class="container" :class="getColorTheme" id="in-content">
    <div class="row">
         <header>
             <Headers />
         </header>
          <router-view />
    </div>
  </div>
</template>


<script>
import Headers from '@/components/Header/Headers.vue'

export default {
  
  name: "App",
  components: {
    Headers,
  },
  mounted: function () {
    if (this.getTheme === "theme-light") {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  },

  computed: {
    getTheme() {
      return this.$store.state.UIModule.themeName;
    },
    getColorTheme() {
      return this.$store.state.UIModule.colorTheme;
    },
  },
};
</script>