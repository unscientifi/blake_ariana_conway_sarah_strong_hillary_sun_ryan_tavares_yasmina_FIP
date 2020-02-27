import NavComponent from "./layout/NavComponent.js";
import FormComponent from "./layout/FormComponent.js";
import VolunteerLinkComponent from "./layout/VolunteerLinkComponent.js";
import FooterComponent from "./layout/FooterComponent.js";

export default {
    template: `
    <section>
        <NavComponent/>
        <FormComponent/>
        <VolunteerLinkComponent/>
        <FooterComponent/>
    </section>
    `,


    components: {
        NavComponent: NavComponent,
        FormComponent: FormComponent,
        VolunteerLinkComponent: VolunteerLinkComponent,
        FooterComponent: FooterComponent,
    }
}