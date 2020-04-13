export default {
    name: "GeneralComponent",
    
    props: ['title, text, graphic, alt'],

    template: `
    <section class="container-xl generalPage">
        <div class="infoTitle row justify-content-center">
            <h2>Get the Facts</h2>
        </div>
        <div v-for="item in general" class="row educationInfo">
            <div class="col-12 col-md-6 p-0" :class="item.orderText">
                <h3>{{ item.title }}</h3>
                <p>{{ item.text }}</p>
                <p>{{ item.text2 }}</p>
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
            general: [
                    {
                        title: "What is HIV/AIDS?", 
                        text: "HIV stands for human immunodeficiency virus. It is a virus that weakens the immune system. The immune systems of people living with HIV (HIV positive) may not allow them to fight off infections as well as people who do not have HIV (HIV negative).", 
                        text2: "AIDS stands for acquired immune deficiency syndrome. It is an advanced form of the disease caused by HIV. Not all people living with HIV will develop AIDS.",
                        graphic: "getfacts1.svg", 
                        alt: "graphic of an HIV molecule",
                        orderImg: "order-md-2",
                        orderText: "order-md-1",
                    },
                    {
                        title: "How is HIV transmitted?", 
                        text: "There are five bodily fluids that can have enough HIV to transmit the virus: Blood, Semen, Anal fluids/mucous, Vaginal fluids, and Breast milk. For you to acquire HIV, one of these fluids must contain the HIV virus and directly enter your bloodstream through activities such as condomless sex, breast/chestfeeding (in the case of infants), and using substances via injection, among others.", 
                        text2: "HIV is mainly spread by having unprotected anal or vaginal sex (intercourse) or by sharing needles. Currently there is no vaccine and no cure for HIV/AIDS.",
                        graphic: "getfacts2.svg", 
                        alt: "graphic of disease being transmitted through intercourse",
                        orderImg: "order-md-1",
                        orderText: "order-md-2",
                    },
                    {
                        title: "What is Hepatitis C?", 
                        text: "Hepatitis C is a chronic liver disease caused by the Hepatitis C virus (HCV). HCV causes inflammation and scarring of the liver. Currently there is no vaccine for Hepatitis C.",
                        text2: "Hepatitis C is only passed through blood. The blood of a person living with the Hepatitis C virus must enter your bloodstream for you to contract HCV. Hepatitis C is NOT spread through any other bodily fluids.", 
                        graphic: "getfacts3.svg", 
                        alt: "graphic of Hep-C molecules in the blood",
                        orderImg: "order-md-2",
                        orderText: "order-md-1",
                    }, 
            ],
        }
    },
}