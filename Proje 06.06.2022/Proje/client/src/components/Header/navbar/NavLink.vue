<template>
    <div class="navlink">
        <router-link :to="href" active-class="active">
            <i class="faicon fa-solid" :class="ricon" />
            {{text}}
        </router-link>
    </div>
</template>

<script>
export default {
    name: "Navlink",
    computed: {
        ricon: function() {
            let sphelp = this.faicon.split(" ");
            if (sphelp.length > 1) {
                return sphelp;
            } else {
                return this.faicon;
            }
        },
    },
    props: {
        href: String,
        text: String,
        faicon: {
            type: String,
            default: "fa-question-circle",
        },
    },
};
</script>
