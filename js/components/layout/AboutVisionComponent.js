export default {
    props: ['icon, title, alt'],

    template: `
    <div class="row" id="visionSection">
        <div v-for="item in vision" class="col-6 col-md-3 visionItem">
            <img :src="'images/' + item.icon" :alt="item.alt">
            <h3>{{ item.title }}</h3>
        </div>
    </div>
    `,

    data: function() {
        return {
            vision: [
                {icon: "voice.svg", title: "Voice", alt: "..."},
                {icon: "education.svg", title: "Knowledge", alt: "graphic of an open book"},
                {icon: "home.svg", title: "Home", alt: "..."},
                {icon: "hope.svg", title: "Hope", alt: "..."},
            ]
        }
    },
}