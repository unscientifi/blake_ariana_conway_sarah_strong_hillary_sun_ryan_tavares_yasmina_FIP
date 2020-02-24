import NavComponent from "./layout/NavComponent.js";

export default {
    template: `
    <section>
        <NavComponent/>
        <h1>About</h1>
    </section>
    `,


    components: {
        NavComponent: NavComponent,
    }
}