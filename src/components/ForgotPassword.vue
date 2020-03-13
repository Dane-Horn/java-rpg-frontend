<template>
  <v-app>
    <v-card class="mx-auto" style="width: 50%;">
      <v-form v-model="isValid" v-on:submit.prevent ref="form">
        <v-container>
          <v-row>
            <v-col>
              <v-text-field
                id="email"
                label="Email"
                name="email"
                type="email"
                v-model="email"
                :rules="emailRules"
                @focus="focusInputs"
                v-on:keyup.enter="register"                
                required
                ref="email"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-btn :disabled="!isValid" @click="forgotPassword()">Send Email</v-btn>
            </v-col>            
          </v-row>
        </v-container>
      </v-form>
    </v-card>
  </v-app>
</template>

<script>

import ForgotPasswordService from "@/api/forgotPassword.service.js";

export default {
  name: "ForgotPassword",
  data: () => ({
      email:"",
      emailRules: [
          v => !!v || 'Email is required',
          v => /.+@.+\..+/.test(v) || 'Email must be valid',
      ],
      isValid: false,
      isError: false,
      errors: {},
      requestForgotPasswordSucceeded: false,
      successMessage: "",
      loading: false,
      disabled: false
  }),
  methods: {
    forgotPassword() {
      if (!this.isValid)
        return;
      this.loading = true;
      this.disabled = true;      
      
      ForgotPasswordService.forgotPassword(this.email).then(({ data }) => {
        if (data) {      
          if (data.includes("No such email found") || data.includes("please enter an email") ) {
                this.$refs.form.resetValidation();
                this.$refs.form.reset();
                this.$refs.email.focus();

                this.isError = true;
                // this.errors = data.errors;

                this.email = "";

                this.loading = false;
                this.disabled = false;
          }
          else {

            this.requestForgotPasswordSucceeded = true;
            this.successMessage = "An email should have been sent, pleae check your email. You will be redirected shortly.";
            console.log(this.successMessage)

            setTimeout(() => {
              this.$router.push({ path: "/login" });
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
          // this.errors['registration'] = error.response.data.error;

          this.email = "";

          this.loading = false;
          this.disabled = false;
        });
    },
    focusInputs() {
      this.requestForgotPasswordSucceeded = false;
      this.successMessage = "";
      this.errors = {};
      this.isError = false;
    }
  }
};
</script>

<style></style>
