<template>
    <div id="Logo">
        <a href="#" :title="$t('TheInfobar.logoimgalt')">{{ title }}</a
        ><span
            style="
    position: absolute;
    font-size: 10px;
    font-weight: normal;
    letter-spacing: normal;
    font-family: Arial;
    bottom: 30px;
    right: 20px;
    text-shadow: none;
    color: #777;
    height: 0.1px;
    top: 22px;
"
            >{{ $t("TheInfobar.logoalt") }}</span
        >
    </div>
</template>

<script>
export default {
    name: "Logo",
    props: {
        title: String,
    },
};
</script>
