export default {
    name: "SafeComponent",
    
    props: ['title, text, graphic, alt'],

    template: `
    <section class="container-xl safePage">
        <div class="infoTitle row justify-content-center">
            <h2>Play Safe</h2>
        </div>
        <div class="row">
            <div class="col-12" id="vidBox">
                <video poster="./images/play_safe_video_thumbnail.jpg" controls>
                    <source src="./video/play_safe.mp4" type="video/mp4">
                    Sorry, your browser doesn't support video.
                </video>
            </div>
        </div>
        <div v-for="item in safe" class="row educationInfo">
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
            safe: [
                {
                    title: "Let's talk about sex", 
                    text: "Sex is nothing to be embarrased about. It's important to learn how to practice safer sex so you can focus on the pleasure instead of worrying about the problems that can come with it. So let's talk!",
                    text2: "Safer sex is defined as any sexual activity using precautions such as condoms or dental dams to reduce the likelihood of acquiring HIV and/or other sexually transmitted infections (STIs). The term safer sex reflects the fact that things such as condoms and dental dams reduce, but do not completely eliminate, the risk of getting or giving infections.", 
                    graphic: "safe1.svg", 
                    alt: "graphic of person reading arrow sign that says 'this way to pleasure'",
                    orderImg: "order-md-2",
                    orderText: "order-md-1",
                },
                {
                    title: "What's the big deal?", 
                    text: "If you're wondering why you should be practicing safer sex, we have the answers right here. Safer sex will reduce your risk of getting HIV or other sexually transmitted infections. These precautions will not make sex any less fun. With the knowledge that you are protecting yourself you can worry less and focus on the pleasure. Safer sex is an option for everyone regardless of gender, age, race, sexual orientation, number of partners, or if you believe you are in a monogamous relationship.", 
                    text2: "Learning about HIV/AIDS and safer sex, getting tested for HIV on a regular basis, making safer sex choices before you are in a sexual situation, talking to your partner about what you are thinking, and respecting your partner's safer sex choices are all ways to better protect yourself and make sex more enjoyable for everyone involved.",
                    graphic: "safe2.svg", 
                    alt: "graphic of a person summarizing the paragraph",
                    orderImg: "order-md-1",
                    orderText: "order-md-2",
                },
                {
                    title: "Get closer with barriers", 
                    text: "When used properly, internal and external condoms are a great way to help reduce the likelihood of acquiring STIs. Personal lubricant is also a good way to make sex more comfortable and protect mucous membranes. Remember to only use waterbased lubricants with latex condoms!",
                    text2: "Dental dams are another great option for safer sex. They are small, thin pieces of latex that cover the entire vagina. Remember to store dental dams in a cool, dry place and never reuse them.", 
                    graphic: "safe3.svg", 
                    alt: "graphic of condoms",
                    orderImg: "order-md-2",
                    orderText: "order-md-1",
                },
                {
                    title: "Practice makes perfect", 
                    text: "Condoms can be a little intimidating at first, but like with most things, practice makes perfect! You can practice using condoms on yourself, your partner(s), a banana, dildo, or sex toy, so when it's time to actually use one you'll be prepared.", 
                    text2: "Communication is key. Be sure to talk with your partner(s) and discuss safer sex options. It's okay if you feel embarrassed, just take a deep breath. It really is easier after first time you buy condoms, use them, or talk about them.",
                    graphic: "safe4.svg", 
                    alt: "graphic of a couple holding a condom package",
                    orderImg: "order-md-1",
                    orderText: "order-md-2",
                },
            
        ]
        }
    },
}