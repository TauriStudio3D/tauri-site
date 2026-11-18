(function () {
  var D = window.TAURI;
  var $ = function (id) { return document.getElementById(id); };

  // ---------- Textos gerais ----------
  document.title = D.nome + " | Impressão 3D";
  $("brand-name").textContent = D.nome;
  $("footer-name").textContent = D.nome;
  $("hero-title").textContent = D.titulo;
  $("hero-text").textContent = D.subtitulo;
  $("contact-text").textContent = D.textoContato;
  $("year").textContent = new Date().getFullYear();

  var ig = $("btn-instagram");
  ig.href = "https://ig.me/m/" + D.instagram;           // abre o direct direto
  if (D.whatsapp) {
    var wa = $("btn-whatsapp");
    wa.href = "https://wa.me/" + D.whatsapp;
    wa.hidden = false;
  }

  // ---------- Galeria ----------
  var gallery = $("gallery");
  var mediaFilter = "all";

  function renderGallery() {
    gallery.innerHTML = "";
    var items = D.midia.filter(function (m) {
      return mediaFilter === "all" || m.type === mediaFilter;
    });
    $("gallery-empty").hidden = items.length > 0;

    items.forEach(function (m) {
      var fig = document.createElement("figure");
      fig.className = "card " + m.type;
      fig.style.margin = "0";

      var box = document.createElement("div");
      box.className = "media";

      if (m.type === "video") {
        var v = document.createElement("video");
        v.src = m.src;
        v.controls = true;
        v.preload = "metadata";
        v.playsInline = true;
        if (m.poster) v.poster = m.poster;
        box.appendChild(v);
      } else {
        var img = document.createElement("img");
        img.src = m.src;
        img.alt = m.title || "";
        img.loading = "lazy";
        box.appendChild(img);
        box.addEventListener("click", function () { openLightbox(m); });
      }

      var cap = document.createElement("figcaption");
      var t = document.createElement("span");
      if (m.type === "video") {
        var b = document.createElement("span");
        b.className = "badge-video";
        b.textContent = "Vídeo";
        cap.appendChild(b);
      }
      t.textContent = m.title || "";
      cap.appendChild(t);
      if (m.note) {
        var s = document.createElement("small");
        s.textContent = m.note;
        cap.appendChild(s);
      }

      fig.appendChild(box);
      fig.appendChild(cap);
      gallery.appendChild(fig);
    });
  }

  $("media-filters").addEventListener("click", function (e) {
    var btn = e.target.closest(".chip");
    if (!btn) return;
    mediaFilter = btn.dataset.filter;
    [].forEach.call($("media-filters").children, function (c) {
      c.classList.toggle("active", c === btn);
    });
    renderGallery();
  });

  // ---------- Lightbox ----------
  var lb = $("lightbox");
  function openLightbox(m) {
    $("lb-img").src = m.src;
    $("lb-img").alt = m.title || "";
    $("lb-caption").textContent = [m.title, m.note].filter(Boolean).join(" • ");
    lb.hidden = false;
  }
  function closeLightbox() { lb.hidden = true; $("lb-img").src = ""; }
  lb.addEventListener("click", function (e) {
    if (e.target !== $("lb-img")) closeLightbox();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !lb.hidden) closeLightbox();
  });

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
    b.dataset.material = m;
    b.textContent = m === "all" ? "Todos os materiais" : m;
    mf.appendChild(b);
  });

  mf.addEventListener("click", function (e) {
    var btn = e.target.closest(".chip");
    if (!btn) return;
    materialFilter = btn.dataset.material;
    [].forEach.call(mf.children, function (c) {
      c.classList.toggle("active", c === btn);
    });
    renderColors();
  });

  $("color-search").addEventListener("input", function (e) {
    query = e.target.value.trim().toLowerCase();
    renderColors();
  });

  function renderColors() {
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

      var dot = document.createElement("div");
      dot.className = "dot" + (c.acabamento && /silk/i.test(c.acabamento) ? " silk" : "");
      dot.style.backgroundColor = c.hex;

      var name = document.createElement("div");
      name.className = "name";
      name.textContent = c.nome;

      var meta = document.createElement("div");
      meta.className = "meta";
      meta.textContent = [c.material, c.acabamento].filter(Boolean).join(" • ");

      var code = document.createElement("div");
      code.className = "code";
      code.textContent = c.codigo ? c.codigo : c.hex.toUpperCase();

      el.appendChild(dot);
      el.appendChild(name);
      el.appendChild(meta);
      el.appendChild(code);
      el.addEventListener("click", function () { el.classList.toggle("open"); });
      wrap.appendChild(el);
    });
  }

  renderGallery();
  renderColors();
})();
