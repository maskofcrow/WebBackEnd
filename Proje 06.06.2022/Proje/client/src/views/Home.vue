<template>

  <div class="main">
    <LeftMenu />
    <Bulten />
    <RightMenu />
  </div>
</template>

<script>
// @ is an alias to /src
import LeftMenu from '@/components/LeftMenu/TheLeftMenu.vue'
import Bulten from '@/components/Bulten/Bulten.vue'
import RightMenu from '@/components/RightMenu.vue'
export default {
  name: 'Home',
  components: {
    LeftMenu,
    Bulten,
    RightMenu
  }
}
</script>
