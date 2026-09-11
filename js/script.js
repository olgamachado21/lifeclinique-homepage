document.addEventListener('DOMContentLoaded', function () {

/* Transição suave entre secções. */
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

    var successBox = document.getElementById('form-success');
    var resetBtn = document.getElementById('form-reset-btn');

    var fields = {
      nome: { el: document.getElementById('nome'), erro: document.getElementById('erro-nome') },
      email: { el: document.getElementById('email'), erro: document.getElementById('erro-email') },
      mensagem: { el: document.getElementById('mensagem'), erro: document.getElementById('erro-mensagem') }
    };

    var EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function setError(field, message) {
      if (!field.el || !field.erro) return;
      field.erro.textContent = message || '';
      field.el.closest('.form-row').classList.toggle('has-error', Boolean(message));
    }

    function validateField(key) {
      var field = fields[key];
      var value = field.el.value.trim();

      if (key === 'nome') {
        if (!value) { setError(field, 'Por favor, indique o seu nome.'); return false; }
        setError(field, '');
        return true;
      }
      if (key === 'email') {
        if (!value) { setError(field, 'Por favor, indique o seu email.'); return false; }
        if (!EMAIL_REGEX.test(value)) { setError(field, 'Introduza um email válido.'); return false; }
        setError(field, '');
        return true;
      }
      if (key === 'mensagem') {
        if (!value) { setError(field, 'Escreva uma mensagem antes de enviar.'); return false; }
        setError(field, '');
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
        Object.keys(fields).forEach(function (key) { setError(fields[key], ''); });
        successBox.hidden = true;
        form.querySelector('.form-body').hidden = false;
        fields.nome.el.focus();
      });
    }
  })();

/* Animção dos números */
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