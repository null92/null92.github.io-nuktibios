class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<footer class="footer py-4">
            <a target="_blank" rel="noopener noreferrer" style="bottom: 15px; right: 15px; position: fixed; z-index:1" href="https://wa.me/5511945413759"><img style="height: 50px; width: 50px" src="img/whatsapp-logo.png" alt="WhatsApp logo"></a>
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-12 text-lg-center">&copy; 2022 Nuktibios Art</div>
                    <p></p>
                </div>
            </div>
        </footer>`;
  }
}

customElements.define('main-footer', Footer);
