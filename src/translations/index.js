import Vue from 'vue';
import VueI18n from "vue-i18n";
import { en } from "./en/en";
import { fr } from "./fr/fr";
import { vi } from "./vi/vi";

Vue.use(VueI18n);

const messages = {
    en: en,
    fr: fr,
    vi: vi
};

const i18n = new VueI18n({
    locale: 'en',
    messages
});

export default i18n;