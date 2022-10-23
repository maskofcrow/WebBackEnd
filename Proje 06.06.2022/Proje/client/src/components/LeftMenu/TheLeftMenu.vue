<template>
    <div id="TheLeftMenu" :class="minimized ? 'narrow' : 'wide'">
        <div class="minimizedMenu" v-if="minimized">
            <div class="minimizedRow">
                <span @click="minimized = !minimized"  class="minner"> 
                <i class="fa-solid fa-square-caret-right minimizedIcon minner" />
                </span>
            </div>
            <a href="#">
                <div class="minimizedRow">
                    <i class="fa-solid fa-user-gear minimizedIcon" />
                </div>
            </a>
            <a href="#">
                <div class="minimizedRow">
                    <i class="fa-solid fa-palette minimizedIcon" />
                </div>
            </a>
            <div
                v-for="(num, index) in userUI.LeftMenu.groupOrder"
                :key="num"
                style="display: flex; flex-direction:column;">
                <div :style="{
                        order: num,
                        display: 'flex',
                        'flex-direction': 'column',
                    }">
                    <a v-for="element in userUI.LeftMenu.lists[
                            userUI.LeftMenu.groupOrder.indexOf(index + 1)
                        ].innerlist"
                        :key="element.order"
                        :href="element.link">
                        <div class="minimizedRow">
                        <i class="fa-solid  minimizedIcon" :class="element.faicon" />
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <div id="LeftUserPanel" v-if="!minimized">
            <div class="myAccountGroupTitle">
                {{ $t("TheLeftMenu.account-menu-title") }}
                <div style="float:right;">
                <span @click="minimized = !minimized">
                <i class="fa-solid fa-square-caret-left excol-icon"  />
                </span>
                </div>
            </div>
            <menu-link href="#" faicon="fa-user-cog">{{
                $t("TheLeftMenu.account-settings")
            }}</menu-link>
            <menu-link href="#" faicon="fa-palette">{{
                $t("TheLeftMenu.personalize")
            }}</menu-link>
            <menu-link
                href="javascript:void(0)"
                faicon="fa-swatchbook"
                @click="toggleTM"
                >{{ $t("TheLeftMenu.theme-manager") }}</menu-link
            >

            <div class="themeManager" :class="!isTMActive ? 'themeManageroff' : 'themeManageron'">
                <div class="lightdark">
                    <div class="lightdarkbox">
                        Koyu<dark-switch @changeTheme="changeTheme"></dark-switch>Açık
                    </div>
                </div>
                <div class="themebuttons">
                    <div
                        id="redtheme"
                        class="button red text-shadow-negra"
                        @click="colorTheme('red')"
                    ></div>
                    <div
                        id="bluetheme"
                        class="button blue text-shadow-negra"
                        @click="colorTheme('blue')"
                    ></div>
                    <div
                        id="blacktheme"
                        class="button black text-shadow-negra"
                        @click="colorTheme('black')"
                    ></div>
                    <div
                        id="greentheme"
                        class="button green text-shadow-negra"
                        @click="colorTheme('green')"
                    ></div>
                </div>
            </div>

            <div class="mini-menu">
                <span  @click="sortMode">
                <i class="fa-solid fa-sort sort-checker" :class="enableSorting ? 'sort-enabled' : ''"  />
                </span>
            </div>
        </div>

        <menu-group
            :style="{ order: userUI.LeftMenu.groupOrder[0]}"
            :title="$t('TheLeftMenu.administration.title')"
            :enableSorting="enableSorting"
            @move-up="moveUp(0)"
            @move-down="moveDown(0)"
            v-if="!minimized" >
                <transition-group type="transition">
                    <menu-link
                        v-for="element in userUI.LeftMenu.lists[0].innerlist"
                        :key="element.order"
                        :href="element.link"
                        :faicon="element.faicon">
                        {{ $t(element.name) }}
                    </menu-link>
                </transition-group>
            
        </menu-group>

        <menu-group
            :style="{ order: userUI.LeftMenu.groupOrder[1] }"
            :title="$t('TheLeftMenu.manage-games.title')"
            @move-up="moveUp(1)"
            @move-down="moveDown(1)"
            :enableSorting="enableSorting"
            v-if="!minimized" >
                <transition-group type="transition">
                    <menu-link
                        v-for="element in userUI.LeftMenu.lists[1].innerlist"
                        :key="element.order"
                        :href="element.link"
                        :faicon="element.faicon"
                    >
                        {{ $t(element.name) }}
                    </menu-link>
                </transition-group>
        </menu-group>

        <menu-group
            :style="{ order: userUI.LeftMenu.groupOrder[2] }"
            :title="$t('TheLeftMenu.other-settings.title')"
            @move-up="moveUp(2)"
            @move-down="moveDown(2)"
            :enableSorting="enableSorting"
            v-if="!minimized" >
                <transition-group type="transition">
                    <menu-link
                        v-for="element in userUI.LeftMenu.lists[2].innerlist"
                        :key="element.order"
                        :href="element.link"
                        :faicon="element.faicon"
                    >
                        {{ $t(element.name) }}
                    </menu-link>
                </transition-group>
        </menu-group>

        <menu-group
            :style="{ order: userUI.LeftMenu.groupOrder[3] }"
            :title="$t('TheLeftMenu.boss-settings.title')"
            @move-up="moveUp(3)"
            @move-down="moveDown(3)"
            :enableSorting="enableSorting"
            v-if="!minimized">
                <transition-group type="transition">
                    <menu-link
                        v-for="element in userUI.LeftMenu.lists[3].innerlist"
                        :key="element.order"
                        :href="element.link"
                        :faicon="element.faicon"
                    >
                        {{ $t(element.name) }}
                    </menu-link>
                </transition-group>
        </menu-group>
    </div>
</template>

<script>
import MenuGroup from "./MenuGroup.vue";
import MenuLink from "./MenuLink.vue";
import DarkSwitch from "./DarkSwitch.vue";
import leftmenulist from "./TheLeftMenu.json";

export default {
    name: "TheLeftMenu",
    components: { MenuGroup, MenuLink, DarkSwitch },
    data: function() {
        return {
            enableSorting: false,
            isTMActive: false,
            darkTheme: true,
            minimized: false,
            userUI: {
                LeftMenu: {
                    groupOrder: [1, 2, 3, 4],
                    administrationOrder: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                    managegamesOrder: [1, 2, 3],
                    othersettingsOrder: [1, 2, 3, 4],
                    bosssettingsOrder: [1, 2, 3, 4, 5],
                    lists: [...leftmenulist],
                },
            },
        };
    },
    methods: {
        moveUp: function(ordind) {
            let ord = this.userUI.LeftMenu.groupOrder[ordind];
            let chind = this.userUI.LeftMenu.groupOrder.indexOf(ord - 1);
            if (ord > 1) {
                [
                    this.userUI.LeftMenu.groupOrder[ordind],
                    this.userUI.LeftMenu.groupOrder[chind],
                ] = [
                    this.userUI.LeftMenu.groupOrder[chind],
                    this.userUI.LeftMenu.groupOrder[ordind],
                ];
            }
            this.userUI.LeftMenu.groupOrder = [
                ...this.userUI.LeftMenu.groupOrder,
            ];
            console.log(this.userUI.LeftMenu.groupOrder);
        },
        moveDown: function(ordind) {
            let ord = this.userUI.LeftMenu.groupOrder[ordind];
            let chind = this.userUI.LeftMenu.groupOrder.indexOf(ord + 1);
            if (ord < this.userUI.LeftMenu.groupOrder.length) {
                [
                    this.userUI.LeftMenu.groupOrder[ordind],
                    this.userUI.LeftMenu.groupOrder[chind],
                ] = [
                    this.userUI.LeftMenu.groupOrder[chind],
                    this.userUI.LeftMenu.groupOrder[ordind],
                ];
            }
            this.userUI.LeftMenu.groupOrder = [
                ...this.userUI.LeftMenu.groupOrder,
            ];
            console.log(this.userUI.LeftMenu.groupOrder);
        },
        sortMode: function() {
            this.enableSorting = !this.enableSorting;
        },
        toggleTM: function() {
            this.isTMActive = !this.isTMActive;
        },
        changeTheme: function() {
            this.$store.dispatch("UIModule/changeTheme");
        },
        colorTheme: function(color) {
            this.$store.dispatch("UIModule/changeColorTheme", color);
        },
    },
    computed: {
        getEnableSorting: function() {
            return this.enableSorting;
        },
    },
};
</script>
