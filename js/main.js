import HomeComponent from "./components/HomeComponent.js";
import AboutComponent from "./components/AboutComponent.js";
import EducationComponent from "./components/EducationComponent.js";
import ContactComponent from "./components/ContactComponent.js";

import LoginComponent from './components/LoginComponent.js';
import UserHomeComponent from './components/UserHomeComponent.js';

(() => {
let router = new VueRouter({
    routes: [
        { path: "/", name: "home", component: HomeComponent },
        { path: "/about", name: "about", component: AboutComponent },
        { path: "/education", name: "education", component: EducationComponent },
        { path: "/contact", name: "contact", component: ContactComponent },
        { path: "/login", name: "login", component: LoginComponent },
        { path: "/userhome", name: "userhome", component: UserHomeComponent, props: true }

    ]
})

 var vm = new Vue ({
     data: {
        authenticated: false,
        administrator: false,
        user: [],
  
        //currentUser: {},
      },
  
      methods: {
        setAuthenticated(status, data) {
          this.authenticated = status;
          this.user = data;
        },
  
        logout() {
          // push user back to login page
          this.$router.push({ path: "/login" });
          this.authenticated = false;
        }
      },
  
      router: router
}).$mount("#app");

router.beforeEach((to, from, next) => {
    //console.log('router guard fired!', to, from, vm.authenticated);

    if (vm.authenticated == false) {
      next("/login");
    } else {
      next();
    }
  });
})();

// check when page has been scrolled so we can add a background colour on the nav
$(function () {
    $(document).scroll(function () {
      var $nav = $(".fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});