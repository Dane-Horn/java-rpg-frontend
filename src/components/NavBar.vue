<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
            <img src="https://i.ibb.co/rp1Rdd7/bbd-logo.png" alt="bbd-logo" border="0" style="width: 80px;" />
            <span>BBD_RPG</span>
        </a>
        <button class="navbar-toggler nes-btn is-error" type="button" data-toggle="collapse"
                data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                aria-label="Toggle navigation">
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item ">
                    <a class="nav-link nes-text is-error" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </li>
            </ul>
            <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                <li class="nav-item">
                    <a class="nav-link" href="#">Sign Up</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="#">Login</a>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0"
                  style="display: flex; justify-content: space-evenly; flex-direction: row;">
                <input id="searchbar" class="nes-input" type="search" placeholder="Search" style="width: 70%; padding-top: 12px!important; margin-top: 4px;!important">
                <button class="btn nes-btn is-error" type="submit">Search</button>
            </form>
        </div>
    </nav>
</template>

<style>

  /*ELEMENT IDs*/
  #loginRow {
      padding: 5% 10% 5% 10%;
      display: flex;
      justify-content: center;
  }

  #loginContainer {
      width: 80%;
  }

</style>

<script>
  import $ from 'jquery'

  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
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