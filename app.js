(() => {
  const button = document.getElementById('language');
  let language = 'en';
  try { language = localStorage.getItem('cheng-language') === 'zh' ? 'zh' : 'en'; } catch {}
  function render() {
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
    document.querySelectorAll('[data-zh][data-en]').forEach(element => { element.textContent = element.dataset[language]; });
    document.querySelectorAll('[data-language]').forEach(element => { element.hidden = element.dataset.language !== language; });
    button.textContent = language === 'zh' ? 'EN ↗' : '中文 ↗';
    button.setAttribute('aria-label', language === 'zh' ? 'Switch to English' : '切换为中文');
  }
  button.addEventListener('click', () => { language = language === 'zh' ? 'en' : 'zh'; render(); try { localStorage.setItem('cheng-language', language); } catch {} });
  render();
})();
