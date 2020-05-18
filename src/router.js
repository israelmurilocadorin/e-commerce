import Vue from "vue";
import Router from "vue-router";
import Teste from "./pages/Teste.vue";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/teste",
            name: "teste",
            component: Teste
        }
    ]
})