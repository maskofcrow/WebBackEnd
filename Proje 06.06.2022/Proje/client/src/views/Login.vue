<template>
  <div class="error-page" v-show="error">
    <span><i class="fa-solid fa-circle-exclamation"></i></span>
    {{errorMsg}}
    </div> 
    <div class="login-box">
    <form class="form login" @submit.prevent="onSubmit"  method="POST">
      <div class="form__field">
        <label for="login__username"><i class="fa-solid fa-user"></i>
<span class="hidden">Username</span></label>
        <input type="text" name="username" class="form__input" placeholder="Kullanıcı adı" required v-model="username" />
      </div>

      <div class="form__field">
        <label for="login__password"><i class="fa-solid fa-lock"></i>
          <span class="hidden">Password</span></label>
        <input type="password" name="password" class="form__input" placeholder="Şifre" required v-model="password" />
      </div>

      <div class="form__field">
        <input type="submit" value="Giriş Yap">
      </div>
    </form>
  </div>
</template>
<script>
import { useStore } from 'vuex';
import {API} from '../API';
export default {
  name: 'Login',
  data() {
    return {
      username : '',
      password : '',
      errorMsg : '',
      error : false,
      store : useStore(),
    }
  },
  watch: {
    username: function(val) {
      if(val.length > 0) {
        this.error = false;
      }
    },
    password: function(val) {
      if(val.length > 0) {
        this.error = false;
      }
    }
  },
  mounted() {
      // Create localStorage Token and username
      let user = localStorage.getItem('user');
      let token = localStorage.getItem('token');
      if(user) {
        this.store.commit('setUser', JSON.parse(user));
        this.$router.push('/');
      }
  },
  methods: {
     onSubmit() {
          if(this.username.length > 0 && this.password.length > 0){
            API.post('login', {
              username : this.username,
              password : this.password,
            }).then(response => {
              
              if(response.status == 200){
                this.$toast.success('Giriş işlemi başarılı.');
                this.store.commit('setUser', response.data);
                const { token, username,type,balance,aday } = response.data;
                localStorage.setItem('user', JSON.stringify(
                  {
                    token,
                    username,
                    type,
                    balance,
                    aday
                  }
                ));
                localStorage.setItem('token', token);
                
                this.$router.push('/');
              }else{
                this.error = true;
                this.errorMsg = response.data.message;
              }
          }).catch(error => {
            this.error = true;
            this.errorMsg = error.response.data.message;
          });
      }else{
        this.error = true;
        this.errorMsg = 'Kullanıcı adı ve şifre boş olamaz';
      }
  } 
  }
}
</script>