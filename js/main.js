import HomeComponent from "./components/HomeComponent.js";
import AboutComponent from "./components/AboutComponent.js";
import EducationComponent from "./components/EducationComponent.js";
import ContactComponent from "./components/ContactComponent.js";

(() => {
    let router = new VueRouter({
        routes: [
            { path: "/", name: "home", component: HomeComponent },
            { path: "/about", name: "about", component: AboutComponent },
            { path: "/education", name: "education", component: EducationComponent, props: true },
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