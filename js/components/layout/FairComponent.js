export default {
    name: "FairComponent",
    
    props: ['title, text, graphic, alt'],

    template: `
    <section class="container">
        <h2>Play Fair</h2>
        <div class="row">
            <div class="col-12" id="vidBox">
                <video poster="..." controls>
                    <source src="/video/..." type="video/mp4">
                    Sorry, your browser doesn't support video.
                </video>
            </div>
        </div>

        <div v-for="item in smart" class="row">
            <div class="col-12 col-md-6">
                <h3>{{ item.title }}</h3>
                <p>{{ item.text }}</p>
            </div>
            <div class="col-12 col-md-6">
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
                        text: "This paragraph is about why HIV and Hep C testing are important and why you should get tested. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.", 
                        graphic: "eggplant.svg", 
                        alt: "graphic of an eggplant"
                    },
                    {
                        title: "No studying required", 
                        text: "Testing is easy! This paragraph explains the process of testing so you know what to expect and can eliminate any fears that might be holding you back. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.", 
                        graphic: "safesexconvo.svg", 
                        alt: "graphic of a conversation about safe sex"
                    },
                    {
                        title: "Choose the option you're comfortable with", 
                        text: "Testing is easy! This paragraph explains the process of testing so you know what to expect and can eliminate any fears that might be holding you back. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.", 
                        graphic: "safesexconvo.svg", 
                        alt: "graphic of a conversation about safe sex"
                    },
                    {
                        title: "Where can I get tested?", 
                        text: "Testing is easy! This paragraph explains the process of testing so you know what to expect and can eliminate any fears that might be holding you back. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.", 
                        graphic: "safesexconvo.svg", 
                        alt: "graphic of a conversation about safe sex"
                    },
                
            ],

            safe: [
                {
                    title: "safe sex 1", 
                    text: "This paragraph is about why HIV and Hep C testing are important and why you should get tested. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.", 
                    graphic: "eggplant.svg", 
                    alt: "graphic of an eggplant"
                },
                {
                    title: "safe sex 2", 
                    text: "Testing is easy! This paragraph explains the process of testing so you know what to expect and can eliminate any fears that might be holding you back. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.", 
                    graphic: "safesexconvo.svg", 
                    alt: "graphic of a conversation about safe sex"
                },
                {
                    title: "safe sex 3", 
                    text: "Testing is easy! This paragraph explains the process of testing so you know what to expect and can eliminate any fears that might be holding you back. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.", 
                    graphic: "safesexconvo.svg", 
                    alt: "graphic of a conversation about safe sex"
                },
                {
                    title: "safe sex 4", 
                    text: "Testing is easy! This paragraph explains the process of testing so you know what to expect and can eliminate any fears that might be holding you back. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.", 
                    graphic: "safesexconvo.svg", 
                    alt: "graphic of a conversation about safe sex"
                },
            
        ]
        }
    },
}