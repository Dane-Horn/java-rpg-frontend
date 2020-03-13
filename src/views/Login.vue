<template>
  <div id="fieldsetContainer" class="login nes-container with-title">
    <p class="title themeHeader" style="font-family: 'Press Start 2P', cursive !important">Login</p>
      <v-form v-model="isValid" v-on:submit.prevent ref="form">
              <v-text-field
                id="email"
                label="Email"
                name="email"
                type="email"
                v-model="email"
                :rules="emailRules"
                @focus="focusInputs"
                v-on:keyup.enter="login"                
                required
                ref="email"
              ></v-text-field>

              <v-text-field
                id="password"
                label="Password"
                name="password"
                :type="showPassword ? 'text' : 'password'"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"                
                v-on:click:append="showPassword = !showPassword"
                v-model="password"
                :rules="passwordRules"
                @focus="focusInputs"
                v-on:keyup.enter="login"
                :counter="16"
                required
              ></v-text-field>

              <div style="float: right; margin-top: 20px">
                <router-link class="link" style="font-size: 12px" to="/forgotpassword">Forgot Password?</router-link>
                <br/>
                <v-btn 
                color="error"
                class="mr-4 nes-btn"
                :disabled="!isValid" 
                @click="login()"
                style="margin-top: 20px; float: right;"
                >
                Login
                </v-btn>    
              </div>          
      </v-form>
  </div>
</template>

<style>

  /*ELEMENT IDs*/
  #loginRow {
      padding: 5% 10% 5% 10%;
      display: flex;
      justify-content: center;
  }


  .nes-container.with-title > .title {
    /* background: var(--v-dark-base)!important; */
    background-color:  var(--v-background-base)!important;
  }

</style>


<script>
import $ from 'jquery'

import LoginService from "@/api/login.service.js";

import { mapMutations } from 'vuex';

export default {
  name: "LoginScreen",
  data: () => ({
    // name: "",
    email:"",
    password: "",
    showPassword: false,  
    // nameRules: [
    //   v => !!v || "Name is required",
    //   v => v.length <= 10 || "Name may not be longer than 10 characters",
    //   v => /^\w+$/.test(v) || "Name can only contain alphanumeric characters"
    // ],
    emailRules: [
        v => !!v || 'Email is required',
        v => /.+@.+\..+/.test(v) || 'Email must be valid',
    ],
    passwordRules: [
      v => !!v || "Password is required",
      v => v.length >= 8 || "Password must be at least 8 characters long",
      v => v.length <= 16 || "Password cannot be longer than 16 characters"
    ],
    isValid: false,
    isError: false,
    errors: {},
    loginSucceeded: false,
    successMessage: "",
    loading: false,
    disabled: false
  }),
  methods: {
    ...mapMutations([
      'setUserID',
      'setUserName'
    ]),
    setName() {
      this.$store.commit("setPlayerName", this.$store.state.userName);
      this.$router.push("maze");
      // this.$router.push({ path: "/maze" });
    },
    login() {
      if (!this.isValid)
        return;
      this.loading = true;
      this.disabled = true;
      
      LoginService.login(this.email, this.password).then(({ data }) => {

        if (data) {        
          if (isNaN(data))
          {
            if (data.includes("Incorrect password") || 
                data.includes("Please enter password") ||
                data.includes("No such user") ||
                data.includes("Please enter email")) {
                  this.$refs.form.resetValidation();
                  this.$refs.form.reset();
                  this.$refs.email.focus();

                  this.isError = true;
                  // this.errors = data.errors;

                  this.email = "";
                  this.password = "";

                  this.loading = false;
                  this.disabled = false;
            }
          }
          else {

            this.loginSucceeded = true;
            this.successMessage = "Login Successful. You will be redirected shortly.";
            console.log(this.successMessage)

            this.setUserID(data);
            this.setUserName();

            setTimeout(() => {
              this.setName();
              this.$router.push({ path: "/maze" });
            }, 400);
            }
            this.loading = false;
            this.disabled = false;
          }
        })
      .catch(
        (error) => {       
          console.log(error);
          this.$refs.form.resetValidation();
          this.$refs.form.reset();
          this.$refs.email.focus();

          this.isError = true;
          // this.errors['login'] = error.response.data.error;

          this.email = "";
          this.password = "";

          this.loading = false;
          this.disabled = false;
        });
    },
    focusInputs() {
      this.loginSucceeded = false;
      this.successMessage = "";
      // this.errors = {};
      this.isError = false;
    }
  },
  mounted: function () {
    this.$nextTick(function () {
        $( ".v-text-field__slot" ).addClass("retroBorder")
        $( ".v-select__slot" ).addClass("retroBorder")
      })
    }
};
</script>