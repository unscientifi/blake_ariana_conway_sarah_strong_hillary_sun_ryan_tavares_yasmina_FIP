import NavComponent from "./layout/NavComponent.js";
import SmartComponent from "./layout/SmartComponent.js";
import SafeComponent from "./layout/SafeComponent.js";
import FairComponent from "./layout/FairComponent.js";
import GeneralComponent from "./layout/GeneralComponent.js";
import ContactLinkComponent from "./layout/ContactLinkComponent.js";
import FooterComponent from "./layout/FooterComponent.js";

export default {
    template: `
    <section>
        <NavComponent/>
        <nav class="educationNav container-xl fixed-top text-center">
            <ul class="navbar-nav">
                <li v-for="topic in topics" @click="switchTopic(topic.component)">
                    <a>{{ topic.title }}</a>
                </li>
            </ul>
        </nav>
        <component :is="this.activeComponent"></component>
        <ContactLinkComponent/>
        <FooterComponent/>
    </section>
    `,

    data: function() {
        return {
            activeComponent: GeneralComponent,
            topics: [
                { title: "get the facts", component: GeneralComponent },
                { title: "play safe", component: SafeComponent },
                { title: "play smart", component: SmartComponent },
                { title: "play fair", component: FairComponent },
            ]
        }
    },

    methods: {
        switchTopic(theComponent) {
            this.activeComponent = theComponent;
            window.scrollTo(0, 0);
        }
    },

    components: {
        NavComponent: NavComponent,
        ContactLinkComponent: ContactLinkComponent,
        FooterComponent: FooterComponent,
    }
}