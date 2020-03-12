<template>
  <v-app>
    <v-card class="mx-auto">
      <v-form v-model="isValid" v-on:submit.prevent ref="form">
        <v-container>
          <v-row>
            <!-- <v-col cols="12" md="6">
              <v-text-field
                id="username"
                label="Username"
                name="username"
                v-model="name"
                :rules="nameRules"
                :counter="10"
                @focus="focusInputs"
                v-on:keyup.enter="login"                
                required
              ></v-text-field>
            </v-col> -->

            <v-col cols="12" md="6">
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
            </v-col>

            <v-col cols="12" md="6">
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
            </v-col>
          </v-row>
          <v-row align="end">
            <v-col>
              <v-btn :disabled="!isValid" @click="login()">Login</v-btn>
            </v-col>
            <v-spacer></v-spacer>
            <v-col>
              <a style="font-size: 12px">forgot password?</a>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card>
  </v-app>
</template>

<script>

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
          this.loginSucceeded = true;
          this.successMessage = "You will be redirected shortly.";

          this.setUserID(data);
          this.setUserName();

          setTimeout(() => {
            this.setName();
              this.$router.push({ path: "/maze" });
          }, 400);
        }
        this.loading = false;
        this.disabled = false;
      }).catch(err => {
          this.$refs.form.resetValidation();
          this.$refs.form.reset();
          this.$refs.email.focus();

          this.isError = true;
          this.errors['login'] = err.response.data.error;

          this.email = '';
          this.password = '';

          this.loading = false;
          this.disabled = false;
      })
    },
    focusInputs() {
      this.loginSucceeded = false;
      this.successMessage = "";
      this.errors = {};
      this.isError = false;
    }
  }
};
</script>

<style></style>
