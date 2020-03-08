import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: false,
        options: {
            customProperties: true,
        },
        themes: {
            light: {
                primary:  "#000000",
                secondary: "#C00000",
                accent:  "#3F51B5",
                warning:  "#FFC300",
                error:  "#FF6D0C",
                background: "#FFFFFF",
            },
            dark: {
                primary:  "#FFFFFF",
                secondary: "#C00000",
                accent:  "#3F51B5",
                warning:  "#FFC300",
                error:  "#FF6D0C",
                background: "#121212",
            }
        }
    }
  });