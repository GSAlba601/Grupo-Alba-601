/* Grupo Scout Alba 601 — comportamiento común */
(function () {
  'use strict';

  /* Menú en móvil */
  var boton = document.querySelector('.menu-btn');
  var nav = document.querySelector('.nav');
  if (boton && nav) {
    boton.addEventListener('click', function () {
      var abierto = nav.classList.toggle('abierto');
      boton.setAttribute('aria-expanded', abierto ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('abierto');
        boton.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* Revelado suave al entrar en pantalla */
  var animables = document.querySelectorAll('.revela');
  var sinMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!('IntersectionObserver' in window) || sinMovimiento) {
    animables.forEach(function (el) { el.classList.add('visible'); });
  } else {
    var observador = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
          entrada.target.classList.add('visible');
          observador.unobserve(entrada.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    animables.forEach(function (el) { observador.observe(el); });
  }

  /* Aviso de protección de datos */
  var aviso = document.querySelector('.aviso');
  if (!aviso) return;

  var recordar = function (valor) {
    try { localStorage.setItem('alba601-aviso', valor); } catch (e) { /* sin almacenamiento */ }
  };
  var visto = null;
  try { visto = localStorage.getItem('alba601-aviso'); } catch (e) { /* sin almacenamiento */ }

  if (!visto) { aviso.hidden = false; }

  aviso.addEventListener('click', function (e) {
    var accion = e.target.getAttribute && e.target.getAttribute('data-aviso');
    if (!accion) return;
    recordar(accion);
    aviso.hidden = true;
  });
})();
