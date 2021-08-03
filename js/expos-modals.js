class ExpoModals extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<!-- ExpoModal 1-->
        <div class="art-modal modal fade" id="expoModal1" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="close-modal" data-dismiss="modal"><img src="img/close-icon.svg" alt="Close modal" /></div>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <div class="modal-body">
                                    <h2 class="text-uppercase mb-3">Expo Arte SP 20ª Edição</h2>
                                    <!-- Carousel -->
                                    <div id="mycarouselModal" class="carousel slide" data-ride="carousel">
                                        <ol class="carousel-indicators">
                                            <li data-target="#mycarouselModal" data-slide-to="0" class="active"></li>
                                            <li data-target="#mycarouselModal" data-slide-to="1"></li>
                                            <li data-target="#mycarouselModal" data-slide-to="2"></li>
                                            <li data-target="#mycarouselModal" data-slide-to="3"></li>
                                            <li data-target="#mycarouselModal" data-slide-to="4"></li>
                                            <li data-target="#mycarouselModal" data-slide-to="5"></li>
                                        </ol>
                                        <div class="carousel-inner" role="listbox">
                                            <div class="carousel-item active">
                                                <img src="img/expos/1/1.jpg" loading="lazy" class="img-fluid d-block mx-auto" alt="">
                                            </div>
                                            <div class="carousel-item">
                                                <img src="img/expos/1/2.jpg" loading="lazy" class="img-fluid d-block mx-auto" alt="">
                                            </div>
                                            <div class="carousel-item">
                                                <img src="img/expos/1/3.jpg" loading="lazy" class="img-fluid d-block mx-auto" alt="">
                                            </div>
                                            <div class="carousel-item">
                                                   <img src="img/expos/1/4.jpg" loading="lazy" class="img-fluid d-block mx-auto" alt="">
                                               </div>
                                               <div class="carousel-item">
                                                   <img src="img/expos/1/5.jpg" loading="lazy" class="img-fluid d-block mx-auto" alt="">
                                               </div>
                                               <div class="carousel-item">
                                                   <img src="img/expos/1/6.jpg" loading="lazy" class="img-fluid d-block mx-auto" alt="">
                                               </div>
                                           </div>
                                           <a class="carousel-control-prev" href="#mycarouselModal" role="button" data-slide="prev">
                                               <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                               <span class="sr-only">Previous</span>
                                           </a>
                                           <a class="carousel-control-next" href="#mycarouselModal" role="button" data-slide="next">
                                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span class="sr-only">Next</span>
                                            </a>
                                        </div>
                                    <!-- End carousel -->
                                    <br>
                                    <button class="btn btn-primary" data-dismiss="modal" type="button">
                                        <i class="fas fa-times mr-1"></i>
                                        Fechar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
  }
}

customElements.define('expos-modals', ExpoModals);