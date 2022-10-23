<template>
    <label class="switch">
        <input type="checkbox" v-model="isLight" @change="changeTheme" />
        <span class="slider round"></span>
    </label>
</template>

<script>
export default {
    name: "DarkSwitch",
    data: function() {
        return {
            isLight: false,
        };
    },
    methods: {
        changeTheme: function() {
            if (this.isLight) {
                this.$emit("changeTheme", "dark");
            } else {
                this.$emit("changeTheme", "light");
            }
        },
    },
};
</script>

<style lang="scss" scoped>
/* The switch - the box around the slider */
.switch {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 25px;
    margin: 0px 5px;
}

/* Hide default HTML checkbox */
.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

/* The slider */
.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #333;
    -webkit-transition: 0.4s;
    transition: 0.4s;
}

.slider:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 4px;
    bottom: 4px;
    -webkit-transition: 0.4s;
    transition: 0.4s;
}

input:checked + .slider {
    background-color: #ccc;
}

input:focus + .slider {
    box-shadow: 0 0 1px #ccc;
}

input:checked + .slider:before {
    -webkit-transform: translateX(24px);
    -ms-transform: translateX(24px);
    transform: translateX(24px);
}

/* Rounded sliders */
.slider.round {
    border-radius: 25px;
}

.slider.round:before {
    border-radius: 50%;
}

input:checked + .slider.round:before {
    background-color: #333;
}

.slider.round:before {
    background-color: #fff;
}
</style>
