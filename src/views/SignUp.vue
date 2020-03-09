<template>
  <div id="fieldsetContainer" class="signup nes-container with-title">
    <p class="title themeHeader" style="font-family: 'Press Start 2P', cursive !important">Signup</p>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >

      <v-text-field
      v-model="username"
      :counter="10"
      :rules="usernameRules"
      label="Username"
      required
      ></v-text-field>

      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="Email"
        required
        class=""
      ></v-text-field>

      <v-text-field
      v-model="password"
      :rules="passwordRules"
      :type="'password'"
      label="Password"
      required
      ></v-text-field>

      <v-checkbox
        v-model="checkbox"
        :rules="[v => !!v || 'You must agree to continue!']"
        label="Do you agree?"
        required
        class="nes-checkbox"
      ></v-checkbox>

      <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4 nes-btn"
        @click="validate"
      >
        Validate
      </v-btn>

      <v-btn
        color="error"
        class="mr-4 nes-btn"
        @click="reset"
      >
        Reset Form
      </v-btn>

      <v-btn class="nes-btn"
        color="warning"
        @click="resetValidation"
      >
        Reset Validation
      </v-btn>
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

  export default {
    name: 'SignUp',
    data: () => ({
      valid: true,
      username: '',
      usernameRules: [
        v => !!v || 'Username is required',
        v => (v && v.length <= 10) || 'Username must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      checkbox: false,
    }),
    methods: {
      validate() {
        if (this.$refs.form.validate()) {
          this.snackbar = true
        }
      },
      reset() {
        this.$refs.form.reset()
      },
      resetValidation() {
        this.$refs.form.resetValidation()
      },
    },
    mounted: function () {
      this.$nextTick(function () {
        $( ".v-text-field__slot" ).addClass("retroBorder")
        $( ".v-select__slot" ).addClass("retroBorder")
      })
    }
  }
</script>