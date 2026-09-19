
(function(){
  "use strict";

  var money = new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"});
  var state = {
    productIndex:0,
    selectedMemory:"128GB",
    selectedColor:"Azul Escuro",
    cart:JSON.parse(localStorage.getItem("shopfull-cart") || "[]"),
    reviews:JSON.parse(localStorage.getItem("shopfull-reviews") || "[]"),
    search:""
  };

  function svgData(label, color, type, variant){
    var svg = "";
    if(type === "phone"){
      svg = '<svg xmlns="http://www.w3.org/2000/svg" width="640" height="640" viewBox="0 0 640 640">' +
        '<rect width="640" height="640" rx="44" fill="#f7fafc"/>' +
        '<g transform="translate(135 45)">' +
        '<rect x="0" y="0" width="250" height="520" rx="34" fill="#111820"/>' +
        '<rect x="16" y="20" width="218" height="480" rx="25" fill="' + color + '"/>' +
        '<circle cx="124" cy="31" r="6" fill="#111820"/>' +
        '<defs><linearGradient id="g" x1="0" x2="1"><stop stop-color="#ffffff" stop-opacity=".05"/><stop offset="1" stop-color="#ffffff" stop-opacity=".5"/></linearGradient></defs>' +
        '<path d="M16 380 C80 300 155 380 234 235 L234 500 L16 500Z" fill="url(#g)"/>' +
        '<text x="124" y="250" text-anchor="middle" font-family="Arial" font-size="24" font-weight="700" fill="#fff">SHOPFULL</text>' +
        '<text x="124" y="282" text-anchor="middle" font-family="Arial" font-size="18" fill="#fff">X57 5G</text>' +
        '<rect x="285" y="0" width="180" height="520" rx="34" fill="#18232d"/>' +
        '<rect x="305" y="31" width="42" height="150" rx="20" fill="#263847"/>' +
        '<circle cx="326" cy="58" r="15" fill="#0b1116"/><circle cx="326" cy="105" r="15" fill="#0b1116"/><circle cx="326" cy="152" r="15" fill="#0b1116"/>' +
        '<circle cx="366" cy="57" r="7" fill="#d7e0e5"/>' +
        '<text x="375" y="480" text-anchor="middle" font-family="Arial" font-size="16" fill="#9db0bd">X57</text>' +
        '</g><text x="320" y="607" text-anchor="middle" font-family="Arial" font-size="18" fill="#617481">' + label + '</text></svg>';
    } else if(type === "tv"){
      svg = '<svg xmlns="http://www.w3.org/2000/svg" width="640" height="520" viewBox="0 0 640 520"><rect width="640" height="520" rx="35" fill="#f7fafc"/><rect x="70" y="80" width="500" height="300" rx="8" fill="#171b23"/><rect x="85" y="95" width="470" height="270" fill="' + color + '"/><path d="M210 405h220M295 380v25M345 380v25" stroke="#29343b" stroke-width="16" stroke-linecap="round"/><text x="320" y="225" text-anchor="middle" font-family="Arial" font-size="34" fill="#fff" font-weight="700">' + label + '</text></svg>';
    } else if(type === "laptop"){
      svg = '<svg xmlns="http://www.w3.org/2000/svg" width="640" height="520" viewBox="0 0 640 520"><rect width="640" height="520" rx="35" fill="#f7fafc"/><rect x="120" y="70" width="400" height="280" rx="16" fill="#2b3338"/><rect x="138" y="88" width="364" height="244" rx="8" fill="' + color + '"/><path d="M70 372h500l-58 58H128z" fill="#b8c4ca"/><text x="320" y="215" text-anchor="middle" font-family="Arial" font-size="30" fill="#fff" font-weight="700">' + label + '</text></svg>';
    } else if(type === "headphone"){
      svg = '<svg xmlns="http://www.w3.org/2000/svg" width="640" height="520" viewBox="0 0 640 520"><rect width="640" height="520" rx="35" fill="#f7fafc"/><path d="M185 270v-55c0-92 58-155 135-155s135 63 135 155v55" fill="none" stroke="#222b31" stroke-width="34"/><rect x="135" y="240" width="105" height="170" rx="45" fill="' + color + '"/><rect x="400" y="240" width="105" height="170" rx="45" fill="' + color + '"/><text x="320" y="468" text-anchor="middle" font-family="Arial" font-size="25" fill="#43535c" font-weight="700">' + label + '</text></svg>';
    } else {
      svg = '<svg xmlns="http://www.w3.org/2000/svg" width="640" height="520" viewBox="0 0 640 520"><rect width="640" height="520" rx="35" fill="#f7fafc"/><rect x="150" y="85" width="340" height="340" rx="55" fill="' + color + '"/><text x="320" y="270" text-anchor="middle" font-family="Arial" font-size="34" fill="#fff" font-weight="700">' + label + '</text></svg>';
    }
    return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
  }

  var mainImages = [
    svgData("Azul Escuro","#1c77d0","phone","front"),
    svgData("Vista traseira","#273a4a","phone","back"),
    svgData("Azul Claro","#69b6f5","phone","front"),
    svgData("Lilás","#a58bdc","phone","front")
  ];

  var product = {
    id:"SF-X57-128-AZ",
    title:"Smartphone ShopOne X57 128GB 5G 8GB RAM Azul Escuro 6,7” Câm. Tripla + Selfie 12MP",
    price:1799.90,
    oldPrice:1999.00,
    rating:4.9,
    ratings:2406,
    seller:"SHOPFULL",
    images:mainImages
  };

  var related = [
    {id:"SF-S25",title:"Smartphone ShopOne S25 128GB 5G 8GB RAM Azul Marinho 6,7”",price:2999.00,rating:4.9,img:svgData("S25","#163f75","phone")},
    {id:"SF-X57P",title:"Smartphone ShopOne X57 Pro 256GB 5G 8GB RAM Azul Escuro",price:2299.00,rating:4.9,img:svgData("X57 Pro","#215f96","phone")},
    {id:"SF-A37",title:"Smartphone ShopOne A37 128GB 5G 6GB RAM Preto 6,7”",price:1699.00,rating:4.8,img:svgData("A37","#373b40","phone")},
    {id:"SF-TV55",title:"Smart TV Vision 55” 4K UHD HDR Wi-Fi",price:2539.90,rating:4.9,img:svgData("VISION 55","#2d55a4","tv")},
    {id:"SF-BOOK",title:"Notebook Workbook Air 14” 16GB SSD 512GB",price:3299.90,rating:4.7,img:svgData("WORKBOOK","#1686c5","laptop")},
    {id:"SF-HEAD",title:"Headphone Pulse Max Bluetooth com cancelamento de ruído",price:399.90,rating:4.8,img:svgData("PULSE MAX","#50616b","headphone")}
  ];

  var baseReviews = [
    {name:"Juliany",stars:5,meta:"Armazenamento interno: 256GB | Cor: Cinza",text:"O produto é perfeito, chegou antes do previsto e bem embalado. A câmera surpreendeu e a bateria dura o dia todo.",days:"há 1 dia"},
    {name:"Maria",stars:5,meta:"Armazenamento interno: 256GB | Cor: Lilás",text:"Chegou tudo certinho. Tela bonita, aparelho rápido e embalagem muito bem protegida.",days:"há 2 dias"},
    {name:"Thais",stars:5,meta:"Armazenamento interno: 128GB | Cor: Lilás",text:"Maravilhoso, gostei bastante do acabamento e do desempenho.",days:"há 3 dias"},
    {name:"Watilla",stars:5,meta:"Armazenamento interno: 128GB | Cor: Azul Claro",text:"Chegou muito rápido. Produto exatamente como descrito na demo.",days:"há 4 dias"}
  ];

  function stars(n){
    var s = "";
    for(var i=0;i<5;i++) s += '<span class="star">' + (i < n ? "★" : "☆") + "</span>";
    return s;
  }

  function saveCart(){
    localStorage.setItem("shopfull-cart",JSON.stringify(state.cart));
    renderHeaderCounts();
  }

  function cartCount(){
    return state.cart.reduce(function(sum,item){ return sum + item.qty; },0);
  }

  function toast(msg){
    var old = document.querySelector(".toast");
    if(old) old.remove();
    var t = document.createElement("div");
    t.className = "toast";
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(function(){ if(t.parentNode) t.remove(); },2600);
  }

  function headerHtml(){
    return '<div class="demo-ribbon">AMBIENTE DEMONSTRATIVO • PRODUTOS, PEDIDOS E PAGAMENTOS SÃO FICTÍCIOS</div>' +
      '<div class="top-ad"><div class="container"><strong>SHOPFULL PRIME</strong><span>Em até 21x sem juros no cartão SHOPFULL.</span><span class="pill">Conhecer</span></div></div>' +
      '<header class="site-header">' +
        '<div class="container header-main">' +
          '<a class="brand-wrap" href="#" aria-label="SHOPFULL">' +
            '<div class="avatar">S</div><div><div class="brand">SHOPFULL</div><div class="location">Região de São Paulo/SP</div></div>' +
          '</a>' +
          '<form class="search" id="searchForm"><input id="searchInput" placeholder="Buscar no SHOPFULL" autocomplete="off"><button aria-label="Buscar">⌕</button></form>' +
          '<div class="header-actions">' +
            '<button class="header-action" id="favoriteBtn"><span class="icon">♡</span><span class="label"><small>Favoritos<br>salvos</small></span></button>' +
            '<button class="header-action" id="accountBtn"><span class="icon">◉</span><span class="label"><small>Olá, Joab<br>Minha conta</small></span></button>' +
            '<button class="header-action" id="cartBtn"><span class="icon">▣</span><span class="label"><small>Sacola<br>SHOPFULL</small></span><b class="badge" id="cartBadge">' + cartCount() + '</b></button>' +
          '</div>' +
        '</div>' +
        '<nav class="container nav-row"><a class="menu-link" href="#">☰ Tem no SHOPFULL</a><a href="#celulares">Celulares⌄</a><a href="#eletro">Eletrodomésticos⌄</a><a href="#tv">TV e Vídeo⌄</a><a href="#informatica">Informática⌄</a><a href="#moveis">Móveis⌄</a><a href="#saldo">Saldão</a><a href="#atendimento">Atendimento</a></nav>' +
      '</header>';
  }

  function miniCards(items){
    return items.map(function(p){
      return '<article class="mini-card" data-related="' + p.id + '">' +
        '<span class="tag">▣ Full</span>' +
        '<div class="mini-img"><img src="' + p.img + '" alt="' + p.title + '"></div>' +
        '<div class="mini-title">' + p.title + '</div>' +
        '<div class="mini-rating">' + stars(Math.round(p.rating)) + ' ' + p.rating.toFixed(1).replace(".",",") + '</div>' +
        '<div class="discount">10% OFF</div>' +
        '<div class="mini-price">' + money.format(p.price) + '</div>' +
        '<div class="mini-installments">ou 10x sem juros • pagamento fictício</div>' +
      '</article>';
    }).join("");
  }

  function reviewsHtml(){
    var all = baseReviews.concat(state.reviews);
    return all.map(function(r){
      var initial = (r.name || "?").charAt(0).toUpperCase();
      return '<article class="review"><div class="review-avatar">' + initial + '</div><div>' +
        '<div><span class="review-name">' + r.name + '</span><span class="review-stars">' + stars(r.stars) + '</span></div>' +
        '<div class="review-meta">' + r.meta + '</div>' +
        '<div class="review-text">' + r.text + '</div><div class="review-meta">' + r.days + '</div>' +
      '</div></article>';
    }).join("");
  }

  function mainHtml(){
    var p = product;
    return headerHtml() +
      '<main class="page"><div class="container">' +
        '<div id="searchArea"></div>' +
        '<div class="breadcrumb"><span>SHOPFULL</span><span>›</span><span>Celulares</span><span>›</span><span>Smartphones</span><span>›</span><b>ShopOne X57</b></div>' +
        '<div class="product-shell">' +
          '<div>' +
            '<section class="card product-main">' +
              '<div class="product-top">' +
                '<div class="gallery">' +
                  '<div class="thumbs">' +
                    p.images.map(function(img,i){ return '<button class="thumb ' + (i===state.productIndex?"active":"") + '" data-thumb="' + i + '"><img src="' + img + '" alt="Miniatura ' + (i+1) + '"></button>'; }).join("") +
                  '</div>' +
                  '<div class="hero-media"><img id="heroImage" src="' + p.images[state.productIndex] + '" alt="' + p.title + '">' +
                    '<div class="gallery-dots"><i class="active"></i><i></i><i></i><i></i></div><button class="share-btn" id="shareBtn">↗</button></div>' +
                '</div>' +
                '<div class="product-summary">' +
                  '<div class="tag-row"><span class="tag">▣ Full</span><span class="rating-mini"><span class="star">★</span> ' + p.rating.toFixed(1).replace(".",",") + ' (' + p.ratings.toLocaleString("pt-BR") + ')</span></div>' +
                  '<h1 class="product-title">' + p.title + '</h1><div class="sku">Código ' + p.id + '</div>' +
                  '<div class="option-group"><div class="option-label">Armazenamento interno: <b>' + state.selectedMemory + '</b></div><div class="memory-row">' +
                    '<button class="chip active" data-memory="128GB">128GB</button><button class="chip" data-memory="256GB">256GB</button>' +
                  '</div></div>' +
                  '<div class="option-group"><div class="option-label">Cor: <b>' + state.selectedColor + '</b></div><div class="color-row">' +
                    '<button class="color-swatch active" data-color="Azul Escuro" data-img="0"><img src="' + p.images[0] + '"></button>' +
                    '<button class="color-swatch" data-color="Azul Claro" data-img="2"><img src="' + p.images[2] + '"></button>' +
                    '<button class="color-swatch" data-color="Lilás" data-img="3"><img src="' + p.images[3] + '"></button>' +
                  '</div></div>' +
                  '<div class="seller">Vendido e entregue por <b>' + p.seller + '</b></div>' +
                '</div>' +
              '</div>' +
            '</section>' +

            '<section class="card section-card"><h2 class="section-title">Principais características</h2>' +
              '<ul class="features"><li>128GB de armazenamento interno</li><li>8GB de memória RAM</li><li>Tela de 6,7 polegadas</li><li>Câmera traseira tripla de 50MP</li><li>Câmera frontal de 12MP</li><li>Bateria de 5000mAh</li></ul>' +
            '</section>' +

            '<section class="card section-card"><h2 class="section-title">Descrição e ficha técnica</h2>' +
              '<p class="description">O ShopOne X57 foi criado exclusivamente para esta demonstração da SHOPFULL. Ele combina conectividade 5G, tela ampla, conjunto de câmeras e bateria de longa duração em um produto inteiramente fictício. Nenhuma oferta, garantia ou especificação desta página representa um item real à venda.</p>' +
              '<h3 class="section-title" style="margin-top:20px">Ficha Técnica</h3>' +
              '<div class="spec-table">' +
                '<div class="spec-row"><b>Marca</b><span>ShopOne</span></div>' +
                '<div class="spec-row"><b>Referência</b><span>SF-X57-128AZ</span></div>' +
                '<div class="spec-row"><b>Modelo</b><span>X57</span></div>' +
                '<div class="spec-row"><b>Cor</b><span>Azul Escuro</span></div>' +
                '<div class="spec-row"><b>Armazenamento interno</b><span>128GB</span></div>' +
                '<div class="spec-row"><b>Memória RAM</b><span>8GB</span></div>' +
                '<div class="spec-row"><b>Tipo de tela</b><span>AMOLED+</span></div>' +
                '<div class="spec-row"><b>Tamanho da tela</b><span>6,7”</span></div>' +
                '<div class="spec-row"><b>Resolução</b><span>FHD+ (1080x2340)</span></div>' +
                '<div class="spec-row"><b>Taxa de atualização</b><span>120Hz</span></div>' +
                '<div class="spec-row"><b>Rede móvel</b><span>5G</span></div>' +
                '<div class="spec-row"><b>Conectividade</b><span>Wi‑Fi, Bluetooth e NFC</span></div>' +
                '<div class="spec-row"><b>Sistema operacional</b><span>ShopOS 16</span></div>' +
                '<div class="spec-row"><b>Câmera traseira</b><span>50MP + 12MP + 5MP</span></div>' +
                '<div class="spec-row"><b>Câmera frontal</b><span>12MP</span></div>' +
                '<div class="spec-row"><b>Bateria</b><span>5000mAh</span></div>' +
                '<div class="spec-row"><b>Garantia demonstrativa</b><span>12 meses (fictícia)</span></div>' +
              '</div>' +
            '</section>' +

            '<section class="card section-card"><h2 class="section-title">Explore e aproveite</h2><div class="carousel-wrap"><div class="product-strip">' + miniCards(related) + '</div></div></section>' +

            '<section class="card section-card" id="avaliacoes"><h2 class="section-title">Avaliações dos clientes</h2>' +
              '<div class="reviews-head"><div><div class="score-big">4,9 <span class="star">★</span></div><div class="review-count">2.406 avaliações<br>1.162 comentários</div></div>' +
              '<div><div class="review-media-title">Avaliações com fotos e vídeos</div><div class="review-thumbs">' +
                '<div class="review-photo"><img src="' + p.images[1] + '"></div><div class="review-photo"><img src="' + p.images[2] + '"></div><div class="review-photo"><img src="' + p.images[3] + '"></div><div class="review-photo"><img src="' + related[0].img + '"></div><div class="review-photo"><img src="' + p.images[0] + '"></div>' +
              '</div></div></div>' +
              '<div class="rating-breakdown">' +
                '<div class="rating-line"><span>5 ★</span><div class="bar"><i style="width:88%"></i></div><span>999+</span></div>' +
                '<div class="rating-line"><span>4 ★</span><div class="bar"><i style="width:32%"></i></div><span>118</span></div>' +
                '<div class="rating-line"><span>3 ★</span><div class="bar"><i style="width:12%"></i></div><span>24</span></div>' +
                '<div class="rating-line"><span>2 ★</span><div class="bar"><i style="width:7%"></i></div><span>6</span></div>' +
                '<div class="rating-line"><span>1 ★</span><div class="bar"><i style="width:4%"></i></div><span>32</span></div>' +
              '</div>' +
              '<div class="review-list" id="reviewList">' + reviewsHtml() + '</div>' +
              '<form class="review-form" id="reviewForm"><h3 class="section-title" style="margin:0">Adicionar avaliação fictícia</h3>' +
                '<input id="reviewName" value="Joab" placeholder="Seu nome"><select id="reviewStars"><option value="5">5 estrelas</option><option value="4">4 estrelas</option><option value="3">3 estrelas</option><option value="2">2 estrelas</option><option value="1">1 estrela</option></select><textarea id="reviewText" placeholder="Escreva uma avaliação para a demonstração"></textarea><button class="btn btn-blue" type="submit">Publicar avaliação na demo</button>' +
              '</form>' +
            '</section>' +
          '</div>' +

          '<aside class="buybox"><section class="card buy-card">' +
            '<div><div class="price-line"><span class="currency">R$</span><span class="price">1.799</span><span class="cents">,90</span></div><div class="installments">ou R$ 1.999,00 em até 10x de R$ 199,90 sem juros</div><span class="discount">10% OFF no Pix fictício</span><br><a class="pay-link" href="#" id="paymentsLink">Ver opções de pagamento ›</a></div>' +
            '<div class="location-card"><div class="location-head"><b>📍 Região de São Paulo/SP</b><button id="changeRegion">Alterar</button></div><input class="zip-input" id="zipInput" placeholder="Informe um CEP para calcular"><button class="btn btn-light" style="width:100%;min-height:34px" id="calcShipping">Calcular frete</button><div id="shippingResult">' +
              '<div class="shipping-option"><span>▣</span><div><strong>Retire este produto ainda hoje</strong><span>Retirada demonstrativa</span></div><em>Grátis</em></div>' +
              '<div class="shipping-option"><span>♟</span><div><strong>Receba até segunda-feira</strong><span>Envio Full fictício</span></div><em>Grátis</em></div>' +
            '</div></div>' +
            '<div class="action-stack"><button class="btn btn-green" id="addCart">▣ Adicionar à sacola</button><button class="btn btn-outline-green" id="buyNow">Comprar agora</button><button class="btn btn-blue" id="pickupNow">Retire na loja!</button></div>' +
            '<div class="trust-list"><div class="trust-item"><span>▣</span><div><b>Entrega Full</b><span>Entrega rápida, frete barato e mais segurança.</span></div><span>›</span></div><div class="trust-item"><span>♢</span><div><b>SHOPFULL garante</b><span>Compra e pagamento protegidos nesta simulação.</span></div><span>›</span></div><div class="trust-item"><span>↶</span><div><b>Devolução Gratuita</b><span>Até 7 dias depois de receber o produto demo.</span></div><span>›</span></div></div>' +
          '</section></aside>' +
        '</div>' +
      '</div></main>' +
      '<footer><div class="container footer-grid"><div><div class="footer-brand">SHOPFULL</div><div class="footer-demo">Projeto fictício criado somente para demonstração visual e funcional.</div></div><div><h4>Institucional</h4><a href="#">Quem somos</a><br><a href="#">Lojas fictícias</a><br><a href="#">Trabalhe conosco</a></div><div><h4>Ajuda</h4><a href="#">Atendimento</a><br><a href="#">Trocas e devoluções</a><br><a href="#">Privacidade</a></div><div><h4>Conta demo</h4><p>Joab Silva<br>joab@shopfull.demo<br>Cliente SHOPFULL+</p></div></div></footer>' +
      '<div id="modalRoot"></div>';
  }

  function render(){
    document.getElementById("app").innerHTML = mainHtml();
    bind();
    renderSearch();
  }

  function renderHeaderCounts(){
    var badge = document.getElementById("cartBadge");
    if(badge) badge.textContent = cartCount();
  }

  function addMainToCart(openAfter){
    var found = state.cart.find(function(i){return i.id === product.id;});
    if(found) found.qty += 1;
    else state.cart.push({id:product.id,title:product.title,price:product.price,qty:1,img:product.images[state.productIndex]});
    saveCart();
    toast("Produto fictício adicionado à sacola.");
    if(openAfter) setTimeout(openCart,200);
  }

  function modal(title,body){
    var root = document.getElementById("modalRoot");
    root.innerHTML = '<div class="modal-backdrop" id="modalBackdrop"><div class="modal"><div class="modal-head"><h3>' + title + '</h3><button class="modal-close" id="modalClose">×</button></div><div class="modal-body">' + body + '</div></div></div>';
    document.getElementById("modalClose").onclick = closeModal;
    document.getElementById("modalBackdrop").addEventListener("click",function(e){ if(e.target.id === "modalBackdrop") closeModal(); });
  }
  function closeModal(){ document.getElementById("modalRoot").innerHTML = ""; }

  function openCart(){
    if(!state.cart.length){
      modal("Sua sacola",'<div class="empty">Sua sacola demonstrativa está vazia.<br><br><button class="btn btn-blue" id="emptyClose">Continuar comprando</button></div>');
      setTimeout(function(){ var b=document.getElementById("emptyClose"); if(b) b.onclick=closeModal; },0);
      return;
    }
    var rows = state.cart.map(function(item,index){
      return '<div class="cart-row"><img src="' + item.img + '"><div><h4>' + item.title + '</h4><p>Produto de demonstração</p><div class="qty"><button data-dec="' + index + '">−</button><b>' + item.qty + '</b><button data-inc="' + index + '">+</button></div></div><div class="cart-price">' + money.format(item.price * item.qty) + '</div></div>';
    }).join("");
    var total = state.cart.reduce(function(sum,i){return sum+i.price*i.qty;},0);
    modal("Sua sacola SHOPFULL",rows + '<div class="cart-total"><span>Total</span><span>' + money.format(total) + '</span></div><button class="btn btn-green" style="width:100%" id="goCheckout">Ir para pagamento fictício</button><button class="btn btn-light" style="width:100%;margin-top:8px" id="clearCart">Limpar sacola</button>');
    document.querySelectorAll("[data-inc]").forEach(function(b){ b.onclick=function(){ state.cart[+b.dataset.inc].qty++; saveCart(); openCart(); }; });
    document.querySelectorAll("[data-dec]").forEach(function(b){ b.onclick=function(){ var i=+b.dataset.dec; state.cart[i].qty--; if(state.cart[i].qty<=0) state.cart.splice(i,1); saveCart(); openCart(); }; });
    document.getElementById("goCheckout").onclick = openCheckout;
    document.getElementById("clearCart").onclick = function(){ state.cart=[]; saveCart(); openCart(); };
  }

  function openCheckout(){
    var total = state.cart.reduce(function(sum,i){return sum+i.price*i.qty;},0);
    modal("Checkout demonstrativo",'<div class="checkout-form"><div class="demo-ribbon" style="border-radius:8px">NENHUM PAGAMENTO REAL SERÁ PROCESSADO</div><label>Nome do cliente<input value="Joab Silva" id="checkoutName"></label><label>Entrega<select><option>Entrega Full fictícia — grátis</option><option>Retirada fictícia — hoje</option></select></label><label>Forma de pagamento<select id="payMethod"><option value="pix">Pix demonstrativo</option><option value="card">Cartão fictício final 4242</option><option value="boleto">Boleto demonstrativo</option></select></label><div class="cart-total"><span>Total demo</span><span>' + money.format(total) + '</span></div><button class="btn btn-green" id="confirmFakePay">Continuar</button></div>');
    document.getElementById("confirmFakePay").onclick = function(){
      var method = document.getElementById("payMethod").value;
      if(method === "pix") openPix(total);
      else fakeSuccess(method,total);
    };
  }

  function openPix(total){
    modal("Pix demonstrativo",'<div class="pix-box"><b>QR Code fictício</b><div class="fake-qr"></div><p style="font-size:11px">SHOPFULL-DEMO-PIX-000000000</p><p style="font-size:10px;color:#60717a">Este QR não representa uma cobrança real.</p><button class="btn btn-green" id="simulatePix">Simular pagamento aprovado • ' + money.format(total) + '</button></div>');
    document.getElementById("simulatePix").onclick=function(){ fakeSuccess("pix",total); };
  }

  function fakeSuccess(method,total){
    state.cart=[];
    saveCart();
    var order = "SF" + String(Date.now()).slice(-8);
    modal("Pedido criado",'<div class="success"><div class="success-icon">✓</div><h3>Pagamento fictício aprovado</h3><p style="font-size:11px;color:#63737c">Pedido <b>#' + order + '</b><br>' + money.format(total) + ' • ' + method.toUpperCase() + '<br><br>Nenhum valor foi cobrado. Este pedido existe apenas nesta demonstração.</p><button class="btn btn-blue" id="finishDemo">Voltar à loja</button></div>');
    document.getElementById("finishDemo").onclick=closeModal;
  }

  function openAccount(){
    modal("Minha conta",'<div class="account-card"><div class="account-hero"><div class="avatar">J</div><div><b>Joab Silva</b><div class="account-data">Cliente SHOPFULL+ • conta demonstrativa</div></div></div><div class="account-data"><b>E-mail:</b> joab@shopfull.demo<br><b>CPF:</b> ***.***.***-**<br><b>Endereço:</b> São Paulo/SP<br><b>Último pedido:</b> #SF20260017 — entregue (fictício)</div><button class="btn btn-blue" id="accountClose">Fechar</button></div>');
    document.getElementById("accountClose").onclick=closeModal;
  }

  function openPayments(){
    modal("Opções de pagamento",'<div class="account-data"><b>Pix demonstrativo</b><br>10% de desconto fictício.<br><br><b>Cartão SHOPFULL</b><br>Até 21x sem juros, apenas para a simulação.<br><br><b>Cartão comum</b><br>Até 10x sem juros, sem qualquer processamento real.<br><br><b>Boleto demonstrativo</b><br>Gerado somente na interface.</div>');
  }

  function renderSearch(){
    var area = document.getElementById("searchArea");
    if(!area) return;
    if(!state.search){ area.innerHTML=""; return; }
    var q = state.search.toLowerCase();
    var candidates = [{id:product.id,title:product.title,price:product.price,rating:product.rating,img:product.images[0]}].concat(related);
    var found = candidates.filter(function(p){ return p.title.toLowerCase().indexOf(q) >= 0; });
    area.innerHTML = '<section class="search-panel"><h3 class="search-results-title">Resultados para “' + state.search + '”</h3>' + (found.length ? '<div class="product-strip">' + miniCards(found) + '</div>' : '<div class="empty">Nenhum produto fictício encontrado.</div>') + '</section>';
  }

  function bind(){
    document.querySelectorAll("[data-thumb]").forEach(function(btn){
      btn.addEventListener("click",function(){
        state.productIndex = +btn.dataset.thumb;
        document.getElementById("heroImage").src = product.images[state.productIndex];
        document.querySelectorAll("[data-thumb]").forEach(function(x){x.classList.remove("active");});
        btn.classList.add("active");
      });
    });
    document.querySelectorAll("[data-memory]").forEach(function(btn){
      btn.onclick=function(){
        state.selectedMemory=btn.dataset.memory;
        document.querySelectorAll("[data-memory]").forEach(function(x){x.classList.remove("active");});
        btn.classList.add("active");
        toast("Variação alterada para " + state.selectedMemory + ".");
      };
    });
    document.querySelectorAll("[data-color]").forEach(function(btn){
      btn.onclick=function(){
        state.selectedColor=btn.dataset.color;
        state.productIndex=+btn.dataset.img;
        document.getElementById("heroImage").src=product.images[state.productIndex];
        document.querySelectorAll("[data-color]").forEach(function(x){x.classList.remove("active");});
        btn.classList.add("active");
      };
    });

    document.getElementById("addCart").onclick=function(){addMainToCart(false);};
    document.getElementById("buyNow").onclick=function(){addMainToCart(true);};
    document.getElementById("pickupNow").onclick=function(){toast("Retirada fictícia selecionada para hoje.");};
    document.getElementById("cartBtn").onclick=openCart;
    document.getElementById("accountBtn").onclick=openAccount;
    document.getElementById("favoriteBtn").onclick=function(){toast("Produto salvo nos favoritos fictícios.");};
    document.getElementById("paymentsLink").onclick=function(e){e.preventDefault();openPayments();};
    document.getElementById("changeRegion").onclick=function(){toast("Região demo: São Paulo/SP.");};
    document.getElementById("shareBtn").onclick=function(){
      if(navigator.clipboard) navigator.clipboard.writeText(location.href);
      toast("Link da demonstração copiado.");
    };
    document.getElementById("calcShipping").onclick=function(){
      var cep=document.getElementById("zipInput").value.replace(/\D/g,"");
      var box=document.getElementById("shippingResult");
      if(cep.length!==8){toast("Digite um CEP com 8 números.");return;}
      box.innerHTML='<div class="shipping-option"><span>♟</span><div><strong>Entrega Full amanhã</strong><span>Prazo fictício para o CEP ' + cep.replace(/(\d{5})(\d{3})/,"$1-$2") + '</span></div><em>Grátis</em></div><div class="shipping-option"><span>▣</span><div><strong>Retirada ainda hoje</strong><span>Loja demonstrativa</span></div><em>Grátis</em></div>';
    };

    document.getElementById("searchForm").onsubmit=function(e){
      e.preventDefault();
      state.search=document.getElementById("searchInput").value.trim();
      renderSearch();
      if(state.search) window.scrollTo({top:135,behavior:"smooth"});
    };

    document.getElementById("reviewForm").onsubmit=function(e){
      e.preventDefault();
      var name=document.getElementById("reviewName").value.trim() || "Cliente";
      var textValue=document.getElementById("reviewText").value.trim();
      if(textValue.length<4){toast("Escreva uma avaliação um pouco maior.");return;}
      var review={name:name,stars:+document.getElementById("reviewStars").value,meta:"Compra demonstrativa | SHOPFULL",text:textValue,days:"agora"};
      state.reviews.unshift(review);
      localStorage.setItem("shopfull-reviews",JSON.stringify(state.reviews));
      document.getElementById("reviewList").innerHTML=reviewsHtml();
      document.getElementById("reviewText").value="";
      toast("Avaliação fictícia publicada.");
    };

    document.querySelectorAll("[data-related]").forEach(function(card){
      card.onclick=function(){toast("Produto fictício selecionado: " + card.querySelector(".mini-title").textContent);};
    });
  }

  render();
})();