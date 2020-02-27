import NavComponent from "./layout/NavComponent.js";
import EducationInfoComponent from "./layout/EducationInfoComponent.js";
import ContactLinkComponent from "./layout/ContactLinkComponent.js";
import FooterComponent from "./layout/FooterComponent.js";

export default {
    template: `
    <section>
        <NavComponent/>
        <h1>Title</h1>
        <EducationInfoComponent
            v:bind:title="smart.title" v:bind:text="smart.text" v:bind:graphic="smart.graphic" v:bind:alt="smart.alt"
        />
        <ContactLinkComponent/>
        <FooterComponent/>
    </section>
    `,


    components: {
        NavComponent: NavComponent,
        EducationInfoComponent: EducationInfoComponent,
        ContactLinkComponent: ContactLinkComponent,
        FooterComponent: FooterComponent,
    }
}