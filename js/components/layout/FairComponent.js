export default {
    name: "FairComponent",
    
    props: ['title, text, graphic, alt'],

    template: `
    <section class="container-xl stigmaPage">
        <div class="infoTitle row justify-content-center">
            <h2>Play Fair</h2>
        </div>
        <div class="row">
            <div class="col-12" id="vidBox">
                <video poster="./images/play_fair_video_thumbnail.jpg" controls>
                    <source src="./video/play_fair.mp4" type="video/mp4">
                    Sorry, your browser doesn't support video.
                </video>
            </div>
        </div>
        <div v-for="item in fair" class="row educationInfo">
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
            fair: [
                    {
                        title: "Stop the stigma", 
                        text: "There is a lot of history and stigma associated with HIV and AIDS, most of which can be debunked and properly explained with a quick and easy open discussion. Let's dive right into some common misconceptions about the disease and work towards a more inclusive, supportive and communicative future for those living with HIV/AIDS.", 
                        graphic: "fair1.svg", 
                        alt: "graphic of multicultural fists",
                        orderImg: "order-md-2",
                        orderText: "order-md-1",
                    },
                    {
                        title: "Myth #1", 
                        text: "Myth: You can catch HIV/AIDS from casual physical contact with someone who is infected.", 
                        text2: "Explanation: Hugging, hand holding, kissing, and even sharing foods with someone who has HIV/AIDS cannot pass on the virus. HIV can only be transmitted through the following five bodily fluids: Blood, Semen, Anal fluids/mucous, Vaginal fluids, and Breast milk.",
                        graphic: "fair2.svg", 
                        alt: "graphic of shaking hands",
                        orderImg: "order-md-1",
                        orderText: "order-md-2",
                    },
                    {
                        title: "Myth #2", 
                        text: "Myth: HIV/AIDS is a 'gay' or 'LGBT' disease.", 
                        text2: "Explanation: Unfortunately HIV/AIDS has a negative association with gay and lesbian individuals, even going so far as to be labelled the 'LGBT disease'. The HIV/AIDS disease does not discriminate against anyone, regardless of your sexual orientation, age, or race.",
                        graphic: "fair3.svg", 
                        alt: "graphic of a rainbow heart",
                        orderImg: "order-md-2",
                        orderText: "order-md-1",
                    },
                    {
                        title: "Myth #3", 
                        text: "Myth: I'm in a monogamous relationship so I don't have to worry about HIV.", 
                        text2: "Explanation: It is still important to get tested for HIV even if you are in a monogamous relationship. According to the latest estimates, 68 percent of new HIV transmissions among gay and bisexual men occur in the context of a primary relationship. Be sure to talk to your partner(s) about your sexual health practices and theirs.",
                        graphic: "fair4.svg", 
                        alt: "graphic of a safe that says 'taken'",
                        orderImg: "order-md-1",
                        orderText: "order-md-2",
                    },
                    {
                        title: "Myth #4", 
                        text: "Myth: HIV/AIDS is a disease that is incurable and will end in death.", 
                        text2: "Explanation: HIV is a treatable, long-term medical condition so long as it is detected in its early stages. A person living with HIV today can expect to lead a long and healthy life if they consistently take their medication.",
                        graphic: "fair5.svg", 
                        alt: "graphic of a person in a hospital bed",
                        orderImg: "order-md-2",
                        orderText: "order-md-1",
                    },
                
            ],
        }
    },
}