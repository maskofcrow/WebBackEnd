<template>
    <div class="MenuGroup">
        <div class="GroupTitle">
            {{ title }}
            <div class="sorter">
                <span @click="$emit('move-up')" v-show="enableSorting">
                    <i class="fa-solid fa-sort-up sorter-up"  />
                </span>
                <span @click="$emit('move-down')" v-show="enableSorting">
                <i class="fa-solid fa-sort-down sorter-down"  />
                </span>
                <span @click="collapsed = !collapsed" v-show="!enableSorting && collapsed">
                <i class="fa-solid fa-square-plus excol-icon"  />
                </span>
                <span @click="collapsed = !collapsed" v-show="!enableSorting && !collapsed">
                <i class="fa-solid fa-square-minus excol-icon"  />
                </span>
            </div>
        </div>
        <div class="GroupLinks" :style="{ display: collapsed ? 'none' : 'block' }" >
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "MenuGroup",
    emits: ["move-up", "move-down"],
    components: {},
    props: {
        title: String,
        enableSorting: Boolean,
        collapsed: {
            default: false,
            type: Boolean,
        },
    },
    
};
</script>

