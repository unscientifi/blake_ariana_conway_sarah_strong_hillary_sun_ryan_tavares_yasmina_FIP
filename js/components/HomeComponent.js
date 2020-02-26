import NavComponent from "./layout/NavComponent.js";
import CarouselComponent from "./layout/CarouselComponent.js";
import WelcomeComponent from "./layout/WelcomeComponent.js";

export default {
    template: `
    <section>
        <NavComponent/>
        <CarouselComponent/>
        <WelcomeComponent/>

    </section>
    `,


    components: {
        NavComponent: NavComponent,
        CarouselComponent: CarouselComponent,
        WelcomeComponent: WelcomeComponent,
    }
}