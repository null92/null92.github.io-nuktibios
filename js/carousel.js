class Carousel extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<!-- Carousel -->
            <div class="top-content">
                <div id="mycarousel" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#mycarousel" data-slide-to="0" class="active"></li>
                        <li data-target="#mycarousel" data-slide-to="1"></li>
                        <li data-target="#mycarousel" data-slide-to="2"></li>
                        <li data-target="#mycarousel" data-slide-to="3"></li>
                        <li data-target="#mycarousel" data-slide-to="4"></li>
                        <li data-target="#mycarousel" data-slide-to="5"></li>
                        <li data-target="#mycarousel" data-slide-to="6"></li>
                        <li data-target="#mycarousel" data-slide-to="7"></li>
                    </ol>
                    <div class="carousel-inner" role="listbox">
                        <div class="carousel-item active">
                            <a data-toggle="modal" href="#artModal3">
                                <img src="img/arts/03.jpg" class="img-fluid d-block carousel-image" alt="">
                                <div class="carousel-caption">
                                    <h3>Sem título</h3>
                                    <div class="carousel-caption-description">
                                        <p>Acrílica sobre tela (80 x 96,5 cm)</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="carousel-item">
                            <a data-toggle="modal" href="#artModal4">
                                <img src="img/arts/04.jpg" class="img-fluid d-block carousel-image" alt="">
                                <div class="carousel-caption">
                                    <h3>Da inocência a deterioração do ser</h3>
                                    <div class="carousel-caption-description">
                                        <p>Acrílica sobre tela (90 x 120 cm)</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="carousel-item">
                            <a data-toggle="modal" href="#artModal6">
                                <img src="img/arts/06.jpg" loading="lazy" class="img-fluid d-block carousel-image" alt="">
                                <div class="carousel-caption">
                                    <h3>Sem título</h3>
                                    <div class="carousel-caption-description">
                                        <p>Acrílica sobre tela (100 x 110 cm)</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="carousel-item">
                            <a data-toggle="modal" href="#artModal7">
                                <img src="img/arts/07.jpg" loading="lazy" class="img-fluid d-block carousel-image" alt="">
                                <div class="carousel-caption">
                                    <h3>Sem título</h3>
                                    <div class="carousel-caption-description">
                                        <p>Acrílica sobre tela (50 x 70 cm)</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="carousel-item">
                            <a data-toggle="modal" href="#artModal8">
                                <img src="img/arts/08.jpg" loading="lazy" class="img-fluid d-block carousel-image" alt="">
                                <div class="carousel-caption">
                                    <h3>Sem título</h3>
                                    <div class="carousel-caption-description">
                                        <p>Acrílica sobre tela (75 x 95 cm)</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="carousel-item">
                            <a data-toggle="modal" href="#artModal9">
                                <img src="img/arts/09.jpg" loading="lazy" class="img-fluid d-block carousel-image" alt="">
                                <div class="carousel-caption">
                                    <h3>Sem título</h3>
                                    <div class="carousel-caption-description">
                                        <p>Acrílica sobre papel 224 g/m² (29,7 x 42 cm)</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="carousel-item">
                            <a data-toggle="modal" href="#artModal10">
                                <img src="img/arts/10.jpg" loading="lazy" class="img-fluid d-block carousel-image" alt="">
                                <div class="carousel-caption">
                                    <h3>Sem título</h3>
                                    <div class="carousel-caption-description">
                                        <p>Papel alfa celulose Matt Fibre da Hahnemühle (16,8 x 30 cm)</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="carousel-item">
                            <a data-toggle="modal" href="#artModal16">
                                <img src="img/arts/16.jpg" loading="lazy" class="img-fluid d-block carousel-image" alt="">
                                <div class="carousel-caption">
                                    <h3>Sem título</h3>
                                    <div class="carousel-caption-description">
                                        <p>Acrílica sobre papel 180 g/m² (21 x 29,7 cm)</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#mycarousel" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#mycarousel" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
            <!-- End carousel -->`;
  }
}

customElements.define('main-carousel', Carousel);