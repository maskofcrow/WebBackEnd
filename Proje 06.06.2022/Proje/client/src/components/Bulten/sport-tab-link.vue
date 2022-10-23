<template>
    <a href="#" class="sport-tab-link" :class="{ 'sport-tab-link-active': active }" >
        <i class="sport-tab-icon fa-solid" :class="ricon" />
        <span class="sport-tab-name">{{ title }}</span>
        <small class="sport-tab-count">{{ count }}</small>
    </a>
</template>

<script>
export default {
    name: "sport-tab-link",
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
        title: String,
        count: String,
        active: {
            type: Boolean,
            default: false,
        },
        faicon: {
            type: String,
            default: "fa-question-circle",
        },
    },
};
</script>

<style lang="scss" scoped>
.sport-tab-link {
    flex: 1 1 0px;
    text-decoration: none;
    background-color: #000;
    color: #ccc;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    font-size: 12px;
    font-weight: 500;
    border-bottom: 2px solid #333;
}

.sport-tab-link:hover:not(.sport-tab-link-active) {
    color: #fff;
    background-color: #333;
}

.sport-tab-link-active {
    color: #e6b800;
    background-color: #111;
    border-bottom: 0px;
}

.sport-tab-name {
    text-align: center;
}

.sport-tab-icon {
    font-size: 20px;
    margin: 0 0 10px 0;
}
.sport-tab-count {
    font-size: 12px;
}
</style>
