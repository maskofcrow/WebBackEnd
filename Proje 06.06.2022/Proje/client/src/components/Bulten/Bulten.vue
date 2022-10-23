<template>
    <div id="main-view">
        <div class="bulten">
            <div class="bulten-menu">
                <div class="sport-tabs">
                    <sport-tab-link
                        title="Futbol"
                        count="439"
                        faicon="fa-futbol"
                        active
                    ></sport-tab-link>
                    <sport-tab-link
                        title="Basketbol"
                        count="120"
                        faicon="fa-basketball-ball"
                    ></sport-tab-link>
                    <sport-tab-link
                        title="Voleybol"
                        count="34"
                        faicon="fa-volleyball-ball"
                    ></sport-tab-link>
                    <sport-tab-link
                        title="Hentbol"
                        count="34"
                        faicon="fa-futbol"
                    ></sport-tab-link>
                    <sport-tab-link
                        title="Beyzbol"
                        count="0"
                        faicon="fa-baseball-ball"
                    ></sport-tab-link>
                    <sport-tab-link
                        title="Tenis"
                        count="89"
                        faicon="fa-tablets"
                    ></sport-tab-link>
                    <sport-tab-link
                        title="M. Tenisi"
                        count="211"
                        faicon="fa-table-tennis"
                    ></sport-tab-link>
                    <sport-tab-link
                        title="A. Futbolu"
                        count="0"
                        faicon="fa-football-ball"
                    ></sport-tab-link>
                    <sport-tab-link
                        title="Buz Hokeyi"
                        count="149"
                        faicon="fa-hockey-puck"
                    ></sport-tab-link>
                    <sport-tab-link
                        title="Boks"
                        count="42"
                        faicon="fa-hand-rock"
                    ></sport-tab-link>
                    <sport-tab-link
                        title="Golf"
                        count="80"
                        faicon="fa-golf-ball"
                    ></sport-tab-link>
                    <sport-tab-link
                        title="Dart"
                        count="100"
                        faicon="fa-bullseye"
                    ></sport-tab-link>
                </div>
                <div class="bulten-searcher">
                    <div class="searcher">
                        <label class="searcher-title">TAKIM ADI</label>
                        <div>
                            <input
                                type="text"
                                name="q"
                                placeholder="Takım adına göre"
                                class="form-control"
                            />
                        </div>
                    </div>
                    <div class="searcher">
                        <label class="searcher-title">GÖSTERİM</label>
                        <div>
                            <select class="form-control" name="view">
                                <option value="league">Lige göre grupla</option>
                                <option value="time">
                                    Başlama saatine göre grupla
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="searcher">
                        <label class="searcher-title">TARİH</label>
                        <div>
                            <select class="form-control" name="start_time">
                                <option value="all">Hepsi</option>
                                <option value="today">10 Ocak Pazar</option>
                                <option value="tomorrow">
                                    11 Ocak Pazartesi
                                </option>
                                <option value="nextday">12 Ocak Salı</option>
                                <option value="3days">13 Ocak Çarşamba</option>
                                <option value="4days">14 Ocak Perşembe</option>
                                <option value="30min">
                                    30 dakika içerisinde
                                </option>
                                <option value="1hour">1 saat içerisinde</option>
                                <option value="3hour">3 saat içerisinde</option>
                                <option value="6hour">6 saat içerisinde</option>
                                <option value="12hour">
                                    12 saat içerisinde
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <bulten-view></bulten-view>
        </div>
    </div>
</template>

<script>
import SportTabLink from "./sport-tab-link.vue";
import BultenView from "./bulten-view.vue";

export default {
    name: "Home",
    components: {
        SportTabLink,
        BultenView,
    },
};
</script>

<style lang="scss" scoped>
#Home {
    width: 100%;
}

.bulten * {
    box-sizing: border-box;
}

.sport-tabs {
    display: flex;
    width: 100%;
}
.bulten-searcher {
    background-color: #111;
    width: 100%;
    padding: 15px 0;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}

.bulten-searcher label {
    background: #030303;
    margin-bottom: 0;
    height: 30px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    line-height: 1;
    width: 100%;
}

.bulten-searcher .searcher-title {
    color: #ffffff66;
    font-weight: 500;
    font-size: 11px;
}

.bulten-searcher .searcher {
    margin: 0 20px;
    flex: 1;
}

.form-control {
    border: none;
    outline: none !important;
    border: 1px solid transparent;
    background: rgba(0, 0, 0, 0.4);
    color: #fff;
    font-size: 13px;
    display: block;
    height: 40px;
    padding: 0 0 0 8px;
    width: 100%;
    font-weight: 400;
    line-height: 1.5;
    border-radius: 0;
    box-sizing: border-box;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.form-control option,
.form-control:focus option {
    background: #111111;
}
</style>
