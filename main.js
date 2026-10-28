// Navegación, entradas suaves, loops que se reproducen al verse, galería con visor y contacto.
(() => {
  // Datos de contacto (código de país, sin + ni espacios)
  const WHATSAPP = '5491156681359';
  const CORREO = 'augustofayt@gmail.com';

  const nav = document.getElementById('nav');
  const onScroll = () => nav.classList.toggle('solid', scrollY > innerHeight * 0.6);
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

  const vio = new IntersectionObserver((entries) => {
    entries.forEach((e) => (e.isIntersecting ? e.target.play().catch(() => {}) : e.target.pause()));
  }, { threshold: 0.3 });
  document.querySelectorAll('video[data-auto]').forEach((v) => vio.observe(v));

  // visor de la galería
  const box = document.getElementById('lightbox');
  const boxImg = box.querySelector('img');
  document.querySelectorAll('.g').forEach((b) => b.addEventListener('click', () => {
    boxImg.src = b.dataset.full;
    boxImg.alt = b.querySelector('img').alt;
    box.hidden = false;
  }));
  const close = () => { box.hidden = true; boxImg.src = ''; };
  box.addEventListener('click', (e) => { if (e.target !== boxImg) close(); });
  addEventListener('keydown', (e) => { if (e.key === 'Escape' && !box.hidden) close(); });

  // WhatsApp: si no hay número cargado, el botón no se muestra
  const wa = document.getElementById('wa');
  if (WHATSAPP) {
    const msg = encodeURIComponent('Hola, me interesa la residencia en Valle de Bravo y quisiera agendar una visita.');
    wa.href = `https://wa.me/${WHATSAPP}?text=${msg}`;
  } else {
    wa.hidden = true;
  }

  // formulario: arma un correo con los datos (sin servidor)
  document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const d = new FormData(e.target);
    const body = `Nombre: ${d.get('nombre')}\nCorreo: ${d.get('correo')}\nTeléfono: ${d.get('telefono') || '-'}\n\n${d.get('mensaje')}`;
    location.href = `mailto:${CORREO}?subject=${encodeURIComponent('Visita · Residencia Valle de Bravo')}&body=${encodeURIComponent(body)}`;
    document.getElementById('ok').hidden = false;
  });
})();
