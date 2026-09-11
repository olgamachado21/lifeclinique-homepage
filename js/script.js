document.addEventListener('DOMContentLoaded', function () {

  /* Seletor de idioma (Português / English) */
  (function i18n() {
    window.LifeClinique = window.LifeClinique || {};
    window.LifeClinique.lang = 'pt';

    var EN = {
      'meta.title': 'LifeClinique | Health & Well-being in Viseu',
      'meta.description': 'LifeClinique — healthcare with confidence, closeness and a multidisciplinary team dedicated to you and your family.',

      'nav.homeAria': 'LifeClinique - Home',
      'nav.mainAria': 'Main navigation',
      'nav.home': 'Home',
      'nav.homeIconAria': 'Home',
      'nav.services': 'Services',
      'nav.servicesIconAria': 'Services',
      'nav.team': 'Team',
      'nav.teamIconAria': 'Specialists',
      'nav.about': 'About Us',
      'nav.aboutIconAria': 'About Us',
      'nav.testimonials': 'Testimonials',
      'nav.testimonialsIconAria': 'Testimonials',
      'nav.hours': 'Hours',
      'nav.hoursIconAria': 'Opening Hours',
      'nav.contact': 'Contact',
      'nav.contactIconAria': 'Contact',
      'nav.book': 'Book',
      'nav.bookAria': 'Book an Appointment',

      'hero.eyebrow': 'Healthcare in Viseu',
      'hero.title': 'Caring for you, <span class="accent">with confidence</span> and closeness.',
      'hero.lead': 'At LifeClinique you will find a multidisciplinary team dedicated to your well-being — from routine check-ups to specialist care, at every stage of life.',
      'hero.cta.book': 'Book an Appointment',
      'hero.cta.services': 'View Services',
      'stat.years': 'years of experience',
      'stat.specialties': 'specialities',
      'stat.rating': 'patient rating',
      'hero.card1': 'Continuous care',
      'hero.card2': 'Dedicated team',
      'hero.hint': 'Explore the clinic by clicking the icons on the side →',

      'services.eyebrow': 'What we do',
      'services.title': 'Our services',
      'services.lead': 'A complete response for you and your family, with specialists in every field.',
      'service.1.title': 'General Medicine',
      'service.1.desc': 'Routine consultations, prevention and ongoing monitoring of your health.',
      'service.2.title': 'Physiotherapy',
      'service.2.desc': 'Physical rehabilitation and pain relief with personalised treatment plans.',
      'service.3.title': 'Psychology',
      'service.3.desc': 'Emotional and psychological support in a safe, confidential environment.',
      'service.4.title': 'Nutrition',
      'service.4.desc': 'Tailored meal plans for a more balanced and healthy life.',
      'service.5.title': 'Paediatrics',
      'service.5.desc': "Specialist care for children's healthy growth and development.",
      'service.6.title': 'Dermatology',
      'service.6.desc': 'Diagnosis and treatment of skin conditions, plus aesthetic skincare.',
      'service.7.title': 'Complementary Therapies',
      'service.7.desc': 'Therapeutic massage, acupuncture and relaxation and well-being techniques.',
      'service.8.title': 'Medical Tests',
      'service.8.desc': 'Clinical analyses and complementary diagnostic tests, all in one place.',

      'team.eyebrow': 'Our team',
      'team.title': 'Specialists dedicated to you',
      'team.lead': 'Experienced professionals who are passionate about caring for people.',
      'team.1.role': 'General & Family Medicine',
      'team.1.bio': 'Over 18 years of experience in primary healthcare and prevention.',
      'team.2.role': 'Physiotherapist',
      'team.2.bio': 'Specialist in sports and orthopaedic rehabilitation.',
      'team.3.role': 'Clinical Psychologist',
      'team.3.bio': 'Support for anxiety, stress and emotional well-being.',
      'team.4.role': 'Paediatrician',
      'team.4.bio': "Dedicated to supporting children's development from birth.",
      'team.5.role': 'Nutritionist',
      'team.5.bio': 'Personalised meal plans for all ages and goals.',
      'team.6.role': 'Dermatologist',
      'team.6.bio': 'Focused on skin health and aesthetics with a preventive approach.',

      'about.eyebrow': 'Who we are',
      'about.title': 'About LifeClinique',
      'about.intro': 'LifeClinique was founded in Viseu with a simple purpose: to make healthcare closer, more human and more accessible. We bring a multidisciplinary team together under one roof, so that everyone finds the right care at every stage of life.',
      'about.missionTitle': 'Our mission',
      'about.missionText': 'To promote health and well-being through personalised, humanised care grounded in scientific evidence.',
      'value.1.title': 'Human Care',
      'value.1.desc': 'We listen before we treat. Every person is unique.',
      'value.2.title': 'Excellence',
      'value.2.desc': 'Clinical rigour and continuous scientific development.',
      'value.3.title': 'Closeness',
      'value.3.desc': "Unhurried appointments, at each person's own pace.",
      'value.4.title': 'Trust',
      'value.4.desc': 'Confidentiality and transparency in every appointment.',

      'testi.eyebrow': 'Reviews',
      'testi.title': 'What our patients say',
      'testi.rating5': 'Rating: 5 out of 5 stars',
      'testi.rating4': 'Rating: 4 out of 5 stars',
      'testi.1.text': '"I was always made to feel very welcome. Dr Miguel explains everything calmly and I never felt rushed. I recommend him wholeheartedly."',
      'testi.1.since': 'Patient since 2021',
      'testi.2.text': '"Physiotherapy with Dr Beatriz transformed my recovery. Professionalism and attention to detail from start to finish."',
      'testi.2.since': 'Patient since 2022',
      'testi.3.text': "\"I've been bringing my son to paediatrics for two years. Dr Tiago has incredible patience with children.\"",
      'testi.3.since': 'Patient since 2023',
      'testi.4.text': '"A calm setting, an attentive team and very simple appointment booking. The clinic Viseu was missing."',
      'testi.4.since': 'Patient since 2020',
      'testi.dotsAria': 'Choose testimonial',
      'testi.dot1': 'Testimonial 1',
      'testi.dot2': 'Testimonial 2',
      'testi.dot3': 'Testimonial 3',
      'testi.dot4': 'Testimonial 4',

      'hours.eyebrow': 'When we are open',
      'hours.title': 'Opening Hours',
      'hours.lead': 'We are available throughout the week, including Saturday mornings, to fit around your routine.',
      'hours.chartAria': 'Weekly opening hours chart: Monday to Thursday 08:00 to 19:00, Friday 08:00 to 18:00, Saturday 09:00 to 13:00, closed on Sunday.',
      'hours.day.mon': 'Mon',
      'hours.day.tue': 'Tue',
      'hours.day.wed': 'Wed',
      'hours.day.thu': 'Thu',
      'hours.day.fri': 'Fri',
      'hours.day.sat': 'Sat',
      'hours.day.sun': 'Sun',
      'hours.closed': 'Closed',

      'contact.eyebrow': 'Get in touch',
      'contact.title': 'Contact',
      'contact.lead': 'We are on hand to answer any questions or help you book your appointment.',
      'contact.hoursLine': 'Mon–Fri: 08:00–19:00 · Sat: 09:00–13:00',
      'contact.social.facebook': 'LifeClinique on Facebook',
      'contact.social.instagram': 'LifeClinique on Instagram',
      'contact.social.linkedin': 'LifeClinique on LinkedIn',
      'contact.formAria': 'Contact form',

      'form.title': 'Send us a message',
      'form.label.name': 'Name',
      'form.label.email': 'Email',
      'form.label.subject': 'Subject',
      'form.label.message': 'Message',
      'form.ph.name': 'Your name',
      'form.ph.email': 'your.email@example.com',
      'form.ph.message': 'How can we help?',
      'form.opt.booking': 'Book an appointment',
      'form.opt.info': 'General information',
      'form.opt.other': 'Other',
      'form.submit': 'Send Message',
      'form.success.title': 'Message sent!',
      'form.success.text': 'Thank you for reaching out. Our team will get back to you as soon as possible.',
      'form.success.reset': 'Send another message',

      'footer.tagline': 'Caring for you, with confidence and closeness.',
      'footer.copy': '© 2026 LifeClinique. All rights reserved. A fictional project created for educational purposes.'
    };

    window.LifeClinique.i18n = { en: EN };

    var items = Array.prototype.slice.call(document.querySelectorAll('[data-i18n]')).map(function (el) {
      var attr = el.getAttribute('data-i18n-attr');
      var isHtml = el.hasAttribute('data-i18n-html');
      return {
        el: el,
        attr: attr,
        isHtml: isHtml,
        original: attr ? el.getAttribute(attr) : (isHtml ? el.innerHTML : el.textContent)
      };
    });

    var langButtons = Array.prototype.slice.call(document.querySelectorAll('.lang-btn'));

    function applyLang(lang) {
      window.LifeClinique.lang = lang;
      document.documentElement.setAttribute('lang', lang === 'en' ? 'en-GB' : 'pt-PT');

      items.forEach(function (item) {
        var key = item.el.getAttribute('data-i18n');
        var value = lang === 'en' ? EN[key] : item.original;
        if (value === undefined || value === null) return;

        if (item.attr) {
          item.el.setAttribute(item.attr, value);
        } else if (item.isHtml) {
          item.el.innerHTML = value;
        } else {
          item.el.textContent = value;
        }
      });

      langButtons.forEach(function (btn) {
        var active = btn.getAttribute('data-lang') === lang;
        btn.classList.toggle('is-active', active);
        btn.setAttribute('aria-pressed', active ? 'true' : 'false');
      });

      if (typeof window.LifeClinique.refreshValidationLanguage === 'function') {
        window.LifeClinique.refreshValidationLanguage();
      }
    }

    langButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyLang(btn.getAttribute('data-lang'));
      });
    });

    window.LifeClinique.applyLang = applyLang;
  })();

  /* Transição suave entre secções */
  (function panelTransitions() {
    var navRadios = document.querySelectorAll('.nav-radio');
    if (!navRadios.length) return;

    navRadios.forEach(function (radio) {
      radio.addEventListener('change', function () {
        if (!radio.checked) return;
        var panelId = radio.id.replace('nav-', 'panel-');
        var panel = document.getElementById(panelId);
        if (!panel) return;

        panel.classList.remove('panel-animate-in');
        void panel.offsetWidth; // força reflow para reiniciar a animação
        panel.classList.add('panel-animate-in');
      });
    });
  })();

  /* Testemunhos com rotação automática */
  (function testimonialsAutoplay() {
    var radios = Array.prototype.slice.call(document.querySelectorAll('input[name="testi-nav"]'));
    var stage = document.querySelector('.testimonial-stage');
    if (!radios.length || !stage) return;

    var AUTOPLAY_MS = 6000;
    var RESUME_AFTER_MANUAL_MS = 10000;
    var paused = false;
    var resumeTimeout = null;

    function goToNext() {
      var currentIndex = radios.findIndex(function (r) { return r.checked; });
      var nextIndex = (currentIndex + 1) % radios.length;
      radios[nextIndex].checked = true;
    }

    setInterval(function () {
      if (!paused) goToNext();
    }, AUTOPLAY_MS);

    stage.addEventListener('mouseenter', function () { paused = true; });
    stage.addEventListener('mouseleave', function () { paused = false; });

    radios.forEach(function (radio) {
      radio.addEventListener('change', function () {
        // Pausa a rotação automática por uns segundos após uma escolha manual.
        paused = true;
        if (resumeTimeout) clearTimeout(resumeTimeout);
        resumeTimeout = setTimeout(function () { paused = false; }, RESUME_AFTER_MANUAL_MS);
      });
    });
  })();

  /* Formulário de contacto */
  (function contactFormValidation() {
    var form = document.getElementById('contact-form');
    if (!form) return;

    window.LifeClinique = window.LifeClinique || {};

    var successBox = document.getElementById('form-success');
    var resetBtn = document.getElementById('form-reset-btn');

    var fields = {
      nome: { el: document.getElementById('nome'), erro: document.getElementById('erro-nome') },
      email: { el: document.getElementById('email'), erro: document.getElementById('erro-email') },
      mensagem: { el: document.getElementById('mensagem'), erro: document.getElementById('erro-mensagem') }
    };

    var EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    var MESSAGES = {
      pt: {
        nomeRequired: 'Por favor, indique o seu nome.',
        emailRequired: 'Por favor, indique o seu email.',
        emailInvalid: 'Introduza um email válido.',
        mensagemRequired: 'Escreva uma mensagem antes de enviar.'
      },
      en: {
        nomeRequired: 'Please enter your name.',
        emailRequired: 'Please enter your email address.',
        emailInvalid: 'Please enter a valid email address.',
        mensagemRequired: 'Please write a message before sending.'
      }
    };

    function currentLang() {
      return window.LifeClinique.lang === 'en' ? 'en' : 'pt';
    }

    function setError(field, errorKey) {
      if (!field.el || !field.erro) return;
      field.erro.dataset.errorKey = errorKey || '';
      field.erro.textContent = errorKey ? MESSAGES[currentLang()][errorKey] : '';
      field.el.closest('.form-row').classList.toggle('has-error', Boolean(errorKey));
    }

    function validateField(key) {
      var field = fields[key];
      var value = field.el.value.trim();

      if (key === 'nome') {
        if (!value) { setError(field, 'nomeRequired'); return false; }
        setError(field, null);
        return true;
      }
      if (key === 'email') {
        if (!value) { setError(field, 'emailRequired'); return false; }
        if (!EMAIL_REGEX.test(value)) { setError(field, 'emailInvalid'); return false; }
        setError(field, null);
        return true;
      }
      if (key === 'mensagem') {
        if (!value) { setError(field, 'mensagemRequired'); return false; }
        setError(field, null);
        return true;
      }
      return true;
    }

    // Valida cada campo assim que a pessoa sai dele.
    Object.keys(fields).forEach(function (key) {
      var el = fields[key].el;
      if (!el) return;
      el.addEventListener('blur', function () { validateField(key); });
      el.addEventListener('input', function () {
        // Se o campo já tinha erro, vai corrigindo em tempo real.
        if (fields[key].el.closest('.form-row').classList.contains('has-error')) {
          validateField(key);
        }
      });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var results = Object.keys(fields).map(validateField);
      var allValid = results.every(Boolean);
      if (!allValid) {
        var firstInvalid = form.querySelector('.form-row.has-error input, .form-row.has-error textarea');
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      // Simulação de envio bem-sucedido (sem servidor).
      form.querySelector('.form-body').hidden = true;
      successBox.hidden = false;
    });

    if (resetBtn) {
      resetBtn.addEventListener('click', function () {
        form.reset();
        Object.keys(fields).forEach(function (key) { setError(fields[key], null); });
        successBox.hidden = true;
        form.querySelector('.form-body').hidden = false;
        fields.nome.el.focus();
      });
    }

    // Chamado pelo seletor de idioma: volta a escrever, na língua atual,
    // qualquer mensagem de erro que já esteja visível no formulário.
    window.LifeClinique.refreshValidationLanguage = function () {
      Object.keys(fields).forEach(function (key) {
        var erro = fields[key].erro;
        var activeKey = erro.dataset.errorKey;
        if (activeKey) {
          erro.textContent = MESSAGES[currentLang()][activeKey];
        }
      });
    };
  })();

  /* Animacãoo de contadores numéricos */
  (function animatedCounters() {
    var counters = document.querySelectorAll('.hero-stats [data-count-to]');
    var navInicio = document.getElementById('nav-inicio');
    if (!counters.length) return;

    var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var DURATION_MS = 1100;
    var activeAnimations = [];

    function animateCounter(el) {
      var target = parseFloat(el.getAttribute('data-count-to'));
      var decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
      var suffix = el.getAttribute('data-suffix') || '';

      if (isNaN(target)) return;

      if (reduceMotion) {
        el.textContent = target.toFixed(decimals) + suffix;
        return;
      }

      var startTime = null;

      function step(timestamp) {
        if (startTime === null) startTime = timestamp;
        var progress = Math.min((timestamp - startTime) / DURATION_MS, 1);
        // easing suave (ease-out)
        var eased = 1 - Math.pow(1 - progress, 3);
        var current = target * eased;
        el.textContent = current.toFixed(decimals) + suffix;

        if (progress < 1) {
          activeAnimations.push(requestAnimationFrame(step));
        }
      }

      requestAnimationFrame(step);
    }

    function runAll() {
      // Cancela quaisquer animações anteriores ainda em curso.
      activeAnimations.forEach(function (id) { cancelAnimationFrame(id); });
      activeAnimations = [];
      counters.forEach(animateCounter);
    }

    // Primeira execução: a secção Início está visível por defeito ao carregar a página.
    runAll();

    if (navInicio) {
      navInicio.addEventListener('change', function () {
        if (navInicio.checked) runAll();
      });
    }
  })();

});