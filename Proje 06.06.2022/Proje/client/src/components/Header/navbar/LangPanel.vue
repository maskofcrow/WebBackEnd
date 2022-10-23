<template>
    <div id="LangPanel">
        <span><b>{{ $t("TheInfobar.lang")}}</b></span>
        <span class="langspan" @click="openLang">
            <img class="langs" :src="activeLang.img" />
            {{ activeLang.name }}
            </span>
        <div class="langspan-content" v-show="open">
            <span
                v-for="lang in langs"
                :key="lang.sort"
                v-on:click="changeLang(lang.short)"
                class="langa"> 
                <img  :src="lang.img"/>
                    {{ lang.name }}
            </span>
        </div>
    </div>
</template>

<script>
import trcircle from "@/assets/lang/tr-circle.svg";
import encircle from "@/assets/lang/en-circle.svg";
export default {
    name: "LangPanel",
    data() {
        return {
            activeLang: {},
            open: false,
            langs: [
                {
                    name: "Türkçe",
                    short: "tr",
                    img: trcircle,
                },
                {
                    name: "English",
                    short: "en",
                    img: encircle,
                },
            ],
        };
    },
    methods: {
        changeLang: function(ln) {
            let fnd = this.langs.find((el) => {
                return el.short == ln;
            });
            if (fnd) {
                this.$i18n.locale = ln;
                this.activeLang = fnd;
                this.open = false;
            } else {
                this.activeLang = {
                    name: "Türkçe",
                    short: "tr",
                    img: trcircle,
                };
            }
        },
        openLang: function() {
            this.open = !this.open;
        }
    },
    mounted: function() {
        let fnd = this.langs.find((el) => {
            return el.short == this.$i18n;
        });
        if (fnd) {
            this.activeLang = fnd;
        } else {
            this.activeLang = {
                name: "Türkçe",
                short: "tr",
                img: trcircle,
            };
        }
    },
};
</script>
