class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>Nuktibios Art</title>
        <meta name="format-detection" content="telephone=no">
        <meta property="og:locale" content="pt_BR">
        <meta property="og:type" content="website">
        <meta property="og:title" content="Nuktibios Art">
        <meta property="og:site_name" content="Nuktibios Art">
        <meta property="og:url" content="https://nuktibiosart.com.br">

        <!-- Favicon -->
        <link rel="apple-touch-icon" sizes="57x57" href="img/favicon/apple-icon-57x57.png">
        <link rel="apple-touch-icon" sizes="60x60" href="img/favicon/apple-icon-60x60.png">
        <link rel="apple-touch-icon" sizes="72x72" href="img/favicon/apple-icon-72x72.png">
        <link rel="apple-touch-icon" sizes="76x76" href="img/favicon/apple-icon-76x76.png">
        <link rel="apple-touch-icon" sizes="114x114" href="img/favicon/apple-icon-114x114.png">
        <link rel="apple-touch-icon" sizes="120x120" href="img/favicon/apple-icon-120x120.png">
        <link rel="apple-touch-icon" sizes="144x144" href="img/favicon/apple-icon-144x144.png">
        <link rel="apple-touch-icon" sizes="152x152" href="img/favicon/apple-icon-152x152.png">
        <link rel="apple-touch-icon" sizes="180x180" href="img/favicon/apple-icon-180x180.png">
        <link rel="icon" type="image/png" sizes="192x192"  href="img/favicon/android-icon-192x192.png">
        <link rel="icon" type="image/png" sizes="32x32" href="img/favicon/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="96x96" href="img/favicon/favicon-96x96.png">
        <link rel="icon" type="image/png" sizes="16x16" href="img/favicon/favicon-16x16.png">
        <link rel="icon" href="img/favicon/favicon.ico" type="image/x-icon">
        <link rel="shortcut icon" href="img/favicon/favicon.ico" type="image/x-icon">
        <link rel="manifest" href="img/favicon/manifest.json">
        <meta name="msapplication-TileColor" content="#ffffff">
        <meta name="msapplication-TileImage" content="img/favicon/ms-icon-144x144.png">
        <meta name="theme-color" content="#ffffff">

        <!-- Facebook -->
        <meta property="og:image" content="https://nuktibiosart.com.br/img/logo-01.png"/>
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <!-- WhatsApp -->
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />

        <!-- Twitter -->
        <meta name="twitter:image" content="https://nuktibiosart.com.br/img/logo-01.png">
        <meta name="twitter:title" content="Nuktibios Art">

        <link rel="canonical" href="https://nuktibiosart.com.br">
        <meta itemprop="name" content="Nuktibios Art">
        <meta name="description" content="Página de exposição das obras de Liz Souza">
        <meta property="og:description" content="Página de exposição das obras de Liz Souza" />
        <meta name="robots" content="index, follow">
        <meta name="keywords" content="liz souza, liz caroline alves souza, liz caroline, nuktibios, nuktibios art, nuktibiosart"/>`;
  }
}

customElements.define('main-header', Header);