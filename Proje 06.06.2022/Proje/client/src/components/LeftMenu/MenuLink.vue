<template>
    <a :href="href" class="MenuLinkOuter" @click="$emit('click')">
        <i class="faicon fa-solid" :class="ricon" />
        <div class="MenuLink">
            <slot></slot>
        </div>
    </a>
</template>

<script>
export default {
    name: "MenuLink",
    emits: ["click"],
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
        faicon: {
            type: String,
            default: "fa-question-circle",
        },
    },
};
</script>
