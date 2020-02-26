import NavComponent from "./layout/NavComponent.js";
import CarouselComponent from "./layout/CarouselComponent.js";
import WelcomeComponent from "./layout/WelcomeComponent.js";
import VideoComponent from "./layout/VideoComponent.js";
import VolunteerLinkComponent from "./layout/VolunteerLinkComponent.js";
import FooterComponent from "./layout/FooterComponent.js";

export default {
    template: `
    <section>
        <NavComponent/>
        <CarouselComponent/>
        <WelcomeComponent/>
        <VideoComponent/>
        <VolunteerLinkComponent/>
        <FooterComponent/>

    </section>
    `,


    components: {
        NavComponent: NavComponent,
        CarouselComponent: CarouselComponent,
        WelcomeComponent: WelcomeComponent,
        VideoComponent: VideoComponent,
        VolunteerLinkComponent: VolunteerLinkComponent,
        FooterComponent: FooterComponent,
    }
}