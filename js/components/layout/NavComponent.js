export default {
    template: `
    <header class="container" id="mainHeader">
        <nav class="navbar col-12 navbar-expand-lg navbar-light bg-light">
            <router-link class="navbar-brand" to="/">project<span>play</span></router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
                  
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/education">get the facts</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/about">get to know us</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/contact">get in touch</router-link>
                    </li>
                </ul>
            </div>
        </nav> 
    </header>
    `,
}