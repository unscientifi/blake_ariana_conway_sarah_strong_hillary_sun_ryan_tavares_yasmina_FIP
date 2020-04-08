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
        <h1>Title</h1>
        <nav>
            <ul>
                <li v-for="topic in topics" @click="switchTopic(topic.component)">
                    <h3>{{ topic.title }}</h3>
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
            activeComponent: SmartComponent,
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
        }
    },

    components: {
        NavComponent: NavComponent,
        ContactLinkComponent: ContactLinkComponent,
        FooterComponent: FooterComponent,
    }
}