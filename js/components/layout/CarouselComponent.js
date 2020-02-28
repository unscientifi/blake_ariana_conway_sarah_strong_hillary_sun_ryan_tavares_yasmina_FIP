export default {
    template: `
    <section class="container-xl" id="homeCarousel">
        <div class="row">
            <div class="col-12">
                <div id="carouselExampleIndicators" class="carousel slide row" data-ride="carousel">

                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>

                    <div class="carousel-inner mx-auto">
                        <div class="carousel-item active" id="car1">
                            <div class="row">
                                <div class="col-lg-6 carouselImg">
                                    <img src="images/safesexconvo.svg" class="center" alt="graphic of a condom and an eggplant in a speech bubble">
                                </div>
                                <div class="col-lg-6 carouselText">
                                    <h2>LET'S TALK ABOUT <span>SEX</span></h2>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item" id="car2">
                            <div class="row">
                                <div class="col-12 col-lg-6 carouselImg">
                                    <img src="images/testingconvo.svg" class="center-block" alt="grapic of a syringe writing in a book">
                                </div>
                                <div class="col-12 col-lg-6 carouselText">
                                    <h2>A <span>TEST</span> WITH NO STUDYING REQUIRED</h2>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item" id="car3">
                            <div class="row">
                                <div class="col-12 col-lg-6 carouselImg" >
                                    <img src="images/stigmaconvo.svg" class="center-block" alt="graphic of up arrows">
                                </div>
                                <div class="col-12 col-lg-6 carouselText">
                                    <h2>STAND UP TO <span>STIGMA</span></h2>
                                </div>
                            </div>
                        </div>
                    </div>
            
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon d-none d-md-block" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon d-none d-md-block" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>     
    </section>
    `,
}