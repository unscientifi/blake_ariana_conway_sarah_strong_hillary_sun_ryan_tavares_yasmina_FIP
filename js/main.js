import HomeComponent from "./components/HomeComponent.js";
import AboutComponent from "./components/AboutComponent.js";
import EducationComponent from "./components/EducationComponent.js";
import ContactComponent from "./components/ContactComponent.js";

const router = new VueRouter({
    routes: [
        { path: "/", name: "home", component: HomeComponent },
        { path: "/about", name: "about", component: AboutComponent },
        { path: "/education", name: "education", component: EducationComponent },
        { path: "/contact", name: "contact", component: ContactComponent }

    ]
})

 var vm = new Vue ({
     el: '#app',

     data: {},

     mounted() {},

     methods: {},

     router,
}).$mount("#app");