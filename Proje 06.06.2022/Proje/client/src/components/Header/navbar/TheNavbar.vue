<template>
    <div id="TheNavbar">
        <nav-link
            href="/"
            faicon="fa-futbol"
            :text="$t('TheNavbar.bulten')"
        ></nav-link>
        <nav-link
            href="/live"
            faicon=" fa-hourglass"
            :text="$t('TheNavbar.canli')"
        ></nav-link>
        <nav-link
            href="/sanal"
            faicon="fa-vr-cardboard"
            :text="$t('TheNavbar.sanal')"
        ></nav-link>
        <nav-link
            href="/slot"
            faicon="fa-lemon"
            :text="$t('TheNavbar.slot')"
        ></nav-link>
        <nav-link
            href="/casino"
            faicon="fa-dice"
            :text="$t('TheNavbar.casino')"
        ></nav-link>
        <nav-link
            href="/rulet"
            faicon="fa-coins"
            :text="$t('TheNavbar.rulet')"
        ></nav-link>
        <nav-link
            href="/tombala"
            faicon="fa-stopwatch-20"
            :text="$t('TheNavbar.tombala')"
        ></nav-link>
        <nav-link
            href="/kuponlar"
            faicon="fa-receipt"
            :text="$t('TheNavbar.tumkupon')"
        ></nav-link>
        <nav-link
            href="/canlitv"
            faicon="fa-tv"
            :text="$t('TheNavbar.tv')"
        ></nav-link>
        <nav-link
            href="/macsonuclari"
            faicon="fa-poll"
            :text="$t('TheNavbar.sonuc')"
        ></nav-link>
    </div>
</template>

<script>
import NavLink from "@/components/Header/navbar/NavLink.vue";

export default {
    name: "TheNavbar",
    components: {
        NavLink,
    },
};
</script>
