<template>
  <v-app>
    <v-card class="mx-auto" style="width=50%">
            <v-form v-model="isValid" v-on:submit.prevent ref="form">
        <v-container>
          <v-row>
            <v-col>
              <v-text-field
                id="username"
                label="Username"
                name="username"
                v-model="username"
                :rules="usernameRules"
                :counter="10"
                @focus="focusInputs"
                v-on:keyup.enter="register"                
                ref="username"
              ></v-text-field>
            </v-col>
          </v-row>

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
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
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
                v-on:keyup.enter="register"
                :counter="16"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-btn :disabled="!isValid" @click="preferences()">Update</v-btn>
            </v-col>            
          </v-row>
        </v-container>
      </v-form>
    </v-card>
  </v-app>
</template>

<script>
import UpdateUserInformationService from "@/api/updateUserInformation.service.js";

export default {
  name: "Preferences",
  data: () => ({
    username: "",
    email:"",
    password: "",
    showPassword: false,  
    usernameRules: [
    //   v => !!v || "Name is required",
      v => (!v || v.length <= 10) || "Name may not be longer than 10 characters",
      v => (!v  || /^\w+$/.test(v)) || "Name can only contain alphanumeric characters"
    ],
    passwordRules: [
    //   v => !!v || "Password is required",
        v => (!v || v.length >=8) || "Password must be at least 8 characters long",
        v => (!v || v.length <= 16) || "Password cannot be longer than 16 characters"
    ],
    emailRules: [
        v => (!v || /.+@.+\..+/.test(v)) || 'E-mail must be valid',
    ],
    isValid: false,
    isError: false,
    errors: {},
    preferencesSucceeded: false,
    successMessage: "",
    loading: false,
    disabled: false
  }),
  methods: {
    preferences() {
      if (!this.isValid)
        return;
      this.loading = true;
      this.disabled = true;      
      
      UpdateUserInformationService.updateUserInformation(this.username, this.email, this.password).then(({ data }) => {
        if (data) {   
          if (data.includes("Update failed")) {
                this.$refs.form.resetValidation();
                this.$refs.form.reset();
                this.$refs.username.focus();

                this.isError = true;
                // this.errors = data.errors;

                this.username = "";
                this.email = "";
                this.password = "";

                this.loading = false;
                this.disabled = false;
          }
          else {

            this.preferencesSucceeded = true;
            this.successMessage = "Preferences Update Successful.";
            console.log(this.successMessage)
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
          this.$refs.username.focus();

          this.isError = true;
          // this.errors['registration'] = error.response.data.error;

          this.username = "";
          this.email = "";
          this.password = "";

          this.loading = false;
          this.disabled = false;
        });
    },
    focusInputs() {
      this.registerSucceeded = false;
      this.successMessage = "";
      this.errors = {};
      this.isError = false;
    }
  }
};
</script>

<style></style>
