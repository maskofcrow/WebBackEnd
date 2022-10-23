<template>
    <button
        class="normal"
        :class="type"
        :disabled="disabled"
        @click="callback($event)"
    >
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "VButton",
    props: {
        type: String,
        disabled: Boolean,
    },
    methods: {
        callback: function(e) {
            this.$emit("click", e);
        },
    },
};
</script>

