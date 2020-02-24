import NavComponent from "./layout/NavComponent.js";

export default {
    template: `
    <section>
        <NavComponent/>
        <h1>Education</h1>
    </section>
    `,


    components: {
        NavComponent: NavComponent,
    }
}