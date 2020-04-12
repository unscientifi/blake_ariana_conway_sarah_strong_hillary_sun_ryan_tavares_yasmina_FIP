import AboutVisionComponent from "./AboutVisionComponent.js";

export default {
    template: `
    <section class="container" id="aboutRHACSection">
          <div class="row" id="aboutRHAC">
            <div class="col-12">
              <h3>What is Regional HIV/AIDS Connection?</h3>
              <p>We are community-inspired and dedicated to positively impacting the lives of individuals and diverse communities living with, at-risk for, or affected by HIV/AIDS and Hepatitis C (HCV).</p>
            </div>
            <div class="col-12 col-md-6">
                <h3>What we do</h3>
                <p>Our service users include people living with HIV/AIDS and HCV, their partners/family/friends, as well as those concerned about HIV/AIDS and HCV or at risk for HIV. We also work with anyone who provides services to people with, or at risk for, HIV and HCV. All services are free and confidential.</p>
            </div>
            <div class="col-12 col-md-6">
              <div class="offerText">
                  <h3>What we offer</h3>
                  <ul>
                    <li>Practical support, counselling services, and programming</li>
                    <li>Education and resources</li>
                    <li>Needle and syringe program</li>
                    <li>Strong relationships with people in our communities</li>
                  </ul>
                </div>
                <div class="circle"></div>
            </div>
            <AboutVisionComponent v:bind:icon="vision.icon" v:bind:title="vision.title" v:bind:description="vision.description"/>
            <div id="RHACContact">
              <h4>For more information visit our website:</h4>
              <a href="https://www.hivaidsconnection.ca/" target="_blank">www.hivaidsconnection.ca</a>
            </div>
          </div>
    </section>
    `,

    components: {
      AboutVisionComponent: AboutVisionComponent
    }
}