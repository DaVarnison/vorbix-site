// vorbixstudios.com — reveal-on-scroll + reduced-motion handling.
// Kept as an external file (not inline) so the page's Content-Security-Policy
// can use a strict script-src 'self' with no 'unsafe-inline'.
document.documentElement.classList.add('js');
const io = new IntersectionObserver(es => { es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }); }, { threshold: .12 });
document.querySelectorAll('.rv').forEach(el => io.observe(el));

// Visitors who ask for reduced motion get the still logo (the video's poster)
// instead of the spinning loop.
const still = window.matchMedia('(prefers-reduced-motion: reduce)');
const loops = document.querySelectorAll('video[autoplay]');
const applyMotion = () => loops.forEach(v => {
  if (still.matches) { v.pause(); v.removeAttribute('autoplay'); v.load(); }
  else { v.play().catch(() => {}); }
});
if (still.matches) applyMotion();
still.addEventListener('change', applyMotion);
