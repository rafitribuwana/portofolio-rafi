(function(){
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------- DATA ---------------- */
  // Certificates Data
  var certificates = {
    'backend-fundamental': {
      title: 'Belajar Fundamental Backend',
      issuer: 'Dicoding Indonesia',
      date: '2024',
      description: 'Sertifikat kompetensi untuk pembelajaran fundamental backend development termasuk REST API, database, dan best practices.',
      credentialUrl: '#',
      imageUrl: '#'
    },
    'spring-boot': {
      title: 'Java Spring Boot Developer',
      issuer: 'Kursus Daring Bersertifikat',
      date: '2024',
      description: 'Sertifikat penyelesaian kursus comprehensive Java Spring Boot development mencakup microservices dan enterprise patterns.',
      credentialUrl: '#',
      imageUrl: '#'
    },
    'gcp-fundamentals': {
      title: 'Google Cloud Fundamentals',
      issuer: 'Google Cloud / Coursera',
      date: '2023',
      description: 'Sertifikat dari Google Cloud untuk fundamental cloud computing concepts dan Google Cloud Platform basics.',
      credentialUrl: '#',
      imageUrl: '#'
    },
    'internship-cert': {
      title: 'Sertifikat Penyelesaian Magang',
      issuer: 'Telkom Indonesia',
      date: '2024',
      description: 'Sertifikat penyelesaian program magang 3 bulan di Telkom Indonesia sebagai Backend Developer.',
      credentialUrl: '#',
      imageUrl: '#'
    },
    'react-web': {
      title: 'Belajar Membuat Aplikasi Web dengan React',
      issuer: 'Dicoding Indonesia',
      date: '2023',
      description: 'Sertifikat kompetensi untuk frontend development dengan React, mencakup hooks, state management, dan modern patterns.',
      credentialUrl: '#',
      imageUrl: '#'
    },
    'hackathon-capstone': {
      title: 'Juara Harapan Hackathon Capstone',
      issuer: 'Kompetisi Internal Kampus',
      date: '2023',
      description: 'Penghargaan sebagai Juara Harapan dalam hackathon capstone dengan tim lintas jurusan.',
      credentialUrl: '#',
      imageUrl: '#'
    }
  };

  // TODO: Ganti seluruh data di bawah ini dengan data asli (deskripsi, link GitHub, demo, gambar).
  var projects = [
    {
      id: 'kpi-dashboard',
      title: 'KPI Dashboard Telkom',
      tagline: 'Dashboard monitoring KPI regional real-time',
      short: 'Dashboard real-time untuk memonitor 5+ metrik KPI Branch Regional, menggantikan proses manual berbasis spreadsheet.',
      status: 'done', statusLabel: 'Selesai · Magang',
      role: 'Backend Developer', duration: '1 bulan', date: '2026',
      tags: ['Node.Js', 'Express.Js', 'React', 'MySQL'],
      colors: ['#1c3d78', '#0d1220'], initial: 'K',
      overview: 'Dashboard internal untuk tim operasional Telkom regional, dibangun agar data performa bisa dipantau real-time tanpa perlu menyusun laporan manual setiap minggunya.',
      problem: 'Tim regional memantau 5+ metrik KPI lewat spreadsheet yang diperbarui manual, proses ini memakan waktu ±2 jam per laporan dan rawan salah input.',
      solution: 'Membangun REST API dengan Node.Js untuk agregasi data, disajikan lewat dashboard React dengan visualisasi grafik dan fitur ekspor/impor Excel.',
      results: ['Waktu pelaporan turun dari 2 jam menjadi 15 menit', 'Menghilangkan human error pada input manual', 'Mempercepat pengambilan keputusan tim regional'],
      learnings: ['Menangani query pada dataset besar secara efisien', 'Praktik terbaik desain dashboard untuk pengguna non-teknis'],
      github: '#', demo: '#'
    },
    {
      id: 'smartwater',
      title: 'SmartWater IoT System',
      tagline: 'Monitoring kualitas air pabrik berbasis IoT',
      short: 'Sistem IoT untuk memantau kualitas air pabrik secara real-time dengan alert otomatis saat parameter tidak normal.',
      status: 'done', statusLabel: 'Selesai · Akademik',
      role: 'Backend Engineer', duration: '2 bulan', date: '2024',
      tags: ['Golang', 'MQTT', 'Python', 'PostgreSQL'],
      colors: ['#0f5c4a', '#0d1220'], initial: 'S',
      overview: 'Proyek tim untuk membantu pabrik memantau parameter kualitas air secara berkelanjutan menggunakan sensor IoT dan protokol komunikasi ringan.',
      problem: 'Pabrik memerlukan cara untuk mendeteksi anomali kualitas air secara cepat, karena pengecekan manual berkala tidak cukup responsif.',
      solution: 'Sensor mengirim data lewat protokol MQTT ke backend Golang untuk ingestion data, lalu dianalisis dengan Python untuk mendeteksi anomali dan memicu alert otomatis.',
      results: ['Deteksi anomali kualitas air secara real-time', 'Alert otomatis mengurangi waktu respons tim lapangan', 'Riwayat data tersimpan untuk analisis tren'],
      learnings: ['Bekerja dengan protokol IoT (MQTT) dari nol', 'Desain sistem yang tahan terhadap koneksi sensor yang tidak stabil'],
      github: '#', demo: '#'
    },
    {
      id: 'hotel-reservation',
      title: 'Hotel Reservation System',
      tagline: 'Sistem pemesanan kamar terintegrasi pembayaran',
      short: 'Aplikasi web pemesanan hotel dengan dashboard admin dan integrasi pembayaran untuk mengurangi kasus overbooking.',
      status: 'done', statusLabel: 'Selesai · Akademik',
      role: 'Full Stack Developer', duration: '1.5 bulan', date: '2023',
      tags: ['Spring Boot', 'React', 'MySQL', 'Payment API'],
      colors: ['#7a4a13', '#0d1220'], initial: 'H',
      overview: 'Sistem reservasi hotel yang mencakup alur booking untuk tamu dan dashboard pengelolaan properti untuk admin.',
      problem: 'Proses reservasi manual rentan menyebabkan overbooking dan sulit melacak data tamu secara terpusat.',
      solution: 'Membangun backend Spring Boot dengan validasi ketersediaan kamar real-time, terintegrasi payment gateway, dan dashboard admin untuk kelola properti.',
      results: ['Mengurangi kasus overbooking secara signifikan', 'Data tamu dan histori booking lebih terstruktur', 'Proses reservasi lebih cepat bagi pengguna'],
      learnings: ['Menangani concurrency saat banyak booking terjadi bersamaan', 'Integrasi payment gateway pihak ketiga'],
      github: '#', demo: '#'
    },
    {
      id: 'skin-analyzer',
      title: 'AI Skin Analyzer',
      tagline: 'Analisis kondisi kulit berbasis machine learning',
      short: 'Aplikasi web yang memakai model ML untuk menganalisis kondisi kulit dari foto secara real-time.',
      status: 'progress', statusLabel: 'Dalam Pengerjaan · Personal',
      role: 'Full Stack + ML', duration: 'Berjalan', date: '2025',
      tags: ['Python', 'FastAPI', 'TensorFlow', 'React'],
      colors: ['#7a1f4d', '#0d1220'], initial: 'A',
      overview: 'Proyek pribadi untuk mengasah kemampuan machine learning terapan sekaligus memahami alur end-to-end dari model hingga antarmuka pengguna.',
      problem: 'Ingin membuktikan kemampuan membangun produk berbasis AI secara utuh, bukan hanya melatih model di notebook.',
      solution: 'Model TensorFlow untuk klasifikasi kondisi kulit di-serve lewat FastAPI, dikonsumsi oleh frontend React yang mendukung pengambilan foto langsung dari kamera.',
      results: ['Prototipe end-to-end berjalan dari kamera hingga hasil analisis', 'Proses inferensi dioptimalkan agar tetap responsif di web'],
      learnings: ['Deployment model ML ke layanan web nyata', 'Trade-off antara akurasi model dan kecepatan respons'],
      github: '#', demo: '#'
    }
  ];

  /* ---------------- RENDER PROJECTS ---------------- */
  var grid = document.getElementById('projectsGrid');
  projects.forEach(function(p){
    var card = document.createElement('div');
    card.className = 'project-card reveal';
    card.tabIndex = 0;
    card.setAttribute('role','button');
    card.setAttribute('aria-label','Lihat detail proyek ' + p.title);
    var badgeClass = p.status === 'done' ? 'badge-done' : (p.status === 'progress' ? 'badge-progress' : 'badge-academic');
    card.innerHTML =
      '<div class="project-thumb" style="--pc1:' + p.colors[0] + ';--pc2:' + p.colors[1] + ';">' + p.initial + '</div>' +
      '<div class="project-body">' +
        '<div class="p-top"><h3>' + p.title + '</h3><span class="badge ' + badgeClass + '">' + (p.status==='done'?'Selesai':'Progress') + '</span></div>' +
        '<p class="desc">' + p.short + '</p>' +
        '<div class="project-tags">' + p.tags.map(function(t){return '<span class="tag">'+t+'</span>';}).join('') + '</div>' +
        '<div class="project-foot"><span class="detail-link">Lihat studi kasus ' +
        '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></div>' +
      '</div>';
    card.addEventListener('click', function(){ openModal(p); });
    card.addEventListener('keydown', function(e){ if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); openModal(p); } });
    grid.appendChild(card);
  });

  /* ---------------- MODAL ---------------- */
  var overlay = document.getElementById('modalOverlay');
  var modalTitle = document.getElementById('modalTitle');
  var modalStatus = document.getElementById('modalStatus');
  var modalMeta = document.getElementById('modalMeta');
  var modalBody = document.getElementById('modalBody');
  var lastFocused = null;

  function openModal(p){
    lastFocused = document.activeElement;
    modalTitle.textContent = p.title;
    modalStatus.textContent = p.statusLabel;
    modalStatus.className = 'badge ' + (p.status === 'done' ? 'badge-done' : 'badge-progress');
    modalMeta.innerHTML =
      '<span>Peran: ' + p.role + '</span><span>Durasi: ' + p.duration + '</span><span>Tahun: ' + p.date + '</span>';
    modalBody.innerHTML =
      '<h4>Ringkasan</h4><p>' + p.overview + '</p>' +
      '<h4>Masalah</h4><p>' + p.problem + '</p>' +
      '<h4>Pendekatan Solusi</h4><p>' + p.solution + '</p>' +
      '<h4>Tumpukan Teknologi</h4><div class="modal-tags">' + p.tags.map(function(t){return '<span class="tag">'+t+'</span>';}).join('') + '</div>' +
      '<h4>Hasil</h4><ul>' + p.results.map(function(r){return '<li>'+r+'</li>';}).join('') + '</ul>' +
      '<h4>Yang Dipelajari</h4><ul>' + p.learnings.map(function(r){return '<li>'+r+'</li>';}).join('') + '</ul>' +
      '<div class="modal-links">' +
        '<a class="btn btn-outline btn-sm" href="' + p.github + '" target="_blank" rel="noopener">Lihat GitHub</a>' +
        '<a class="btn btn-ghost btn-sm" href="' + p.demo + '" target="_blank" rel="noopener">Coba Demo</a>' +
      '</div>';
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    document.getElementById('modalClose').focus();
  }
  function closeModal(){
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    if(lastFocused) lastFocused.focus();
  }
  document.getElementById('modalClose').addEventListener('click', closeModal);
  overlay.addEventListener('click', function(e){ if(e.target === overlay) closeModal(); });
  document.addEventListener('keydown', function(e){ if(e.key === 'Escape'){ closeModal(); closeMobileMenu(); } });

  /* ---------------- MOBILE MENU ---------------- */
  var mobileMenu = document.getElementById('mobileMenu');
  document.getElementById('menuBtn').addEventListener('click', function(){
    mobileMenu.classList.add('open');
  });
  function closeMobileMenu(){ mobileMenu.classList.remove('open'); }
  document.getElementById('closeMenuBtn').addEventListener('click', closeMobileMenu);
  mobileMenu.querySelectorAll('a').forEach(function(a){ a.addEventListener('click', closeMobileMenu); });

  /* ---------------- ACTIVE NAV ON SCROLL ---------------- */
  var sections = ['home','about','skills','projects','experience','certificates','contact'];
  var navAnchors = document.querySelectorAll('.nav-links a, .mobile-menu a');
  var sectionEls = sections.map(function(id){ return document.getElementById(id); }).filter(Boolean);

  function setActive(id){
    navAnchors.forEach(function(a){
      a.classList.toggle('active', a.getAttribute('data-section') === id);
    });
  }
  var navObserver = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){ setActive(entry.target.id); }
    });
  }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
  sectionEls.forEach(function(el){ navObserver.observe(el); });

  /* ---------------- SCROLL REVEAL ---------------- */
  var revealEls = document.querySelectorAll('.reveal');
  if(reducedMotion){
    revealEls.forEach(function(el){ el.classList.add('in'); });
  } else {
    var revealObserver = new IntersectionObserver(function(entries, obs){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add('in');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function(el){ revealObserver.observe(el); });
  }

  /* ---------------- SKILL METERS ---------------- */
  var skillRows = document.querySelectorAll('.skill-row');
  var skillObserver = new IntersectionObserver(function(entries, obs){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        var el = entry.target;
        var level = el.getAttribute('data-level');
        el.querySelector('.meter i').style.width = level + '%';
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.3 });
  skillRows.forEach(function(el){ skillObserver.observe(el); });

  /* ---------------- HERO TYPING EFFECT ---------------- */
  var editorBody = document.getElementById('editorBody');
  var codeLines = [
    [['tok-kw','const'],['','  '],['tok-key','developer'],['',' = {']],
    [['','  '],['tok-key','name'],['tok-punc',': '],['tok-str','"Mohammad Rafi Tri Buwana"'],['tok-punc',',']],
    [['','  '],['tok-key','role'],['tok-punc',': '],['tok-str','"Backend Developer"'],['tok-punc',',']],
    [['','  '],['tok-key','stack'],['tok-punc',': ['],['tok-str','"Java"'],['tok-punc',', '],['tok-str','"Spring Boot"'],['tok-punc',', '],['tok-str','"React"'],['tok-punc','],']],
    [['','  '],['tok-key','focus'],['tok-punc',': ['],['tok-str','"backend"'],['tok-punc',', '],['tok-str','"cloud"'],['tok-punc',', '],['tok-str','"AI"'],['tok-punc','],']],
    [['','  '],['tok-fn','isOpenToWork'],['tok-punc','() '],['tok-punc','{']],
    [['','    '],['tok-kw','return'],['',' '],['tok-str','true'],['tok-punc',';']],
    [['','  '],['tok-punc','}']],
    [['tok-punc','}']]
  ];

  function renderLine(idx, parts, cb){
    var lineWrap = document.createElement('div');
    lineWrap.className = 'editor-line';
    var num = document.createElement('span');
    num.className = 'editor-num';
    num.textContent = idx + 1;
    var codeSpan = document.createElement('span');
    codeSpan.className = 'editor-code';
    lineWrap.appendChild(num);
    lineWrap.appendChild(codeSpan);
    editorBody.appendChild(lineWrap);

    if(reducedMotion){
      parts.forEach(function(part){
        var span = document.createElement('span');
        if(part[0]) span.className = part[0];
        span.textContent = part[1];
        codeSpan.appendChild(span);
      });
      cb();
      return;
    }

    var flatChars = [];
    parts.forEach(function(part){ flatChars.push({cls:part[0], text:part[1]}); });
    var pi = 0;
    function typeNext(){
      if(pi >= flatChars.length){ cb(); return; }
      var part = flatChars[pi];
      var span = document.createElement('span');
      if(part.cls) span.className = part.cls;
      codeSpan.appendChild(span);
      var ci = 0;
      function typeChar(){
        if(ci >= part.text.length){ pi++; typeNext(); return; }
        span.textContent += part.text[ci];
        ci++;
        setTimeout(typeChar, 8);
      }
      typeChar();
    }
    typeNext();
  }

  function typeAll(){
    var caret = document.createElement('span');
    caret.className = 'caret';
    var i = 0;
    function next(){
      if(i >= codeLines.length){
        editorBody.appendChild(caret);
        return;
      }
      renderLine(i, codeLines[i], function(){
        i++;
        setTimeout(next, reducedMotion ? 0 : 90);
      });
    }
    next();
  }
  typeAll();

  /* ---------------- BACK TO TOP ---------------- */
  var backTop = document.getElementById('backTop');
  window.addEventListener('scroll', function(){
    backTop.classList.toggle('show', window.scrollY > 500);
  });
  backTop.addEventListener('click', function(){
    window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
  });

  /* ---------------- EXPERIENCE TABS ---------------- */
  var expTabBtns = document.querySelectorAll('.exp-tab-btn');
  var expLists = document.querySelectorAll('.exp-list');
  
  expTabBtns.forEach(function(btn){
    btn.addEventListener('click', function(){
      var category = this.getAttribute('data-category');
      
      // Update active button
      expTabBtns.forEach(function(b){ b.classList.remove('active'); });
      this.classList.add('active');
      
      // Show/hide lists
      expLists.forEach(function(list){
        if(list.getAttribute('data-category') === category){
          list.style.display = 'block';
        } else {
          list.style.display = 'none';
        }
      });
    });
  });

  /* ---------- CERTIFICATES MODAL ---------- */
  var certOverlay = document.getElementById('certModalOverlay');
  var certModalTitle = document.getElementById('certModalTitle');
  var certModalMeta = document.getElementById('certModalMeta');
  var certModalBody = document.getElementById('certModalBody');
  var certLastFocused = null;

  function openCertModal(certId){
    var cert = certificates[certId];
    if(!cert) return;
    
    certLastFocused = document.activeElement;
    certModalTitle.textContent = cert.title;
    certModalMeta.innerHTML = '<span>' + cert.issuer + '</span><span style="margin-left:12px;">' + cert.date + '</span>';
    certModalBody.innerHTML =
      '<h4>Deskripsi</h4><p>' + cert.description + '</p>' +
      '<div class="modal-links" style="margin-top:24px;">' +
        '<a class="btn btn-outline btn-sm" href="' + cert.credentialUrl + '" target="_blank" rel="noopener">Lihat Credential</a>' +
      '</div>';
    
    certOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    document.getElementById('certModalClose').focus();
  }

  function closeCertModal(){
    certOverlay.classList.remove('open');
    document.body.style.overflow = '';
    if(certLastFocused) certLastFocused.focus();
  }

  // Cert card click handlers
  var certCards = document.querySelectorAll('.cert-card[data-cert-id]');
  certCards.forEach(function(card){
    card.addEventListener('click', function(){
      var certId = this.getAttribute('data-cert-id');
      openCertModal(certId);
    });
    card.addEventListener('keydown', function(e){
      if(e.key === 'Enter' || e.key === ' '){
        e.preventDefault();
        var certId = this.getAttribute('data-cert-id');
        openCertModal(certId);
      }
    });
  });

  document.getElementById('certModalClose').addEventListener('click', closeCertModal);
  certOverlay.addEventListener('click', function(e){ if(e.target === certOverlay) closeCertModal(); });

  /* ---------------- CONTACT FORM ---------------- */
  var form = document.getElementById('contactForm');
  var status = document.getElementById('formStatus');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    var name = document.getElementById('fname');
    var email = document.getElementById('femail');
    var subject = document.getElementById('fsubject');
    var message = document.getElementById('fmessage');
    var valid = true;

    function check(field, input, condition){
      var wrap = document.getElementById(field);
      var ok = condition;
      wrap.classList.toggle('invalid', !ok);
      input.classList.toggle('err', !ok);
      if(!ok) valid = false;
    }

    check('field-name', name, name.value.trim().length > 1);
    check('field-email', email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim()));
    check('field-subject', subject, subject.value.trim().length > 2);
    check('field-message', message, message.value.trim().length >= 10);

    if(!valid){ status.classList.remove('show'); return; }

    var body = encodeURIComponent(
      'Nama: ' + name.value.trim() + '\n' +
      'Email: ' + email.value.trim() + '\n\n' +
      message.value.trim()
    );
    var mailto = 'mailto:rafi.tribuwana@email.com?subject=' + encodeURIComponent(subject.value.trim()) + '&body=' + body;
    status.classList.add('show');
    window.location.href = mailto;
  });

  ['fname','femail','fsubject','fmessage'].forEach(function(id){
    document.getElementById(id).addEventListener('input', function(){
      var wrap = this.closest('.field');
      wrap.classList.remove('invalid');
      this.classList.remove('err');
    });
  });

  /* ---------------- FOOTER YEAR ---------------- */
  document.getElementById('year').textContent = new Date().getFullYear();
})();