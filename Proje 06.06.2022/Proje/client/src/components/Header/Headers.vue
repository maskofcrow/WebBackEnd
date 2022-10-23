<template>
    <the-infobar></the-infobar>
    <the-navbar></the-navbar>
</template>

<script>
import TheNavbar from "@/components/Header/navbar/TheNavbar.vue";
import TheInfobar from "@/components/Header/navbar/TheInfobar.vue";
export default {
    name: 'Headers',
    data() {
        return {

        }
    },
    components: {
        TheNavbar,
        TheInfobar,
    },
}
</script>

