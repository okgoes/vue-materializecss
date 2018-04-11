import Vue from "vue";
// import IndexCompany from "./components/index.vue";
// import MaterialVue from 'material-ui-vue'
import Main from "./components/Main.vue";


new Vue({
    el: "#app",
    data(){
        return {
            msg: ''
        };
    },
    components: {
        Main
    }
});