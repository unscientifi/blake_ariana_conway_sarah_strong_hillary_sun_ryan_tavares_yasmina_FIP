export default {
    template: `
    <section id="homeCarousel" class="row">
        <div id="carouselExampleIndicators" class="carousel slide col-12" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>

            <div class="carousel-inner row w-100 mx-auto" role="listbox">
                <div class="carousel-item active" id="car1">
                    <div class="col-md-6 carouselImg">
                        <img src="images/safesexconvo.svg" class="center" alt="...">
                    </div>
                    <div class="col-md-6 carouselText">
                        <h2>LET'S TALK ABOUT <span>SEX</span></h2>
                    </div>
                </div>
                <div class="carousel-item" id="car2">
                    <div class="col-md-6 carouselImg">
                        <img src="images/eggplant.svg" class="center-block" alt="...">
                    </div>
                    <div class="col-md-6 carouselText">
                        <h2>A <span>TEST</span> WITH NO STUDYING REQUIRED</h2>
                    </div>
                </div>
                    <div class="carousel-item" id="car3">
                    <div class="col-md-6 carouselImg" >
                        <img src="images/eggplant.svg" class="center-block" alt="...">
                    </div>
                    <div class="col-md-6 carouselText">
                        <h2>STAND UP TO <span>STIGMA</span></h2>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </section>
    `,
}