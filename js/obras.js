class Obras extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<section class="page-section" id="obras">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Obras</h2>
                    <h3 class="section-subheading text-muted"></h3>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-sm-6 mb-4">
                        <div class="art-item">
                            <a class="art-link" data-toggle="modal" href="#artModal1">
                                <div class="art-hover">
                                    <div class="art-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="img/arts/01-thumbnail.jpg" alt="" />
                            </a>
                        </div>
                        <div class="art-caption">
                            <div class="art-caption-heading text-center">Sem título</div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4">
                        <div class="art-item">
                            <a class="art-link" data-toggle="modal" href="#artModal2">
                                <div class="art-hover">
                                    <div class="art-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="img/arts/02-thumbnail.jpg" alt="" />
                            </a>
                        </div>
                        <div class="art-caption">
                            <div class="art-caption-heading text-center">Metrópole</div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4">
                        <div class="art-item">
                            <a class="art-link" data-toggle="modal" href="#artModal3">
                                <div class="art-hover">
                                    <div class="art-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="img/arts/03-thumbnail.jpg" alt="" />
                            </a>
                        </div>
                        <div class="art-caption">
                            <div class="art-caption-heading text-center">Sem título</div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4">
                        <div class="art-item">
                            <a class="art-link" data-toggle="modal" href="#artModal4">
                                <div class="art-hover">
                                    <div class="art-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="img/arts/04-thumbnail.jpg" alt="" />
                            </a>
                        </div>
                        <div class="art-caption">
                            <div class="art-caption-heading text-center">Da inocência a deterioração do ser</div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4">
                        <div class="art-item">
                            <a class="art-link" data-toggle="modal" href="#artModal5">
                                <div class="art-hover">
                                    <div class="art-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="img/arts/05-thumbnail.jpg" alt="" />
                            </a>
                        </div>
                        <div class="art-caption">
                            <div class="art-caption-heading text-center">Sem título</div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4">
                        <div class="art-item">
                            <a class="art-link" data-toggle="modal" href="#artModal6">
                                <div class="art-hover">
                                    <div class="art-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="img/arts/06-thumbnail.jpg" alt="" />
                            </a>
                        </div>
                        <div class="art-caption">
                            <div class="art-caption-heading text-center">Sem título</div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4">
                        <div class="art-item">
                            <a class="art-link" data-toggle="modal" href="#artModal7">
                                <div class="art-hover">
                                    <div class="art-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="img/arts/07-thumbnail.jpg" alt="" />
                            </a>
                        </div>
                        <div class="art-caption">
                            <div class="art-caption-heading text-center">Sem título</div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4">
                        <div class="art-item">
                            <a class="art-link" data-toggle="modal" href="#artModal8">
                                <div class="art-hover">
                                    <div class="art-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="img/arts/08-thumbnail.jpg" alt="" />
                            </a>
                        </div>
                        <div class="art-caption">
                            <div class="art-caption-heading text-center">Sem título</div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4">
                        <div class="art-item">
                            <a class="art-link" data-toggle="modal" href="#artModal9">
                                <div class="art-hover">
                                    <div class="art-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="img/arts/09-thumbnail.jpg" alt="" />
                            </a>
                        </div>
                        <div class="art-caption">
                            <div class="art-caption-heading text-center">Sem título</div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4">
                        <div class="art-item">
                            <a class="art-link" data-toggle="modal" href="#artModal10">
                                <div class="art-hover">
                                    <div class="art-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="img/arts/10-thumbnail.jpg" alt="" />
                            </a>
                        </div>
                        <div class="art-caption">
                            <div class="art-caption-heading text-center">Sem título</div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4">
                        <div class="art-item">
                            <a class="art-link" data-toggle="modal" href="#artModal11">
                                <div class="art-hover">
                                    <div class="art-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="img/arts/11-thumbnail.jpg" alt="" />
                            </a>
                        </div>
                        <div class="art-caption">
                            <div class="art-caption-heading text-center">Sem título</div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4">
                        <div class="art-item">
                            <a class="art-link" data-toggle="modal" href="#artModal12">
                                <div class="art-hover">
                                    <div class="art-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="img/arts/12-thumbnail.jpg" alt="" />
                            </a>
                        </div>
                        <div class="art-caption">
                            <div class="art-caption-heading text-center">Santos Dumont</div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4">
                        <div class="art-item">
                            <a class="art-link" data-toggle="modal" href="#artModal13">
                                <div class="art-hover">
                                    <div class="art-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="img/arts/13-thumbnail.jpg" alt="" />
                            </a>
                        </div>
                        <div class="art-caption">
                            <div class="art-caption-heading text-center">Sem título</div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4">
                        <div class="art-item">
                            <a class="art-link" data-toggle="modal" href="#artModal14">
                                <div class="art-hover">
                                    <div class="art-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="img/arts/14-thumbnail.jpg" alt="" />
                            </a>
                        </div>
                        <div class="art-caption">
                            <div class="art-caption-heading text-center">Sem título</div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4">
                        <div class="art-item">
                            <a class="art-link" data-toggle="modal" href="#artModal15">
                                <div class="art-hover">
                                    <div class="art-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="img/arts/15-thumbnail.jpg" alt="" />
                            </a>
                        </div>
                        <div class="art-caption">
                            <div class="art-caption-heading text-center">Sem título</div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4">
                        <div class="art-item">
                            <a class="art-link" data-toggle="modal" href="#artModal16">
                                <div class="art-hover">
                                    <div class="art-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="img/arts/16-thumbnail.jpg" alt="" />
                            </a>
                        </div>
                        <div class="art-caption">
                            <div class="art-caption-heading text-center">Sem título</div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4">
                        <div class="art-item">
                            <a class="art-link" data-toggle="modal" href="#artModal17">
                                <div class="art-hover">
                                    <div class="art-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="img/arts/17-thumbnail.jpg" alt="" />
                            </a>
                        </div>
                        <div class="art-caption">
                            <div class="art-caption-heading text-center">Sem título</div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4">
                        <div class="art-item">
                            <a class="art-link" data-toggle="modal" href="#artModal18">
                                <div class="art-hover">
                                    <div class="art-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="img/arts/18-thumbnail.jpg" alt="" />
                            </a>
                        </div>
                        <div class="art-caption">
                            <div class="art-caption-heading text-center">Sem título</div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4">
                        <div class="art-item">
                            <a class="art-link" data-toggle="modal" href="#artModal19">
                                <div class="art-hover">
                                    <div class="art-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="img/arts/19-thumbnail.jpg" alt="" />
                            </a>
                        </div>
                        <div class="art-caption">
                            <div class="art-caption-heading text-center">Sem título</div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4">
                        <div class="art-item">
                            <a class="art-link" data-toggle="modal" href="#artModal20">
                                <div class="art-hover">
                                    <div class="art-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="img/arts/20-thumbnail.jpg" alt="" />
                            </a>
                        </div>
                        <div class="art-caption">
                            <div class="art-caption-heading text-center">Sem título</div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4">
                        <div class="art-item">
                            <a class="art-link" data-toggle="modal" href="#artModal21">
                                <div class="art-hover">
                                    <div class="art-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="img/arts/21-thumbnail.jpg" alt="" />
                            </a>
                        </div>
                        <div class="art-caption">
                            <div class="art-caption-heading text-center">Sem título</div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4">
                        <div class="art-item">
                            <a class="art-link" data-toggle="modal" href="#artModal22">
                                <div class="art-hover">
                                    <div class="art-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="img/arts/22-thumbnail.jpg" alt="" />
                            </a>
                        </div>
                        <div class="art-caption">
                            <div class="art-caption-heading text-center">Sem título</div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4">
                        <div class="art-item">
                            <a class="art-link" data-toggle="modal" href="#artModal23">
                                <div class="art-hover">
                                    <div class="art-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="img/arts/23-thumbnail.jpg" alt="" />
                            </a>
                        </div>
                        <div class="art-caption">
                            <div class="art-caption-heading text-center">Sem título</div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4">
                        <div class="art-item">
                            <a class="art-link" data-toggle="modal" href="#artModal24">
                                <div class="art-hover">
                                    <div class="art-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="img/arts/24-thumbnail.jpg" alt="" />
                            </a>
                        </div>
                        <div class="art-caption">
                            <div class="art-caption-heading text-center">Sem título</div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4">
                        <div class="art-item">
                            <a class="art-link" data-toggle="modal" href="#artModal25">
                                <div class="art-hover">
                                    <div class="art-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="img/arts/25-thumbnail.jpg" alt="" />
                            </a>
                        </div>
                        <div class="art-caption">
                            <div class="art-caption-heading text-center">Sem título</div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4">
                        <div class="art-item">
                            <a class="art-link" data-toggle="modal" href="#artModal26">
                                <div class="art-hover">
                                    <div class="art-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="img/arts/26-thumbnail.jpg" alt="" />
                            </a>
                        </div>
                        <div class="art-caption">
                            <div class="art-caption-heading text-center">Sem título</div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4">
                        <div class="art-item">
                            <a class="art-link" data-toggle="modal" href="#artModal27">
                                <div class="art-hover">
                                    <div class="art-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="img/arts/27-thumbnail.jpg" alt="" />
                            </a>
                        </div>
                        <div class="art-caption">
                            <div class="art-caption-heading text-center">Sem título</div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4">
                        <div class="art-item">
                            <a class="art-link" data-toggle="modal" href="#artModal28">
                                <div class="art-hover">
                                    <div class="art-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="img/arts/28-thumbnail.jpg" alt="" />
                            </a>
                        </div>
                        <div class="art-caption">
                            <div class="art-caption-heading text-center">Sem título</div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4">
                        <div class="art-item">
                            <a class="art-link" data-toggle="modal" href="#artModal29">
                                <div class="art-hover">
                                    <div class="art-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="img/arts/29-thumbnail.jpg" alt="" />
                            </a>
                        </div>
                        <div class="art-caption">
                            <div class="art-caption-heading text-center">Sem título</div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4">
                        <div class="art-item">
                            <a class="art-link" data-toggle="modal" href="#artModal30">
                                <div class="art-hover">
                                    <div class="art-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="img/arts/30-thumbnail.jpg" alt="" />
                            </a>
                        </div>
                        <div class="art-caption">
                            <div class="art-caption-heading text-center">Sem título</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>`;
  }
}

customElements.define('main-obras', Obras);