<template>
    <div class="bulten-view">
        <div class="bulten-view-mode-selector">
            <div class="bulten-view-mode" @click="view = 0">Maç Sonucu</div>
            <div class="bulten-view-mode" @click="view = 1">
                İlk Yarı Sonucu
            </div>
            <div class="bulten-view-mode" @click="view = 2">Handikaplı</div>
            <div class="bulten-view-mode" @click="view = 3">
                Beraberlikte İade
            </div>
            <div class="bulten-view-mode" @click="view = 4">
                Karşılıklı Gol
            </div>
            <div class="bulten-view-mode" @click="view = 5">Goller</div>
            <div class="bulten-view-mode" @click="view = 6">Çifte Şans</div>
            <div class="bulten-view-mode" @click="view = 7">Gol Aralığı</div>
            <div class="bulten-view-settings">
                <i class="fa-solid fa-gear"></i>
            </div>
        </div>
        <div class="bulten-events">
            <div v-for="(league, index) in leagues" :key="index">
                <div class="bulten-event-group">
                    <div class="bulten-event-group-title">
                        <span class="beg-info-title">
                            <img
                                :src="
                                    'https://ls.sportradar.com/ls/crest/small/' +
                                        (league.cc
                                            ? league.cc.toLowerCase()
                                            : 'int') +
                                        '.png'
                                "
                            />
                            <b>{{ league.ct }}</b>
                            <span>{{ league.tn }}</span>
                        </span>
                        <span class="beg-mbs-title">MBS</span>
                        <span class="beg-stats-title">İSTS.</span>
                        <span class="beg-odd-title">1</span>
                        <span class="beg-odd-title">X</span>
                        <span class="beg-odd-title">2</span>
                        <span class="beg-odd-title">Var</span>
                        <span class="beg-odd-title">Yok</span>
                        <span class="beg-odd-title">Alt</span>
                        <span class="beg-odd-title">Üst</span>
                        <span class="beg-odd-title"></span>
                    </div>
                </div>
                <sport-event
                    v-for="match in matches.filter((mc) => {
                        return (
                            mc.Category == league.ct &&
                            mc.Tournament == league.tn
                        );
                    })"
                    :key="match.MatchID"
                    :code="match.MatchID"
                    :time="match.MatchDate"
                    :home="match.Competitor1"
                    :homeid="match.Competitor1SUPERID"
                    :away="match.Competitor2"
                    :awayid="match.Competitor2SUPERID"
                    :MBS="1"
                    :odds="match.exodds"
                    :more="match.OptionCount"
                    :view="view"
                ></sport-event>
            </div>
            <infinite-loading @infinite="infiniteHandler">
                <template #spinner></template>
                <template #complete><span>No more data found!</span></template>
            </infinite-loading>
        </div>
    </div>
</template>

<script>
import SportEvent from "@/components/Bulten/bv-sport-event.vue";
import InfiniteLoading from "v3-infinite-loading";
import "v3-infinite-loading/lib/style.css"; 

export default {
    name: "bulten-view",
    components: {
        SportEvent,
        InfiniteLoading,
    },
    props: {
        sport: {
            default: 1,
            type: Number,
        },
    },
    data: function() {
        return {
            page: 0,
            view: 0,
            matches: [],
            leagues: [],
        };
    },
    methods: {
        infiniteHandler($state) {
            this.axios
                .get("http://localhost:3000/football", {
                    params: {
                        page: this.page,
                    },
                })
                .then(({ data }) => {
                    if (data.length) {
                        this.page += 1;
                        this.matches.push(...data);
                        for (const mc of this.matches) {
                            if (
                                !this.leagues.find(
                                    (el) =>
                                        el.ct == mc.Category &&
                                        el.tn == mc.Tournament
                                )
                            )
                                this.leagues.push({
                                    ct: mc.Category,
                                    tn: mc.Tournament,
                                    cc: mc.cc,
                                });
                        }
                        $state.loaded();
                    } else {
                        $state.complete();
                    }
                });
        },
    },
};
</script>

<style lang="scss" scoped>
.bulten-view * {
    box-sizing: border-box;
}

.bulten-view {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}
.bulten-view-mode-selector {
    width: 100%;
    display: flex;
    background-color: #111;
    color: #f0f0f0;
    font-size: 13px;
    font-weight: 500;
}
.bulten-view-mode {
    flex: 1 1 0px;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.bulten-view-mode:hover {
    color: red;
    cursor: pointer;
}
.bulten-view-settings {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 5px;
    margin: 0 5px 0 0;
}

.bulten-view-settings:hover {
    color: #e6b800;
    cursor: pointer;
}
//////////////////////

.bulten-events {
    display: flex;
    flex-direction: column;
    width: 100%;
}
.bulten-event-group {
    display: flex;
    flex-direction: column;
}
.bulten-event-group-title > span {
    color: #ddd;
    font-size: 11px;
    line-height: 1;
    text-transform: uppercase;
    font-weight: bold;
    text-shadow: 1px 1px 0px #222;
    padding: 0 8px;
}

.bulten-event-group-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: uppercase;
    border-top: 1px solid #333;
    border-bottom: 1px solid #111;
    height: 30px;
    font-size: 11px;
    font-weight: 500;
    color: #fff;
    cursor: default;
}
.beg-info-title {
    flex: auto;
    display: flex;
    align-items: center;
    margin-right: 5px;
}

.beg-info-title img {
    margin-right: 5px;
}

.beg-info-title b {
    margin-right: 5px;
}

.beg-info-title span {
    color: #bbb;
    font-weight: 400;
}
.beg-mbs-title {
    width: 40px;
    text-align: center;
}
.beg-stats-title {
    width: 40px;
    text-align: center;
}
.beg-odd-title {
    width: 40px;
    text-align: center;
}

//////////////
</style>
