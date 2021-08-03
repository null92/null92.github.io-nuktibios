class Contato extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<section class="page-section" id="contact">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Contato</h2>
                    <h3 class="section-subheading">Me ligue ou mande um e-mail para tirar dúvidas ou obter maiores informações</h3>
                </div>
                <div class="row align-items-stretch mb-5">
                    <div class="col-lg form-group text-center">
                        <a style="color:#fff" href="mailto:liz.casouza@gmail.com">liz.casouza@gmail.com</a>
                        <br>
                        <a style="color:#fff" href="tel:+5511945413759">(011) 94541-3759</a>
                        <br><br>
                        <table>
                            <tr>
                                <td>Domingo</td>
                                <td>Fechado</td>
                            </tr>
                            <tr>
                                <td>Segunda-feira</td>
                                <td>09:00 – 17:00</td>
                            </tr>
                            <tr>
                                <td>Terça-feira</td>
                                <td>09:00 – 17:00</td>
                            </tr>
                            <tr>
                                <td>Quarta-feira</td>
                                <td>09:00 – 17:00</td>
                            </tr>
                            <tr>
                                <td>Quinta-feira</td>
                                <td>09:00 – 17:00</td>
                            </tr>
                            <tr>
                                <td>Sexta-feira</td>
                                <td>09:00 – 17:00</td>
                            </tr>
                            <tr>
                                <td>Sábado</td>
                                <td>Fechado</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </section>`;
  }
}

customElements.define('main-contato', Contato);