export default {
    props: ['icon, title, alt'],

    template: `
    <div class="row" id="visionSection">
        <div v-for="item in vision" class="col-6 col-md-3">
            <img :src="'images/' + item.icon" :alt="item.alt">
            <h3>{{ item.title }}</h3>
        </div>
    </div>
    `,

    data: function() {
        return {
            vision: [
                {icon: "eggplant.svg", title: "Voice", alt: "..."},
                {icon: "knowledge.svg", title: "Knowledge", alt: "..."},
                {icon: "home.svg", title: "Home", alt: "..."},
                {icon: "hope.svg", title: "Hope", alt: "..."},
            ]
        }
    },
}