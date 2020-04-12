export default {
    name: "GeneralComponent",
    
    props: ['title, text, graphic, alt'],

    template: `
    <section class="container-xl generalPage">
        <div class="infoTitle row justify-content-center">
            <h2>Get the Facts</h2>
        </div>
        <div class="row">
            <div class="col-12" id="vidBox">
                <video poster="..." controls>
                    <source src="/video/..." type="video/mp4">
                    Sorry, your browser doesn't support video.
                </video>
            </div>
        </div>
        <div v-for="item in general" class="row educationInfo">
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
            general: [
                    {
                        title: "general 1", 
                        text: "This paragraph is about why HIV and Hep C testing are important and why you should get tested. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.", 
                        graphic: "eggplant.svg", 
                        alt: "graphic of an eggplant",
                        orderImg: "order-lg-2",
                        orderText: "order-lg-1",
                    },
                    {
                        title: "general 2", 
                        text: "Testing is easy! This paragraph explains the process of testing so you know what to expect and can eliminate any fears that might be holding you back. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.", 
                        graphic: "safesexconvo.svg", 
                        alt: "graphic of a conversation about safe sex",
                        orderImg: "order-lg-1",
                        orderText: "order-lg-2",
                    },
                    {
                        title: "general 3", 
                        text: "Testing is easy! This paragraph explains the process of testing so you know what to expect and can eliminate any fears that might be holding you back. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.", 
                        graphic: "safesexconvo.svg", 
                        alt: "graphic of a conversation about safe sex",
                        orderImg: "order-lg-2",
                        orderText: "order-lg-1",
                    },
                    {
                        title: "general 4", 
                        text: "Testing is easy! This paragraph explains the process of testing so you know what to expect and can eliminate any fears that might be holding you back. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.", 
                        graphic: "safesexconvo.svg", 
                        alt: "graphic of a conversation about safe sex",
                        orderImg: "order-lg-1",
                        orderText: "order-lg-2",
                    },
                
            ],
        }
    },
}