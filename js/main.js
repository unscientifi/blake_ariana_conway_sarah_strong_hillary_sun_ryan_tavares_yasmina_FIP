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
            { path: "/education", name: "education", component: EducationComponent, props: true },
            { path: "/contact", name: "contact", component: ContactComponent },
            { path: "/login", name: "login", component: LoginComponent },
            { path: "/userhome", name: "userhome", component: UserHomeComponent, props: true }
        ]
    });

    const vm = new Vue ({
        el: '#app',

        data: {
            authenticated: false,
            administrator: false,
            user: [],
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

    // router.beforeEach((to, from, next) => {
    //     //console.log('router guard fired!', to, from, vm.authenticated);
    
    //     if (vm.authenticated == false) {
    //       next("/login");
    //     } else {
    //       next();
    //     }
    //   });
    // })();

    // check when page has been scrolled so we can add a background colour on the nav
    $(function () {
        $(document).scroll(function () {
        var $nav = $("#mainNav");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });
    });

    // Detect request animation frame
    var scroll = window.requestAnimationFrame ||
            //IE fallback
            function(callback){ window.setTimeout(callback, 1000/60)};
    var elementsToShow = document.querySelectorAll('.show-on-scroll');

    function loop() {

        elementsToShow.forEach(function (element) {
          if (isElementInViewport(element)) {
            element.classList.add('is-visible');
          } else {
            element.classList.remove('is-visible');
          }
        });
      
        scroll(loop);
      }

      loop();

      // Helper function from: http://stackoverflow.com/a/7557433/274826
        function isElementInViewport(el) {
            // special bonus for those using jQuery
            if (typeof jQuery === "function" && el instanceof jQuery) {
            el = el[0];
            }
            var rect = el.getBoundingClientRect();
            return (
            (rect.top <= 0
                && rect.bottom >= 0)
            ||
            (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.top <= (window.innerHeight || document.documentElement.clientHeight))
            ||
            (rect.top >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
            );
        } 
    })();