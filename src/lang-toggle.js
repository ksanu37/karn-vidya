function setLang(lang) {
  document.body.classList.toggle('hindi', lang === 'hi');
  localStorage.setItem('lang', lang);
  document.querySelectorAll('.language-switch button').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  const lang = localStorage.getItem('lang') || 'en';
  setLang(lang);
  document.querySelectorAll('.language-switch button').forEach(btn => {
    btn.addEventListener('click', function() {
      setLang(this.dataset.lang);
    });
  });
}); 