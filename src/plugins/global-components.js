import Vue from "vue";

// plugin setup
import {BootstrapVue, IconsPlugin} from "bootstrap-vue";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import SubscriberArea from "../components/SubscriberArea";
import Subscribe from "../components/Subscribe";

const GlobalComponents = {
    install(Vue) {
        Vue.component(SubscriberArea.name, SubscriberArea);
        Vue.component(Subscribe.name, Subscribe);
    }
}

Vue.use(GlobalComponents);

export default GlobalComponents;
