(function () {
  var D = window.TAURI;
  var $ = function (id) { return document.getElementById(id); };

  // ---------- Textos gerais ----------
  document.title = D.nome + " | Impressão 3D";
  $("footer-name").textContent = D.nome;
  $("hero-title").textContent = D.titulo;
  $("hero-text").textContent = D.subtitulo;
  $("contact-text").textContent = D.textoContato;
  $("year").textContent = new Date().getFullYear();

  $("btn-instagram").href = "https://ig.me/m/" + D.instagram; // abre o direct
  $("btn-profile").href = "https://www.instagram.com/" + D.instagram + "/";
  if (D.whatsapp) {
    var wa = $("btn-whatsapp");
    wa.href = "https://wa.me/" + D.whatsapp;
    wa.hidden = false;
  }

  // ---------- Lightbox (fotos) ----------
  var lb = $("lightbox");
  function openLightbox(m, title) {
    $("lb-img").src = m.src;
    $("lb-img").alt = title || "";
    $("lb-caption").textContent = title || "";
    lb.hidden = false;
  }
  function closeLightbox() { lb.hidden = true; $("lb-img").src = ""; }
  lb.addEventListener("click", function (e) {
    if (e.target !== $("lb-img")) closeLightbox();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !lb.hidden) closeLightbox();
  });

  // ---------- Carrossel ----------
  function buildCarousel(midia, nome) {
    var wrap = document.createElement("div");
    wrap.className = "carousel";

    var track = document.createElement("div");
    track.className = "track";
    track.tabIndex = 0;
    track.setAttribute("role", "group");
    track.setAttribute("aria-label", "Fotos e vídeos de " + nome);

    midia.forEach(function (m) {
      var slide = document.createElement("div");
      slide.className = "slide " + m.type;
      if (m.type === "video") {
        var v = document.createElement("video");
        v.src = m.src;
        v.controls = true;
        v.preload = "metadata";
        v.playsInline = true;
        if (m.poster) v.poster = m.poster;
        slide.appendChild(v);
        var tag = document.createElement("span");
        tag.className = "tag-video";
        tag.textContent = "Vídeo";
        slide.appendChild(tag);
      } else {
        var img = document.createElement("img");
        img.src = m.src;
        img.alt = nome;
        img.loading = "lazy";
        slide.appendChild(img);
        slide.addEventListener("click", function () { openLightbox(m, nome); });
      }
      track.appendChild(slide);
    });
    wrap.appendChild(track);

    var total = midia.length;
    if (total > 1) {
      var prev = document.createElement("button");
      prev.className = "nav prev"; prev.type = "button";
      prev.setAttribute("aria-label", "Anterior"); prev.textContent = "‹";
      var next = document.createElement("button");
      next.className = "nav next"; next.type = "button";
      next.setAttribute("aria-label", "Próximo"); next.textContent = "›";
      var dots = document.createElement("div");
      dots.className = "dots";
      for (var i = 0; i < total; i++) dots.appendChild(document.createElement("i"));

      var current = -1;
      function update() {
        var idx = Math.round(track.scrollLeft / track.clientWidth);
        if (idx === current) return;
        current = idx;
        [].forEach.call(dots.children, function (d, k) { d.classList.toggle("on", k === idx); });
        prev.disabled = idx <= 0;
        next.disabled = idx >= total - 1;
        [].forEach.call(track.querySelectorAll("video"), function (v) { v.pause(); });
      }
      prev.addEventListener("click", function () { track.scrollBy({ left: -track.clientWidth, behavior: "smooth" }); });
      next.addEventListener("click", function () { track.scrollBy({ left: track.clientWidth, behavior: "smooth" }); });
      track.addEventListener("scroll", update, { passive: true });
      track.addEventListener("keydown", function (e) {
        if (e.key === "ArrowLeft") { e.preventDefault(); prev.click(); }
        if (e.key === "ArrowRight") { e.preventDefault(); next.click(); }
      });
      window.addEventListener("resize", update);

      wrap.appendChild(prev);
      wrap.appendChild(next);
      wrap.appendChild(dots);
      update();
    }
    return wrap;
  }

  // ---------- Produtos e categorias ----------
  var gallery = $("gallery");
  var catFilter = "all";
  var catName = {};
  D.categorias.forEach(function (c) { catName[c.id] = c.nome; });

  var cf = $("category-filters");
  [{ id: "all", nome: "Todos" }].concat(D.categorias).forEach(function (c) {
    var b = document.createElement("button");
    b.className = "chip" + (c.id === "all" ? " active" : "");
    b.type = "button";
    b.dataset.cat = c.id;
    b.textContent = c.nome;
    cf.appendChild(b);
  });
  cf.addEventListener("click", function (e) {
    var btn = e.target.closest(".chip");
    if (!btn) return;
    catFilter = btn.dataset.cat;
    [].forEach.call(cf.children, function (c) { c.classList.toggle("active", c === btn); });
    renderProducts();
  });

  function renderProducts() {
    gallery.innerHTML = "";
    var list = D.produtos.filter(function (p) {
      return catFilter === "all" || p.categoria === catFilter;
    });
    $("gallery-empty").hidden = list.length > 0;

    list.forEach(function (p) {
      var card = document.createElement("article");
      card.className = "product";
      card.appendChild(buildCarousel(p.midia, p.nome));

      var info = document.createElement("div");
      info.className = "info";
      var cat = document.createElement("span");
      cat.className = "cat";
      cat.textContent = catName[p.categoria] || "";
      var h3 = document.createElement("h3");
      h3.textContent = p.nome;
      info.appendChild(cat);
      info.appendChild(h3);
      if (p.descricao) {
        var desc = document.createElement("p");
        desc.textContent = p.descricao;
        info.appendChild(desc);
      }
      card.appendChild(info);
      gallery.appendChild(card);
    });
  }

  // ---------- Cores ----------
  var materialFilter = "all";
  var query = "";

  var materials = [];
  D.cores.forEach(function (c) {
    if (materials.indexOf(c.material) === -1) materials.push(c.material);
  });

  var mf = $("material-filters");
  ["all"].concat(materials).forEach(function (m) {
    var b = document.createElement("button");
    b.className = "chip" + (m === "all" ? " active" : "");
    b.type = "button";
    b.dataset.material = m;
    b.textContent = m === "all" ? "Todos os materiais" : m;
    mf.appendChild(b);
  });
  mf.addEventListener("click", function (e) {
    var btn = e.target.closest(".chip");
    if (!btn) return;
    materialFilter = btn.dataset.material;
    [].forEach.call(mf.children, function (c) { c.classList.toggle("active", c === btn); });
    renderColors();
  });

  $("color-search").addEventListener("input", function (e) {
    query = e.target.value.trim().toLowerCase();
    renderColors();
  });

  // Prévia ao passar o mouse (só em dispositivos com mouse)
  var canHover = window.matchMedia && window.matchMedia("(hover: hover)").matches;
  var pop = document.createElement("div");
  pop.className = "color-pop";
  pop.hidden = true;
  document.body.appendChild(pop);
  var popTimer = null;

  function stills(c) {
    return (c.fotos || []).map(function (m) { return m.type === "video" ? m.poster : m.src; }).filter(Boolean);
  }
  function hidePop() {
    clearInterval(popTimer);
    pop.hidden = true;
    pop.innerHTML = "";
  }
  function showPop(el, c) {
    var imgs = stills(c);
    if (!imgs.length) return;
    clearInterval(popTimer);
    pop.innerHTML = "";
    var img = document.createElement("img");
    img.src = imgs[0];
    img.alt = "Peça na cor " + c.nome;
    var label = document.createElement("div");
    label.className = "pop-name";
    label.textContent = c.nome;
    if (c.fotos.length > 1) {
      var s = document.createElement("small");
      s.textContent = " • " + c.fotos.length + " itens";
      label.appendChild(s);
    }
    pop.appendChild(img);
    pop.appendChild(label);
    pop.hidden = false;

    var r = el.getBoundingClientRect();
    var w = pop.offsetWidth, h = pop.offsetHeight;
    var left = Math.max(8, Math.min(r.left + r.width / 2 - w / 2, window.innerWidth - w - 8));
    var top = r.top - h - 8;
    if (top < 8) top = r.bottom + 8;
    pop.style.left = left + "px";
    pop.style.top = top + "px";

    if (imgs.length > 1) {
      var k = 0;
      popTimer = setInterval(function () {
        k = (k + 1) % imgs.length;
        img.src = imgs[k];
      }, 1200);
    }
  }
  window.addEventListener("scroll", hidePop, { passive: true });

  // Janela da cor (clique ou toque)
  var modal = $("color-modal");
  function openColor(c) {
    hidePop();
    $("cm-dot").style.backgroundColor = c.hex;
    $("cm-title").textContent = c.nome;
    $("cm-meta").textContent = [c.material, c.acabamento, c.codigo || c.hex.toUpperCase()].filter(Boolean).join(" • ");
    var body = $("cm-body");
    body.innerHTML = "";
    if (c.fotos && c.fotos.length) {
      body.appendChild(buildCarousel(c.fotos, "peças na cor " + c.nome));
    } else {
      var p = document.createElement("p");
      p.className = "cm-empty";
      p.textContent = "Ainda não temos fotos de peças nesta cor.";
      body.appendChild(p);
    }
    modal.hidden = false;
    modal.querySelector(".modal-close").focus();
  }
  function closeColor() {
    modal.hidden = true;
    $("cm-body").innerHTML = "";
  }
  modal.addEventListener("click", function (e) {
    if (e.target === modal || e.target.closest(".modal-close")) closeColor();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && lb.hidden && !modal.hidden) closeColor();
  });

  function renderColors() {
    hidePop();
    var wrap = $("colors");
    wrap.innerHTML = "";
    var list = D.cores.filter(function (c) {
      var okMat = materialFilter === "all" || c.material === materialFilter;
      var hay = (c.nome + " " + (c.codigo || "") + " " + (c.acabamento || "")).toLowerCase();
      return okMat && (!query || hay.indexOf(query) !== -1);
    });
    $("colors-empty").hidden = list.length > 0;

    list.forEach(function (c) {
      var el = document.createElement("button");
      el.className = "swatch";
      el.type = "button";
      el.setAttribute("aria-label", "Ver peças na cor " + c.nome);

      var dot = document.createElement("div");
      dot.className = "dot" + (c.acabamento && /silk/i.test(c.acabamento) ? " silk" : "");
      dot.style.backgroundColor = c.hex;

      var name = document.createElement("div");
      name.className = "name";
      name.textContent = c.nome;

      var meta = document.createElement("div");
      meta.className = "meta";
      meta.textContent = [c.material, c.acabamento].filter(Boolean).join(" • ");

      el.appendChild(dot);
      el.appendChild(name);
      el.appendChild(meta);
      if (c.fotos && c.fotos.length) {
        var hp = document.createElement("div");
        hp.className = "has-photos";
        hp.textContent = c.fotos.length + (c.fotos.length > 1 ? " fotos" : " foto");
        el.appendChild(hp);
      }

      if (canHover) {
        el.addEventListener("mouseenter", function () { showPop(el, c); });
        el.addEventListener("mouseleave", hidePop);
      }
      el.addEventListener("click", function () { openColor(c); });
      wrap.appendChild(el);
    });
  }

  renderProducts();
  renderColors();
})();
