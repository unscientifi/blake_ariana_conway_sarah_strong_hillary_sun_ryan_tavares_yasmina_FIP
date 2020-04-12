export default {
    name: "SmartComponent",
    
    props: ['title, text, graphic, alt'],

    template: `
    <section class="container-xl testingPage">
        <div class="infoTitle row justify-content-center">
            <h2>Play Smart</h2>
        </div>
        <div class="row">
            <div class="col-12" id="vidBox">
                <video poster="..." controls>
                    <source src="/video/..." type="video/mp4">
                    Sorry, your browser doesn't support video.
                </video>
            </div>
        </div>
        <div v-for="item in smart" class="row educationInfo">
            <div class="col-12 col-md-6 p-0" :class="item.orderText">
                <h3>{{ item.title }}</h3>
                <p>{{ item.text }}</p>
                <a target="_blank" :href="item.link">{{ item.linkText }}</a>
            </div>
            <div class="col-12 col-md-6" :class="item.orderImg">
                <img :src="'images/' + item.graphic" :alt="item.alt">
            </div>
          </div>
    </section>
    `,

    data: function() {
        return {
            smart: [
                    {
                        title: "It's time to get tested", 
                        text: "The Centers for Disease Control and Prevention (CDC) recommends that everyone ages 13 to 64 should be tested for HIV. HIV testing is essential for slowing the spread of HIV infection. Many people are unaware that they have HIV, so they may be less likely to take precautions to help prevent spreading the virus to others. Additionally, early diagnosis can result in earlier treatment that may delay the progression to AIDS. Getting tested will relieve feelings of uncertainty and gives you a chance to learn about HIV and sexual risk reduction from a trained counselor.", 
                        graphic: "eggplant.svg", 
                        alt: "graphic",
                        orderImg: "order-md-2",
                        orderText: "order-md-1",
                    },
                    {
                        title: "No studying required", 
                        text: "Testing is easy! Thankfully, there are no special preparations needed in order to test for HIV. You don't need to bring a health card to get tested at your local health unit. HIV antibody tests will check your blood to see if your immune system has produced HIV antibodies. If they are present, it means you have been infected with HIV. These antibodies are unfortunately powerless in fighting off the virus, but their presence is enough to indicate if you have HIV or not. Testing at health units is confidential and your results will stay between you and your nurse, but will also be reported to the public health database as this is required in order for you to see a doctor who is experienced in providing HIV care.", 
                        graphic: "safesexconvo.svg", 
                        alt: "graphic",
                        orderImg: "order-md-1",
                        orderText: "order-md-2",
                    },
                    {
                        title: "Choose the option you're comfortable with", 
                        text: "When it comes to HIV testing, there are two types of tests available: Anonymous Testing doesn't require your name or health card. Instead the test is ordered using a six digit code. These tests are typically also rapid tests which are done on-site by sampling blood from a quick finger prick. You will receive results in about 20 minutes. Confidential Testing is what you would get at a health unit or doctor's office. It uses your name and usually involves a standard blood draw. The results are sent to a lab so they will take longer to come back.", 
                        graphic: "safesexconvo.svg", 
                        alt: "graphic",
                        orderImg: "order-md-2",
                        orderText: "order-md-1",
                    },
                    {
                        title: "Where can I get tested?", 
                        text: "There are a wide range of facilities that offer HIV testing. These include your local health care provider's office, community health centers, treatment clinics for sexually transmitted infections, substance abuse treatment programs, and even pharmacies. Testing can certainly feel like a secret you need to keep and you may feel alone going through it. Consider reaching out to close friends and family that you trust, this does not have to be a process you have to go through alone. Taking that first step towards treatment is an incredibly brave decision to make.", 
                        graphic: "safesexconvo.svg", 
                        alt: "graphic",
                        linkText: "Visit the RHAC website to find a testing location near you.",
                        link: "http://www.hivaidsconnection.ca/get-facts/get-tested/where-get-tested",
                        orderImg: "order-md-1",
                        orderText: "order-md-2",
                    },
                
            ],
        }
    },
}