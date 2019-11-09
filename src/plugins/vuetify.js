import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    options: {
        customProperties: true
    },
    theme: {
        dark: true,
        themes: {
            light: {
                primary: '#e1e5fc',
                accent: '#560000',
                secondary: '#FFE18D',
                success: '#BBFFBE',
                info: '#A4AFFF',
                warning: '#F9DFBC',
                error: '#FFAFAF'
            },
            dark: {
                primary: '#011627',
                accent: '#FF0022',
                secondary: '#ffe18d',
                success: '#346D36',
                info: '#01041A',
                warning: '#FF9400',
                error: '#A70606'
            }
        },
    },
});
