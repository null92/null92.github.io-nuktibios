class Expos extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<section class="page-section" id="exposicoes">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Exposições</h2>
                    <h3 class="section-subheading text-muted"></h3>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-sm-6 mb-4"></div>
                    <div class="col-lg-4 col-sm-6 mb-4">
                        <div class="art-item">
                            <a class="art-link" data-toggle="modal" href="#expoModal1">
                                <img class="img-fluid" src="img/expos/1/01-thumbnail.png" alt="" />
                            </a>
                        </div>
                        <div class="art-caption">
                            <div class="art-caption-heading text-center">Expo Arte SP 20ª Edição</div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4"></div>
                </div>
            </div>
        </section>`;
  }
}

customElements.define('main-expos', Expos);