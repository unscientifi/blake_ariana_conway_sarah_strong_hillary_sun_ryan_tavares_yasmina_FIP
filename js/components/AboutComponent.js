import NavComponent from "./layout/NavComponent.js";
import AboutProjectComponent from "./layout/AboutProjectComponent.js";
import AboutRHACComponent from "./layout/AboutRHACComponent.js";
import ContactLinkComponent from "./layout/ContactLinkComponent.js";
import FooterComponent from "./layout/FooterComponent.js";

export default {
    template: `
    <section>
        <NavComponent/>
        <AboutProjectComponent/>
        <AboutRHACComponent/>
        <ContactLinkComponent/>
        <FooterComponent/>
    </section>
    `,


    components: {
        NavComponent: NavComponent,
        AboutProjectComponent: AboutProjectComponent,
        AboutRHACComponent: AboutRHACComponent,
        ContactLinkComponent: ContactLinkComponent,
        FooterComponent: FooterComponent,
    }
}