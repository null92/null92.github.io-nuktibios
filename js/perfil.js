class Perfil extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<section class="page-section bg-light" id="perfil">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Perfil</h2>
                    <h3 class="section-subheading text-muted"></h3>
                </div>
                <div class="row">
                    <div class="col-lg">
                        <div class="team-member">
                            <img class="mx-auto rounded-circle" src="img/team/liz.jpg" alt="" />
                            <h4>Liz Souza</h4>
                            <p class="text-muted">Artista</p>
                            <a class="btn btn-primary btn-social mx-2" rel="noopener noreferrer" href="https://www.instagram.com/liz.casouza/" target="_blank"><i class="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-8 mx-auto text-center"><p class="large text-muted">Sou formada em artes pela Panamericana-Escola de arte e design em São Paulo.<br>
                    A arte, para mim, é uma conexão com o mundo ao meu redor. É um meio de expressar minhas emoções, sentimentos e percepções. Retrato incômodos, angústias e ansiedades experienciados pelas pessoas em algum momento da vida. Busco mostrar aquilo que é evitado, que não cabe na cobrança sociocultural e econômica de felicidade e produtividade, mas que é de suma importância refletir sobre.</p></div>
                </div>
            </div>
        </section>`;
  }
}

customElements.define('main-perfil', Perfil);