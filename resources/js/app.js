/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");

window.Vue = require("vue");

// Import moment.js into the application
import moment from "moment";
import router from "./router";

// import sweetalert
import Swal from "sweetalert2";
window.Swal = Swal;

// Register the toaster for use
const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 4000,
    timerProgressBar: true,
    onOpen: toast => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
    }
});

import Gate from "./Gate";
Vue.prototype.$gate = new Gate(window.user);



// Make toaster a global component
window.Toast = Toast;

// Import VueProgress Bar to show the pregress bar after user was created
import VueProgressBar from "vue-progressbar";

Vue.use(VueProgressBar, {
    color: "#2E53C5",
    failedColor: "red",
    height: "6px"
});

// For form validation
import {
    Form,
    HasError,
    AlertError
} from "vform";

// Also for form validation
window.Form = Form;
Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);

// Use filter to transform text to uppercase
Vue.filter("upText", function (text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
});

// Use Moment.js to format date better
Vue.filter("myDate", function (created) {
    return moment(created).format("MMMM Do YYYY");
});

window.Fire = new Vue();




Vue.component(
    "example-component",
    require("./components/ExampleComponent.vue").default
);

const app = new Vue({
    el: "#app",
    router
});


Vue.component(
    'passport-clients',
    require('./components/passport/Clients.vue').default
);

Vue.component(
    'passport-authorized-clients',
    require('./components/passport/AuthorizedClients.vue').default
);

Vue.component(
    'passport-personal-access-tokens',
    require('./components/passport/PersonalAccessTokens.vue').default
);
