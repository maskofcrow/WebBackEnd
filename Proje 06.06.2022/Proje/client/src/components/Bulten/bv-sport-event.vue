<template>
    <div class="bulten-event">
        <span class="event-code">{{ mcode }}</span>
        <span class="event-time">
            <span class="event-time-date">{{ tDate }}</span>
            <span class="event-time-time">{{ tTime }}</span>
        </span>
        <span class="event-title">
            <span class="event-team event-home">
                <b>{{ home }}</b>
                <img
                    :src="
                        'https://ls.sportradar.com/ls/crest/small/' +
                            homeid +
                            '.png'
                    "
                />
            </span>
            <span class="event-title-seperator">-</span>
            <span class="event-team event-away">
                <img
                    :src="
                        'https://ls.sportradar.com/ls/crest/small/' +
                            awayid +
                            '.png'
                    "
                />
                <b>{{ away }}</b>
            </span>
        </span>
        <span class="event-mbs">
            <span class="event-mbs-block event-mbs-red mbs-1">
                {{ MBS }}
            </span>
        </span>
        <span class="event-stats">
            <font-awesome-icon :icon="['fas', 'chart-line']" />
        </span>
        <span class="event-odd" v-for="(odd, index) in vOdds" :key="index">
            {{ odd }}
        </span>
        <span class="event-more">{{ "+" + more }}</span>
    </div>
</template>

<script>
import moment from "moment";
moment.locale("tr");

export default {
    name: "bv-sport-event",
    props: {
        code: Number,
        time: String,
        home: String,
        homeid: Number,
        away: String,
        awayid: Number,
        MBS: Number,
        odds: Array,
        more: Number,
        view: {
            default: 0,
            type: Number,
        },
    },
    computed: {
        mcode: function() {
            return this.code.toString().slice(-4);
        },
        tMoment: function() {
            return moment(this.time, "DD.MM HH:mm");
        },
        tDate: function() {
            return this.tMoment.format("DD MMM");
        },
        tTime: function() {
            return this.tMoment.format("HH:mm");
        },
        vOdds: function() {
            let odds = [];
            for (const tip of this.odds[this.view].types) {
                for (const odd of this.odds[this.view][tip]) {
                    odds.push(odd.val);
                }
            }
            return odds;
        },
    },
};
</script>

<style lang="scss" scoped>
.bulten-event * {
    box-sizing: border-box;
}

.bulten-event {
    display: flex;
    background: #111;
    align-items: center;
    height: 32px;
    font-size: 13px;
    font-weight: 500;
    color: #ddd;
}
.bulten-event:nth-of-type(2n + 2) {
    background: #151515;
}
.bulten-event > span {
    padding: 0 8px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    border-top: 1px solid rgba(255, 255, 255, 0.03);
    display: flex;
    align-items: center;
    height: 32px;
}
.event-code {
    //font-size: 13px;
    width: 50px;
    font-weight: 800;
    justify-content: center;
    cursor: default;
    color: #e6b800;
}
.event-time {
    //font-size: 13px;
    background: rgba(255, 255, 255, 0.01);
    width: 100px;
    justify-content: center;
    cursor: default;
    .event-time-date {
        margin-right: 5px;
    }
    .event-time-time {
        font-weight: 800;
    }
}
.event-title {
    flex: 1 1 0%;
    justify-content: center;
    .event-title-seperator {
        margin: 0 5px;
    }
    .event-team {
        color: #e6b800;
        font-weight: 500;
        border-bottom: 1px solid rgba(0, 0, 0, 0.5);
        border-top: 1px solid rgba(255, 255, 255, 0.03);
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        flex: 1;
        height: 32px;
        &:hover {
            cursor: pointer;
            color: #ffcc00;
        }
        img {
            vertical-align: middle;
            border-style: none;
        }
        &.event-home {
            justify-content: flex-end;
            img {
                margin-left: 5px;
            }
        }
        &.event-away {
            justify-content: flex-start;
            img {
                margin-right: 5px;
            }
        }
    }
}
.event-mbs {
    width: 40px;
    text-align: center;
    justify-content: center;
    cursor: default;
    .event-mbs-red {
        background: rgb(220, 53, 69);
        color: rgb(255, 255, 255) !important;
    }
    .event-mbs-block {
        display: inline-block;
        padding: 0.25em 0.4em;
        font-size: 85%;
        font-weight: 700;
        line-height: 1;
        text-align: center;
        white-space: nowrap;
        vertical-align: baseline;
        text-shadow: rgba(0, 0, 0, 0.3) 1px 1px 0px;
    }
}
.event-stats {
    width: 40px;
    text-align: center;
    justify-content: center;
    font-size: 16px;
    background: rgba(255, 255, 255, 0.01);
}
.event-stats:hover {
    cursor: pointer;
    font-size: 18px;
    color: #000;
    background: #e6b800;
}
.event-odd {
    width: 40px;
    text-align: center;
    justify-content: center;
    font-weight: 600;
}

.event-odd:hover {
    cursor: pointer;
    background: #2a2a2a;
}

.event-odd-active {
    background: #e6b800;
}

.event-more {
    width: 40px;
    text-align: center;
    justify-content: center;
    font-weight: 800;
    color: #e6b800;
}

.event-more:hover {
    cursor: pointer;
    color: #000;
    background: #e6b800;
}
</style>
