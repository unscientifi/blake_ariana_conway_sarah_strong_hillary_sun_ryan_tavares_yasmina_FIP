export default {
    template: `
    <header id="mainHeader">
        <nav class="navbar container fixed-top navbar-expand-lg">
            <div class="d-flex flex-grow-1">
                <span class="w-100 d-lg-none d-block"><!-- hidden spacer to center brand on mobile --></span>
                <router-link class="navbar-brand" to="/">project<span>play</span></router-link>
                <div class="w-100 text-right">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="line"></span>
                        <span class="line"></span>
                        <span class="line"></span>
                    </button>
                </div>
            </div>
                  
            <div class="collapse navbar-collapse flex-grow-1 text-right" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto flex-nowrap">
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