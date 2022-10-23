<template>
    <div id="TheInfobar">
        <logo title="Vipbet90"></logo>
        <div class="infotab">
            <span>
                {{ $t("TheInfobar.greeting") }}
                <b>{{user}}</b>
            </span>
            <v-button type="danger" @click="logout">{{ $t("TheInfobar.exit") }}</v-button>
        </div>
        <div class="infotab">
            <span>
                <b>{{ $t("TheInfobar.atype") }}</b>
            </span>
            <span class="infotab-alt">{{utype}}</span>
        </div>
        <div class="infotab">
            <span>
                <b>{{ $t("TheInfobar.balance") }}</b>
            </span>
            <span class="infotab-alt">{{balance}}</span>
        </div>
        <div class="infotab">
            <span>
                <b>{{ $t("TheInfobar.aday") }}</b>
            </span>
            <span class="infotab-alt">{{aday}}</span>
        </div>

        <div class="infotab">
            <span>
                <b>{{ $t("TheInfobar.system") }}</b>
            </span>
            <span class="infotab-alt">{{ ctime }}</span>
        </div>
        <div class="infotab">
            <span>
                <b>{{ $t("TheInfobar.online") }}</b>
            </span>
            <span class="infotab-alt">1</span>
        </div>
        <lang-panel class="infotab"></lang-panel>
    </div>
</template>

<script>
import moment from "moment";
import Logo from "./Logo.vue";
import VButton from "./VButton.vue";
import LangPanel from "./LangPanel.vue";
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { API } from '../../../API'

export default {
    name: "TheInfoBar",
    components: { Logo, VButton, LangPanel },
    data: function() {
        return {
            store : useStore(),
            router : useRouter(),
            ctime: moment()
                .locale(this.$i18n.locale)
                .format("DD MMMM YYYY HH:mm:ss"),
        };
    },
    computed: {
        user: function() {
            return this.store.state.user.username;
        },
        utype: function() {
            return this.store.state.user.type;
        },
        balance : function() {
            if(this.store.state.user.type == "root" ||  this.store.state.user.type == "super" || this.store.state.user.type == "admin"){
                return "Sınırsız";
            }else{
                let tf = this.store.state.user.balance ? this.store.state.user.balance : 0; 
                return tf.toFixed(2);
            }
        },
        aday : function() {
            if(this.store.state.user.type == "root" ){
                return "Süresiz";
            }else{
                return this.store.state.user.aday;
            }
        },
    },
    methods: {
        moment: function() {
            return moment();
        },
        updateTime: function() {
            this.ctime = moment()
                .locale(this.$i18n.locale)
                .format("DD MMMM YYYY HH:mm:ss");
            setTimeout(this.updateTime, 1000);
        },
        logout: async function () {
            await API.post('login/logout').then(response => {
                if(response.status == 200){
                    this.store.commit('setUser', {});
                    localStorage.removeItem('user');
                    localStorage.removeItem('token');
                    this.$toast.open({
                        message: 'Çıkış yapıldı',
                        type: 'error',
                        duration: 6000
                    });
                    this.router.push('/login');
                }
            }).catch(error => {
                
               if(error.code == 'ERR_NETWORK'){
                    this.$toast.open({
                        message: 'İnternet bağlantınız yok',
                        type: 'error',
                        duration: 6000
                    });            
               }else{
                this.$toast.open({
                        message: error.response.data.message,
                        type: 'error',
                        duration: 5000
              });
               } 
                
             
            });

        }
    },
    mounted: function() {
        if(localStorage.getItem('token')){
            this.store.commit('setUser', JSON.parse(localStorage.getItem('user')));
        }
        setTimeout(this.updateTime, 1000);
    },
};
</script>
