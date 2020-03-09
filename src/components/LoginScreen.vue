<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field v-model="name" :rules="nameRules" :counter="10" label="Username" required></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            :append-icon=" showPassword ? 'mdi-eye' : 'mdi-eye-off' "
            :type="showPassword ? 'text' : 'password'"
            v-on:click:append="showPassword = !showPassword"
            v-model="password"
            :rules="passwordRules"
            :counter="16"
            label="Password"
            required
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: "LoginScreen",
  data: () => ({
    name: "",
    showPassword: false,
    password: "",
    valid: false,
    nameRules: [
      v => !!v || "Name is required",
      v => v.length <= 10 || "Name may not be longer than 10 characters",
      v => /^\w+$/.test(v) || "Name can only contain alphanumeric characters"
    ],
    passwordRules: [
      v => !!v || "Password is required",
      v => v.length >= 8 || "Password must be at least 8 characters long",
      v => v.length <= 16 || "Password cannot be longer than 16 characters"
    ]
  })
};
</script>

<style>
</style>