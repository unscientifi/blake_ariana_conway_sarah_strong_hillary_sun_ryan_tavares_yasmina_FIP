import HomeComponent from "./components/HomeComponent.js";
import AboutComponent from "./components/AboutComponent.js";
import EducationComponent from "./components/EducationComponent.js";
import ContactComponent from "./components/ContactComponent.js";

(() => {
    let router = new VueRouter({
        routes: [
            { path: "/", name: "home", component: HomeComponent },
            { path: "/about", name: "about", component: AboutComponent },
            { path: "/education", name: "education", component: EducationComponent },
            { path: "/contact", name: "contact", component: ContactComponent }
        ]
    });

    const vm = new Vue ({
        el: '#app',

        data: {},

        mounted() {},

        methods: {},

        router: router
    }).$mount("#app");

    // check when page has been scrolled so we can add a background colour on the nav
    $(function () {
        $(document).scroll(function () {
        var $nav = $("#mainNav");
        // var $educationNav = $('.educationNav');
        // var isPositionFixed = ($educationNav.css('position') == 'fixed'); 
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        // if ($(this).scrollTop() > 50 && !isPositionFixed){ 
        //     $educationNav.css({'position': 'fixed', 'top': '0px'}); 
        //   }
        //   if ($(this).scrollTop() < 50 && isPositionFixed){
        //     $educationNav.css({'position': 'static', 'top': '0px'}); 
        //   } 
        });
    });
})();